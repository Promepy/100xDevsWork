const express = require("express");
const zod = require("zod")
const app = express();


const schema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(8),
  country: zod.literal("IN").or(zod.literal("US")),
  kidneys: zod.array(zod.number())
})
  
app.use(express.json());

app.post("/login",  function (req, res) {
  // kidneys = [1, 2]
  const kidneys = req.body;
  const response = schema.safeParse(kidneys)
  if(!response.success){
    res.status(411).json({
      msg: "input is invalid"
    })
  }
  res.send({
    response
  })
});


app.listen(3000);