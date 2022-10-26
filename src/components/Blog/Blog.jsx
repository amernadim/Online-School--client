import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Blog = () => {
  return (
    <div className="mt-[95px]">
      <section className="">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
              {/* Question 1 */}
            <div data-aos="fade-right" className="bg-blue-300 p-3 rounded-lg">
              <h3 className="font-semibold">What is cors ?</h3>
              <p className="mt-1 ">
                Cross-Origin Resource Sharing (CORS) is an HTTP-header based
                mechanism that allows a server to indicate any origins (domain,
                scheme, or port) other than its own from which a browser should
                permit loading resources. CORS also relies on a mechanism by
                which browsers make a "preflight" request to the server hosting
                the cross-origin resource, in order to check that the server
                will permit the actual request. In that preflight, the browser
                sends headers that indicate the HTTP method and headers that
                will be used in the actual request.
              </p>
            </div>
             {/* Question 2 */}
            <div className="bg-blue-300 p-3 rounded-lg" data-aos="fade-left">
              <h3 className="font-semibold ">
                Why are you using firebase? what other option do you have to
                implement authentication ?
              </h3>
              <p className="mt-1 ">
                Firebase provides tools to grow my app and business, for
                startups & global enterprises. Get my app up and running quickly
                & securely with fully managed backend infrastructure. Trusted by
                +200,000 Devs. Cross-Platform Solutions. Monitor App
                Performance.That's the reson i using firebase. <br />
                STYTCH ,Ory ,Supabase ,Okta ,PingIdentity ,Keycloak ,Frontegg Authress,
                Auth0 ,Firebase ,Amazon ,Cognito, OneLogin
              </p>
            </div>
             {/* Question 3 */}
            <div data-aos="fade-right" className="bg-blue-300 p-3 rounded-lg">
              <h3 className="font-semibold">How does the Privater Route Work?</h3>
              <p className="mt-1">
              The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
              </p>
            </div>
             {/* Question 4 */}
            <div className="bg-blue-300 p-3 rounded-lg" data-aos="fade-left">
              <h3 className="font-semibold">What  is Node ? How does Node Work?</h3>
              <p className="mt-1">
              It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
AOS.init();

export default Blog;
