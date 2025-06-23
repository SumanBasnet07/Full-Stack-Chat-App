import jwt from "jsonwebtoken";

const generateTokenAndSaveCookies = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "10d",
  });
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: false,
    sameSite: "Lax",
  });
};
export default generateTokenAndSaveCookies;