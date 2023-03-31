import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../components/Firebase/Firebase';


export const SignUpModal = () => {
    let userData = ''
    const navigate = useNavigate();
    const [values, setValues] = useState({
        FullName:"",
        Email:"",
        Password:""
    })

    const submitHandler = (event) =>{
        event.preventDefault();
        createUserWithEmailAndPassword(auth,values.Email,values.Password).then(
            async(res)=>{
                userData = res.user
                await updateProfile(userData,{
                    displayName:values.FullName
                })
                navigate('/')
                console.log(userData)
            }
        ).catch(err=>console.log(err))
    }

  const [show, setShow] = useState(true);
  const showHide = () => {
    setShow(!show);
  };
  return (
    <div>
      {show ? (
        <div className="w-full h-full absolute z-10 bg-gradient-to-tr  from-black top-0 flex justify-center items-center">
          <div className="h-[520px] w-[448px] border-2 rounded-lg bg-white px-5">
            <div className="header flex justify-between items-center ">
              <div className="header-text">
                <h2 className="text-3xl my-4 font-medium">Sign Up</h2>
              </div>
              <div className="icon">
                <i className="bx bx-x my-4 text-2xl" onClick={showHide}></i>
              </div>
            </div>
            <div className="Form ">
              <form className="flex flex-col w-[400px] h-12 gap-8">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border-slate-500 border-2 py-3 px-3 rounded-md outline-none text-xl"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="border-slate-500 border-2 py-3 px-3 rounded-md outline-none text-xl"
                />
                <input
                  type="text"
                  placeholder="Password"
                  className="border-slate-500 border-2 py-3 px-3 rounded-md outline-none text-xl"
                />
                <div className="terms-condition flex gap-2">
                  <div className="checked ">
                    <input type="checkbox" />
                  </div>
                  <div>
                    <span>
                      I agree to Zomato's Terms of Service.Privacy and Content
                      Policies
                    </span>
                  </div>
                </div>
                <div className="button bg-slate-300 rounded-md">
                  <button className="w-[400px] h-12 text-gray-600" onClick={submitHandler}>
                    Create Account
                  </button>
                </div>
                <div className="already-account">
                  <div>
                    <span>
                      Already have an account?{" "}
                      <Link className="text-gray-600">Log In</Link>
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
