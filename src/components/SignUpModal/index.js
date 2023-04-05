import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../components/Firebase/Firebase';
import { Formik, useFormik } from "formik";
import { signUpSchema } from "../Common/schemas";

const initialData = {
  fullName: "",
  Email: "",
  Password: "",
  checkBox:""
}

export const SignUpModal = () => {
  const [showSignUp, setShowSignUp] = useState(true);

  let userData = ''
  const navigate = useNavigate();

  const {values, errors, handleBlur, handleChange, handleSubmit, touched} = useFormik({
    initialValues:initialData,
    validationSchema:signUpSchema,
    onSubmit:(values,action)=>{
      action.resetForm();
    }
  });

  const signUpHandler = (e) => {
    e.preventDefault();
    console.log("hello i am from ract js");

    createUserWithEmailAndPassword(auth, values.Email, values.Password).then(
      async (res) => {
        userData = res.user
        await updateProfile(userData, {
          displayName: values.fullName
        })
        navigate('/')
        console.log(userData)
      }
    ).catch(err => console.log(err))

  }
  
  const showHideSignUp = () => {
    setShowSignUp(!showSignUp);
  };



  return (
    <div>
      {showSignUp ? (
        <div className="w-full h-full absolute z-10 bg-gradient-to-tr  from-black top-0 flex justify-center items-center">
          <div className="h-[520px] w-[448px] border-2 rounded-lg bg-white px-5">
            <div className="header flex justify-between items-center ">
              <div className="header-text">
                <h2 className="text-3xl my-4 font-medium">Sign Up</h2>
              </div>
              <div className="icon">
                <i className="bx bx-x my-4 text-2xl" onClick={showHideSignUp}></i>
              </div>
            </div>
            <div className="Form ">
              <form className="flex flex-col h-12 gap-8" onSubmit={signUpHandler}>
                <input 
                  type="text"
                  autoComplete="off"
                  name="fullName"
                  placeholder="Full Name"
                  value={values.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full border-slate-500 border-2 py-3 px-3 rounded-md outline-none text-xl"
                />
                {errors.fullName && touched.fullName ? <p>{errors.fullName}</p> : null}
                <input 
                  type="email"
                  autoComplete="off"
                  name="Email"
                  placeholder="Email"
                  value={values.Email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full border-slate-500 border-2 py-3 px-3 rounded-md outline-none text-xl"
                />
                {errors.Email && touched.Email ? <p>{errors.Email}</p> : null}
                <input 
                  type="password"
                  autoComplete="off"
                  name="Password"
                  placeholder="Password"
                  value={values.Password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full border-slate-500 border-2 py-3 px-3 rounded-md outline-none text-xl"
                />
                {errors.Password && touched.Password ? <p>{errors.Password}</p> : null}
                <div className="terms-condition flex gap-2">
                  <div className="checked ">
                    <input type="checkbox" 
                      name="checkBox"
                      autoComplete="off"
                      value={values.checkBox}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.checkBox && touched.checkBox ? <p>{errors.checkBox}</p> : null}
                  </div>
                  <div>
                    <span>
                      I agree to Zomato's Terms of Service.Privacy and Content
                      Policies
                    </span>
                  </div>
                </div>
                <div className="button bg-slate-300 rounded-md">
                  <button type="submit" className="w-[400px] h-12 text-gray-600" onSubmit={handleSubmit}>
                    Create Account
                  </button>
                </div>
                <div className="already-account">
                  <div>
                    <span>
                      Already have an account?
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
  )
};


