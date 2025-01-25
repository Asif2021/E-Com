// @ts-nocheck
"use server"

import { redirect } from "next/navigation";
import { getUserFromCookie } from "../lib/getUser";
import { ObjectId } from "mongodb";
import {getCollection} from '../lib/db'
// import cloudinary from 'cloudinary'


function isAlphaNumericWithBasics(text){
    const regex = /^[a-zA-Z0-9 .,*$]/
    return regex.test(text)
}

async function sharedProductLogic(formData, user) {
    const errors = {};
  
    const ourProduct = {
      name: formData.get("name"),
      description: formData.get("description"),
      price: formData.get("price"),
      category: formData.get("category"),
      seller: formData.get("seller"),
      stock: formData.get("stock"),
      author: ObjectId.createFromHexString(user.userId),
    };

    if (typeof ourProduct.name != "string") ourProduct.name = "";
    if (typeof ourProduct.description != "string") ourProduct.description = "";
    if (typeof ourProduct.price != "string") ourProduct.price = "";
    if (typeof ourProduct.category != "string") ourProduct.category = "";
    if (typeof ourProduct.seller != "string") ourProduct.seller = "";
    if (typeof ourProduct.stock != "string") ourProduct.stock = "";
  
    ourProduct.name = ourProduct.name.replace(/(\r\n|\n|\r)/g, " ");
    ourProduct.description = ourProduct.description.replace(/(\r\n|\n|\r)/g, " ");
    ourProduct.price = ourProduct.price.replace(/(\r\n|\n|\r)/g, " ");
    ourProduct.category = ourProduct.category.replace(/(\r\n|\n|\r)/g, " ");
    ourProduct.seller = ourProduct.seller.replace(/(\r\n|\n|\r)/g, " ");
    ourProduct.stock = ourProduct.stock.replace(/(\r\n|\n|\r)/g, " ");
  
    ourProduct.name = ourProduct.name.trim();
    ourProduct.description = ourProduct.description.trim();
    ourProduct.price = ourProduct.price.trim();
    ourProduct.category = ourProduct.category.trim();
    ourProduct.seller = ourProduct.seller.trim();
    ourProduct.stock = ourProduct.stock.trim();
  
    if (ourProduct.name.length < 3) errors.name = "Too short name: at least 3 characters";
    if (ourProduct.name.length > 25) errors.name = "Too long: must be 25 characters";
  
    if (ourProduct.description.length < 7) errors.description = "Too short description: must be 7";
    if (ourProduct.description.length > 80) errors.description = "Too long: must be 80";
    if (ourProduct.seller.length < 2) errors.seller = "Too short seller: must be 2";
    if (ourProduct.seller.length > 35) errors.seller = "Too long: must be 35";
  
  
    if(!isAlphaNumericWithBasics(ourProduct.name)) errors.name = "no Special characters allowed"
    if(!isAlphaNumericWithBasics(ourProduct.description)) errors.description = "no Special characters allowed"
    if(!isAlphaNumericWithBasics(ourProduct.price)) errors.price = "no Special characters allowed"
    if(!isAlphaNumericWithBasics(ourProduct.seller)) errors.seller = "no Special characters allowed"
    if(!isAlphaNumericWithBasics(ourProduct.stock)) errors.stock = "no Special characters allowed"
  
    if(ourProduct.name.length == 0) errors.name = "This field is required"
    if(ourProduct.description.length == 0) errors.description = "This field is required"
    if(ourProduct.price.length == 0) errors.price = "This field is required"
    if(ourProduct.seller.length == 0) errors.seller = "This field is required"
    if(ourProduct.stock.length == 0) errors.stock = "This field is required"
  
    //verify signature
    // const expectedSignature = cloudinary.utils.api_sign_request({public_id:formData.get("public_id"), version:formData.get("version")},cloudinaryConfig.api_secret)
    // if(expectedSignature === formData.get("signature")){
    //   ourProduct.photo = formData.get("public_id")
    // }
  
    return {
      errors,
      ourProduct
    }
  }

  export const createProduct = async function (prevState, formData) {
    const user = await getUserFromCookie();
    if (!user) {
      return redirect("/");
    }
    const result = await sharedProductLogic(formData, user);
  
    if(result.errors.name || result.errors.description || result.errors.price || result.errors.seller || result.errors.stock ){
      return {errors: result.errors}
      }
      // if there is no error lets save into our db
      const productCollection = await getCollection("product")
      const newProduct = await productCollection.insertOne(result.ourProduct)
      return redirect("/sellerPage/products");
  
  //   return { message: "Congratulations" };
  };

  export const editProduct = async function (prevState, formData) {
    const user = await getUserFromCookie();
    if (!user) {
      return redirect("/");
    }
    const result = await sharedProductLogic(formData, user);
  
    if(result.errors.name || result.errors.description || result.errors.price || result.errors.seller || result.errors.stock ){
      return {errors: result.errors}
      }
      // if there is no error lets save into our db
      const productCollection = await getCollection("product")
      let productId = formData.get("productId")
      if(typeof productId != "string") productId = ""
      // make sure you are the author of this post !!! otherwise operation failed
      const productInQuestion = await productCollection.findOne({_id:ObjectId.createFromHexString(productId)})
      if(productInQuestion.author.toString() !== user.userId){
        return redirect("/")
      }
      await productCollection.findOneAndUpdate({ _id: ObjectId.createFromHexString(productId)}, {$set: result.ourProduct})
      return redirect("/sellerPage/products")
  };

  export const deleteProduct = async function (formData){
    const user = await getUserFromCookie();
    if (!user) {
      return redirect("/");
    }
    const productCollection = await getCollection("product")
    let productId = formData.get("id")
    if(typeof productId != "string") productId = ""
    // make sure you are the author of this post !!! otherwise operation failed
    const productInQuestion = await productCollection.findOne({_id:ObjectId.createFromHexString(productId)})
    if(productInQuestion.author.toString() !== user.userId){
      return redirect("/sellerPage/products")
    }
    await productCollection.deleteOne({ _id: ObjectId.createFromHexString(productId)})
    return redirect("/sellerPage/products")
  }