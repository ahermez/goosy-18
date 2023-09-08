const mongoose = require(`mongoose`);

const reactionSchema = new  mongoose.Schema({ 
  reactionId: {type: ObjectId, default: new ObjectId() }

})