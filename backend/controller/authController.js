import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js"
export const signup = async (req, res) => {
  try {
    const { fullName, userName, password, confirmPassword, gender } = req.body;
    if (password != confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }
    const user = await User.findOne({ userName });
    if (user) {
      return res.status(400).json({ error: "user Already Exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const boyProfile = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
    const girlProfile = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

    const newUser = new User({
      fullName,
      userName,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfile : girlProfile,
    });

    if (newUser) {
      generateToken(newUser._id,res)
      await newUser.save();
      res.status(201).json({
        _id: newUser.id,
        fullname: newUser.fullName,
        username: newUser.userName,
        profilepic: newUser.profilePic,
      });
    }
    else{
        res.status(400).json({
            error:"Invalid User Data"
        })
    }
  } catch (error) {
    console.log("Error in Signup controller: ", error.message);
    res.status(500).json({
      error: "Internal server error",
    });
  }
};

export const login = async(req, res) => {
  try {
    const {userName,password}=req.body
    const user=await User.findOne({userName})
    const isPasswordCorrect=await bcrypt.compare(password,user.password || "")
    
    if(!user || !isPasswordCorrect){
      return res.status(401).json({
        message:"Invalid Credentials"
      })
    }

    generateToken(user._id,res)
    res.status(200).json({
      _id:user._id,
      fullName:user.fullName,
      userName:user.userName,
      profilePic:user.profilePic
    })


  } catch (error) {
    console.log("Error in login controller: ",error.message)
    return res.status(500).json({
      error:"Internal Server Error"
    })

  }
};

export const logout =(req, res) => {
  try {
    res.cookie("jwt","",{maxAge:0})
    res.status(200).json({message:"Loggedout Successfully"})
  } catch (error) {
    console.log("Error in logout Controller: ",error.message)
    res.status(500).json({
      error:"Internal Server Error"
    })
  }
};
