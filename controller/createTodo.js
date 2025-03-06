// import the model
const todo = require("../models/Todo");

// defind route handler
exports.createTodo = async(req,res) => {
    try{
        // extract title and description from request body
        const {title,description} = req.body;
        // create a new todo obj and insert into db
        const response = await todo.create({title,description});
        // send a json respomse woth a successfull flag
        res.status(200).json(
            {
                success :true,
                data :response,
                message:'ENtry created succesffully'
            }
        );

    }catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json(
            {
                success:false,
                data:"internal sever error",
                message :err.message,
            }
        )
    }
}