import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();


export const getDegrees = async (req,res) => {
     try {
    const getDegrees = await prisma.degrees.findMany({
      select: {
        degree_id:true,
        degreeName: true,
        degreeDesc: true, 
        degreeDuration: true, 
        degreeRating: true, 
        previousPrice: true, 
        currentPrice: true
      },
    });

    res
      .status(200)
      .json({
        success: true,
        message: "Degree courses found successfully",
        data: getDegrees,
      });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

export const getSingleDegree = async (req,res) => {
      try {
    const id = req.params.degree_id;

    const findSingleDegree = await prisma.degrees.findFirst({
      where: { degree_id: id },
    });
    if (findSingleDegree == null) {
      res
        .status(500)
        .json({ success: false, message: "Degree program not found, Invalid ID" });
    } else {
      res
        .status(200)
        .json({
          sucess: true,
          message: "Degree found sucessfully",
          data: findSingleDegree,
        });
    }
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
}

export const createDegree = async (req,res) => {
    try {
    const { degreeName, degreeDesc, degreeDuration, degreeRating, previousPrice, currentPrice} = req.body;
    const createCourse = await prisma.degrees.create({
      data: {
        degreeName, degreeDesc, degreeDuration, degreeRating, previousPrice, currentPrice
      },
    });

    res
      .status(200)
      .json({
        success: true,
        message: "Degree created successfully.",
        data: createCourse,
      });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

export const updateDegree = async (req,res) => {
    res.send("update an existing course")
}

export const deleteDegrees = async (req,res) => {
    try {
    const id = req.params.degree_id;

    const deleteDegrees = await prisma.degrees.delete({
      where: { degree_id: id },
    });

    res
      .status(200)
      .json({
        success: true,
        message: "Degree program deleted successfully.",
        data: deleteDegrees,
      });
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        message: "Degree programnot found.Degree program already deleted.",
      });
  }
}