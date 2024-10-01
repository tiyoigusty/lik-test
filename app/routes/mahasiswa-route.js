const express = require("express");
const router = express.Router();
const mahasiswaController = require("../controllers/mahasiswa-controller");

router.get("/", mahasiswaController.getAllMahasiswa);
router.get("/add", mahasiswaController.getMahasiswaForm);
router.get("/:id", mahasiswaController.getMahasiswaById);
router.post("/", mahasiswaController.addMahasiswa);
router.post("/edit/:id", mahasiswaController.updateMahasiswa);
router.post("/delete/:id", mahasiswaController.deleteMahasiswa);

module.exports = router;
