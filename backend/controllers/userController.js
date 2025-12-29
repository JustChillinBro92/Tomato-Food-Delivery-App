import userModel from "../models/userModels.js";

import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

// create user token
const createToken = (id) => {
    return jwt.sign(
        {id}, process.env.JWT_SECRET,
        { expiresIn: "7d" }
    )
}

// login user
const loginUser = async (req, res) => {
    const {email, password} = req.body;

    try {
        // check for existing user
        const user = await userModel.findOne({email});
        if(!user) {
            return res.json({success: false, message: "Error! User doesn't exist"});
        }
        
        // check for matching password
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.json({success: false, message: "Error! Invalid Credentials"});
        }

        // create token for saved user to pass in response
        const token = createToken(user._id);
        res.json({success: true, token});
    } catch (error) {
        res.json({success: false, message: "Error! Something went wrong"});
    }
}

// register user
const registerUser = async (req, res) => {
    const {name, email, password} = req.body

    try {
        // check for similar existing emails
        const exists = await userModel.findOne({email});
        if(exists) {
            return res.json({success: false, message: "User with same email already exists!"});
        }

        // validate user email and password
        if(!validator.isEmail(email)) {
            return res.json({success: false, message: "Please enter a valid email id!"});
        }

        if(password.length < 8) {
            return res.json({success: false, message: "Password must have a minimum length of 8!"});
        }

        // hashing user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const New_User = new userModel({
            name: name,
            email: email,
            password: hashedPassword,
        })

        // save user data in DB
        const user = await New_User.save();

        // create token for saved user to pass in response
        const token = createToken(user._id);        
        res.json({success: true, token});
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error! Something went wrong"});
    }
}

// list all users
const listUser = async (req, res) => {
    try {
        const users = await userModel.find({});
        res.json({success: true, data: users});
    } catch (error) {
        res.json({success: false, message: "Error! Something went wrong"});
    }
}

export {loginUser, registerUser, listUser};