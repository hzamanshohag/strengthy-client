import { Outlet } from "react-router-dom";

const Root = () => {
    return (
      <div className="md:[90%] lg:w-[80%] mx-auto">
        <Outlet></Outlet>
      </div>
    );
};

export default Root;