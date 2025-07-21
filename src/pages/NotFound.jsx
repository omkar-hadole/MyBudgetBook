import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="py-10 bg-white font-serif">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="text-center max-w-4xl">
            <div
              className="bg-center bg-cover h-[400px]"
              style={{
                backgroundImage:
                  "url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)",
              }}
            >
              <h1 className="text-center text-[80px]">404</h1>
            </div>
            <div className="mt-[-50px]">
              <h3 className="text-[32px] md:text-[40px] font-semibold">
                Look like you're lost
              </h3>
              <p className="text-gray-600">
                The page you are looking for is not available!
              </p>
              <Link
                to="/"
                className="inline-block mt-5 px-5 py-2 bg-expense-dark text-white hover:bg-expense transition rounded-md"
              >
                Go to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;