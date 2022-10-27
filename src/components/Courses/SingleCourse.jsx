import React from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';

const SingleCourse = ({ course }) => {
  const { id, title } = course;

  return (
    // course title
    <div>
      <ul>
        <li className="mt-4 font-bold text-center bg-blue-400 text-white p-2" data-aos="zoom-out-right" >
        
          <Link to={`/details/${id}`}>{title}</Link>
        </li>
      </ul>
    </div>
  );
};

AOS.init();

export default SingleCourse;
