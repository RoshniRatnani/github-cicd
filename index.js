import express from 'express';

const app = express();
const port = process.env.PORT ?? 8080;

app.get('/', (req,res)=>{
  return res.json({msg:`Hello Everyone !`});
})

app.listen(port,()=>{
  console.log("running on port", port);
});