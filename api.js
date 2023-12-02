const chat = document.getElementById("chat");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");
const loadingIcon = document.getElementById("loading-icon");
const apiUrl = "https://dls-ai.dlsdemo.com/";

// Function to add a user message to the chat
function addUserMessage(message) {
  const userMessage = document.createElement("div");
  userMessage.textContent = message;
  userMessage.classList.add("message", "user");
  chat.appendChild(userMessage);
}

// Function to add a bot message to the chat
function addBotMessage(message) {
  const botMessage = document.createElement("div");
  botMessage.textContent = message;
  botMessage.classList.add("message", "bot");
  chat.appendChild(botMessage);
}

// Function to send a query to the API and display the response
async function sendQuery() {
  const userQuery = userInput.value;
  // Check if userQuery exceeds 500 characters
  if (userQuery.length > 500) {
    alert(
      "Query is too long. Please limit your query to 500 characters or less."
    );
    return;
  }
  if (userQuery.trim() === "") return;

  addUserMessage(userQuery);
  userInput.value = "";
  loadingIcon.style.display = "inline-block";

  try {
    console.log("UserQuery:", userQuery);
    const response = await fetch(
      `${apiUrl}?query=${encodeURIComponent(userQuery)}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    const Response = data.response; // Assuming the API response has a "response" field

    addBotMessage(Response);
  } catch (error) {
    console.error("Error:", error);
    addBotMessage("Oops! Something went wrong.");
  } finally {
    loadingIcon.style.display = "none";
  }
}

sendButton.addEventListener("click", sendQuery);
userInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    sendQuery();
  }
});
