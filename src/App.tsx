import { useState } from "react"
import ChatInput from "./components/ChatInput"
import ChatMessage from "./components/ChatMessage"
import { getGeminiResponse } from "./services/gemini"

function App() {
type ChatMessageType = {
  message: string;
  sender: string;
  id: number;
};

const [chatMessages, setChatMessages] = useState<ChatMessageType[]>([]);

 const sendUserMessage = async (message: string) => {
    // Add user message
    const newUserMessage = {
      message,
      sender: 'user',
      id: chatMessages.length + 1
    };
    setChatMessages(prev => [...prev, newUserMessage]);

    // Get and add bot response
    const botResponse = await getGeminiResponse(message);
    const newBotMessage = {
      message: botResponse,
      sender: 'robot',
      id: chatMessages.length + 2
    };
    setChatMessages(prev => [...prev, newBotMessage]);
 }
 
  return (
    <div className="w-[80%] mx-auto flex flex-col items-center min-h-screen">
      <ChatInput handler={sendUserMessage}/>
   {
   chatMessages.map((chat)=>(
    <ChatMessage
    key={chat.id}
    message={chat.message}
    sender={chat.sender}
    />
   ))
   }
    </div>
  )
}

export default App
