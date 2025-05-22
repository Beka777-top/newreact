import { useState } from 'react';
import axios from 'axios';

const GeminiSearch = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSearch = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);
    setError(null);

    const lowerInput = input.toLowerCase();

    // Арнайы сұрақтар үшін боттың жауаптары
    const predefinedResponses = {
      'сені кім жасады': 'Мені Бека жасады 🤖',
      'кім сені жасады': 'Мені Бека жасады 🤖',
      'толық есімің кім': 'Менің толық есімім – Бегарыс.',
      'атың кім': 'Менің атым – Бека бот.',
    };

    const foundResponse = Object.entries(predefinedResponses).find(([key]) =>
      lowerInput.includes(key)
    );

    if (foundResponse) {
      const botMessage = { sender: 'bot', text: foundResponse[1] };
      setMessages((prev) => [...prev, botMessage]);
      setLoading(false);
      return;
    }

    // Егер арнайы жауап болмаса, Gemini API-ға сұраныс
    try {
      const res = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAo_H2fkN00fjm-sQkU2t2EdNDeSlx9Zeg`,
        {
          contents: [
            {
              parts: [{ text: input }],
            },
          ],
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const generatedText = res?.data?.candidates?.[0]?.content?.parts?.[0]?.text;

      const botMessage = {
        sender: 'bot',
        text: generatedText || 'Жауап табылмады немесе бос.',
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error(err);
      setError('QazaqSmart Chat сұранысында қате орын алды.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-between h-screen bg-black text-white font-sans">
      <div className="p-4 bg-gray-900 shadow-md">
        <h2 className="text-xl font-bold">QazaqSmart Chat</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-4 ${
              message.sender === 'user' ? 'text-right' : 'text-left'
            }`}
          >
            <div
              className={`inline-block p-3 rounded-lg text-sm ${
                message.sender === 'user'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-800 text-white'
              }`}
            >
              <p>{message.text}</p>
            </div>
          </div>
        ))}
        {error && (
          <div className="mb-4">
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        )}
      </div>

      <div className="p-4 bg-gray-900">
        <div className="flex items-center">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            placeholder="Сұрақ қойыңыз..."
            className="flex-1 p-2 rounded-lg bg-gray-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <button
            onClick={handleSearch}
            disabled={loading}
            className={`ml-2 px-4 py-2 rounded-lg text-sm ${
              loading
                ? 'bg-gray-600 cursor-not-allowed'
                : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}
          >
            {loading ? '...' : 'Жіберу'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GeminiSearch;
