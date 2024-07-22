import User from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

// JWT SECRET KEY
const SECRET_KEY = "jabidapsha123";

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find({});
    if (!allUsers) {
      return res.status(404).send({
        status: false,
        message: "Users not found",
      });
    }
    return res.status(200).send({
      status: true,
      message: "Users fetched successfully!",
      totalUsers: allUsers.length,
      data: allUsers,
    });
  } catch (error) {
    console.log(error);
  }
};

// Signup Controller
const handleUserSignup = async (req, res) => {
  try {
    const { email, username, password } = req.body;
    let existingUser = await User.findOne({ email: email });
    console.log("userExisted", existingUser);

    // if user already exist
    if (existingUser) {
      return res.status(401).send({
        status: false,
        message: "User already existed!",
      });
    }

    // Hash the password with a salt
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log("hashedPassword >>", hashedPassword);

    // if user not exist
    const user = await User.create({
      email,
      username,
      password: hashedPassword,
    });

    return res.status(201).send({
      status: true,
      message: "User created successfully!",
      data: user,
    });
  } catch (error) {
    console.log("error in create user API", error);
  }
};

// Login Controller
const handleUserLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .send({ message: "Username and password are required" });
  }

  try {
    var user = await User.findOne({ email });

    // not user
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    // create JWT Token send as response
  const token = jwt.sign(
    { userId: user._id, username: user.username, email: user.email },
    SECRET_KEY,
    { expiresIn: "1h" } // Optional expiration
  );

  // after login redirecting to home page'/'
  return res.send({
    status: true,
    token: token,
    user:{_id:user._id, username:user.username, email:user.email},
    message: "LogIn Successfull.",
  });

  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Internal server error" });
  }

  
};

export { handleUserSignup, getAllUsers, handleUserLogin };
