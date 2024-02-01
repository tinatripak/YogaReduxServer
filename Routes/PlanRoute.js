const {
  GetPlans,
  GetPlanById,
  CreatePlan,
  UpdatePlanById,
  DeletePlanById
} = require("../Controllers/PlanController");
const { checkToken } = require("../Middlewares/AuthMiddleware");
const router = require("express").Router();

// router.get("/getPlans", GetPlans);
// router.get("/getPlanById/:id", GetPlanById);
// router.post(
//   "/createPlan",
//   checkToken,
//   CreatePlan,
// );
// router.put(
//   "/updatePlanById/:id",
//   checkToken,
//   UpdatePlanById,
// );
// router.delete(
//   "/deletePlanById/:id",
//   checkToken,
//   DeletePlanById,
// );

router.get("/getPlans", GetPlans);
router.get("/getPlanById/:id", GetPlanById);
router.post(
  "/createPlan",
  CreatePlan,
);
router.put(
  "/updatePlanById/:id",
  UpdatePlanById,
);
router.delete(
  "/deletePlanById/:id",
  DeletePlanById,
);

module.exports = router;
