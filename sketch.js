// idade: 14 anos 
// Comédia: As Branquelas
// Ação: Vingadores
// Animação: Desencanto 

// idade: 10 anos 
// Comédia: Icarly
// Ação: Jovens Titãns
// Animação: Hora de Aventura

// idade: 18anos
// Comédia: American Pie
// Ação: DeadPool
// Animação: Rick and Morty

// idade: livre 
// Comédia: Scooby-Doo
// Ação: Homem Aranha: Atravéz do Aranhaverso
// Animação: Peppa Pig

let campoldade;
let campoComedia;
let campoAcao;
let campoAnimacao; 

function setup() {
  createCanvas(800, 400);
  createElement('h1' , 'Recomendador de filmes e series');
  createSpan('Informe sua idade:  ')
  campoldade = createInput();
 campoAcao =createCheckbox('Comédia');
  campoComedia = createCheckbox('Açaõ');
  campoAnimação = createCheckbox('Animação')
}

function draw() {
  background("blue");
  textAlign(CENTER, CENTER);
  textSize(40);
  fill("white");
  
  let idade = campoldade.value();
  let Comedia = campoComedia. checked();
  let Acao = campoAcao. checked();
  let Animacao = campoAnimacao. checked()
  
  let filme = geraRecomendacao(idade, Comedia, Acao, Animacao);
 
  text(filme, width/2, height/2);

}

function geraRecomendacao(idade, Comedia, Acao, Animacao){
  if(idade >= 18){
  if(Comedia){
    return 'American Pie'
  } else if(Acao){
    return 'DeadPool'
  }else  if (Animacao){
    return 'Rick and Morty'
  } else{
    return 'DeadPool'
  }
 } else if(idade >= 14){
   if(Comedia){
    return 'As Branquelas'
   }else if (Acao){
     return 'vingadores'
   }else if(Animacao){
     return 'Desencanto'
  }else{
     return 'Desencanto'
   } 
  }else if(idade>= 10){
    if(Comedia){ 
     return 'ICarly'
   }else if (Acao){
     return 'Jovens Titãns'
   }else if(Animacao){ 
     return 'Hora da Aventura'
   }else{
     return 'Jovens Titãns'
   } 
  }else
    if(Comedia){
     return 'Scooby-Doo'
   }else if(Acao){
     return 'Homem Aranha: Através do Multiverso'
   }else if(Animacao){
     return 'Peppa Pig'
   }else{
     return 'Homem Aranha: Através do Multiverso'
   }
  
}
