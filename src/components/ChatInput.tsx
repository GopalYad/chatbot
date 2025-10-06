import { useState, FormEvent } from 'react';

interface ChatInputProps {
  handler: (message: string) => void;
}

const ChatInput = ({ handler }: ChatInputProps) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      handler(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md flex gap-2">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full p-2 border rounded"
        placeholder="Type your message..."
      />
      <button 
        type="submit" 
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
      >
        Send
      </button>
    </form>
  );
};

export default ChatInput;