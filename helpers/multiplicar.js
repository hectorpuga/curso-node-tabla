const fs=require('fs');
const colors = require('colors');
 const crearArchivo=async(base=5,l,h=10) =>{

    try {
        
      
    
        let salida='';
        let consola='';
        for (let i = 1; i <=h; i++) {
            salida+=`${base} x ${i} = ${base*i}\n`;
            consola+=`${base} ${colors.green('x')} ${i} = ${base*i}\n`;
            
        }
        if(l){
            console.log('==========================='.green)
            console.log(colors.blue(`     Tabla del: ${base}`))
            console.log('==========================='.green)    
            console.log(consola);}
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
        
        return `tabla-${base}.txt creada`;
        
    } catch (err) {
        throw err
    }
};

module.exports={crearArchivo};