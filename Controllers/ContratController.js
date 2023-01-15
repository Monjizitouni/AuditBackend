const Contrat = require('../Models/TCONTRAT');
const TQP = require('../Models/TQP');
const TTYPCONTRAT = require('../Models/TTYP_CONTRAT');


const recuperercontrat = async(req,res) =>{
    
     resultarray = [];
    let data = await Contrat.find(
     
         
             { NUM_CLIENT: req.params.key}
         
     
    )
console.log(data)
  

data.forEach(   async element => {
    
    console.log("this is the element:"+ element);
     
     
     
        
        await getcontrat(element.COD_TYP_CONTRAT).then(function (result) {
            resultarray.push(result[0]);
            

            console.log(resultarray)
        });
       

    
        

    
   })
   

   
 
   //let result = { name: "hello", tarray: resultarray}
   //console.log("+++++++++")
 setTimeout(function(){
    console.log("this is the array:"+ resultarray);
    res.send(resultarray);
 },1000);
}
async function getcontrat(codetypecontrat){
    console.log("this is the passed value:"+codetypecontrat)
    let data = await TTYPCONTRAT.find({ 
        COD_TYP_CONTRAT : codetypecontrat } )
console.log("this the data:"+data);
            return data;
            
        

}

   const recupererTQP = async(req,res) =>{
    let data = await Contrat.find(
     
         
             { NUM_CLIENT: req.params.key}
         
     
    )

  

console.log(data)
    let data1 = await TQP.find({ 
        NUM_QP: data[0].NUM_QP } )
    res.send(data1);


    
   }


module.exports ={
    recuperercontrat,recupererTQP
   
 }