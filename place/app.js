let ranger = document.querySelector("#RG").value;
let colonnes = document.querySelector("#CL").value;

let bloc = document.querySelector("#centre");


function valider(){
    ranger = document.querySelector("#RG").value;
    colonnes = document.querySelector("#CL").value;

    console.log(ranger);
    console.log(colonnes);
   
    document.querySelector("#RG").value = "15";
    document.querySelector("#CL").value ="9";
   
   
    document.querySelector("#RG").value = parseInt(ranger) ;
    document.querySelector("#CL").value = parseInt(colonnes);
    blocus();
}




//console.log(ranger);


function blocus(){

    let contenu="";

    for (let i=0; i<ranger; i++ ) {


        /*
        let paragraphe = document.createElement('p');
        bloc.appendChild(paragraphe);
        let inpute = document.createElement('input');
        inpute.type = "checkbox";
        inpute.className="oup";
        inpute.className="to";
        paragraphe.appendChild(inpute);
        */
        

        
        contenu = contenu+'<p' + ' class=range' + i +'>';
      
       
        for (let j=0; j<colonnes; j++ ) {
        contenu =  contenu + 'a ';
        }


        contenu = contenu+'</p>';
        
    }  
    


    bloc.innerHTML+=contenu;


    let para = bloc.querySelectorAll("p");
    console.log(para);
   // para.style.backgroundColor ="red";
   // para.setAttribute("style", "background-color: red;");
    //let c = bloc.childNodes.length;
    //console.log(bloc.childNodes);
  //  para.className = "mystyle";

}






function createBloc(){

    let blocNbr = nbrBloc();
    
    let serial = document.querySelector("#serial");
    //serial.innerHTML="test";

    let serialContenu = "";
    //serial.innerHTML=serialContenu;

    for (let k=0; k<blocNbr; k++ ) {

        serialContenu += '<div class="bloc bloc'+k+'">';

        serialContenu += '<div>colonne'+k+'</div>';
        serialContenu +='<input id="" type="text" name="firstname" value="'+k+'" class="impCL">';
        serialContenu += '<div>ranger'+k+'</div>';
        serialContenu +='<input id="" type="text" name="firstname" value="'+k+'" class="impRG">';
        serialContenu += '<div>total'+k+'</div>';
        serialContenu +='<input id="" type="text" name="firstname" value="'+k+'" class="impTotal"><br>';
        serialContenu +='<button onclick="Custom(this)">Valider'+k+'</button>';
        serialContenu += '</div> <br>';
    }

    serial.innerHTML=serialContenu;

}
let tbc = document.querySelectorAll(".impCL").value;
console.log(tbc);

let tbr = document.querySelectorAll(".impCL").value;
console.log(tbr);


let = tableauColonne=[];
let = tableauRanger=[];





function Custom(arg){

    console.log(arg);
    console.log(arg.parentNode);

    cl = arg.parentNode.querySelector(".impCL");
    console.log(cl);
    let col = cl.value;

    rg = arg.parentNode.querySelector(".impRG");
    console.log(rg);
    let rang = rg.value;


    tot = arg.parentNode.querySelector(".impTotal");
    console.log(tot);
    let total = tot.value;

        

    arg.parentNode.querySelector(".impCL").value = parseInt(col) ;
    arg.parentNode.querySelector(".impRG").value = parseInt(rang) ;
    arg.parentNode.querySelector(".impTotal").value = parseInt(col*rang) ;

    console.log(arg.parentNode.querySelector(".impCL").value)
    console.log(arg.parentNode.querySelector(".impRG").value)
    console.log(arg.parentNode.querySelector(".impTotal").value)




    /*
    ranger = document.querySelector("#RG").value;
    colonnes = document.querySelector("#CL").value;

    console.log(ranger);
    console.log(colonnes);
   
    document.querySelector("#RG").value = "15";
    document.querySelector("#CL").value ="9";
   
   
    document.querySelector("#RG").value = parseInt(ranger) ;
    document.querySelector("#CL").value = parseInt(colonnes);
    blocus();*/
    
    
}

function Custom2(){

}


function nbrBloc(){


    nbr = document.querySelector("#NBR");
    //console.log(nbr);
    nbr = document.querySelector("#NBR").value;
    console.log(nbr);
    return nbr;


    

}

