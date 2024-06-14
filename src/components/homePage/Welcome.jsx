import { FaBookmark, FaCheckCircle } from "react-icons/fa";

const Welcome = () => {
  return (
    <section className="m-4 md:m-8 dark:bg-gray-100 dark:text-gray-800">
      <div className="container mx-auto p-4 my-6 space-y-2 text-center">
        <h2 className="text-5xl font-bold">The Story Behind Our Gym</h2>
        <p className="dark:text-gray-600 lg:w-[50%] mx-auto py-4">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. point of using
          Lorem Ipsum is{" "}
        </p>
      </div>
      <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:w-[90%]">
        <div className="flex flex-col items-center p-4 border border-black-500">
          <FaBookmark className="w-8 h-8 dark:text-violet-600"></FaBookmark>
          <h3 className="my-3 text-3xl font-semibold">Story</h3>
          <div className="space-y-1 leading-tight">
            <p className="text-center">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.point of
              using Lorem Ipsum.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center p-4 border border-black-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-8 h-8 dark:text-violet-600"
          >
            <path
              fillRule="evenodd"
              d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
              clipRule="evenodd"
            ></path>
          </svg>
          <h3 className="my-3 text-3xl font-semibold">Our Mission</h3>
          <div className="space-y-1 leading-tight">
            <p className="text-center">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.point of
              using Lorem Ipsum.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center p-4 border border-black-500">
          <FaCheckCircle className="w-8 h-8 dark:text-violet-600"></FaCheckCircle>
          <h3 className="my-3 text-3xl font-semibold">Our Value</h3>
          <div className="space-y-1 leading-tight">
            <p className="text-center">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.point of
              using Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
