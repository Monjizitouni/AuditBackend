const questQT = require('../Models/questQT')



const ajouteTCHAP= async (req, res) => {
    console.log(
        req.body.NUM_QT
)


console.log(
    req.body.NUM_CHAP_QT
)
console.log(
    req.body.NUM_SSCHAP_QT
)
console.log(
    req.body.LIB_SSCHAP_QT
)


    const { NUM_QT,NUM_CHAP_QT,NUM_SSCHAP_QT,LIB_SSCHAP_QT} = req.body;
  

    let nouvellenews = new questQT({});

    nouvellenews.NUM_QT = NUM_QT;
    nouvellenews.NUM_CHAP_QT = NUM_CHAP_QT;
    nouvellenews.NUM_SSCHAP_QT = NUM_SSCHAP_QT;
    nouvellenews.LIB_SSCHAP_QT = LIB_SSCHAP_QT;
  
  
    
    nouvellenews.save();

    res.status(201).send({ message: "success"});
}



const recupererquestqt = async(req,res) =>{
    let data = await questQT.find(
     {
         "$or":[
             {NUM_QT:{$regex:req.params.key}}
         ]
     }
    ).select('NUM_QT NUM_QUESTION_QT NUM_SSCHAP_QT LIB_QUESTION_QT')
    res.send(data);
    
   }
module.exports ={
    ajouteTCHAP,recupererquestqt
  }
