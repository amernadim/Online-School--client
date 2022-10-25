import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const handleSubmit =  event => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name , photoURL , email , password);
  }

  return (
    <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-blue-400  text-black mx-auto">
	<div className="mb-8 text-center">
		<h1 className="my-3 text-4xl font-bold">Register</h1>
    <p className="text-xs text-red-600">Error</p>
	</div>
	<form onSubmit={handleSubmit} className="space-y-12 ng-untouched ng-pristine ng-valid">
		<div className="space-y-4">
			<div>
				<label htmlFor="name" className="block mb-2 text-sm font-semibold">Full Name</label>
				<input type="name" name="name" id="name" placeholder="Enter Your Full Name" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" required/>
			</div>
			<div>
				<label htmlFor="email" className="block mb-2 text-sm font-semibold">Photo Url</label>
				<input type="text" name="photoURL" id="photoURL" placeholder="Enter Your Photo Url" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" required/>
			</div>
			<div>
				<label htmlFor="email" className="block mb-2 text-sm font-semibold">Email address</label>
				<input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" required/>
			</div>
			<div>
				<div className="flex justify-between mb-2">
					<label htmlFor="password" className="text-sm font-semibold">Password</label>					
				</div>
				<input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" required/>
			</div>
		</div>
	
     <button type="submit" className="btn btn-wide w-full px-8 py-3 font-semibold rounded-md  ">Register</button>
	
			<p className="px-6 text-sm text-center ">Already Have an Account?
				<Link rel="noopener noreferrer" to="/login" className="underline text-white"> Log in .</Link>
			</p>
	</form>
</div>
  );
};

export default Register;