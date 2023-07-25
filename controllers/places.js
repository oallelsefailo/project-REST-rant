const router = require("express").Router();

// GET /places
router.get('/new', (req, res) => {
  let places = [
    {
      name: "H-Thai-ML",
      city: "Seattle",
      state: "WA",
      cuisines: "Thai, Pan-Asian",
      pic: '/images/cloud-restaurant.jpg',
    },
    {
      name: "Coding Cat Cafe",
      city: "Phoenix",
      state: "AZ",
      cuisines: "Coffee, Bakery",
      pic: '/images/cyberpunk-restaurant.jpg',
    },
  ];
  res.render('places/new', { places });
})

router.post("/", (req, res) => {
  res.send("POST /places stub");
});

module.exports = router;
