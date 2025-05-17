/* eslint-disable react/no-unescaped-entities */

import { useContext, useState } from 'react';
import { FaRegEyeSlash } from 'react-icons/fa';
import { IoEyeOutline } from 'react-icons/io5';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import loginDesgin from '../../src/animation2/loginDesgin.svg'
import { Zoom } from 'react-reveal';
import Helmets from '../sharedComponent/Helmets';


const Login = () => {
  //pass show
  const [showPass, setShowPass] = useState(false);
  const handlePassShow = () => setShowPass(!showPass)
  const { setUser, login, googleLogin } = useContext(AuthContext)
  
  const navigate = useNavigate()
  const location = useLocation()

console.log(location.state)
  const handleGoogle = () => {

    googleLogin()
      .then(users => {
        setUser(users.user)
       Swal.fire({
                     title: "Login  Successfully With Google ",
                     icon: "success",
                     draggable: true
                   });
        navigate(location?.state ? location.state : '/')
      })
      .catch(error => {
        alert(error)
      })
  }
  const handleLogin = (e) => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const passweord = form.password.value;

    login(email, passweord)
      .then(users => {
        setUser(users.user)
         Swal.fire({
                      title: "Login Successfully ",
                      icon: "success",
                      draggable: true
                    });
        navigate(location?.state ? location.state : '/')
        e.target.reset()

      })
      .catch(() => {
       toast.error('Login failed please try again')
      })
  }
  return (
 
 <>
 <Helmets heading='login'></Helmets>
 <div className='grid md:grid-cols-2 mx-auto items-center w-11/12'>
        <Zoom>
        <div className='md:11/12 mx-auto'>
        <img className='w-full' src={loginDesgin} alt="" />
        
      </div>
        </Zoom>
     <Zoom>
     <div className=" mx-auto w-full md:w-10/12  min-h-screen ">
        <div className=" ">

          <div className=" bg-base-100  shadow-xl">

            <form onSubmit={handleLogin} className="card-body">

              <h2 className='font-bold  capitalize font-sans text-2xl text-[#EF4444] text-center'>Login  Here </h2>


              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>

              <div className="form-control relative">
                <div onClick={handlePassShow} className='absolute right-3 dark:text-black top-12'>
                  {
                    showPass ? <FaRegEyeSlash /> : <IoEyeOutline />

                  }
                </div>
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type={`${showPass ? 'text' : 'password'}`} name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>

              </div>
              {/* {
                  passError && <p className='text-red-600 '>wrong Password</p>
                } */}


              <div className="form-control mt-4">
                <button className=" py-2 rounded-sm bg-[#EF4444]  text-white">Login </button>
              </div>

            </form>
            <div className="form-control  flex flex-col gap-3 mx-3">
              <button onClick={handleGoogle} className='btn md:text-sm lg:text-lg rounded-sm px-2  mb-6 w-11/12 mx-auto'> <img src="https://img.icons8.com/?size=30&id=17949&format=png&color=000000" alt="" /> countine with google</button>
              <div className='text-md text-center dark:text-black  mb-3 pb-3 px-6'>Don't have any account? please <Link className='text-[#EF4444] ' to='/register'>Register Now</Link> </div>

            </div>

          </div>
        </div>
      </div>
     </Zoom>
    

    </div> 
 </>
  );
};

export default Login;