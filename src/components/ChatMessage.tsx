import userImg from '../assets/user.png';
import robotImg from '../assets/robot.png'
const ChatMessage = ({message,sender}) => {
    const isRobot =sender==='robot'
  return (
    <div className={`flex px-4 py-4 w-full text-2xl text-gray-700 items-center font-bold 
    ${isRobot?'justify-start':'justify-end'}
    `}>
  

     {
        isRobot && <img src={robotImg} alt="robot"  width={50} className='mr-3'/>
     }
     <span>{message}</span>
     {
        !isRobot && <img src={userImg} alt="user" width={50} className='mr-3' />
     }
   
    </div>
  )
}

export default ChatMessage