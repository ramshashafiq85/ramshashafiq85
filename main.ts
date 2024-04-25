import inquirer from "inquirer"
const currency:any ={
  USD: 1,
  GUR: 0.91,
  GBP: 0.76,
  INR: 74.47,
  PKR: 280
  
};
let user_answer = await inquirer.prompt([{
 name:"from",
 message:"enter from currency",
 type:"list",
 choices:["USD","GUR","GBP","INR","PKR"]
},
{
    name:"to",
    message:"enter to currency",
    type:"list",
    choices:["USD","GUR","GBP","INR","PKR"]
   },
   {
    name:"amount",
    message:"enter your amount",
    type:"number",
    
   }

])
let fromamount=currency[user_answer.from]
let toamount=currency[user_answer.to]
let amount=user_answer.amount
let baseamount=amount/fromamount
let convertedamount=baseamount*toamount
console.log(convertedamount)




