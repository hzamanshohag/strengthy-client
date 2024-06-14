

const Amenities = () => {
    return (
      <div className="max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl tracking-tight font-bold text-primary-800">
            Gym Amenities
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row">
          <div className="mr-0 md:mr-8 mb-6 md:mb-0">
            <img
              className=" md:w-[400px] h-[500px] mx-auto"
              alt="can_help_banner"
              src="https://www.anytimefitness.co.in/wp-content/uploads/2020/07/In-Club-Signage-Mock-Up-9-copy-768x512-1.jpg"
            />
          </div>

          <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                <h3 className="text-2xl font-bold text-md mb-6">LOCKERS</h3>
                <p className="text-sm">
                  Secure lockers that work by you choosing a four digit code.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                <h3 className="text-2xl font-bold text-md mb-6">
                  CHANGING ROOMS
                </h3>
                <p className="text-sm">
                  {" "}
                  Delicious, protein-packed gourmet shakes that come in
                  chocolate, fruit, vanilla and more. Water and snacks too.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                <h3 className="text-2xl font-bold text-md mb-6">FUEL BAR</h3>
                <p className="text-sm">
                  Mini towels for class and lovely big towels for showers after
                  class. *Amenities may not be available at all studios
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                <h3 className="text-2xl font-bold text-md mb-6">
                  COMPLIMENTARY TOWELS
                </h3>
                <p className="text-sm">
                  Secure lockers that work by you choosing a four digit code.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                <h3 className="text-2xl font-bold text-md mb-6">
                  WIFI & RESTROOMS
                </h3>
                <p className="text-sm">
                  Secure lockers that work by you choosing a four digit code.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                <h3 className="text-2xl font-bold text-md mb-6">
                  HOT SHOWERS & HAIR CARE
                </h3>
                <p className="text-sm">
                  what your body craves in the morning, you&apos;re not alone. The
                  majority of people crank the handle all the way up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Amenities;