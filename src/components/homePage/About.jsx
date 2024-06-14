import { Link } from "react-router-dom";

const About = () => {
    return (
      <div>
        <section className="">
          <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
              <div className="max-w-lg">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
                  About Us
                </h2>
                <h2 className="text-2xl text-gray-700 mt-2">
                  Respect Your Body, It&apos;s the Only One You Get
                </h2>
                <p className="mt-4 text-gray-600 text-lg">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  point of using Lorem Ipsum is
                </p>
                <div className="mt-8">
                  <Link
                    to="/"
                    className="text-blue-500 hover:text-blue-600 font-medium"
                  >
                    Learn more about us
                    <span className="ml-2">&#8594;</span>
                  </Link>
                </div>
              </div>
              <div className="mt-12 md:mt-0">
                <img
                  alt="About Us Image"
                  className="object-cover rounded-lg shadow-md"
                  src="https://media.istockphoto.com/id/1391410249/photo/sports-and-gym-activities.jpg?s=612x612&w=0&k=20&c=1S-hAmT-CkRtdYV_hcKi1lZdQkXAN_mCy3ebIXlUEnE="
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default About;