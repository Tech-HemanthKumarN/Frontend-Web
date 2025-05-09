function createSnowflakes() {
    const snowflakeCount = 10; // Number of snowflakes at a time

    for (let i = 0; i < snowflakeCount; i++) {
        let snowflake = document.createElement("div");
        snowflake.classList.add("snowflake");
        snowflake.innerHTML = "❄";

        // Random position and size
        let size = Math.random() * 10 + 5; // Random size between 5px and 20px
        let leftPosition = Math.random() * window.innerWidth; // Random horizontal position
        let duration = Math.random() * 5 + 3; // Fall duration (3s to 8s)

        snowflake.style.left = `${leftPosition}px`;
        snowflake.style.fontSize = `${size}px`;
        snowflake.style.opacity = Math.random(); // Random opacity
        snowflake.style.animationDuration = `${duration}s`;

        document.body.appendChild(snowflake);

        // Remove snowflake after it falls
        setTimeout(() => {
            snowflake.remove();
        }, duration * 1000);
    }
}

// Run snowfall effect continuously
setInterval(createSnowflakes, 500);
