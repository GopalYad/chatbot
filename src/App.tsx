import { useState } from "react"
import ChatInput from "./components/ChatInput"
import ChatMessage from "./components/ChatMessage"

function App() {
const[chatMessages,setChatMessages]=useState([
    {
      id:1,
      message:'Hello!How are you?',
      sender:'user'
    },
    {
      id:2,
      message:'I am Good ,How can I help You?',
      sender:'robot'
    }
  ])

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
