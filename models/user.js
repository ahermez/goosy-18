const { Schema, model } = require('mongoose');

const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

const userSchema = new  Schema({
    userName: { type: String, required: true, unique: true, trim: true},
    email: { type: String, required: true, unique: true, match: emailRegex },
    thoughts: [{type: Schema.Types.ObjectId, ref: "Thought"}],
    friends: [{type: Schema.Types.ObjectId, ref: "User"}],
    
}, {toJSON:{virtuals: true, },id:false, });
userSchema.virtual("friendCount").get(function(){
   return this.friends.length; 
});

const User = model('User', userSchema);


module.exports = User;
