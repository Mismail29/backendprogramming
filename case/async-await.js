const persiapan = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Menyiapkan Bahan Untuk Memasak...");
    }, 3000);
  });
};

const rebusAir = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Merebus Air Untuk Sayuran ...");
    }, 5000);
  });
};

const masak = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Memasak Ayam Mentega dan Sayur Capcai...");
    }, 7000);
  });
};

/**
 * async ini digunakan untuk memberitahu apabila ada proses asynchronous
 * await ini digunakan untuk menunggu promise hingga selesai
 * await ini hanya dapat digunakan di dalam function.
 */

const main = async () => {
  console.log(await persiapan());
  console.log(await rebusAir());
  console.log(await masak());
};

main();