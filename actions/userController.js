"use server";

import { getCollection } from "../lib/db.js";
import bcrypt from "bcrypt";
import { cookies } from "next/headers.js";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation.js";


function isAlphaNumeric(x) {
    const regex = /^[a-zA-Z0-9]*$/;
    return regex.test(x);
  }


export const register = async function (prevState, formData) {
   
  const errors = {};

  // getting user input
  const ourUser = {
    first_name: formData.get("first_name"),
    last_name: formData.get("last_name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
    role: formData.get("role"),
  };

  // converting input into string
  if (typeof ourUser.first_name != "string") ourUser.first_name = "";
  if (typeof ourUser.last_name != "string") ourUser.last_name = "";
  if (typeof ourUser.email != "string") ourUser.email = "";
  if (typeof ourUser.password != "string") ourUser.password = "";
  if (typeof ourUser.confirm_password != "string") ourUser.confirm_password = "";
  if (typeof ourUser.role != "string") ourUser.role = "";

  ourUser.first_name = ourUser.first_name.trim();
  ourUser.last_name = ourUser.last_name.trim();
  ourUser.password = ourUser.password.trim();
  ourUser.email = ourUser.email.trim();
  ourUser.confirm_password = ourUser.confirm_password.trim();

   // Validate the first_name
  if (ourUser.first_name.length < 3)
    errors.first_name = "Name must be at least three characters";
  if (ourUser.first_name.length > 30)
    errors.first_name = "Name must not be exceed 30 characters";
  if (!isAlphaNumeric(ourUser.first_name))
    errors.first_name = "Name only contains letters and numbers";
  if (ourUser.first_name == "")
    errors.first_name = "Please provide a valid name";

   // Validate the last_name
  if (ourUser.last_name.length < 3)
    errors.last_name = "Name must be at least three characters";
  if (ourUser.last_name.length > 30)
    errors.last_name = "Name must not be exceed 30 characters";
  if (!isAlphaNumeric(ourUser.last_name))
    errors.last_name = "Name only contains letters and numbers";
  if (ourUser.last_name == "")
    errors.last_name = "Please provide a valid name";

  
  // see if email is already exist
const userCollection = await getCollection("users");
const usernameInQuestion = await userCollection.findOne({email:ourUser.email})
if (usernameInQuestion){
  errors.email = "this email is already in use."
}

 // Validate the password
  if (ourUser.password.length < 2)
    errors.password = "Password must be at least six characters";
  if (ourUser.password.length > 30)
    errors.password = "Password must not be exceed 30 characters";
  if (ourUser.password == "")
    errors.password = "You must provide a valid Password";
  if(ourUser.confirm_password !== ourUser.password) errors.confirm_password = "Password do not match"

  if(ourUser.email == "") errors.email = "Please Enter Email";
  
   // Validate the role
  //  if (!["customer", "seller"].includes(ourUser.role)) {
  //   errors.role = "Please select a valid role (Customer or Seller)";
  // }

  if (errors.first_name || errors.last_name || errors.email || errors.password || errors.confirm_password) {
    return {
      errors: errors,
      success: false,
    };
  }

  //hash password first
  const salt = bcrypt.genSaltSync(10);
  ourUser.password = bcrypt.hashSync(ourUser.password, salt);
  ourUser.confirm_password = bcrypt.hashSync(ourUser.confirm_password, salt);

  // storing new user in database
  const usersCollection = await getCollection("users")
  const newUser = await usersCollection.insertOne(ourUser);
  const userId =  newUser.insertedId.toString();

 //create our JWT value
 const ourTokenValue = jwt.sign(
    {
      skyColor: "blue",
      userId: userId,
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
    },
    process.env.JWTSECRET
  );

  //log the user in by giving them a cookie.
  const storeCookie = await cookies()
  const Cookie = storeCookie.set("e-com", ourTokenValue, {
    httpOnly: true,
    sameSite: "strict",
    maxAge: 60 * 60 * 24,
    secure: true,
  });
  
  redirect('/login')

  // return {
  //   success: true
  // }
};

export const login = async function (prevState, formData) {

  const failObject = {
    success:false,
    message:"Invalid Credentials"}

  const ourUser = {
    email: formData.get("email"),
    password: formData.get("password")};

  if (typeof ourUser.email != "string") ourUser.email = "";
  if (typeof ourUser.password != "string") ourUser.password = "";

  const collection = await getCollection("users")
  const user = await collection.findOne({email:ourUser.email})
  if(!user){
    return failObject}

  const matchOrNot = bcrypt.compareSync(ourUser.password, user.password)
  if(!matchOrNot){
    return failObject
  }
    
  //create json web token (jwt) value 
  const ourTokenValue = jwt.sign(
    {
     userId: user._id,
      username: user.first_name + " " + user.last_name,
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
    },
    process.env.JWTSECRET
  );

  //log the user in by giving them a cookie.
  const storeCookie= await cookies()
  const Cookie = storeCookie.set("e-com", ourTokenValue, {
    httpOnly: true,
    sameSite: "strict",
    maxAge: 60 * 60 * 24,
    secure: true,
  });
  if(user.role == "customer"){
    return redirect("/")
  }
  if(user.role == 'seller'){
    return redirect('/sellerPage')
  }

};

export const logout = async function () {
 const deleteCookie = await cookies();
 const delCookie = deleteCookie.delete("e-com")
  redirect("/");
};
