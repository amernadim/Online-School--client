import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { PrinterIcon } from '@heroicons/react/24/solid';




const CourseDetails = () => {
  const course = useLoaderData();
  
  // console.log(course);
  const { id, title, img, fee, desciption, video } = course;
  return (
    <div className="w-10/12 mx-auto mt-[95px]">
      <div>
      <h2 className="text-3xl font-semibold text-center">
        Course Name : {title}
      </h2>
      <figure className="px-10 pt-10">
        <img src={img} alt="Course" className="rounded-xl mx-auto" />
      </figure>
      <div className="card-body items-center text-center">
        <p className="text-xl">{desciption}</p>
        <div className="flex">
          <p className="text-xl font-bold mr-5">Course Fee : {fee} Tk</p>
          <p className="text-xl font-bold">Videos : {video} </p>
        </div>
        <div className="card-actions">
          <button className="btn btn-md bg-blue-600 mt-3">Download <PrinterIcon className="ml-3 h-6 w-6 text-white"/></button>

          <Link to={`/cheakout/${id}`}>
          <button className="btn btn-md bg-blue-400 text-black mt-3">Get Premium Access</button>
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CourseDetails;


