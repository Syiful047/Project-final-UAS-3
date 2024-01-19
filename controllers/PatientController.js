// import Model Patient
const Patient = require("../models/Patient");

class PatientController {
  // menambahkan keyword async
  async index(req, res) {
    // memanggil method static all dengan async await.
    const patients = await Patient.all();

    const data = {
      message: "Menampilkkan semua Patients",
      data: patients,
    };

    res.json(data);
  }

  async store(req, res) {
    /**
     * TODO 2: memanggil method create.
     * Method create mengembalikan data yang baru diinsert.
     * Mengembalikan response dalam bentuk json.
     */
    // code here
    const { name, phone, address, status } = req.body;
    const patients = await Patient.create({ name, phone, address, status });
    const data = {
      message: "Menambahkan data Patient",
      data: patients,
    };
    res.json(data);
  }

  async update(req, res) {
    const { id } = req.params;
    // cari id Patient yang ingin diupdate
    const Patient = await Patient.find(id);

    if (Patient) {
      // melakukan update data
      const patient = await Patient.update(id, req.body);
      const data = {
        message: `Mengedit data Patients`,
        data: patient,
      };
      res.status(200).json(data);
    } else {
      const data = {
        message: `Patient not found`,
      };
      res.status(404).json(data);
    }
  }
  
  async destroy(req, res) { 
    const { id } = req.params;
    const patients = await Patient.find(id);
    
    if (patients) {
      await patients.delete(id);
      const data = {
        message: `Menghapus data Patients`,
      };
      
      res.status(200).json(data);
    } else {
      const data = {
        message: `Patient not found`,
      };
      
      res.status(404).json(data);
    }
  }
  
  async show(req, res) {
    const { id } = req.params;
    // cari Patient berdasarkan id
    const patients = await Patient.find(id);
    
    if (patients) {
      const data = {
        message: `Menampilkan detail Patients`,
        data: patients,
      };
      
      res.status(200).json(data);
    }
    else {
      const data = {
        message: `Patient not found`,
      };
      
      res.status(404).json(data);
    }
  }
}

// Membuat object PatientController
const object = new PatientController();

// Export object PatientController
module.exports = object;
