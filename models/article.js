const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title : {
        type : String,
        unique : true,
        required : true
    },
    author : {
        type : String,
    },
    date : {
        type : Date,
        required : true
    },
    url : {
        type : String,
        required : true
    }
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;