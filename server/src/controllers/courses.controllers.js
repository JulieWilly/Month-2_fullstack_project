import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getAllCourses = async (req, res) => {
  try {
    const getCourses = await prisma.courses.findMany({
      select: {
        course_id: true,
        courseName: true,
        courseDesc: true,
        courseDuration: true,
        courseRating: true,
        courseCategory: true,
      },
    });

    res.status(200).json({
      success: true,
      message: "Data found successfully",
      data: getCourses,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getSingleCourse = async (req, res) => {
  try {
    const id = req.params.course_id;

    const findSingleCourse = await prisma.courses.findFirst({
      where: { course_id: id },
    });
    if (findSingleCourse == null) {
      res
        .status(500)
        .json({ success: false, message: "Course not found, Invalid ID" });
    } else {
      res.status(200).json({
        sucess: true,
        message: "Product found sucessfully",
        data: findSingleCourse,
      });
    }
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};

export const createNewCourse = async (req, res) => {
    const user = req.user;
  const userID = user.id

  console.log('1-.',user)
  console.log('2-.',userID)
  try {
    const {
      courseName,
      courseDesc,
      courseDuration,
      courseRating,
      courseCategory,
    } = req.body;


    const createCourse = await prisma.courses.create({
      data: {
        courseName,
        courseDesc,
        courseDuration,
        courseRating,
        courseCategory,
        user_id: userID
      },
    });

    res.status(200).json({
      success: true,
      message: "Course created successfully.",
      data: createCourse,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const updateCourse = async (req, res) => {};

export const deleteCourse = async (req, res) => {
  try {
    const id = req.params.course_id;

    const deleteCourse = await prisma.courses.delete({
      where: { course_id: id },
    });

    res.status(200).json({
      success: true,
      message: "Product deleted successfully.",
      data: deleteCourse,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Product not found. Product already deleted.",
    });
  }
};
