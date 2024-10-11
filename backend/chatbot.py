"""
Chatbot powered by LLM
"""
import os
from pathlib import Path
from dotenv import load_dotenv

from langchain_core.messages import BaseMessage, AIMessage, HumanMessage
from langchain_openai import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder

from prompts import SYSTEM_PROMPT


# Load the .env file
env_path = Path(__file__).resolve().parent / ".env"  
load_dotenv(dotenv_path=env_path)

# Access your API keys from the environment
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")


class ConversationManager:
    """
    A class to store and manage conversation history.
    """
    def __init__(self):
        self.history = []

    def add_message(self, msg: BaseMessage):
        self.history.append(msg)

    def get_history(self):
        return self.history


class ResponseGenerator:
    def __init__(self, llm: ChatOpenAI):
        system_prompt = SYSTEM_PROMPT

        # Create the chat prompt template
        question_answering_prompt = ChatPromptTemplate.from_messages(
            [
                ("system", system_prompt),
                MessagesPlaceholder(variable_name="messages"),
            ]
        )
        self.llm = llm
        self.question_answering_prompt = question_answering_prompt

    def generate(self, history):
        """
        Generates response based on conversation history.
        """
        # Generate a PromptValue using the history
        prompt_value = self.question_answering_prompt.format(messages=history)
        return self.llm.invoke(prompt_value)  # Pass the prompt value directly


class ChatBot:
    """
    Class that uses the sub-modules to build a chatbot.
    """
    def __init__(self, llm: ChatOpenAI):
        self.conversation_manager = ConversationManager()
        self.response_generator = ResponseGenerator(llm)

    def ask(self, user_input: str):
        """
        Bot answers user's query by generating a response.
        """
        # Add the user's input to the conversation history
        self.conversation_manager.add_message(HumanMessage(content=user_input))
        conversation_history = self.conversation_manager.get_history()

        # Generate response based on current conversation history
        llm_response = self.response_generator.generate(conversation_history)

        # Add the LLM response to the conversation history
        self.conversation_manager.add_message(AIMessage(content=llm_response.content))

        return llm_response.content


def main():
    llm_genr = ChatOpenAI(api_key=OPENAI_API_KEY, model='gpt-3.5-turbo', temperature=0.3)

    bot = ChatBot(llm_genr)

    while True:
        print("\n")
        user_input = input("You: ")
        if user_input.lower() in ["exit", "quit"]:
            break
        print("\n~~~~~~~~~~~~~~~~~~~~~~RESPONSE~~~~~~~~~~~~~~~~~~~~~~")
        llm_response = bot.ask(user_input)
        print(f"AI: {llm_response}")
        print("\n")

    return


if __name__ == "__main__":
    main()
