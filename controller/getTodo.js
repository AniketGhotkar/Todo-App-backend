// import the model
const todo = require("../models/Todo");

// defind route handler
exports.getTodo = async(req,res) => {
    try{
        // fetch all todo items from database
        const todos = await todo.find({});

        // response
        res.status(200).json({
            success:true,
            data:todos,
            message :"Entire data is fetched from database"
        });
    }catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message : "server error"
        });
    }
}

exports.getTodoById = async(req,res) => {
    try{
        // fetch all todo items from database
        const id = req.params.id;

        const todoe = await todo.findById({_id :id});

        if(!todoe){
            return res.status(404).json({
                success:false,
                message : "data is not found with id"
            });
        }

        res.status(200).json({
            success :true,
            data : todoe,
            message : `TODo ${id} data is above`
        });

    }catch(err){    
        console.error(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message : "server error"
        });
    }
}