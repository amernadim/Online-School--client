import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Cheakout = () => {
  const course = useLoaderData();
  const { title, img, fee } = course;
  return (
    <div className='mt-[95px]'>
     <h2 className='text-2xl font-bold text-center my-3'>{title}</h2>
     <h2 className='text-xl font-bold text-center my-3'>Fee : {fee}</h2>
     <img className='mx-auto h-[300px]' src={img} alt="course" />
    </div>
  );
};

export default Cheakout;