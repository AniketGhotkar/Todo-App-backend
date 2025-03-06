// import the model
const todo = require("../models/Todo");

// defind route handler
exports.updateTodo = async(req,res) => {
    try{
        //  it is second method to extract id
        const {id} = req.params;
        const {title,description} = req.body;

        const todoe = await todo.findByIdAndUpdate(
            {_id :id},
            {title,description,updated_At : Date.now()}
        );

        res.status(200).json(
            {
                success :true,
                data :todoe,
                message:'Updated successfully'
            }
        );

    }catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json(
            {
                success:false,
                data:"server error",
                message :err.message,
            }
        )
    }
}