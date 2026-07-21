const express = require('express');
const morgan=require('morgan');
const app=express();
const PORT=3000;

app.use(morgan("dev"));

app.get("/",(req,res)=>{
    res.send("Actividad 2 Karime Rendon ")
});

// Numero par o impar 
app.get("/par/:numero",(req,res)=>{
    const numero=Number(req.params.numero);
    if (numero % 2 === 0) {
        res.send(`${numero} es un numero par.`);
    } else {
        res.send(`${numero} es un numero impar.`);
    }
});

//Mayor de edad
app.get("/edad/:edad",(req,res)=>{
    const edad=Number(req.params.edad);
    if(edad >=18){
        res.send("Eres mayor de edad");
    }else{
        res.send("Eres menor de edad");
    }
});

//Calculadora
app.get("/calculadora/:operacion/:a/:b",(req,res)=>{
    const a= Number(req.params.a);
    const b=Number(req.params.b);
    const operacion=req.params.operacion;

    if(operacion=="suma"){
        const resul= a+b;
        res.send(`La suma de: ${a} + ${b} = ${resul}`)
    }if(operacion=="resta"){
        const resul= a-b;
        res.send(`La resta de: ${a} - ${b} = ${resul}`)
    }if(operacion=="multiplicacion"){
        const resul=a*b;
        res.send(`La multiplicacion de: ${a} * ${b} = ${resul}`)

    }if(operacion=="division"){
        const resul= a/b;
        res.send(`La division de ${a} / ${b} = ${resul}`)
    }
})

//tabla de multiplicar 
app.get("/tabla/:numero",(req,res)=>{
    const numero=Number(req.params.numero);
    let tabla = `Tabla de multiplicar del ${numero}:\n`;
    for( let i=0; i<=10 ; i++){
        tabla += `${numero} x ${i} = ${numero * i}\n`;  
    }
    res.send(`<pre>${tabla}</pre>`);
})

//Calificacion 
app.get("/calificacion/:nota",(req,res)=>{
    const nota=Number(req.params.nota);
    if(nota<70){
        res.send("Reprobado")
    }if(nota>=70 && nota<80){
        res.send("Aprobado")
    }if(nota>=80 && nota<90){
        res.send("Muy bien")
    }if(nota>=90){
        res.send("Excelente")
    }
})

app.listen(PORT,()=>{
    console.log("Servidor corriendo en http://localhost:"+ PORT);
})

