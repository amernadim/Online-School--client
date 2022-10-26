import React from "react";

const Faq = () => {
  return (
    <div className="mt-[95px]">
      <section className="">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="text-2xl font-semibold sm:text-4xl my-2">
          Some Question's Answer For This Online School
          </h2>
          <div className="space-y-4">
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
               When start Online School journey?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">
                Since 2022 we start our journey.{" "}
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none ">
                How Many students are currently studing?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">
                About 1000 students are currently with us.{" "}
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none ">
                What is the course of the course in front?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">
                We have the excess of doing some courses related to IT.{" "}
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
