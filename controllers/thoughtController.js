const {Thought, Reaction} = require("../models");
const thoughtController = {
    async getThoughts (req, res) {
        try {
           const thoughts = await Thought.find()
            res.status(200).json(thoughts)
        } catch (err) {
            console.log(err)
            res.status(500).json(err);
        }
    },
    async getSingleThought (req, res){
        try{
            const thoughtId =  req.params.thoughtId;
            const getSingleThought = await Thought.findOne({
                _id: thoughtId
            });
            
            res.status(200).json(getSingleThought)
        } catch(err){
            console.log(err)
            res.status(500).json(err)
        }
    },
    async createThought (req, res){
        try{
            const thoughtData = await Thought.create(req.body)
            const userData = await User.findOneAndUpdate(
                {_id: req.body.userId},
                {$Push: {thoughts: thoughtData._id}},
                {runValidators: true, new: true}
                
            )
            if(!userData){
                return res.status(404).json({message: "thought created but no User with this id"})
            }
            // const newThought = await Thought.create(req.body);
            // res.status(201).json(newThought)
        } catch(err){
            console.log(err)
            res.status(500).json(err)
        }
        
    },
    async createReaction (req, res){
        try{
            const thoughtData = await Thought.findOneAndUpdate(
                {_id: req.params.thoughtId},
                {$addToSet: {reactions: rec.body}},
                {runValidators: true, new: true}
        );
            res.status(201).json(thoughtData)
        } catch(err){
            console.log(err)
            res.status(500).json(err)
        }
        
    },
    async updateThought (req, res){
        try{
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $set: req.body },
                { runValidators: true, new: true })
        } catch(err){
            console.log(err)
            res.status(500).json(err)
        }
    },
    async deleteThought (req, res){
        try{
            const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

            if (!thought) {
              return res.status(404).json({ message: 'No thought with that ID' });
            }
            
            res.status(200).json(thought)
        }
        catch (err){
            console.log(err)
            res.status(500).json(err)
        }
    }
} 
async deleteReaction (req, res){
    try{
        const reaction = await Reaction.findOneAndDelete({ _id: req.params.reactionId });

        if (!reaction) {
          return res.status(404).json({ message: 'No reaction with that ID' });
        }
        
        res.status(200).json(reaction)
    }
    catch (err){
        console.log(err)
        res.status(500).json(err)
    }
}

module.exports = thoughtController


