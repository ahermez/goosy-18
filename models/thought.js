const mongoose = require(`mongoose`);

const thoughtSchema = new  mongoose.Schema({
   thoughtText: { type: String, required: true, minLength: 1, maxlength: 280 },
   createdAt: { type: Date, default: Date.now() },
   userName: { type: String, required: true },
   reactions: [{ type: ObjectId, ref: "Reaction" }]
})