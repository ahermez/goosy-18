const mongoose = require(`mongoose`);

const thoughtSchema = new  mongoose.Schema({
   thoughtText: { type: String, required: true, minLength: 1, maxlength: 280 },
   createdAt: { type: Date, default: Date.now() },
   userName: { type: String, required: true },
   reactions: [{ type: mongoose.Types.ObjectId, ref: "Reaction" }]
})

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;