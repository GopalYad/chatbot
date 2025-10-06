import { useState } from "react"
import ChatInput from "./components/ChatInput"
import ChatMessage from "./components/ChatMessage"

function App() {
type ChatMessageType = {
  message: string;
  sender: string;
  id: number;
};

const [chatMessages, setChatMessages] = useState<ChatMessageType[]>([]);

 const sendUserMessage = (message: string) => {
  setChatMessages([
    ...chatMessages,
    {
      message,
      sender: 'user',
      id: chatMessages.length + 1
    }
  ]);
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
