import * as Yup from 'yup';

export const signUpSchema = Yup.object({
    fullName:Yup.string().min(2).max(25).required("please enter your Full Name"),
    Email:Yup.string().email().required("Please enter a valid Email"),
    Password:Yup.string().min(8).max(20).required("Please enter your password"),
    checkBox:Yup.boolean().oneOf([true],"You must accept the terms and conditions")
})