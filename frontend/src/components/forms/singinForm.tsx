"use client"
import { Input } from '@nextui-org/input';
import { Button, image } from '@nextui-org/react';
import React, { useState } from 'react';
import login from '../../app/Login/actions';
import { useRouter } from 'next/navigation';

// Define types for form fields
interface FormData {
  email: string;
  password: string;
}

const SigninForm: React.FC = () => {
  const router = useRouter()
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password:'',
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
    const user = await login(formData.email, formData.password);
    router.push('/market')
  };

  return (
    <div className='flex flex-col justify-center items-center h-[100vh] w-[100vw]'
      style={{
        backgroundImage:"url('/images/farmer.jpg')"
      }}>
      <div className='p-20' style={{
        borderRadius:50,
        backgroundColor: 'rgba(211, 211, 211, 0.7)'
      }}>
      <div className='text-6xl mb-10 text-center text-white' style={{
        letterSpacing:"3px"
      }}>Login</div>
      <form onSubmit={handleSubmit}>
        <div className='flex pb-5'> 
          <div className='w-40 text-white'>Email</div>
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
          <div className='w-40 text-white'>Password</div>
          <Input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="justify-end mt-5 flex">
          <Button type="submit">Login</Button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default SigninForm;
