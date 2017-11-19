var express = require('express');
var router = express.Router();
const User =require ("../models/User")
const Phone = require ("../models/Phone")

/* GET home page. */
router.get('/', function(req, res, next) {
  Phone.find()
    .then(result => {
      console.log(result)
      res.render('phone/home', {result})
    })
});


router.get("/new", function(req,res,next) {
 res.render ("phone/new")
})

router.post("/new", function(req,res,next) {
  const newPhone = new Phone({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    _creator: req.user._id
  });

  newPhone.save()
    .then(() => res.redirect("/"))
    .catch(err => next(err))
})



router.get("/:id", function(req,res,next) {

  Phone.findById(req.params.id)
    .populate("_creator")
    .then(result =>  res.render("phone/single",{result}))
})


router.post("/:id", function(req,res,next) {

})


router.post("/:id/delete", function(req,res,next) {

})
module.exports = router;
