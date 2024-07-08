
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getAllReviewers = async (req, res) => {
         try {
    const getReviewer = await prisma.reviewers.findMany({
      select: {
        reviewer_id:true,
        reviewerName:true,
        reviewerComment:true,
        reviewerRating:true
      },
    });

    res
      .status(200)
      .json({
        success: true,
        message: "Reviewers found successfully",
        data: getReviewer,
      });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

export const getSingleReviewer = async (req, res) => {
    try {
    const id = req.params.reviewer_id;

    const findSingleReviewer = await prisma.reviewers.findFirst({
      where: { reviewer_id: id },
    });
    if (findSingleReviewer == null) {
      res
        .status(500)
        .json({ success: false, message: "Degree program not found, Invalid ID" });
    } else {
      res
        .status(200)
        .json({
          sucess: true,
          message: "Degree found sucessfully",
          data: findSingleReviewer,
        });
    }
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
    
}

export const createNewReviewer = async (req, res) => {
    try {
    const { reviewerName, reviewerComment, reviewerRating} = req.body;
    const createReviewer = await prisma.reviewers.create({
      data: {
        reviewerName, reviewerComment, reviewerRating
      },
    });

    res
      .status(200)
      .json({
        success: true,
        message: "Reviewer created successfully.",
        data: createReviewer,
      });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }  

}

export const deleteReviewer = async (req, res) => {
       try {
    const id = req.params.reviewer_id;

    const deleteReviewer= await prisma.reviewers.delete({
      where: { reviewer_id: id },
    });

    res
      .status(200)
      .json({
        success: true,
        message: "Degree program deleted successfully.",
        data: deleteReviewer,
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