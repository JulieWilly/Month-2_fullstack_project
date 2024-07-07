import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const validateUser = (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    res.send("Please provide all the fields required.");
  }

  // check if email is alreadytaken.
  try {
    const checkMail = prisma.user.findFirst({
      where: { email: (email = email) },
    });

    if (checkMail) {
      res.status(400).json({ success: false, message: "email already taken." });
    }
  } catch (e) {
    res.status(500).json({ success: false, message: "Internal sever error" });
  }

  next();
};
