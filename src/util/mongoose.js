module.exports = {
  multipleMongooseToObj: (arrays) => {
    return arrays.map((array) => array.toObject());
  },
  mongooseToObj(array) {
    return array ? array.toObject() : array;
  },
};
