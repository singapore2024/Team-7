"use client"
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/react';
import React, { useState } from 'react';

// Define types for form fields
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  number: string;
  // need to change this
  certification: string;
}

const SignupForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    number: '',
    certification:''
  });

  // Handle input changes
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(name)
    console.log(value)
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
    console.log("HELLO")
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='text-6xl mb-10'>REGISTRATION</div>
      <form onSubmit={handleSubmit}>
        <div className='flex pb-5'> 
          <div className='w-40'>First Name:</div>
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
          <div className='w-40'>Last Name:</div>
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

          <div className='w-40'>Email:</div>
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

          <div className='w-40'>Number:</div>
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
          <div className='flex pb-5'> 

          <div className='w-40'>Certification:</div>
          <Input
            type="certification"
            id="certification"
            name="certification"
            value={formData.certification}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="justify-end mt-5 flex">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
