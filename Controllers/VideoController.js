const Video = require("../Models/VideoModel");

const GetVideos = async (req, res) => {
  try {
    const response = await Video.find({});

    if (response) {
      res.status(200).send({ success: true, data: response });
    } else {
      res
        .status(200)
        .send({ success: true, msg: "Videos are not found" });
    }
  } catch (error) {
    res.status(404).send({ success: false, msg: error });
  }
};

const GetVideoById = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await Video.findById(id);

    if (response) {
      res.status(200).send({ success: true, data: response });
    } else {
      res
        .status(200)
        .send({ success: true, msg: "Video is not found by ID" });
    }
  } catch (error) {
    res.status(404).send({ success: false, msg: error });
  }
};

const GetVideoByTypeName = async (req, res) => {
  try {
    const { videoName } = req.params;

    const response = await Video.findOne({
      name: videoName,
    });

    if (response) {
      res.status(200).send({ success: true, data: response });
    } else {
      res
        .status(200)
        .send({ success: true, msg: "Video is not foundd by name" });
    }
  } catch (error) {
    res.status(404).send({ success: false, msg: error });
  }
};

const CreateVideo = async (req, res) => {
  try {
    const { name, instructorId, duration, level, video } = req.body;

    const existingVideo = await Video.findOne({ name });

    if (existingVideo) {
      return res
        .status(404)
        .json({ message: "Video already exists", success: false });
    }

    const createdVideo = new Video({
      name,
      instructorId,
      duration,
      level,
      video
    });

    await createdVideo.save();

    return res.status(201).json({
      message: "Video successfully created",
      success: true,
      data: createdVideo,
    });
  } catch (error) {
    return res.status(404).send({ success: false, msg: error });
  }
};

const UpdateVideoById = async (req, res) => {
  try {
    const { name, instructorId, duration, level, video } = req.body;
    const updatedVideo = await Video.findOneAndUpdate(
      { _id: req.params.id },
      {
        name: name,
        instructorId: instructorId,
        duration: duration,
        level: level,
        video: video,
      },
      {
        upsert: true,
        new: true,
      },
    );
    res.json({
      message: "Video successfully updated",
      success: true,
      data: updatedVideo,
    });
  } catch (error) {
    res.status(404).send({ success: false, msg: error });
  }
};

const DeleteVideoById = async (req, res) => {
  try {
    const deletedRes = await Video.findByIdAndDelete(req.params.id);
    if (deletedRes.deletedCount === 1) {
      res.status(200).send({
        success: true,
        msg: "The Video has been removed",
      });
    } else {
      res
        .status(200)
        .send({ success: false, msg: "Video was found" });
    }
  } catch (error) {
    res.status(404).send({ success: false, msg: error });
  }
};
module.exports = {
  GetVideos,
  GetVideoById,
  CreateVideo,
  UpdateVideoById,
  DeleteVideoById
};
