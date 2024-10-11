from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_cors import CORS
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


# app.py

app = Flask(__name__)
app.config['SECRET_KEY'] = 'yoursecretkey'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'

# Initialize extensions
db = SQLAlchemy(app)  # Initialize SQLAlchemy here
bcrypt = Bcrypt(app)
CORS(app)

# Import routes at the end to avoid circular imports
from models import User  # This should come after db is initialized
import routes  # Assuming your routes are defined in a separate file

# if __name__ == '__main__':
#     app.run(debug=True)

# <<<<<<< Updated upstream
# # Flask app initialization
# app = Flask(__name__)
# app.config["SECRET_KEY"] = "your_secret_key"
# app.config["SESSION_TYPE"] = "filesystem"  # Using filesystem to store session data



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



# @app.route('/registration', methods=['GET', 'POST'])
# def register():
#     data = request.json  # assuming JSON data is sent from Next.js
#     username = data.get('username')
#     password = data.get('password')
    
#     # Check if user already exists
#     existing_user = User.query.filter_by(username=username).first()
#     if existing_user:
#         return jsonify({"message": "User already exists"}), 400
    
#     # Hash the password and store the user
#     hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
#     new_user = User(username=username, password=hashed_password)
#     db.session.add(new_user)
#     db.session.commit()
    
#     return jsonify({"message": "User registered successfully"}), 201

