const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://murahariraogowtham2000:lLAgvsgXdikIgCBx@cluster0.lubcf1a.mongodb.net/users_app");
const User = mongoose.model('users',{
    name: String,
    email: String,
    links: [String]
});

console.log(User);
const user = new User({
    name: "promepy",
    email: "g@promepy.com",
    links: ["https://github.com/Promepy", "https://linkedin.com/in/promepy"]
})

console.log(user);

user.save();
