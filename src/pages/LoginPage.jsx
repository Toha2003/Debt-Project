import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginPage = () => {

  const [user, setUser] = useState({username:"",password:""})
  const navigate = useNavigate()

  const submit = (e)=>{
    e.preventDefault()
    if(user.username ==="Tohir" && user.password === "2003"){
      navigate('/debts')
    }else{
      toast.error("xato")
    }
  }

  const handleUser = (e)=>{
     setUser({...user, [e.target.id]:e.target.value})
  }
  console.log(user);
  
  return (
    <div className="flex justify-center items-center h-screen">

      <form onSubmit={submit} className="flex flex-col  w-[300px] h-[300px] justify-center items-center gap-6" action="">
        <div className="flex gap-2 flex-col">
          <label className="text-2xl" htmlFor="username" >
            Username
          </label>
          <input onChange={handleUser}
            className="bg-gray-300 rounded-sm border-none h-8 p-3 w-60"
            type="text"
            id="username"
            placeholder="Username"
            required
          />
        </div>
        <div className="flex gap-2 flex-col">
          <label className="text-2xl" htmlFor="password" >
            Passwor
          </label>
          <input onChange={handleUser}
            className="bg-gray-300 rounded-sm border-none h-8 p-3 w-60"
            type="text"
            id="password"
            placeholder="Password"
            required
          />
        </div>
        <button className="w-60 bg-blue-600 h-9 rounded-md text-white font-semibold text-xl font-serif">Click</button>
      </form>
    </div>
  );
};

export default LoginPage;
