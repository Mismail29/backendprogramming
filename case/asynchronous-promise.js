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
    }, 7000);
  });
};

const masak = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Memasak Ayam Mentega dan Sayur Capcai  ...");
    }, 5000);
  });
};

/**
 * async ini digunakan untuk memberitahu apabila ada proses yang terjadi pada asynchronous
 * await ini digunakan untuk menunggu promise hingga proses selesai
 * await ini hanya dapat digunakan di dalam suatu function
 */

const main = () => {
  persiapan()
    .then((res) => {
      console.log(res);
      return rebusAir();
    })
    .then((res) => {
      console.log(res);
      return masak();
    })
    .then((res) => {
      console.log(res);
    });
};

main();
