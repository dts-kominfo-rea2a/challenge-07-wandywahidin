const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  const theater1 = await promiseTheaterIXX()
  const theater2 = await promiseTheaterVGC()
  const allTheater = [...theater1, ...theater2]

  const result = allTheater.filter((emo) => emo.hasil === emosi)
  return result.length
};

module.exports = {
  promiseOutput,
};
