const TQT = require('../Models/TQT')



const recupererTQT = async(req,res ,data) =>{
    TQT.find((err, data)=>{
        res.json(data);
        
    });
}


const ajouteTQT= async (req, res) => {
    console.log(
        req.body.NUM_QT
)


console.log(
    req.body.DATE_QT
)
console.log(
    req.body.INTITULE_QT
)


    const { NUM_QT,DATE_QT,INTITULE_QT} = req.body;
  

    let nouvellenews = new TQT({});

    nouvellenews.NUM_QT = NUM_QT;
    nouvellenews.DATE_QT = DATE_QT;
    nouvellenews.INTITULE_QT = INTITULE_QT;
  
  
    
    nouvellenews.save();

    res.status(201).send({ message: "success"});
}


module.exports ={
    recupererTQT,ajouteTQT
 }