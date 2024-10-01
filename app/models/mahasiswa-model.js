const pool = require("../../database");

const getAllMahasiswa = () => {
  return pool.query("SELECT * FROM mahasiswa");
};

const getMahasiswaById = (id) => {
  return pool.query("SELECT * FROM mahasiswa WHERE id = $1", [id]);
};

const addMahasiswa = (mahasiswa) => {
  const { nim, nama, jenis_kelamin, ipk } = mahasiswa;
  return pool.query(
    "INSERT INTO mahasiswa (nim, nama, jenis_kelamin, ipk) VALUES ($1, $2, $3, $4)",
    [nim, nama, jenis_kelamin, ipk]
  );
};

const updateMahasiswa = (id, mahasiswa) => {
  const { nim, nama, jenis_kelamin, ipk } = mahasiswa;
  return pool.query(
    "UPDATE mahasiswa SET nim = $1, nama = $2, jenis_kelamin = $3, ipk = $4 WHERE id = $5",
    [nim, nama, jenis_kelamin, ipk, id]
  );
};

const deleteMahasiswa = (id) => {
  return pool.query("DELETE FROM mahasiswa WHERE id = $1", [id]);
};

module.exports = {
  getAllMahasiswa,
  getMahasiswaById,
  addMahasiswa,
  updateMahasiswa,
  deleteMahasiswa,
};
