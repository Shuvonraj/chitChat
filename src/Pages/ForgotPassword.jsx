import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail, } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';

const ForgotPassword = () => {
    const auth = getAuth();
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');


    const handleButton = () => {
        if (!email) {
            setEmailError('mail de')
          }
          else {
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
              setEmailError('vaild mail dao')
            }
          }
        sendPasswordResetEmail(auth, email)
            .then(() => {
                toast.success('Reset Done');
                console.log('done');
            })
            .catch((error) => {
                const errorCode = error.code;
                console.log(errorCode);

            });
    }

    return (
        <div className='h-screen w-full bg-[#5F35F5] flex items-center justify-center '>
            <ToastContainer theme="dark" position="top-center" />
            <div className='bg-white p-20 rounded'>
                <h1 className='font-bold lg:px-0 px-5 text-2xl pb-[30px] lg:text-4xl'>Forgot Password</h1>
                <div className='mt-[62px] relative'>
                    <input onChange={(e) => setEmail(e.target.value)} placeholder='Youraddres@email.com' className='border-b focus:outline-none   lg:w-96 py-6   border-b-4 ' type="text " />
                    {
                        emailError && <p className='bg-red-500 text-white w-44 text-center lg:mx-0  mx-auto lg:w-96 rounded-sm py-2'>{emailError}</p>
                    }
                </div>
                <button onClick={handleButton} className=' active:scale-90 lg:px-[65px] px-[124px] mr-3  lg:w-30 font-nunito font-semibold text-white hover:bg-[#5f35f5a9] bg-[#5F35F5] py-5 mt-[52px] rounded'>Reset</button>
                <button className=' active:scale-90 lg:px-[65px] px-[124px]  lg:w-30 font-nunito font-semibold text-white hover:bg-[#5f35f5a9] bg-[#5F35F5] py-5 mt-[52px] rounded '><Link to='/login'>Back to login</Link></button>
            </div>
        </div>
    )
}

export default ForgotPassword