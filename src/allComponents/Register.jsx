/* eslint-disable no-unused-vars */

import { useContext, useState } from 'react';
import { FaRegEyeSlash } from 'react-icons/fa';
import { IoEyeOutline } from 'react-icons/io5';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';
import Swal from 'sweetalert2';
import signDesgin from '../../src/animation2/signDesign.svg'
import { Zoom } from 'react-reveal';
import Helmets from '../sharedComponent/Helmets';

const Register = () => {

  //pass show
  const [showPass, setShowPass] = useState(false);
  const handlePassShow = () => setShowPass(!showPass)
  const [passError,setPassError] = useState('')
  const navigate = useNavigate();
  const location = useLocation()

  const { regsiter, user, setUser } = useContext(AuthContext)
  console.log(user)
  const handleRegister = (e) => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    const conPassword = form.conPassword.value;
    if(password !== conPassword){
      setPassError('password and Conpassword must be some')
      return
    }

    //password validation
    const regexPass =/^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if(!regexPass.test(password)){
      setPassError('Password at least 6 charcter and upper & loweer letter')
      return;
    }


    regsiter(email, password)
      .then(users => {
        setUser(users.user)
        updateProfile(auth.currentUser, { displayName: name, photoURL: photo })
          .then(res => {

            
              setUser({ ...users.user, displayName: name, photoURL: photo })
            Swal.fire({
              title: "Registration Successfully ",
              icon: "success",
              draggable: true
            });

            e.target.reset()
            navigate(location?.state ? location.state : '/')
            

          })
          .catch(error => {
            Swal.fire({
              icon: "error",
              title: "You are already Registration  ",
              text: "Please login to stay with Us",
              
            });

          })

      })
      .catch(error => {
        Swal.fire({
          icon: "error",
          title: "You are already Registration  ",
          text: "Please login to stay with Us",
          
        });
      })
  }
  return (
    <>
    <Helmets heading='Sign Up'></Helmets>
    <div className='grid lg:grid-cols-6 gap-8 items-center w-11/12 mx-auto  my-12'>
      <Zoom>
      <div className= 'lg:w-10/12 lg:col-span-2 mx-auto'>
    
    <img className='w-full' src={signDesgin} alt="" />
  </div>
      </Zoom>
     <Zoom>
     <div className="w-full lg:col-span-4 lg:w-11/12 mx-auto  ">
        <div className=" ">


          <div className=" bg-base-100 w-full  shadow-2xl">
            <form onSubmit={handleRegister} className="card-body w-full">
              <h2 className='font-bold text-xl lg:text-2xl text-[#EF4444]  text-center'>Sign Up Here To  Free</h2>
              <div className='md:flex  w-full gap-2'>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="enter your name" className="input input-bordered" required />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              </div>
             
             <div className='md:flex gap-2'>
             <div className="form-control w-full relative">
                <div onClick={handlePassShow} className='absolute right-3 dark:text-black top-12'>
                  {
                    showPass ? <FaRegEyeSlash /> : <IoEyeOutline />

                  }
                </div>
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type={`${showPass ? 'text' : 'password'}`} name='password' placeholder="password" className="input input-bordered" required />
                

              </div>
              <div className="form-control w-full relative">
                <div onClick={handlePassShow} className='absolute right-3 dark:text-black top-12'>
                  {
                    showPass ? <FaRegEyeSlash /> : <IoEyeOutline />

                  }
                </div>
                <label className="label">
                  <span className="label-text">Confrom Password</span>
                </label>
                <input type={`${showPass ? 'text' : 'password'}`} name='conPassword' placeholder="Confrom password" className="input input-bordered" required />
                <p className='text-red-600 mt-3'>{passError}</p>

              </div>
             </div>
             <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type='text' name='photo' placeholder="photo url" className="input input-bordered" required />
              </div>

              <div className="form-control  mt-3">
                <button className=" rounded-sm py-2 bg-[#EF4444]  text-white">Sign Up</button>
              </div>
              <div className='text-md text-center dark:text-black  my-3'>Already have an account? please <Link className='text-[#EF4444] ' to='/login'>Login</Link> </div>
            </form>
          </div>

        </div>
      </div>
      </Zoom>    
    </div>
    </>
  );
};

export default Register;