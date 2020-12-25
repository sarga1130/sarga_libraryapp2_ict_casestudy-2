const express = require("express");
const booksRouter = express.Router();
const Bookdata = require("../model/Bookdata");

function router(nav,nav1,nav2,nav3){
    
    booksRouter.get("/",function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render("books",
            {
                nav,
                title:'Library',
                books,
                nav1,
                nav2
            });
        })        
    });
    
    
    

    booksRouter.get("/addBook",function(req,res){
        res.render("addBook",
        {
            nav,
            title:'Library',
            nav1,
            nav2
        });
    });

    booksRouter.post("/add",function(req,res){
        var item = {
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        image: req.body.image
        };
        var book = Bookdata(item);
        book.save();
        res.redirect('/books');
        
    });

    booksRouter.get("/:id",function(req,res){
        const id = req.params.id;
        Bookdata.findOne({_id:id})
        .then(function(book){
            res.render("book",
            {
                nav,
                title:'Library',
                book,
                nav1,
                nav2,
                nav3
            });
        });
        
    });

    return booksRouter;
}

module.exports = router;