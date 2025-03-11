from flask import Flask, render_template, request, jsonify
import cohere
import nltk
from nltk.stem import WordNetLemmatizer

# Initialize Flask app
app = Flask(__name__)

# Predefined questions and answers (FAQ)
FAQ = {
    "hello": "Hi, how can I assist you today?",
    "hi": "Hello! How can I help you?",
    "what is a chatbot?": "A chatbot is a software application designed to simulate conversation with human users, especially over the Internet.",
    "how does a chatbot work?": "Chatbots work by using predefined rules or artificial intelligence to interpret user input and respond accordingly.",
    "who invented the first chatbot?": "The first chatbot was developed by Joseph Weizenbaum in 1966, and it was named ELIZA.",
    "library":"crc",
    "who is the principle of cit":"Dr. Suresh",
    "library":"The library is located in CRC block.",
    "what are the college timings":"9:00AM to 4:00AM from Monday to Friday  And 9:00AM to 1:00PM on Saturday",
    "leacturer for ddco in cse":"Deepika nandish",
    "leacturer for dvp  in cse ":"vindhya",
    "leacturer for java  in cse ":"Lalitha ",  
    "leacturer for maths  in cse":"patil sir",
    "leacturer for dsa  in cse":"Asif ullah khan sir",
    "leacturer for python in cse branch is":"Vindhya mam",
    "Dean of cit":"Dr Anil kumar",
    "hod of cse in cit":"jyothi KS",
}

# Initialize Cohere client (replace 'YOUR_API_KEY' with your actual API key from Cohere)
co = cohere.Client('nG0Cmc02ishnUiVyAKGlSWkPn8HcVJOCAcIEnneX')

# Download necessary NLTK packages
nltk.download('punkt', quiet=True)
nltk.download('wordnet', quiet=True)

# Initialize lemmatizer
lemmer = WordNetLemmatizer()

# Function to handle greetings
def greeting(sentence):
    for word in sentence.split():
        if word.lower() in FAQ:
            return FAQ[word.lower()]  # Returns the answer from FAQ if the word matches

# Function to call Cohere for generating responses
def generate_cohere_response(user_input):
    response = co.generate(
        model='command-r-plus',  
        prompt=user_input,
        max_tokens=50,  # Adjust the number of tokens (response length)
        temperature=0.7  # Control the creativity/variance of the response (0-1)
    )
    return response.generations[0].text.strip()

# Response generation function
def response(user_response):
    user_response = user_response.lower()

    # Check for predefined questions
    if user_response in FAQ:
        return FAQ[user_response]

    # Else use Cohere API to generate a response
    return generate_cohere_response(user_response)

# Create API endpoint
@app.route("/api/chat", methods=["POST"])
def chat_api():
    user_input = request.json.get("message")  # Get the message from the POST request
    if user_input:
        bot_response = response(user_input)  # Get the bot's response
        return jsonify({"response": bot_response})  # Return the response as JSON
    return jsonify({"error": "No message provided"}), 400

# Home route to render the HTML page
@app.route("/")
def home():
    return render_template("index.html", chatbot_response="Hello! How can I assist you today?")

if __name__ == "__main__":
    app.run(debug=True)
