import express from 'express';
import path, { dirname } from 'path';
import { title } from 'process';
import{fileURLToPath} from "url";

let app=express();
let port=3000;

//get directory 
let __fileName=fileURLToPath(import.meta.url);
console.log(__fileName);
let __dirName=path.dirname(__fileName);

// use static assets 
app.use(express.static('public'));

app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.urlencoded({extended:true}));

// app.get('/', (req, res) => {
//     res.send(path.join(__dirName,"views","index.pug"));
//   })

// link to html pages

// app.get('/about', (req, res) => {
//   res.sendFile(path.join(__dirName,"public","about.html"));
// })
// app.get('/blog', (req, res) => {
//     res.sendFile(path.join(__dirName,"public","blog.html"));
//   })

// for server sides pages

app.get('/about', (req, res) => {
  res.render(("about"));
})
app.get('/blog', (req, res) => {
    res.render(("blog"));
  })

// async (params) => {
    // server pug route
app.get("/",async (req,res)=>{
    let foodlist= await fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=a0e887efd65c4f4c9da49d343ddfa8bc&number=4');

let foodMenu=await foodlist.json();
console.log({foodMenu});
    // res.render("index");

    let drinkList= await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic');

let drinks=await drinkList.json();
console.log({drinks});

let fewerDrinks = drinks.drinks.slice(0, 8)

res.render('index', {data:foodMenu.results, drinks:fewerDrinks});
});

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

// app.get("/",async (req,res)=>{
    
//     // res.render("index");

// res.render('index', {data:drinks.results});
// });


// form data through the form on the server

app.get('/about',(req,res)=>{
    res.send("Ok");

})
app.post("/about", (req,res)=>{
    console.log("form received");
    console.log({req:req.body});

    let body=req.body;

    let name=body.name;
    console.log({name});

    let phone=body.phone;
    let email=body.email
    let message=body.message
// making changes g

    res.send("Ok");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})