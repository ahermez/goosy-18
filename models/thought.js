const mongoose = require(`mongoose`);
const reactionSchema = require("./reaction.js")
const thoughtSchema = new  mongoose.Schema({
   thoughtText: { type: String, required: true, minLength: 1, maxlength: 280 },
   createdAt: { type: Date, default: Date.now() },
   userName: { type: String, required: true },
   reactions: [reactionSchema]
},
{
   toJSON: {getters:true},
   id: false
}
)
thoughtSchema.virtual("reactionCount").get(function(){
   return this.reactions.length
})

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;