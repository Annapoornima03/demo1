import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
	const [email,setEmail] = useState("")
	const [Password,setPassword] = useState("")
	const navigate = useNavigate()
	// email -> see stored value
	// setEmail -> store (eg., setEmail("sampleEmail@gmail.com"))

	const handlesubmit =()=>{
		const userData = [
			{
				email:"demo@gmail.com ",
				password:2004
			},{
				email:"demo01@gmail.com ",
				password:8872
			}
		]

		const user = userData.find(user => (user.email.trim() === email) && (user.password === Number(Password)));
		console.log("user",user);
		
		if(user){
		alert("login sucess")	
		navigate('/home')
		}else{
			alert("failed to login")
		}
	}
  return (
	<div className='grid justify-center items-center h-screen'>
     <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
	<div className="mb-8 text-center">
		<h1 className="my-3 text-4xl font-bold text-red-500">Sign in</h1>
		<p className="text-sm dark:text-gray-600">Sign in to access your account</p>
	</div>
	<form noValidate="" action="" className="space-y-12">
		<div className="space-y-4">
			<div>
				<label htmlFor="email" className="block mb-2 text-sm">Email address</label>
				<input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" name="email" id="email" placeholder="abc@gmail.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
			</div>
			<div>
				<div className="flex justify-between mb-2">
					<label htmlFor="password" className="text-sm">Password</label>
					<a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">Forgot password?</a>
				</div>
				<input value={Password} onChange={(e)=>setPassword(e.target.value)} type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
			</div>
		</div>
		<div className="space-y-2">
			<div>
				<button onClick={handlesubmit} type="button" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">Sign in</button>
			</div>
			<p className="px-6 text-sm text-center dark:text-gray-600">Don't have an account yet?
				<a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-600">Sign up</a>.
			</p>
		</div>
	</form>
</div>
</div>
  )
}

export default Login