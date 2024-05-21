//this is pur server which will do authentication,here we'll use in-memory stores but at production level must use Databases
const express = require('express')
const {generateRegistrationOptions} = require('@simplewebauthn/server');
const crypto=require('node:crypto')
const PORT=3000;
const app = express();

if(!globalThis.crypto){
  globalThis.crypto=crypto;
}
//middleware
app.use(express.static('./public'));
app.use(express.json());

//states--storage acting as local database
const userStore={};
const challengeStore={};

app.post('/register',(req,res)=>{
  //use in-memory storages 
  const {username,password} = req.body;
  const id=`user_${Date.now()}`;
  const user={
    id,
    username,
    password
  }
  userStore[id]=user;
console.log("registered successfully",userStore[id]);
  return res.json({id});
})
//to create a challenge we'll use simplewebauth library
app.post('/register-challenge',async(req,res)=>{
const {userId} = req.body;
if(!(userStore[userId])) return res.status(404).json({error:"user nahi mila"})
const username=userStore[userId].username;  
  //agar user mil jata hai toh create achallenge
const challengePayload = await generateRegistrationOptions(
  {
    rpID:"localhost",
    rpName:'My Localhost',
    attestationType:'none',
    userName:username,
    timeout:30_000,
  }
)
challengeStore[userId] = challengePayload.challenge;
return res.json({options:challengePayload})
})

app.listen(PORT,()=> console.log(`server started at ${PORT}`))