import TableData from "./TableData";
import axios from "axios";
import { useState } from "react";

const AllClasses = () => {
  const [data,setData] = useState([]);

  fetch(`http://localhost:5000/allclases`)
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((error) => console.error("Error:", error));

    const handleDelete = (id)=>{
      const url = `http://localhost:5000/allclases/${id}`;
      console.log(url);
      axios
        .delete(url)
        .then(function (response) {
          // Handle success
          alert("Delete Successfully")
          console.log("Response:", response.data);
        })
        .catch(function (error) {
          // Handle error
          console.error("Error:", error);
        });
    }
  
    return (
      <div className="overflow-x-auto my-8">
        <table className="min-w-[90%] shadow-md border mx-auto border-gray-100 my-6">
          <thead>
            <tr className="bg-[#0095FF] text-white">
              <th className="py-4 px-6 text-lg text-left border-b">Image</th>
              <th className="py-4 px-6 text-lg text-left border-b">
                Trainer Name
              </th>
              <th className="py-4 px-6 text-lg text-left border-b">Title</th>
              <th className="py-4 px-6 text-lg border-b text-end">Action</th>
            </tr>
          </thead>
          {data.map((table) => (
            <TableData
              table={table}
              key={table._id}
              handleDelete={handleDelete}
            ></TableData>
          ))}
        </table>
      </div>
    );
};

export default AllClasses;