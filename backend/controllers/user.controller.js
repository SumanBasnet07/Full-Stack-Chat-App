import generateTokenAndSaveCookies from "../jwt/generateToken.js";
import User from "../models/user.model.js";
import bcrypt from 'bcrypt'

export const signUp = async (req, res)=>{
    const {username, email, password, confirmPassword} = req.body;
    try {
        if(password!==confirmPassword){
          return res.status(400).json({error:"Passwords doesnot match"})
        }
        const user = await User.findOne({email})
        if(user){
            return res.status(400).json({error:'Email has already been registered'})
        }
        const hashedPassword = await bcrypt.hash(password , 10)
        const newUser = new User({
            username, email, password:hashedPassword})
        await newUser.save();
        if(newUser){
            generateTokenAndSaveCookies(newUser._id, res)
            res.status(200).json({message:'user registerd successfully'})
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({error:"error in signup", error})
    }

}


export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists first
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid Username or Password" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid Username or Password" });
    }

    // Generate token and set cookie
    generateTokenAndSaveCookies(user._id, res);

    // Send success response
    res.status(200).json({
      message: "Logged in successfully",
      user: {
        _id: user._id,
        email: user.email,
        username: user.username,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Error in login" });
  }
};

export const logout = async (req, res)=>{
    try {
        res.clearCookie("jwt")
        res.status(200).json({message:"logout successful"})
    } catch (error) {
        console.error("Login error:", error);
    res.status(500).json({ error: "Error in logout" });
    }
}


export const allUsers = async (req, res) => {
  try {
    const loggedUser = req.user._id
    const user =await User.find({_id:{$ne: loggedUser}}).select('-password')
    res.status(200).json(user)
  } catch (error) {
    res.status(400).json(error)
  }
}