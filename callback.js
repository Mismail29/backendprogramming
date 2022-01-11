/**
 * Fungsi ini untuk memformat nama menjadi uppercase.
 *
 * @param {string} name
 */
const formatName = (name) => name.toUpperCase();

/**
 * Fungsi untuk mendapatkan nama.
 *
 * @param {string} name
 * @param {function} callback
 */
const getName = (name, callFormatName) => console.log(callFormatName(name));

// membuat callback
console.log("----- Fungsi dibawah ini untuk Membuat Callback Function -----");
function formatName(nama) {
  const result = nama.toUpperCase();
  return result;
}

function getName(nama, callback) {
  const result = callback(nama);
  console.log(result);
}

getName("Muhamad Ismail", formatName);