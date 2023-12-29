const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://hamsyat:hamsyat123@cluster0.fwszp62.mongodb.net/contactmongo",
  {
    // mongoose.connect("mongodb://127.0.0.1:27017/contactmongo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

// membuat schema (jika ingin menambah field, cari aman dengan hapus collections
// lalu jalankan kode di bawah node ./utils/db)
// setelah itu pindahkan ke folder model dengan buat file baru
// tambahkan route const baru pada app.js jika menggunakan model dengan file baru
// const Contact = mongoose.model("Contact", {
//   nama: {
//     type: String,
//     required: true,
//   },
//   nohp: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//   },
// });

// // menambah 1 data
// const contact1 = new Contact({
//   nama: "Handal",
//   nohp: "08137",
//   email: "hamsyat@gmail.com",
// });

// // simpan ke collection
// contact1.save().then((contact) => console.log(contact));
