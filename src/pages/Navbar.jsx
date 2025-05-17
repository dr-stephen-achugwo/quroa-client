import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { CgProfile } from "react-icons/cg";
import { Tooltip } from "react-tooltip";
import Swal from "sweetalert2";



const Navbar = () => {

  const { user, logOut } = useContext(AuthContext)
  const navigate = useNavigate()



  const handleLogOut = () => {
    logOut()
      .then(() => {
       
       Swal.fire({
                     title: "Logout Successfully ",
                     icon: "success",
                     draggable: true
                   });
      })
      navigate('/login')
      .catch(error => {
        alert(error)
      })
  }
  const withUser = <>
    <li><NavLink  className={`px-2`} to='/Recommendations-For-Me'>Recommendations For Me</NavLink></li>
    <li><NavLink  className={`px-2`} to='/my-queries'>My Queries</NavLink></li>
    <li><NavLink  className={`px-2`} to='/My-recommendations'>My recommendations</NavLink></li>

  </>

  const mainList = <>
    <li><NavLink className={`px-2`}   to='/'>Home</NavLink></li>
    <li><NavLink  className={`px-2`} to='/queries'>Queries</NavLink></li>
    <li><NavLink  className={`px-2`} to='/aboutQueries'>About Queries</NavLink></li>
  </>
  return (
    <div>
     <div className="navbar   bg-[#EF4444] text-white md:px-4">

        <div className="navbar-start items-center gap-2 lg:gap-0 ">
          <div className="dropdown pt-1 ">
            <div tabIndex={0} role="button" className=" lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#EF4444] z-20 font-semibold rounded-box mt-3 w-52 p-2 shadow">
              {mainList}

              {user?.email && withUser}

            </ul>
          </div>
          <div className="flex items-center gap-1 md:gap-0">
          
            <a className="text-xl lg:text-[24px] font-bold"><span className="font-serif">Q</span>uora BD</a>
          
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-1 font-semibold px-1">
            {mainList}

            {user?.email && withUser}



          </ul>
        </div>
        <div className="navbar-end  gap-2">
          {
            user?.photoURL ? <img
              className='w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] z-40 rounded-full'
              src={user?.photoURL}
              alt=""
              data-tooltip-id="my-tooltip" data-tooltip-content={`${user?.displayName}`}


            /> : <CgProfile color='white' size={40} />

          }

          <Tooltip className='z-40' id="my-tooltip" />
          {user?.email && <button className="py-1 md:py-1 px-2 md:px-3 rounded-sm  text-md lg:text-lg  font-semibold border-white border-[1px] text-white" onClick={handleLogOut}>log-out</button>}
          {!user && <NavLink to='/login'><button className="py-1 md:py-1 px-2 md:px-4 rounded-sm  text-md lg:text-lg  font-semibold border-white border-[1px] text-white">Log-in</button></NavLink>}
          

        </div>
      </div>
    </div>
  );
};

export default Navbar;