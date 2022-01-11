const persiapan = () => {
  setTimeout(function () {
    console.log("Menyiapkan Bahan Untuk Memasak...");
  }, 3000);
};

const rebusAir = () => {
  setTimeout(function () {
    console.log("Merebus Air Untuk Sayuran ...");
  }, 7000);
};

const masak = () => {
  setTimeout(function () {
    console.log("Memasak Ayam Mentega dan Sayur Capcai  ...");
    console.log("Selesai");
  }, 5000);
};

/**
 * async ini digunakan untuk memberitahu apabila ada proses yang terjadi pada asynchronous
 * await ini digunakan untuk menunggu promise hingga proses selesai
 * await ini hanya dapat digunakan di dalam suatu function
 */

const main = () => {
  persiapan();
  rebusAir();
  masak();
};

main();
