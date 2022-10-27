import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { ArrowDownCircleIcon } from '@heroicons/react/24/solid';
import ReactToPdf from "react-to-pdf";


const CourseDetails = () => {
  const course = useLoaderData();

  const ref = React.createRef();
  
  // console.log(course);
  const { id, title, img, fee, desciption, video } = course;
  return (
    <div className=" mx-auto mt-[95px] " ref={ref}>
      <div>
        {/* Coures Details */}

     <div className="flex items-center justify-between flex-wrap mx-4">
     <h2 className="text-3xl font-semibold text-center">
        Course : {title}
      </h2>

         {/* Pdf Button */}
         <ReactToPdf targetRef={ref} filename="div-blue.pdf">
        {({toPdf}) => (
            <button onClick={toPdf} className="btn btn-sm bg-blue-400 mt-3 border-none">Download <ArrowDownCircleIcon className="ml-3 h-6 w-6 text-white"/></button>
        )}
       </ReactToPdf>
     </div>

      <figure className="px-10 pt-10">
        <img src={img} alt="Course" className="rounded-xl mx-auto " />
      </figure>
      <div className="card-body items-center text-center">
        <p className="text-xl">{desciption}</p>
        <div className="flex">
          <p className="text-xl font-bold mr-5">Course Fee : {fee} Tk</p>
          <p className="text-xl font-bold">Videos : {video} </p>
        </div>
        <div className="card-actions mx-auto">     
          {/* private route get primium access */}
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



