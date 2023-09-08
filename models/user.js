const mongoose = require(`mongoose`);
const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

const userSchema = new  mongoose.Schema({
    userName: { type: String, required: true, unique: true, trim: true},
    email: { type: String, required: true, unique: true, match: emailRegex },
    thoughts: [{type: ObjectId, ref: "Thought"}],
    friends: [{type: ObjectId, ref: "User"}]
})

const User = mongoose.model('User', userSchema);

