import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export const getAllCourses = async (req, res) => {
    res.send("Get all the courses")
}

export const getSingleCourse = async  (req, res) => {
    res.send("Get a single course.")
}

export const createNewCourse = async (req, res) => {
   try{

    const { courseName, courseDesc,courseDuration, courseRating } = req.body;

    const createCourse = await prisma.courses.create({
            data: {
                courseName,courseDesc, courseDuration, courseRating
            }
    })

    res.status(200).json({success: true, message: "Course created successfully.",  data: createCourse})
   } catch(err) {
    res.status(500).json({success: false, message: err.message})
   }
}

export const updateCourse = async (req, res) => {
    res.send("Update an existing course.")
}

export const deleteCourse = (req, res) => {
    res.send("Delete a course")
}