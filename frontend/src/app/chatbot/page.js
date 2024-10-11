"use client"; // This marks the component as a Client Component

import { useState } from 'react';

export default function EducationPage() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  // Predefined questions and simulated answers
  const predefinedQuestions = [
    { question: "How to grow fatter plants?", query: "grow fatter plants", answer: "To grow fatter plants, ensure they have the right nutrients, adequate water, and plenty of sunlight." },
    { question: "What is the best soil for growing tomatoes?", query: "best tomato soil", answer: "The best soil for growing tomatoes is rich in organic matter with good drainage." },
    { question: "How often should I water my plants?", query: "how often to water plants", answer: "You should water your plants when the top inch of soil feels dry hello i amd just filing the word count Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { question: "How much sunlight do herbs like basil need?", query: "amount of sunlight needed for basil", answer: "Basil needs at least 6 hours of sunlight each day." }
  ];

  // Handle user input submission
  const handleSubmit = () => {
    if (!input) return;
    setLoading(true);

    // Simulate response based on user input
    const foundQuestion = predefinedQuestions.find(q => q.question.toLowerCase() === input.toLowerCase());

    if (foundQuestion) {
      setResponse(foundQuestion.answer);
    } else {
      setResponse("I'm sorry, I don't have an answer for that.");
    }

    setLoading(false);
  };

  // Handle predefined question click
  const handlePredefinedQuestion = (query, question) => {
    setInput(question); // Set the input to the predefined question
    setLoading(true);

    // Simulate response based on predefined question
    const foundQuestion = predefinedQuestions.find(q => q.query === query);

    if (foundQuestion) {
      setResponse(foundQuestion.answer);
    } else {
      setResponse("I'm sorry, I don't have an answer for that.");
    }

    setLoading(false);
  };

  return (
    <div className="container mx-auto py-10">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-6">What questions do you have today?</h2>
        
        {/* Predefined Questions */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {predefinedQuestions.map((item, index) => (
            <button
              key={index}
              onClick={() => handlePredefinedQuestion(item.query, item.question)} // Pass the question too
              className="p-4 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200"
            >
              <strong>{item.question.split(' ')[0]}</strong> {item.question.slice(item.question.indexOf(' '))}
            </button>
          ))}
        </div>

        {/* Input field */}
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question..."
            className="w-full p-4 border border-gray-300 rounded-lg"
          />
          <button
            onClick={handleSubmit}
            className="p-4 bg-[#85be40] text-white rounded-lg hover:bg-[#85be40]/90"
            disabled={!input || loading}
          >
            {loading ? 'Loading...' : 'Ask'}
          </button>
        </div>

        {/* Display Response */}
        {response && (
          <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow-md max-h-80 overflow-y-auto">
            <h3 className="font-semibold">Answer:</h3>
            <p>{response}</p>
          </div>
        )}
      </div>
    </div>
  );
}
