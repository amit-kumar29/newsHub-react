import React,{ useState }  from 'react'
import { Link,useNavigate } from 'react-router-dom'
import RegistrationSuccessfull from './RegistrationSuccessfull';
import AlreadyRegisteredComponent from './AlreadyRegisteredComponent';




const RegisterBlock = () => {


    const [passwordMatch,setPasswordMatch] = useState(true);
    const [isRegistered, setIsRegistered] = useState(false);
    const[alreadyRegistered,setAlreadyRegistered] = useState(false);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmpassword: ''
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
      
     
      const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
          if(formData.password !== formData.confirmpassword){
            console.log("Passwords do not match.");
            //alert("Passwords do not match. Please try again.");
            setPasswordMatch(false);
            return;
          }
          else setPasswordMatch(true);
          
          const response = await fetch('http://localhost:3001/api/v1/users/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          });
    
          const data = await response.json();
          if (response.ok) {
            console.log('Registration successful welcome dear..', data);
            // Handle success (e.g., redirect to login page)
            setIsRegistered(true)
          } else {
            console.error('Registration failed', data);
            // Handle error (e.g., display error message)
            console.log(data.message);
            if(data.message==='Email already exists'){
              setAlreadyRegistered(true);
            }
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };

  return (
    <div className='border-2 border-black p-16 mx-auto w-5/12 ml-18'>
        <h1 className='text-center text-3xl font-bold mb-10'>NewsHub</h1>
        <form onSubmit={handleSubmit}>
            <div className='my-2'>
                <label>Name<span className="text-red-600 text-xl">*</span></label>
                <input name='name' required onChange={handleChange} type='text' placeholder='Enter your name' className='border-2 border-gray-400 w-full py-3 px-2 rounded-xl hover:border-gray-600 mb-8'/>
            </div>
            <div className='my-2'>
                <label>Email<span className="text-red-600 text-xl">*</span></label>
                <input name='email' required onChange={handleChange} type='email' placeholder='Enter your email' className='border-2 border-gray-400 w-full py-3 px-2 rounded-xl hover:border-gray-600 mb-8'/>
            </div>
            <div className='my-2'>
                <label>Password<span className="text-red-600 text-xl">*</span></label>
                <input name='password' required onChange={handleChange} type='password' placeholder='Enter your password' className='border-2 border-gray-400 w-full py-3 px-2 rounded-xl hover:border-gray-600 '/>
                
            </div>
            <div className='my-8'>
                <label>Confirm Password<span className="text-red-600 text-xl">*</span></label>
                <input name='confirmpassword' required onChange={handleChange} type='password' placeholder='Enter your password' className='border-2 border-gray-400 w-full py-3 px-2 rounded-xl hover:border-gray-600'/>
                {
                  passwordMatch?'':<p className='text-sm text-red-600 font-semibold'>password and confirm password do not match</p>
                }
            </div>
            
            <button type='submit' className='w-full border rounded-full bg-gray-600 p-4 my-2 text-white text-lg'>Register</button>
            <h2 className='text-center'>Do already have an account?? <Link to='/login'>Login here</Link></h2>
        </form>
        {isRegistered?<RegistrationSuccessfull setIsRegistered={setIsRegistered}/>:''}
        {alreadyRegistered?<AlreadyRegisteredComponent setAlreadyRegistered={setAlreadyRegistered} />:''};
    </div>
  )
}

export default RegisterBlock