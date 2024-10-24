import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FiLogIn } from "react-icons/fi";

const NavBar = () => {
    const { user, logOutUser } = useAuth();

    const handleLogOut = () => {
        logOutUser()
            .then(() => console.log("logout success"))
            .catch((err) => console.log(err));
    };

    return (
        <div className="shadow-xl bg-gray-100">
            <div className="navbar container mx-auto">
                <div className="flex-1">
                    <Link to="/" className="">
                        soloShpere
                    </Link>
                </div>
                <div className="flex-none">
                    <ul className="menu-horizontal items-center gap-4 font-semibold px-2">
                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        {!user && (
                            <li>
                                <Link
                                    className="bg-[#252525] text-white flex items-center gap-2 py-2 px-5 rounded-md "
                                    to="/login"
                                >
                                    <FiLogIn />
                                    <span>Login</span>
                                </Link>
                            </li>
                        )}
                    </ul>
                    {user && (
                        <div className="dropdown dropdown-end z-50">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost btn-circle avatar"
                            >
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src={user?.photoURL}
                                    />
                                </div>
                            </div>
                            {/* <p>{user?.displayName}</p> */}
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                            >
                                <li>
                                    <Link
                                        to="/addJobs"
                                        className="justify-between"
                                    >
                                        Add Job
                                    </Link>
                                </li>
                                <li>
                                    <Link to="myPostedJobs">
                                        My Posted Jobs
                                    </Link>
                                </li>
                                <li>
                                    <Link to="myBids">My Bids</Link>
                                </li>
                                <li>
                                    <Link to="/bidRequest">Bid Requests</Link>
                                </li>
                                <li className="mt-2">
                                    <button
                                        onClick={handleLogOut}
                                        className="bg-gray-200 block text-center"
                                    >
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NavBar;
