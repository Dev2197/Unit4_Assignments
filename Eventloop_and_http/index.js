const express = require("express");
// console.log(express);
const app = express();
// console.log(app);

var bd={"books":[{
    "isbn":"9781593279509",
    "title":"Eloquent JavaScript, Third Edition",
    "subtitle":"A Modern Introduction to Programming",
    "author":"Marijn Haverbeke",
    "published":"2018-12-04T00:00:00.000Z",
    "publisher":"No Starch Press",
    "pages":472,
    "description":"JavaScript lies at the heart of almost every modern web application, from social apps like Twitter to browser-based game frameworks like Phaser and Babylon. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
    "website":"http://eloquentjavascript.net/"
},
{
    "isbn":"9781491943533",
    "title":"Practical Modern JavaScript",
    "subtitle":"Dive into ES6 and the Future of JavaScript",
    "author":"Nicolás Bevacqua",
    "published":"2017-07-16T00:00:00.000Z",
    "publisher":"O'Reilly Media",
    "pages":334,
    "description":"To get the most out of modern JavaScript, you need learn the latest features of its parent specification, ECMAScript 6 (ES6). This book provides a highly practical look at ES6, without getting lost in the specification or its implementation details.",
    "website":"https://github.com/mjavascript/practical-modern-javascript"
},
{
    "isbn":"9781593277574",
    "title":"Understanding ECMAScript 6",
    "subtitle":"The Definitive Guide for JavaScript Developers",
    "author":"Nicholas C. Zakas",
    "published":"2016-09-03T00:00:00.000Z",
    "publisher":"No Starch Press",
    "pages":352,
    "description":"ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that ECMAScript 6 brings to JavaScript.",
    "website":"https://leanpub.com/understandinges6/read"
},
{
    "isbn":"9781449365035",
    "title":"Speaking JavaScript",
    "subtitle":"An In-Depth Guide for Programmers",
    "author":"Axel Rauschmayer",
    "published":"2014-04-08T00:00:00.000Z",
    "publisher":"O'Reilly Media",
    "pages":460,
    "description":"Like it or not, JavaScript is everywhere these days -from browser to server to mobile- and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position.",
    "website":"http://speakingjs.com/"
}]};

app.get("", function(req,res){
    // console.log("Hello");

    res.send("Hello");
});


app.get("/books",function(req,res){
    res.send(bd)
})



app.listen(5000, ()=>{
    console.log("listening on port 5000")
})