[Running] python -u "d:\medichat\ai_medical_chatbot\main.py"
INFO:__main__:Processed response from llama11b API : The encoders are:

*   **Multi-head attention**
*   **Add & Norm**
*   **Feed Forward**
*   **Add & Norm**

These encoders are repeated $N_x$ times.
INFO:__main__:Processed response from llama90b API : The encoders in the given diagram are:

**Encoder Components:**

1. **Input Embedding**: Takes in the input and converts it into a format that can be processed by the model.    
2. **Multi-Head Attention**: Allows the model to attend to different parts of the input sequence simultaneously and weigh their importance.
3. **Add & Norm**: Adds the output of the multi-head attention mechanism to the input and normalizes the result.
4. **Feed Forward**: A fully connected feed-forward network that transforms the output of the previous layer.   
5. **Add & Norm (second instance)**: Adds the output of the feed-forward network to the previous output and normalizes the result.

These components are repeated **N times**, as indicated by the "Nx" label on the left side of the diagram.      

These components make up the encoder architecture, which is used to process the input sequence and generate a continuous representation of the input.
{'llama11b': 'The encoders are:\n\n*   **Multi-head attention**\n*   **Add & Norm**\n*   **Feed Forward**\n*   **Add & Norm**\n\nThese encoders are repeated $N_x$ times.', 'llama90b': 'The encoders in the given diagram are:\n\n**Encoder Components:**\n\n1. **Input Embedding**: Takes in the input and converts it into a format that can be processed by the model.\n2. **Multi-Head Attention**: Allows the model to attend to different parts of the input sequence simultaneously and weigh their importance.\n3. **Add & Norm**: Adds the output of the multi-head attention mechanism to the input and normalizes the result.\n4. **Feed Forward**: A fully connected feed-forward network that transforms the output of the previous layer.\n5. **Add & Norm (second instance)**: Adds the output of the feed-forward network to the previous output and normalizes the result.\n\nThese components are repeated **N times**, as indicated by the "Nx" label on the left side of the diagram. \n\nThese components make up the encoder architecture, which is used to process the input sequence and generate a continuous representation of the input.'}