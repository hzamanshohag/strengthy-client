import Footer from "../homePage/Footer";
import Navbar from "../homePage/Navbar";
import SectionTitle from "../share/SectionTitle";

const Galary = () => {
  return (
    <div>
      <Navbar />
      <div>
        <SectionTitle
          heading={"Our Galary"}
          subHeading={"Visit Our Photos"}
        ></SectionTitle>
        <section className="py-6 w-full">
          <div className="container grid grid-cols-2 gap-4 py-4 mx-auto md:grid-cols-4">
            <img
              src="https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-gray-500 aspect-square"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
              src="https://images.pexels.com/photos/791763/pexels-photo-791763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
              src="https://images.pexels.com/photos/703016/pexels-photo-703016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
              src="https://images.pexels.com/photos/949131/pexels-photo-949131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
              src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3ltfGVufDB8fDB8fHww"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
              src="https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGd5bXxlbnwwfHwwfHx8MA%3D%3D"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
              src="https://images.unsplash.com/photo-1590487988256-9ed24133863e?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
              src="https://images.unsplash.com/photo-1580261450046-d0a30080dc9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGd5bXxlbnwwfHwwfHx8MA%3D%3D"
            />
            <img
              src="https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 bg-gray-500 aspect-square"
            />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Galary;
