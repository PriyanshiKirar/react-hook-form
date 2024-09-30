// using the react hook form

import { useForm } from "react-hook-form";
const App = () => {
const {
  watch,
  register,
  handleSubmit,
  formState:{errors},
}=useForm();
console.log(watch("username"));
const submithandler =(data)=>{
console.log(data);
}
  return (
  <>
  <h1 className="m-16">Register</h1>
  <form className="w-[80%] mx-auto" onSubmit={handleSubmit( submithandler
  )} >
<input className="border-2 border-blue-300   block" type="text"placeholder="username"{...register('username',{
  required:true,
  maxLength:20,
  minLength:5,
})}
 />
 {errors.username?.type === "required" && (
  <p className="text-red-600">name is required</p>
 )}
 <input className="px-3 py-2 mt-5 bg-blue-500 block rounded-md" type="submit" />
  </form>
  </>
  )
}

export default App