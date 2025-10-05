
const ChatInput = () => {
  return (
    <div className="mt-4">
        <input
         type="text" 
         size={50} 
         placeholder="send an message to robot"
         className="border  py-3 rounded-xl px-9 "
         />
        <button 
        className="bg-green-500 text-white px-6 font-bold py-3 rounded-3xl"
        >Send</button>
    </div>
  )
}

export default ChatInput