import Footer from "../homePage/Footer";
import Navbar from "../homePage/Navbar";
import SectionTitle from "../share/SectionTitle";
import { useState } from "react";

const Classes = () => {
  const [data, setData] = useState([]);

  fetch(`http://localhost:5000/allclases`)
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((error) => console.error("Error:", error));
    return (
      <div>
        <Navbar />
        <div>
          <SectionTitle
            heading={"Classes"}
            subHeading={"Visit Our Classes"}
          ></SectionTitle>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4 py-6">
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
                  <h3 className="flex-1 py-2 text-lg font-semibold leading-snug text-white">
                    {item.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
};

export default Classes;