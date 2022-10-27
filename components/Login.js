import { useState } from "react";


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [isLoggingIn, setIsLoggingIn] = useState(true);


    async function submitHandler(e) {
        e.preventDefault();

        if(!email || !password){
            setError("Please Enter Username and Password")
        }
       
    }


  return (
    <div className="flex-1 flex flex-col justify-center items-center text-xs sm:text-sm ">
      <h1 className="font-extrabold text-2xl sm:text-4xl">{!isLoggingIn ? 'Login' : 'Register'}</h1>
     {error && <div className="mt-5 w-full max-w-[40ch]  py-2 text-rose-600 text-center">{error}</div> } 
      <form className="flex flex-col mt-8 gap-1 w-full max-w-[40ch]">
      <label
              for="uName"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Username
            </label>
        <input type="text" id="uName" name="uName" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="First Name"
              className="w-full rounded-md border border-[#8492a8] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#0067a0] focus:shadow-md" />
      
      
      <label
              for="uPassword"
              class="mt-3 mb-3 block text-base font-medium text-[#07074D]"
            >
              Password
            </label>
        <input type="password" id="uPassword" name="uPassword" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="First Name"
              className="w-full rounded-md border border-[#8492a8] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#0067a0] focus:shadow-md" />
      
      <div className="mt-5">
        <button
        type="button"
        onClick={submitHandler}
          class="hover:shadow-form hover:bg-[#0088d3] rounded-md bg-[#0067a0] py-3 px-8 text-center text-base font-semibold text-white outline-none w-full"
        >
          <h2 onClick={(()=> setIsLoggingIn(!isLoggingIn))}>{!isLoggingIn ? 'Login' : 'Register'}</h2>
        </button>
      </div>
      </form>
    </div>
  )
}

export default Login
