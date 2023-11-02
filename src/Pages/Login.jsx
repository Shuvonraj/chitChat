import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { userLoginInfo } from '../UserSlice';



const Login = () => {
  const dispatch = useDispatch();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const Navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordError('');
  };

  const handleSubmit = () => {
    if (!email) {
      setEmailError('mail de')
    }
    else {
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        setEmailError('vaild mail dao')
      }
    }

    if (!password) {
      setPasswordError('password koi?')
    }
    if (email && password && (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {

      signInWithEmailAndPassword(auth, email, password)
        .then((user) => {
          console.log(user.user);
          toast.success('Login Done');
          dispatch(userLoginInfo(user.user))
          localStorage.setItem('userLoginInfo', JSON.stringify(userLoginInfo(user)))
          setTimeout(() => {
            Navigate('/')
          }, 3000);
        })
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode.includes('auth/invalid-login-credentials')) {

            setEmailError('User or password not matched');
          }
        });
    }
  }

  const handleGoogle = () => {
    signInWithPopup(auth, provider)
      .then(() => {
       Navigate('/');
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        console.log(errorCode);
      });
  }
  return (
    <>
      <section className='flex lg:justify-between lg:mx-0 mx-auto w-screen text-center lg:text-left overflow-x-hidden '>
        <ToastContainer theme="dark" position="top-center" />
        <div className='lg:w-2/4 w-[8977px] lg:ml-[193px] mt-[99px] lg:mt-[225px]  font-nunito '>
          <div className='font-bold lg:px-0 px-5 text-2xl pb-[30px] lg:text-4xl'>Login to your account!</div>
          <div onClick={handleGoogle} className='flex border cursor-pointer rounded-lg border-opacity-30 pl-[30px] pr-[43px] w-[260px] py-[23px] '>
            <div className='opacity-100'> <img className='opacity-100' src="src\assets\Group 1.png" alt="" srcset="" w-100 h-100 /></div>
            <p className='pl-2 opacity-100'>Login with Google</p>


          </div>
          <div className='mt-[62px] relative'>
            <input onChange={handleEmail} placeholder='Youraddres@email.com' className='border-b focus:outline-none   lg:w-96 py-6   border-b-4 ' type="text " />
            <p className='absolute   top-[-19px] bg-[#ffffffff]   '><span className='opacity-50 font-nunito tracking-widest'>Email Address</span> </p>
          </div>
          {
            emailError && <p className='bg-red-500 text-white w-44 text-center lg:mx-0  mx-auto lg:w-96 rounded-sm py-2'>{emailError}</p>
          }

          <div className='mt-[56px] relative'>
            <input onChange={handlePassword} placeholder='Enter your password' className='border-b focus:outline-none   lg:w-96 py-6   border-b-4 ' type="password" />
            <p className='absolute   top-[-19px] bg-[#ffffffff]'><span className='opacity-50 font-nunito tracking-widest'>Password</span> </p>
          </div>
          {
            passwordError && <p className='bg-red-500 text-white text-center mx-auto lg:mx-0 w-44  lg:w-96 rounded-sm py-2'>{passwordError}</p>
          }
          <button onClick={handleSubmit} className='lg:px-[158px] px-[124px]  lg:w-99 font-nunito font-semibold text-white hover:bg-[#5f35f5a9] bg-[#5F35F5] py-5 mt-[52px] rounded-lg '>Login to Continue</button>


          <p className=' font-nunito text-center lg:w-96 mt-6 pb-3 '>Don’t have an accoun ? <Link to='/registration' className=' font-nunito text-[#EA6C00] font-semibold '>Sign Up</Link></p>
          <p className=' font-nunito text-center lg:w-96  pb-8 '> <Link to='/forgotpassword'>Forgot Password</Link></p>
        </div>


        <div className='lg:w-2/4 w-full'>
          <img className='w-full hidden lg:block  h-screen object-cover ' src='src\assets\login.png' alt="" srcset="" />

        </div>
      </section>
    </>
  )
}

export default Login