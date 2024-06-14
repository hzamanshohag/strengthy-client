import { Link } from "react-router-dom";

const TableData = ({ table, handleDelete }) => {
  const { url, title, name,_id } = table;
  return (
    <tbody>
      <tr className="hover:bg-gray-50 border-b transition duration-300">
        <td className="py-4 px-4 flex justify-start">
          <img
            src={url}
            alt="table navigate ui"
            className="h-16 w-16 object-cover bg-gray-300"
          />
        </td>
        <td className="py-4 px-6 border-b text-xl font-medium">{name}</td>
        <td className="py-4 px-6 border-b text-lg font-medium">{title}</td>
        <td className="py-4 px-6 border-b text-end">
          <Link onClick={()=>handleDelete(_id)}>
            <button className="bg-blue-500 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md">
              Delete
            </button>
          </Link>
        </td>
      </tr>
    </tbody>
  );
};

export default TableData;
