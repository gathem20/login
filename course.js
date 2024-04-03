// course.js

const express = require("express");
const router = express.Router();
const Course = require("./dbConnect");

//start post

app.post("/post", async (req, res) => {
  try {
    const { name, description, image } = req.body;
    // const uploadimage = await image_kit.upload({
    //   file: image,
    //   fileName: "",
    // });

    const data = await database.insertOne({
      name,
      description,
      image,
    });
    console.log(data);
    res.json({ name, description, image });
  } catch (err) {
    console.log("something wrong!", err);
  }
});
//end post




module.exports = router;
