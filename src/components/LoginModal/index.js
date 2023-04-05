import { useState } from "react";
import { Link } from "react-router-dom";
import { SignUpModal } from "../SignUpModal";
import { useFormik } from "formik";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const initialData = {
    Email: "",
    Password: "",
}

function LoginModal() {
    const [showLogIn, setShowLogIn] = useState(true);
    const navigate = useNavigate()

    const showHideLogIn = () => {
        setShowLogIn(!showLogIn);
    };

    const {values, errors, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues:initialData,
        onSubmit: (values) =>{
            console.log(values);
        },
    })


    const LogInHandler = (e) => {
        e.preventDefault();
        const auth = getAuth();

        signInWithEmailAndPassword(auth,values.Email, values.Password)
        .then((userCredential)=>{
            const user = userCredential.user;
            navigate("/")

        })
        .catch((error)=>{
            console.log(error);
        })
    }

    return (
        <div>
            {showLogIn ?
                <div className="w-full h-full absolute z-10 bg-gradient-to-tr  from-black top-0 flex justify-center items-center">
                    <div className="h-[520px] w-[448px] border-2 rounded-lg bg-white px-5">
                        <div className="header flex justify-between items-center ">
                            <div className="header-text">
                                <h2 className="text-3xl my-4 font-medium">Log In</h2>
                            </div>
                            <div className="icon">
                                <i className="bx bx-x my-4 text-2xl cursor-pointer" onClick={showHideLogIn}></i>
                            </div>
                        </div>
                        <div className="Form ">
                            <form className="flex flex-col h-12 gap-8" onSubmit={LogInHandler}>
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
                                <div className="button bg-slate-300 rounded-md">
                                    <button type="submit" className="w-[400px] h-12 text-gray-600" onSubmit={handleSubmit}>
                                        Log In
                                    </button>
                                </div>
                                <div className="already-account">
                                    <div>
                                        <span>
                                            New to Zomato?
                                            <Link className="text-gray-600">Create Account</Link>
                                        </span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div> : null}
        </div>
    )
}

export default LoginModal