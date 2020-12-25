const express = require("express");
const authorRouter = express.Router();
const Authordata = require("../model/Authordata");

function router(nav, nav1, nav2, nav3) {

    authorRouter.get("/", function (req, res) {
        Authordata.find()
            .then(function (authors) {
                res.render("authors",
                    {
                        nav,
                        title: 'Library',
                        authors,
                        nav1,
                        nav2
                    });
            });

    });
    authorRouter.get("/addAuthor", function (req, res) {
        res.render("addAuthor",
            {
                nav,
                title: 'Library',
                nav1,
                nav2
                //add author link create
            });
    });



    authorRouter.post("/add", function (req, res) {

        var item = {
            name: req.body.name,
            genre: req.body.genre,
            image: req.body.image
        };
        var author = Authordata(item);
        author.save();
        res.redirect('/authors');
    });



    authorRouter.get("/:id", function (req, res) {
        const id = req.params.id;
        Authordata.findOne({ _id: id })
            .then(function (author) {
                res.render("author",
                    {
                        nav,
                        title: 'Library',
                        author,
                        nav1,
                        nav2,
                        nav3
                    });
            });

    });

    return authorRouter;
}
module.exports = router;