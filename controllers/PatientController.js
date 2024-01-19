// import Model Patient
const Patient = require("../models/Patient");

class PatientController {
  // menambahkan keyword async
  async index(req, res) {
    // memanggil method static all dengan async await.
    const patients = await Patient.all();

    const data = {
      message: "Menampilkkan semua patients",
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
        message: "Menambahkan data patients",
        data: patients,
      };
      res.json(data);
    }

  update(req, res) {
    const { id } = req.params;
    const { name } = req.body;

    const data = {
      message: `Mengedit patient id ${id}, name ${name}`,
      data: [],
    };

    res.json(data);
  }

  destroy(req, res) {
    const { id } = req.params;

    const data = {
      message: `Menghapus patient id ${id}`,
      data: [],
    };

    res.json(data);
  }
}

// Membuat object PatientController
const object = new PatientController();

// Export object PatientController
module.exports = object;