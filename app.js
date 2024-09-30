import express from 'express';
const app = express();
const port = 5555;

app.use(express.json());



app.get('/',(req,res)=>{
    res.json("My Api Running Perfectly!!")
})





app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
