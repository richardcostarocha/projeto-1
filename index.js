 var resporta = []
 var veredito = 0;
resporta.push(prompt("Telefonou para a vítima? (s/n)"));
resporta.push(prompt("Esteve no local do crime? (s/n)"));
resporta.push(prompt("Mora perto da vítima? (s/n)"));
resporta.push(prompt("Devia para a vítima? (s/n)"));
resporta.push(prompt("Já trabalhou com a vítima? (s/n)"));
for(let i=0; i < 5; i++){
  if(resporta[i]==="s"){
    veredito++;
  }
}
if (veredito === 2){
  console.log("Suspeita");
}else if (veredito === 3 || veredito === 4){
  console.log("Cúmplice");
}else if (veredito === 5){
  console.log("Assassino");
}else{
  console.log("Inocente");
}