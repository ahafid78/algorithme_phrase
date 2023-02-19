


let phrase = prompt ("Entrer une phrase se terminant par un point");

let nbcaracts= 0;
let nbvoyelles = 0;
let nbmots = 0;


for (i=0; i < phrase.length; i ++) {
    let c = phrase[i];

    if ("aeiouAEIOU"+" "+".".includes(c)) {
                
        nbcaracts++;
    }
}

for (i=0; i < phrase.length; i ++) {
    let c = phrase[i];

    if ("aeiouAEIOU".includes(c)) {
        nbvoyelles++;  
    }
}



for (i=0; i < phrase.length; i ++) {
    let c = phrase[i];

    if (c!==" " && c!=="." ) {
        nbmots++;
    }         
}

console.log ("La phrase contient" + nbmots + "mots");

console.log ("La phrase contient" + nbcaracts + "caracteres");

console.log ("La phrase contient" + nbvoyelles +  "voyelles");


