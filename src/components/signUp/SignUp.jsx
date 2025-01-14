import { AuthContext } from "../authProvider/AuthProvider";
import Footer from "../homePage/Footer";
import { Link } from "react-router-dom";
import Navbar from "../homePage/Navbar";
import { useContext } from "react";

const SignUp = () => {


  const { handleSignUp, googleLogin } = useContext(AuthContext);
  
  const handleSign = e =>{
    e.preventDefault();
    const form = e.target;
    // const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    handleSignUp(email, password)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("hello");
  }

  const google = () =>{
    googleLogin()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
    return (
      <div className="py-6">
        <Navbar />
        <section className="px-4 py-24 mx-auto max-w-7xl">
          <div className="w-full mx-auto space-y-5 sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12">
            <h1 className="text-4xl font-semibold text-center text-gray-900">
              Sign up
            </h1>
            <div className="pb-6 space-y-2 border-b border-gray-200">
              <p
                onClick={google}
                className="w-full py-3 btn btn-icon btn-google"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-1"
                >
                  <path d="M20.283,10.356h-8.327v3.451h4.792c-0.446,2.193-2.313,3.453-4.792,3.453c-2.923,0-5.279-2.356-5.279-5.28	c0-2.923,2.356-5.279,5.279-5.279c1.259,0,2.397,0.447,3.29,1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233	c-4.954,0-8.934,3.979-8.934,8.934c0,4.955,3.979,8.934,8.934,8.934c4.467,0,8.529-3.249,8.529-8.934	C20.485,11.453,20.404,10.884,20.283,10.356z" />
                </svg>
                Continue with Google
              </p>
            </div>
            <form onSubmit={handleSign} className="space-y-4">
              <label className="block">
                <span className="block mb-1 text-xs font-medium text-gray-700">
                  Name
                </span>
                <input
                  className="form-input"
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  required
                />
              </label>
              <label className="block">
                <span className="block mb-1 text-xs font-medium text-gray-700">
                  Your Email
                </span>
                <input
                  className="form-input"
                  type="email"
                  name="email"
                  placeholder="Ex. james@bond.com"
                  inputMode="email"
                  required
                />
              </label>
              <label className="block">
                <span className="block mb-1 text-xs font-medium text-gray-700">
                  Create a password
                </span>
                <input
                  className="form-input"
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  required
                />
              </label>
              <input
                type="submit"
                className="w-full btn btn-primary btn-lg"
                value="Sign Up"
              />
            </form>
            <div className="my-2 text-center">
              <Link
                to="/login"
                className="text-sm text-gray-700 underline hover:text-purple-700"
              >
                Already have an account
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
};

export default SignUp;