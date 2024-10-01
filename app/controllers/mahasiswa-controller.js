const mahasiswaModel = require("../models/mahasiswa-model");

const getAllMahasiswa = async (req, res) => {
  try {
    const result = await mahasiswaModel.getAllMahasiswa();
    res.render("mahasiswa/list", { data: result.rows });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getMahasiswaForm = (req, res) => {
  res.render("mahasiswa/form", { mahasiswa: null });
};

const getMahasiswaById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await mahasiswaModel.getMahasiswaById(id);
    res.render("mahasiswa/form", { mahasiswa: result.rows[0] });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const addMahasiswa = async (req, res) => {
  try {
    await mahasiswaModel.addMahasiswa(req.body);
    res.redirect("/mahasiswa");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updateMahasiswa = async (req, res) => {
  const { id } = req.params;
  try {
    await mahasiswaModel.updateMahasiswa(id, req.body);
    res.redirect("/mahasiswa");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteMahasiswa = async (req, res) => {
  const { id } = req.params;
  try {
    await mahasiswaModel.deleteMahasiswa(id);
    res.redirect("/mahasiswa");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getAllMahasiswa,
  getMahasiswaForm,
  getMahasiswaById,
  addMahasiswa,
  updateMahasiswa,
  deleteMahasiswa,
};
