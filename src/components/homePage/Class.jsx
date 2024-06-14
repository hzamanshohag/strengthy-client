import { useState } from "react";

const Class = () => {
  const [data, setData] = useState([]);

  fetch(`http://localhost:5000/allclases`)
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((error) => console.error("Error:", error));
    return (
      <section className="py-6 sm:py-12 text-gray-100">
        <div className="container p-6 mx-auto space-y-8">
          <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
            Upcoming Classes
          </h2>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            {data.map((item, idx) => (
              <article key={idx} className="flex flex-col bg-gray-900">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                >
                  <img
                    alt=""
                    className="object-cover w-full h-52 bg-gray-500"
                    src={item.url}
                  />
                </a>
                <div className="flex flex-col flex-1 p-6">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Te nulla oportere reprimique his dolorum"
                  ></a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-xs tracking-wider uppercase hover:underline text-violet-400"
                  >
                    {item.name}
                  </a>
                  <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                    {item.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
};

export default Class;