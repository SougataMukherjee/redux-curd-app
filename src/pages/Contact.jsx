import {useNavigate} from 'react-router-dom'
export const Contact = () => {
    const navigate=useNavigate();
  return (
    <div>Contact
    <button className='border text-blue-500' onClick={()=>navigate("/")}> Go to Home</button>

    </div>
  )
}
