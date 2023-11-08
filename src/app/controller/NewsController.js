class NewController {
  //[Get] News
  index(req, res) {
    res.render('news');
  }
  detail(req,res){
    res.send("detail!!");
  }
}
module.exports = new NewController();
