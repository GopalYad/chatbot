import ChatInput from "./components/ChatInput"
import ChatMessage from "./components/ChatMessage"

function App() {
 
  return (
    <div className="w-[80%] mx-auto flex flex-col items-center min-h-screen">
    <ChatInput/>
    <div className="lg:w-1/2 mx-auto w-full">

    <ChatMessage message={'Hello!How are you?'} sender='user'/>
    <ChatMessage message={'I am Good'} sender='robot'/>
    </div>
    </div>
  )
}

export default App
