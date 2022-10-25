import React from "react";
import { Link } from "react-router-dom";

const SingleCourse = ({ course }) => {
  // console.log(course);
  const { id, title, img, fee, desciption, video } = course;

  return (
    // course title
    <div>
      <ul>
        <li className="mt-4 font-bold text-center">
          <Link to={`/details/${id}`}>{title}</Link>
        </li>
      </ul>
    </div>
  );
};

export default SingleCourse;
