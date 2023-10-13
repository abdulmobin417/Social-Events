import { Link, useNavigate } from "react-router-dom";
import banner from "../../assets/banner.png";
import { useContext, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { IoLogoJavascript } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const { createUser, handleUserName } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;
    // console.log(name, email, password, terms);
    const regex = /^(?=.*[!@#$%^&*()_+{}\\[\]:;<>,.?~\\-]).+$/;

    setError("");

    if (!name) {
      toast.error("Enter a Name First", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    } else if (!email) {
      toast.error("Enter an Email please!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    } else if (!password) {
      toast.error("Password is not given!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    } else if (password.length < 6) {
      setError("Password can't be less than 6");
      return;
    } else if (!/.*[A-Z].*/.test(password)) {
      setError("Password have must one capital letter");
      return;
    } else if (!regex.test(password)) {
      setError("Password have must one special character");
      console.log("Yes");
      return;
    } else if (!terms) {
      toast.warn("Please accept our terms and conditions", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    createUser(email, password)
      .then((res) => {
        toast.success("Registration Successful!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        // update profile
        updateProfile(res.user, {
          displayName: name,
        })
          .then(() => {
            handleUserName(name)
            navigate("/");
          })
          .catch();
      })
      .catch((error) => {
        console.log(error.message);
        if (error.message.match("email-already-in-use")) {
          toast.error("Email already in use!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      });
  };

  return (
    <div className="grid md:grid-cols-2">
      <div className="bg-[#1D9BF0] hidden md:block">
        <div className="px-16 flex flex-col justify-center items-center pt-14">
          <div className="mb-10">
            <h1 className="text-[#FFF] text-4xl xl:text-6xl font-bold mb-6">
              See what
              <br></br> {`It's happening now`}
            </h1>
            <p className="text-[#FFF] text-2xl xl:text-3xl font-semibold">
              Sign Up for Social Events today
            </p>
          </div>
          <img className="max-w-[630px] px-8" src={banner} alt="" />
        </div>
      </div>
      <div className="bg-[#FFF] pt-14 px-8 lg:px-20 xl:px-[120px] pb-14">
        <div className="flex justify-between items-center">
          <IoLogoJavascript className="text-[60px] text-[#1D9BF0]" />
          <p className="hidden sm:block">
            Already have an account?{" "}
            <Link className="text-[#1D9BF0] font-semibold" to="/login">
              Login
            </Link>
          </p>
        </div>
        <div className="mt-12 px-2 ">
          <h1 className="text-[#212121] text-5xl xl:text-6xl font-semibold mb-12">
            Connect with us
          </h1>
          <p className="text-[#757575] text-2xl font-semibold mb-5">
            Register to Social Events
          </p>
          <form className="space-y-5" onSubmit={handleRegister}>
            <input
              type="text"
              name="name"
              className="w-full bg-[#EEEEEE] px-6 py-4 rounded placeholder:text-[#757575] placeholder:text-sm"
              placeholder="Enter Your Name"
            />
            <input
              type="email"
              name="email"
              className="w-full bg-[#EEEEEE] px-6 py-4 rounded placeholder:text-[#757575] placeholder:text-sm"
              placeholder="Enter Your Email"
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="w-full bg-[#EEEEEE] px-6 py-4 rounded placeholder:text-[#757575] placeholder:text-sm"
                placeholder="Enter Your Password"
              />
              <span
                className="absolute top-1/2 -translate-y-1/2 right-12"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>
            <div>
              {error ? (
                <>
                  <p className="text-red-500">{error}</p>
                </>
              ) : (
                ""
              )}
            </div>
            <div className="">
              <input type="checkbox" name="terms" id="terms" className="mr-2" />
              <label htmlFor="terms" className="text-[#212121] text-sm">
                Accept our terms and conditions
              </label>
            </div>
            <div className="pt-8">
              <input
                className="bg-[#1D9BF0] cursor-pointer text-[#FFF] w-full py-4 font-semibold rounded"
                type="submit"
                value="Connect Now"
              />
            </div>
          </form>
          <div>
            <p className="block sm:hidden mt-4">
              Already have an account?{" "}
              <Link className="text-[#1D9BF0] font-semibold" to="/signIn">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
