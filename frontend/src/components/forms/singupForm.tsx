"use client"
import { Input } from '@nextui-org/input';
import { Button, Switch } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

// Define types for form fields
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  number: string;
  
}
const SignupForm: React.FC = () => {
  const [role, setRole] = useState<string>("Producer")
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    number: '',
  });

  // Handle input changes
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
    router.push("/market");
  };
  const switchhandler = ()=>{
    if(role=="Producer"){
      setRole("Consumer");
    }else{
      setRole("Producer");
    }
  }

  return (
    <div className='flex flex-col justify-center items-center h-[100vh] w-[100vw]' 
      style={{
        backgroundImage:"url('/images/farmer2.jpg')"
      }}>
      <div className='flex flex-col text-center p-10 w-[500px]'
        style={{
          borderRadius:50,
          backgroundColor: 'rgba(211, 211, 211, 0.7)'
        }}>
      <div className='text-6xl mb-10 text-white'
        style={{
          letterSpacing:"3px"
        }}>Registration</div>
        <div className='pb-5 flex justify-end text-white'>
          <Switch className='text-white' onValueChange={switchhandler}>
            <div className='text-white'>
              {role}
            </div>
          </Switch>
        </div>
      <form onSubmit={handleSubmit}>
        <div className='flex pb-5'> 
          <div className='w-40 text-white'>First Name:</div>
          <Input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='flex pb-5'> 
          <div className='w-40 text-white'>Last Name:</div>
          <Input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
          <div className='flex pb-5'> 

          <div className='w-40 text-white'>Email:</div>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
          <div className='flex pb-5'> 

          <div className='w-40 text-white'>Phone Number:</div>
          <Input
            // type="number"
            errorMessage="Please enter a valid phone number"
            id="number"
            name="number"
            value={formData.number}
            onChange={handleInputChange}
            required
          />
        </div>
        {role==="Consumer" && 
        <div className='flex pb-5'> 
        <div className='w-40 text-white'>Certification:</div>
        <Input
          type="file"
          id="certification"
          name="certification"
          onChange={handleInputChange}
          required
        />
      </div>}
        
        <div className="justify-end mt-5 flex">
          <Button type="submit">Submit</Button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default SignupForm;
