const Instructor = require("../Models/InstructorModel");

const GetInstructors = async (req, res) => {
  try {
    const response = await Instructor.find({});

    if (response) {
      res.status(200).send({ success: true, data: response });
    } else {
      res
        .status(200)
        .send({ success: true, msg: "Instructors are not found" });
    }
  } catch (error) {
    res.status(404).send({ success: false, msg: error });
  }
};

const GetInstructorById = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await Instructor.findById(id);

    if (response) {
      res.status(200).send({ success: true, data: response });
    } else {
      res
        .status(200)
        .send({ success: true, msg: "Instructor is not found by ID" });
    }
  } catch (error) {
    res.status(404).send({ success: false, msg: error });
  }
};

const GetInstructorByName = async (req, res) => {
  try {
    const { instructorName } = req.params;

    const response = await Instructor.findOne({
      name: instructorName,
    });

    if (response) {
      res.status(200).send({ success: true, data: response });
    } else {
      res
        .status(200)
        .send({ success: true, msg: "Instructor is not foundd by name" });
    }
  } catch (error) {
    res.status(404).send({ success: false, msg: error });
  }
};

const CreateInstructor = async (req, res) => {
  try {
    const { name, bio, kindOfInstructor, photo } = req.body;

    const existingInstructor = await Instructor.findOne({ name });

    if (existingInstructor) {
      return res
        .status(404)
        .json({ message: "Instructor already exists", success: false });
    }

    const createdInstructor = new Instructor({
      name,
      bio,
      kindOfInstructor,
      photo,
    });

    await createdInstructor.save();

    return res.status(201).json({
      message: "Instructor successfully created",
      success: true,
      data: createdInstructor,
    });
  } catch (error) {
    return res.status(404).send({ success: false, msg: error });
  }
};

const UpdateInstructorById = async (req, res) => {
  try {
    const { name, bio, kindOfInstructor, photo } = req.body;
    const updatedInstructor = await Instructor.findOneAndUpdate(
      { _id: req.params.id },
      {
        name: name,
        bio: bio,
        kindOfInstructor: kindOfInstructor,
        photo: photo,
      },
      {
        upsert: true,
        new: true,
      },
    );
    res.json({
      message: "Instructor successfully updated",
      success: true,
      data: updatedInstructor,
    });
  } catch (error) {
    res.status(404).send({ success: false, msg: error });
  }
};

const DeleteInstructorById = async (req, res) => {
  try {
    const deletedRes = await Instructor.findByIdAndDelete(req.params.id);
    if (deletedRes.deletedCount === 1) {
      res.status(200).send({
        success: true,
        msg: "The Instructor has been removed",
      });
    } else {
      res
        .status(200)
        .send({ success: false, msg: "Instructor was found" });
    }
  } catch (error) {
    res.status(404).send({ success: false, msg: error });
  }
};
module.exports = {
  GetInstructors,
  GetInstructorById,
  CreateInstructor,
  UpdateInstructorById,
  DeleteInstructorById
};
