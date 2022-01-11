const persiapan = () => {
  console.log("Menyiapkan Bahan Untuk Memasak...");
};

const rebusAir = () => {
  console.log("Merebus Air Untuk Sayuran ...");
};

const masak = () => {
  console.log("Memasak Ayam Mentega dan Sayur Capcai  ...");
  console.log("Selesai");
};

/**
 * async ini digunakan untuk memberitahu apabila ada proses yang terjadi pada asynchronous
 * await ini digunakan untuk menunggu promise hingga proses selesai
 * await ini hanya dapat digunakan di dalam suatu function
 */

const main = () => {
  setTimeout(() => {
    persiapan();

    setTimeout(() => {
      rebusAir();

      setTimeout(() => {
        masak();
      }, 5000);
    }, 7000);
  }, 3000);
};

main();