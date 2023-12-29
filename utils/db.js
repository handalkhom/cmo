const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb://hamsyat:hamsyat123@ac-8wlxwfg-shard-00-01.fwszp62.mongodb.net:27017,ac-8wlxwfg-shard-00-02.fwszp62.mongodb.net:27017,ac-8wlxwfg-shard-00-00.fwszp62.mongodb.net:27017/contactmongo?authSource=admin&replicaSet=atlas-11i7nt-shard-0&ssl=true"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((e) => {
    console.log("not connected");
  });

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
