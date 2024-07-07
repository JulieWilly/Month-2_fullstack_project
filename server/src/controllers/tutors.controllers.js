import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();

export const getAllTutors = async (req, res) => {
    try {
    const getTutor = await prisma.tutors.findMany({
      select: {
        tutors_id:true,
        tutorsName:true,
        tutorsDesc:true,
        tutorsCourses: true
      },
    });

    res
      .status(200)
      .json({
        success: true,
        message: "Tutors found successfully",
        data: getTutor,
      });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

export const getSingleTutor = async (req, res) => {
      try {
    const id = req.params.tutors_id;

    const findSingleTutors = await prisma.tutors.findFirst({
      where: { tutors_id: id },
    });
    if (findSingleTutors == null) {
      res
        .status(500)
        .json({ success: false, message: "Tutor not found, Invalid ID" });
    } else {
      res
        .status(200)
        .json({
          sucess: true,
          message: "Tutor found sucessfully",
          data: findSingleTutors,
        });
    }
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
    
}

export const createNewTutor = async (req, res) => {
     try {
    const { tutorsName, tutorsDesc,tutorsCourses } = req.body;
    const createTutor = await prisma.tutors.create({
      data: {
        tutorsName, tutorsDesc, tutorsCourses
      },
    });

    res
      .status(200)
      .json({
        success: true,
        message: "Tutor created successfully.",
        data: createTutor,
      });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }  
    
}

export const updateTutor = async (req, res) => {
    res.send("Update existing tutor")
    
}

export const deleteTutor = async (req, res) => {
     try {
    const id = req.params.tutors_id;

    const deleteTutors= await prisma.tutors.delete({
      where: { tutors_id: id },
    });

    res
      .status(200)
      .json({
        success: true,
        message: "Tutors deleted successfully.",
        data: deleteTutors,
      });
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        message: "Tutor not found.Tutor already deleted.",
      });
  }
    
}