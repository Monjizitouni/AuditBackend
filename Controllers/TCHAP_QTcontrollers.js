const TQT = require('../Models/TQT')
const TCHAP = require('../Models/TCHAP_QT')




const recupererChap = async(req,res ,data) =>{
   
    num =req.body.NUM_QT
    pharm = await TQT.findOne(num).select('INTITULE_QT')
  
    res.send( pharm)
  }
  const recupererChapp = async(req,res) =>{
   let data = await TCHAP.find(
    {
        "$or":[
            {NUM_QT:{$regex:req.params.key}}
        ]
    }
   ).select('NUM_CHAP_QT LIB_CHAP_QT')
   res.send(data);
   
  }





const ajouteTCHAP= async (req, res) => {
    console.log(
        req.body.NUM_QT
)


console.log(
    req.body.NUM_CHAP_QT
)
console.log(
    req.body.LIB_CHAP_QT
)


    const { NUM_QT,NUM_CHAP_QT,LIB_CHAP_QT} = req.body;
  

    let nouvellenews = new TCHAP({});

    nouvellenews.NUM_QT = NUM_QT;
    nouvellenews.NUM_CHAP_QT = NUM_CHAP_QT;
    nouvellenews.LIB_CHAP_QT = LIB_CHAP_QT;
  
  
    
    nouvellenews.save();

    res.status(201).send({ message: "success"});
}
module.exports ={
    recupererChap ,ajouteTCHAP,recupererChapp
 }