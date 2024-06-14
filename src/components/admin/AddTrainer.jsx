import axios from "axios";

const AddTrainer = () => {

  const handleAddTrainer = e =>{
    e.preventDefault();
    const form = e.target;
    const name = form.trainername.value;
    const to = form.to.value;
    const from = form.time.value;
    const dec = form.dec.value;
    const url = form.url.value;
    const data = {name,to,from,dec,url};
    const serverUrl = "http://localhost:5000/addtrainer";
    axios
      .post(serverUrl, data)
      .then(function (response) {
        // Handle success
        console.log("Response:", response.data);
        alert("Trainer Added");
      })
      .catch(function (error) {
        // Handle error
        console.error("Error:", error);
      });
  }
  
    return (
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl border bg-white   font-sans mx-auto my-8">
        <h1 className="text-3xl font-bold text-center text-indigo-600">
          Add Trainer
        </h1>
        {/* Input fields and the form started */}
        <form onSubmit={handleAddTrainer} className="space-y-6">
          <div className="space-y-2 text-sm">
            <label htmlFor="username" className="block ">
              Trainer name
            </label>
            <input
              type="text"
              name="trainername"
              placeholder="trainer name"
              className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  "
            />
          </div>
          <div className="space-y-2 text-sm">
            <label htmlFor="username" className="block ">
              Photo Url
            </label>
            <input
              type="text"
              name="url"
              placeholder="photo url"
              className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  "
            />
          </div>
          <div className="space-y-2 text-sm">
            <label htmlFor="password" className="block ">
              Time
            </label>
            <div className="flex gap-2">
              <input
                type="time"
                name="to"
                placeholder="Time"
                className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  "
              />
              <input
                type="time"
                name="time"
                placeholder="Time"
                className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  "
              />
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <label htmlFor="username" className="block ">
              Description
            </label>
            <input
              type="text"
              name="dec"
              placeholder="description"
              className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  "
            />
          </div>
          {/* Sign in Button */}
          <button className="text-lg rounded-xl relative p-[10px] block w-full bg-indigo-600 text-white border-y-4 duration-500 overflow-hidden focus:border-indigo-500 z-50 group">
            Add Trainer
            <span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-1000 ease-out flex justify-center inset-0 items-center z-10 text-white">
              Add Trainer
            </span>
            <span className="bg-indigo-800 absolute inset-0 -translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
            <span className="bg-indigo-800 absolute inset-0 translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
            <span className="bg-indigo-800 absolute inset-0 translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
            <span className="bg-indigo-800 absolute inset-0 -translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
          </button>
        </form>
      </div>
    );
};

export default AddTrainer;