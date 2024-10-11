
from flask import Flask, request, jsonify, session
from flask_session import Session
from langchain_core.messages import HumanMessage, AIMessage
from dotenv import load_dotenv
from pathlib import Path
import os

from langchain_openai import ChatOpenAI
from education.chat_bot import ChatBot  # Import your ChatBot class here


# Load environment variables from .env
env_path = Path(__file__).resolve().parents[1] / ".env"
load_dotenv(dotenv_path=env_path)

# Get the API key from .env
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

# Flask app initialization
app = Flask(__name__)
app.config["SECRET_KEY"] = "your_secret_key"
app.config["SESSION_TYPE"] = "filesystem"  # Using filesystem to store session data
Session(app)


# Initialize the LLM
llm_genr = ChatOpenAI(api_key=OPENAI_API_KEY, model='gpt-3.5-turbo', temperature=0.3)
chatbot = ChatBot(llm_genr)


@app.route("/ask", methods=["POST"])
def ask():
    """
    Handle user input and generate a response from the chatbot.
    """
    user_input = request.json.get("user_input")

    # Retrieve the conversation history from the session
    if "conversation_history" not in session:
        session["conversation_history"] = []  # Initialize history if not present

    # Use the conversation history from the session
    conversation_history = session["conversation_history"]

    # Add user's input to the conversation history
    chatbot.conversation_manager.history = conversation_history
    response = chatbot.ask(user_input)

    # Save the updated conversation history back to the session
    session["conversation_history"] = chatbot.conversation_manager.get_history()

    return jsonify({"response": response})


if __name__ == "__main__":
    app.run(debug=True)
