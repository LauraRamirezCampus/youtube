 function yout(){
     fetch("https://youtube138.p.rapidapi.com/video/comments/?id=urZ0shWe7is&hl=en&gl=US")
     .then(datos => datos.json())
     .then(data =>{
         console.log(data);
 })}
 yout()
