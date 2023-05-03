const express=require('express');
const app=express();
const cors=require('cors')
const port=process.env.PORT||5000;
const ChefRecipes=require('./Chef.json');
app.use(cors());
app.get('/',(req,res)=>{
res.send('Chef is running');
})

app.get('/chefRecipes',(req,res)=>{
    res.send(ChefRecipes);
    })

// app.get('/news',(req,res)=>{
//         res.send(news);
//     })
// app.get('/news/:id',(req,res)=>{
//        const id=req.params.id;
//     const selectedNws=news.find(n=>n._id===id);
//     res.send(selectedNws);
//     })

// app.get('/categories/:id',(req,res)=>{
//     const id=parseInt(req.params.id);
//     // console.log(id);
//     if(id===0){
//         res.send(news)
//     }
//     else{
//         const categoryNews=news.filter(n=>parseInt(n.category_id)===id)
//         res.send(categoryNews);
//     }
// })

app.listen(port,()=>{
    console.log(`Dragon API is running on port: ${port}`);
})