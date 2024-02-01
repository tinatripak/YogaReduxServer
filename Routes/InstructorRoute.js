const {
  GetInstructors,
  GetInstructorById,
  CreateInstructor,
  UpdateInstructorById,
  DeleteInstructorById
} = require("../Controllers/InstructorController");
const { checkToken } = require("../Middlewares/AuthMiddleware");
const router = require("express").Router();

// router.get("/getInstructors", GetInstructors);
// router.get("/getInstructorById/:id", GetInstructorById);
// router.post(
//   "/createInstructor",
//   checkToken,
//   CreateInstructor,
// );
// router.put(
//   "/updateInstructorById/:id",
//   checkToken,
//   UpdateInstructorById,
// );
// router.delete(
//   "/deleteInstructorById/:id",
//   checkToken,
//   DeleteInstructorById,
// );

router.get("/getInstructors", GetInstructors);
router.get("/getInstructorById/:id", GetInstructorById);
router.post("/createInstructor",  CreateInstructor,);
router.put("/updateInstructorById/:id", UpdateInstructorById,);
router.delete("/deleteInstructorById/:id", DeleteInstructorById,);

module.exports = router;
