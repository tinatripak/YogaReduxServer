const Plan = require("../Models/PlanModel");

const GetPlans = async (req, res) => {
  try {
    const response = await Plan.find({});

    if (response) {
      res.status(200).send({ success: true, data: response });
    } else {
      res
        .status(200)
        .send({ success: true, msg: "Plans are not found" });
    }
  } catch (error) {
    res.status(404).send({ success: false, msg: error });
  }
};

const GetPlanById = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await Plan.findById(id);

    if (response) {
      res.status(200).send({ success: true, data: response });
    } else {
      res
        .status(200)
        .send({ success: true, msg: "Plan is not found by ID" });
    }
  } catch (error) {
    res.status(404).send({ success: false, msg: error });
  }
};

const GetPlanByTypeName = async (req, res) => {
  try {
    const { planName } = req.params;

    const response = await Plan.findOne({
      name: planName,
    });

    if (response) {
      res.status(200).send({ success: true, data: response });
    } else {
      res
        .status(200)
        .send({ success: true, msg: "Plan is not foundd by name" });
    }
  } catch (error) {
    res.status(404).send({ success: false, msg: error });
  }
};

const CreatePlan = async (req, res) => {
  try {
    const { name, description, price, photo } = req.body;

    const existingPlan = await Plan.findOne({ name });

    if (existingPlan) {
      return res
        .status(404)
        .json({ message: "Plan already exists", success: false });
    }

    const createdPlan = new Plan({
      name,
      description,
      price,
      photo,
    });

    await createdPlan.save();

    return res.status(201).json({
      message: "Plan successfully created",
      success: true,
      data: typeOfPhotoshoot,
    });
  } catch (error) {
    return res.status(404).send({ success: false, msg: error });
  }
};

const UpdatePlanById = async (req, res) => {
  try {
    const { name, description, price, photo } = req.body;
    const updatedPlan = await Plan.findOneAndUpdate(
      { _id: req.params.id },
      {
        name: name,
        description: description,
        price: price,
        photo: photo,
      },
      {
        upsert: true,
        new: true,
      },
    );
    res.json({
      message: "Plan successfully updated",
      success: true,
      data: updatedPlan,
    });
  } catch (error) {
    res.status(404).send({ success: false, msg: error });
  }
};

const DeletePlanById = async (req, res) => {
  try {
    const deletedRes = await Plan.findByIdAndDelete(req.params.id);
    if (deletedRes.deletedCount === 1) {
      res.status(200).send({
        success: true,
        msg: "The plan has been removed",
      });
    } else {
      res
        .status(200)
        .send({ success: false, msg: "Plan was found" });
    }
  } catch (error) {
    res.status(404).send({ success: false, msg: error });
  }
};
module.exports = {
  GetPlans,
  GetPlanById,
  CreatePlan,
  UpdatePlanById,
  DeletePlanById
};
