import React from "react";
import { Link } from "react-router-dom";

const SingleCourse = ({ course }) => {
  // console.log(course);
  const { id, title } = course;

  return (
    // course title
    <div className="">
      <ul>
        <li className="mt-4 font-bold text-center bg-blue-400 text-white p-2">
          <Link to={`/details/${id}`}>{title}</Link>
        </li>
      </ul>
    </div>
  );
};

export default SingleCourse;
