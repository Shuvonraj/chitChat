import React, { useState } from 'react';
import { AiFillEyeInvisible } from 'react-icons/ai'
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import { Link,useNavigate } from 'react-router-dom';







const Registration = () => {

  const auth = getAuth();
  const Navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [fullName, setFullNamee] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [fullNameError, setFullNameeError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };
  const handlefullName = (e) => {
    setFullNamee(e.target.value);
    setFullNameeError('');
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
    if (!fullName) {
      setFullNameeError('name bol')
    }
    if (!password) {
      setPasswordError('password koi?')
    }

    if (email && fullName && password && (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {

      createUserWithEmailAndPassword(auth, email, password).then(() => {
        toast.success('Verify your email');
        sendEmailVerification(auth.currentUser)
        .then(() => {
          console.log('verify mail');
          setEmail('');
          setFullNamee('');
          setPassword('');
          n=Navigate('/login')
        });
      }).catch((error) => {
        if (error.code.includes('auth/email-already-in-use')) {

          setEmailError('this email already used');
        }
      })

      





    }
  }
  return (
    <>
      <section className='flex lg:justify-between lg:mx-0 mx-auto w-screen text-center lg:text-left overflow-x-hidden '>
        <ToastContainer theme="dark" position="top-center" />
        <div className='lg:w-2/4 w-[8977px] lg:ml-[193px] mt-[99px] lg:mt-[225px]  font-nunito '>
          <div className='font-bold lg:px-0 px-5 text-2xl lg:text-4xl'>Get started with easily register</div>
          <div className='lg:text-xl text-lg	pt-[13px] opacity-50 text-black font-normal'>Free register and you can enjoy it</div>
          <div className='mt-[62px] relative'>
            <input onChange={handleEmail} placeholder='Email' value={email} className='border-2 focus:outline-none   lg:w-96 py-6 px-14 border-[#11175D]  border-opacity-25 rounded-lg' type="text " />
            <p className='absolute  top-[-12px] bg-[#ffffffff] px-3 lg:left-6 left-14  '><span className='opacity-50 font-nunito tracking-widest'>Email Address</span> </p>
          </div>
          {
            emailError && <p className='bg-red-500 text-white w-44 text-center lg:mx-0  mx-auto lg:w-96 rounded-sm py-2'>{emailError}</p>
          }
          <div className='mt-[56px] relative'>
            <input onChange={handlefullName} placeholder='Your Name' value={fullName} className='border-2 focus:outline-none   lg:w-96 py-6 px-14 border-[#11175D]  border-opacity-25 rounded-lg' type="text " />
            <p className='absolute  top-[-12px] bg-[#ffffffff] px-3 lg:left-6 left-14  '><span className='opacity-50 font-nunito tracking-widest'>Full Name</span> </p>
            {
              fullNameError && <p className='bg-red-500 text-white text-center mx-auto lg:mx-0 w-44 lg:w-96 rounded-sm py-2'>{fullNameError}</p>
            }
          </div>


          <div className='mt-[56px] relative'>
            <input onChange={handlePassword} value={password} placeholder='******' className='border-2  focus:outline-none lg:w-96 py-6 px-14 border-[#11175D]  border-opacity-25 rounded-lg' type="password" />
            <div className='absolute left-[350px] top-7 '>
              <AiFillEyeInvisible />
            </div>
            <p className='absolute  top-[-12px] bg-[#ffffffff] px-3 lg:left-6 left-14 '><span className='opacity-50 font-nunito tracking-widest'>Password</span> </p>


            {
              passwordError && <p className='bg-red-500 text-white text-center mx-auto lg:mx-0 w-44  lg:w-96 rounded-sm py-2'>{passwordError}</p>
            }

          </div>

          <button onClick={handleSubmit} className=' active:scale-90 lg:px-[158px] px-[124px]  lg:w-96 font-nunito font-semibold text-white hover:bg-[#5f35f5a9] bg-[#5F35F5] py-5 mt-[52px] rounded-[86px] '>Sign up</button>


          <p className=' font-nunito text-center lg:w-96 mt-6 pb-8 '>Already  have an account ? <Link to='/login' className=' font-nunito text-[#EA6C00] font-semibold '>Sign In</Link></p>
        </div>


        <div className='lg:w-2/4 w-full'>
          <img className='w-full hidden lg:block  h-screen object-cover' src='src\assets\rightImg.jpg' alt="" srcset="" />

        </div>
      </section>
    </>
  )
}

export default Registration