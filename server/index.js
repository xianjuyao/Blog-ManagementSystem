const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
//连接数据库
mongoose.connect('mongodb://localhost/blog', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true
});

const Article = mongoose.model("Article", new mongoose.Schema({
    title: String,
    content: String
}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse application/json
app.use(bodyParser.json());
//允许跨域
app.use(require("cors")());
//新增文章
app.post("/api/articles", async (request, respond) => {
    const article = await Article.create(request.body);
    respond.send(article);
});
app.get("/api/articles", async (request, respond) => {
    const articles = await Article.find();
    respond.json(articles);
});


//删除文章
app.delete("/api/articles/:id", async (req, res) => {
    await Article.findByIdAndDelete(req.params.id);
    res.json({
        status: true
    });
});

//文章详情
app.get("/api/articles/:id", async (req, res) => {
    const article = await Article.findById(req.params.id);
    res.send(article);
});
app.put("/api/articles/:id", async (req, res) => {
    const article = await Article.findByIdAndUpdate(req.params.id,req.body);
    res.send(article);
});

app.get("/", async (request, respond) => {
    respond.send("index");
});


app.listen(8888, () => console.log("http://127.0.0.1:8888/"));