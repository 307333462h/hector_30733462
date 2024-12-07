import contacto from '../models/contacto.js';
const contactanos = async(req,res)=>{
try{
const {nombre,correo,mensaje} = req.body;
await contacto.create({nombre,correo,mensaje});
 res.json({message:true});
}catch(e){
 console.error(e.message);
 res.json({message:false});
}
}

export default contactanos;