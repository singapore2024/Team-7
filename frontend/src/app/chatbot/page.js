"use client"; 

import { useState } from 'react';

export default function EducationPage() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  // Predefined questions
  const predefinedQuestions = [
    { question: "How to grow fatter plants?", query: "grow fatter plants" },
    { question: "What is the best soil for growing tomatoes?", query: "best tomato soil" },
    { question: "How often should I water my plants?", query: "how often to water plants" },
    { question: "How much sunlight do herbs like basil need?", query: "amount of sunlight needed for basil" }
  ];

  // Handle user input submission
  const handleSubmit = async () => {
    if (!input) return;
    setLoading(true);
    const response = await fetch('/api/education', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question: input }),
    });
    const data = await response.json();
    setResponse(data.answer);
    setLoading(false);
  };

  // Handle predefined question click
  const handlePredefinedQuestion = async (query, question) => {
    setInput(question); // Set the input to the predefined question
    setLoading(true);
    const response = await fetch('/api/education', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question: query }),
    });
    const data = await response.json();
    setResponse(data.answer);
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
          <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="font-semibold">Answer:</h3>
            <p>{response}</p>
          </div>
        )}
      </div>
    </div>
  );
}