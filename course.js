// course.js

const express = require("express");
const router = express.Router();
const Course = require("./dbConnect");

//start post
app.post("/post", async (req, res) => {
  try {
    // const uploadimage = await image_kit.upload({
    //   file: image,
    //   fileName: "",
    // });
    const { name, description, image } = req.body;

    const id = userss.length + 1;
    const users = { name, description, image, id };
    const data = await database.insertMany({
      id,
      name,
      description,
      image,
    });

    userss.push(users);
    console.log(data);
    res.json({ name, description, image });
  } catch (err) {
    console.log("something wrong!", err);
  }
});
//Ending post api

//start patch api
app.patch("/patch/:id", (req, res) => {
  const { id } = req.params;
  const { name, description, image } = req.body;
  const user = userss.find((user) => user.id === parseInt(id));
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  } else {
    user.id;
    user.name = name;
    user.description = description;
    user.image = image;
  }
  res.json(user);
});

//ending patch api





module.exports = router;
