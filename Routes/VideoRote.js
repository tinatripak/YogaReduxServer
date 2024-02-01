const {
  GetVideos,
  GetVideoById,
  CreateVideo,
  UpdateVideoById,
  DeleteVideoById
} = require("../Controllers/VideoController");
const { checkToken } = require("../Middlewares/AuthMiddleware");
const router = require("express").Router();

// router.get("/getVideos", GetVideos);
// router.get("/getVideoById/:id", GetVideoById);
// router.post(
//   "/createVideo",
//   checkToken,
//   CreateVideo,
// );
// router.put(
//   "/updateVideoById/:id",
//   checkToken,
//   UpdateVideoById,
// );
// router.delete(
//   "/deleteVideoById/:id",
//   checkToken,
//   DeleteVideoById,
// );

router.get("/getVideos", GetVideos);
router.get("/getVideoById/:id", GetVideoById);
router.post(
  "/createVideo",
  CreateVideo,
);
router.put(
  "/updateVideoById/:id",
  UpdateVideoById,
);
router.delete(
  "/deleteVideoById/:id",
  DeleteVideoById,
);

module.exports = router;
