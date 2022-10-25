import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleCourseCard = ({course}) => {
  const { id, title, img, fee, desciption, video } = course;
  const navigate = useNavigate()
  const handleNavigate = (id) => {
    navigate(`/details/${id}`)
  }
  return (
    // course card
    <div onClick={() => handleNavigate(id)} className="card w-full bg-base-100 shadow-xl">
    <div className="card-body">
      <h2 className="card-title text-2xl">{title}</h2>
      <p className='text-xl'>{desciption}</p>
      <div className='flex'>
      <p className='text-xl font-bold'>Course Fee : {fee} Tk</p>
      <p className='text-xl font-bold'>Videos : {video} </p>
      </div>
    </div>
    <figure><img className='w-full' src={img} alt="Course" /></figure>
  </div>
  );
};

export default SingleCourseCard;