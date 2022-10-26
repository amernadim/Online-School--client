import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCourse from "../../components/Courses/SingleCourse";
import SingleCourseCard from "../../components/Courses/SingleCourseCard";

const Courses = () => {
  const courses = useLoaderData();

  return (
    <div className='mt-[95px]'>
      <h2 className='text-center text-4xl font-bold'>Courses</h2>

      <div className='md:grid md:grid-cols-4 grid-flow-col gap-4 w-10/12 mx-auto my-4'>
        <div className='md:col-span-3 border grid grid-cols-1 lg:grid-cols-2 gap-4 p-3 mt-4'>
          {
             courses.map(course => <SingleCourseCard
              key={course.id}
              course={course}
              ></SingleCourseCard>)
          }
        </div>

        <div className='md:col-span-1  h-72 rounded-lg pt-2'>
          {
            courses.map(course => <SingleCourse
            key={course.id}
            course={course}
            ></SingleCourse>)
          }
        </div>
      </div>

    </div>
  );
};

export default Courses;