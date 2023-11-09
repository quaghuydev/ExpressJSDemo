const Course = require("../model/Course");
const { multipleMongooseToObj } = require("../../util/mongoose");

class SiteController {
  //[Get] home
  async index(req, res, next) {
    await Course.find({})
      .then((courses) => {
        courses = multipleMongooseToObj(courses);
        res.render("home", { courses });
      })
      .catch(next);
    // res.render('home');
  }
  search(req, res) {
    res.render("search");
  }
}
module.exports = new SiteController();
