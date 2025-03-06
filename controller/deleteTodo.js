// import the model
const todo = require("../models/Todo");

// defind route handler
exports.deleteTodo = async(req,res) => {
    try{
       const {id} = req.params;

       const todoe = await todo.findByIdAndDelete({
        _id:id
       });

       if(!todoe){
        return res.status(404).json({
            success:false,
            message:"data is not found"
        });
       }

       res.status(200).json({
        success:true,
        data : todoe,
        message : "data is succefully deleted"
       });

    }catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json(
            {
                success:false,
                data:"sever error",
                message :err.message,
            }
        )
    }
}