import { useContext } from "react";
import userLogo from "../../assets/user.png";
import { AuthContext } from "../../providers/AuthProvider";

const Profile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [first, second] = user.displayName.split(" ");
  const handleSubmit = (e) => {
    e.preventDefault();
    const firstName = e.target.firstname.value;
    const lastName = e.target.lastName.value;
    let photoUrl = e.target.photoUrl.value;
    let name = firstName + " " + lastName;
    if (!firstName && !lastName) {
      name = user.displayName;
    }
    if (!photoUrl) {
      photoUrl = user.photoURL;
    }
    updateUserProfile(name, photoUrl);
  };
  return (
    <div className="container mx-auto flex justify-center">
      <div className="px-8 my-20 ">
        <div className="max-w-[600px]">
          <h1 className="text-2xl font-medium">User Profile</h1>
          <p className="text-sm text-gray-500 mb-4">
            Manage your details, view your tier status and change your password
          </p>
        </div>
        <div className="lg:flex gap-6">
          <div className="w-[300px] h-[360px] border-2 border-dashed flex gap-4 flex-col items-center justify-center rounded-xl mb-8 lg:mb-0">
            {user.photoURL ? (
              <img
                className="max-w-[120px] rounded-full"
                src={user.photoURL}
                alt=""
              />
            ) : (
              <img
                className="max-w-[120px] rounded-full"
                src={userLogo}
                alt=""
              />
            )}
            <p className="text-2xl font-semibold">{user.displayName}</p>
            <p className="text-gray-500 font-semibold">{user.email}</p>
          </div>
          <div className="col-span-2 border-2 border-dashed p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">General Information</h3>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-wrap md:flex-nowrap gap-4 mb-6">
                <div className="flex flex-col gap-2">
                  <label
                    className="text-lg text-gray-500 font-medium"
                    htmlFor="firstName"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstname"
                    placeholder={first}
                    className="input input-bordered input-info w-full"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    className="text-lg text-gray-500 font-medium"
                    htmlFor="last-Name"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last-Name"
                    name="lastName"
                    placeholder={second}
                    className="input input-bordered input-info w-full max-w-[250px]"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  className="text-lg text-gray-500 font-medium"
                  htmlFor="photo-url"
                >
                  Photo URL
                </label>
                <input
                  type="text"
                  id="photo-url"
                  name="photoUrl"
                  placeholder="Type here"
                  className="input input-bordered input-info w-full max-w-[680px]"
                />
              </div>
              <div>
                <input
                  className="bg-[#1D9BF0] text-[#FFF] w-full py-3 mt-6 rounded-lg"
                  type="submit"
                  value="Update"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
