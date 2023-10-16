import { Button, Card, Label, TextInput, Toast } from "flowbite-react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {  SetSessionStorage } from "../../../helper/SessionStorage";
import { useNavigate } from "react-router-dom";
import { login } from "../../../Data/Api";
import { useEffect, useState } from "react";
import { HiCheck, HiX } from 'react-icons/hi';

export default function Login() {
// const {setAuth} = useAuth();
 const navigate = useNavigate();
 const [alert, setAlert] = useState({isAlert:false, message:""});
 console.log(alert, 'ini alert');
 const schema = yup.object().shape({
  email: yup.string().email("email format is not valid").required("email is required"),
  password:yup.string().min(5).max(15).required('password is still empty')
});

 const {register, handleSubmit, formState: {errors}, reset} = useForm({
  resolver: yupResolver(schema)
 });

 const submitForm = async (data) => {

   if(data){
    console.log('ada data', data)
     await login(data.email)
     .then((res) => {
      console.log('ini result all', res.data[0])
  
      if(Object.keys(res.data).length === 0){
        setAlert({isAlert:true, message:"please enter valid email"});

      }else{
        if(res?.data[0].password === data?.password){
         console.log('ini data pass sama', res?.data[0])
         setAlert({isAlert:true, message:"success"});
         SetSessionStorage("user", JSON.stringify(res?.data[0]));
         navigate("/");
          reset();
       
        }else{
          console.log('ini data pass beda', res.data.password)

         setAlert({isAlert:true, message:"please enter valid password"});
        }
       
      }

    })
     .catch((err) => (
      console.error(err)
     ))

   }

 }


 useEffect(() => { 
  console.log(alert, 'ini alert');
  if(alert.isAlert === true){
    setTimeout(() => {
      setAlert({isAlert:false, message:""})
    }, 2000)
  }

 },[alert] )

  return (
    <div className="flex flex-col items-center justify-center px-6 lg:h-screen lg:gap-y-12">
      {alert.isAlert === true ?
      <>
      {alert?.message .includes("success") ? 
      <Toast>
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
          <HiCheck className="h-5 w-5" />
        </div>
        <div className="ml-3 text-sm font-normal">
          {alert?.message}
        </div>
        <Toast.Toggle />
      </Toast>
      : 
         <Toast>
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
          <HiX className="h-5 w-5" />
        </div>
        <div className="ml-3 text-sm font-normal">
          {alert?.message}
        </div>
        <Toast.Toggle />
      </Toast>
}
      </>
      : ""
}
      
      <Card
        horizontal
        className="w-full md:max-w-screen-sm [&>img]:hidden md:[&>img]:w-96 md:[&>img]:p-0 md:[&>*]:w-full md:[&>*]:p-16 lg:[&>img]:block"
      >
        <h1 className="mb-3 text-2xl font-bold dark:text-white md:text-3xl">
          Sign in to hris
        </h1>
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="mb-4 flex flex-col gap-y-3">
            <Label htmlFor="email">Your email</Label>
            <TextInput
              id="email"
              name="email"
              placeholder="name@company.com"
              type="email"
              {...register('email')}
            />
            <p className="text-red-600">{errors?.email?.message}</p>
          </div>
          <div className="mb-6 flex flex-col gap-y-3">
            <Label htmlFor="password">Your password</Label>
            <TextInput
              id="password"
              name="password"
              placeholder="••••••••"
              type="password"
              {...register("password")}
            />
          <p className="text-red-600">{errors?.password?.message}</p>
          </div>
          <div className="mb-6">
            <Button type="submit" className="w-full " color="blue">
              Login 
            </Button>
          </div>
        </form>
      </Card>
    </div>
  )
}


