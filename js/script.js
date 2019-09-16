console.log("az");

let largeur = 5;
let longueur = 8;

let ligne1= document.querySelector(".ligne1");
console.log(ligne1);


let uncheck = '<input type="checkbox" name="" value="">';
let check ='<input type="checkbox" name="" value="" checked>';


//ligne1.innerHTML = uncheck  ;




for(let i = 0; i< largeur;i++){
  //  ligne1.innerHTML = ligne1.innerHTML + uncheck;
     //largeur de la ligne 
     for(let j = 0; j< longueur;j++){
        ligne1.innerHTML =  ligne1.innerHTML + uncheck ;
        
     }
    //on a creer une ligne il faut passer a la ligne n est pas ?
     ligne1.innerHTML =  ligne1.innerHTML +'<br>';
     //on a passe a la ligne on va creer la ligne i+1
}



