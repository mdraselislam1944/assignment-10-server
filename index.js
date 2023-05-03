const express=require('express');
const app=express();
const cors=require('cors')
const port=process.env.PORT||5000;
const ChefRecipes=require('./Chef.json');
const Recipes=require('./Recipe.json');
app.use(cors());
app.get('/',(req,res)=>{
res.send('Chef is running');
})

app.get('/chefRecipes',(req,res)=>{
    res.send(ChefRecipes);
    console.log(ChefRecipes);
})


    app.get('/recipes',(req,res)=>{
        res.send(Recipes);
        })
    


app.get('/chefRecipes/:id',(req,res)=>{
    const id=req.params.id;
    const selectedId=ChefRecipes.find(n=>n._id===id);
    res.send(selectedId);
})

app.listen(port,()=>{
    console.log(`Dragon API is running on port: ${port}`);
})