class MainController {
  index(req, res) {
    res.render("index", { title: "Main page" });
  }
}

module.exports = new MainController()