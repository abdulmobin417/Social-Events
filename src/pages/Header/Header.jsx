import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import logo from "../../assets/logo.png";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import pic from "../../assets/user.png";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const { user, logOut, userName } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center px-6 pb-3 rounded">
        <div className="flex items-center gap-2 text-2xl font-bold">
          <img className="max-w-[150px]" src={logo} alt="" />
        </div>
        <div className="text-lg gap-x-2 hidden lg:flex items-center">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#1D9BF0] px-4 py-2"
                : "px-4 py-2"
            }
          >
            Home
          </NavLink>
          {user && (
            <>
              <NavLink
                to="/events"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#1D9BF0] px-4 py-2"
                    : "px-4 py-2"
                }
              >
                Events
              </NavLink>
              <NavLink
                to="/profile"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#1D9BF0] px-4 py-2"
                    : "px-4 py-2"
                }
              >
                Profile
              </NavLink>
            </>
          )}
          {user ? (
            <div className="flex items-center gap-2">
              <details className="dropdown">
                <summary className="m-1 btn bg-[#FFF] border-0 hover:bg-[#FFF]">
                  {user?.photoURL ? (
                    <img
                      className="w-10 rounded-full"
                      src={user.photoURL}
                      alt=""
                    />
                  ) : (
                    <img className="w-10" src={pic} alt="" />
                  )}
                </summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-36 absolute right-0">
                  <div className="text-center">
                    {user.displayName || userName}
                  </div>
                  <li className="flex items-center">
                    <NavLink to="/login">
                      <button
                        onClick={handleSignOut}
                        className="px-4 py-2 text-white bg-[#1D9BF0] rounded-md"
                      >
                        Sign Out
                      </button>
                    </NavLink>
                  </li>
                </ul>
              </details>
            </div>
          ) : (
            <div className="flex gap-x-6">
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-white bg-[#1D9BF0] rounded-md"
                    : "text-black bg-[#e0e3e7] rounded-md"
                }
              >
                <button className="px-4 py-2">Login</button>
              </NavLink>
            </div>
          )}
        </div>

        {/* Mobile design navbar */}
        <div className="lg:hidden">
          {!user ? (
            <div className="block">
              <details className="dropdown">
                <summary className="m-1 btn bg-[#FFF] border-0 hover:bg-[#FFF]">
                  <button onClick={() => setMenu(!menu)} className="relative">
                    {menu ? (
                      <RxCross1 className="text-2xl" />
                    ) : (
                      <RxHamburgerMenu className="text-2xl" />
                    )}
                  </button>
                </summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-36 absolute right-0">
                  <li className="flex items-center">
                    <NavLink
                      to="/"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "text-[#1D9BF0] px-4 py-2"
                          : "px-4 py-2"
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="flex items-center">
                    <NavLink to="/login">
                      <button className="px-4 py-2 text-white bg-[#1D9BF0] rounded-md">
                        Login
                      </button>
                    </NavLink>
                  </li>
                </ul>
              </details>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <details className="dropdown">
                <summary className="m-1 btn bg-[#FFF] border-0 hover:bg-[#FFF]">
                  {user.photoURL ? (
                    <img
                      className="w-10 rounded-full"
                      src={user.photoURL}
                      alt=""
                    />
                  ) : (
                    <img className="w-10" src={pic} alt="" />
                  )}
                </summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-36 absolute right-0">
                  <div className="text-center">{user.displayName}</div>
                  <li className="flex items-center">
                    <NavLink
                      to="/profile"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "text-[#1D9BF0] px-4 py-2"
                          : "px-4 py-2"
                      }
                    >
                      Profile
                    </NavLink>
                  </li>
                  <li className="flex items-center">
                    <NavLink
                      to="/events"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "text-[#1D9BF0] px-4 py-2"
                          : "px-4 py-2"
                      }
                    >
                      Events
                    </NavLink>
                  </li>
                  <li className="flex items-center">
                    <NavLink to="/login">
                      <button
                        onClick={handleSignOut}
                        className="px-4 py-2 text-white bg-[#1D9BF0] rounded-md"
                      >
                        Sign Out
                      </button>
                    </NavLink>
                  </li>
                </ul>
              </details>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
