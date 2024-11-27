let Badd=document.getElementById("Badd");
let Bmodif=document.getElementById("Bmodif");
let Bdelete=document.getElementById("Bdelete");

let add=document.getElementById("add");
let modif=document.getElementById("modif");
let delet=document.getElementById("delete");

let x=0;
let precedent;

function display(element) {
    if (x===0) {
        element.style.display="flex";
        precedent=element;
        x=1;
        return (x, precedent)
    } else {
        precedent.style.display="none";
        x=0;
        return x
    }
}

let Ltasks=[];
let Nmodif=document.getElementById("Nmodif");
let newname=document.getElementById("Newname");
let newD=document.getElementById("NewD");

let txt=document.getElementById("texte");

let Liste=document.getElementById("listetaches");

function ajouter() {
    let Nadd=document.getElementById("Nadd").value;
    let Dadd=document.getElementById("Dadd").value;
    Ltasks.push(Nadd);

    let main=document.createElement("div");
    main.classList.add("task");
    main.id=(Nadd);

    let name=document.createElement("h2");
    name.id=(Nadd + "nom");
    let description=document.createElement("p");
    description.id=(Nadd + "description");

    name.textContent=Nadd;
    description.textContent=Dadd;

    main.appendChild(name);
    main.appendChild(description);

    Liste.appendChild(main);
    txt.textContent=`Votre tâche "${Nadd}" a été créée.`
}

function modifier() {
    let Nmodif=document.getElementById("Nmodif").value;
    let newname=document.getElementById("Newname").value;
    let newD=document.getElementById("NewD").value;
    if (Ltasks.includes(Nmodif)===true) {
        if (newname!=="") {
            document.getElementById(Nmodif + "nom").textContent=newname;
            document.getElementById(Nmodif).id=(newname);
            Ltasks
        }
        if (newD!=="") {
            document.getElementById(Nmodif + "description").textContent=newD;
        }
        if (newname==="") {
            txt.textContent=`Votre tâche "${Nmodif}" a bien été modifiée.`
        } else {
            txt.textContent=`Votre tâche "${Nmodif}" a bien été modifiée, elle se nomme à présent "${newname}".`
        }
    } else if (Nmodif="") {
        txt.textContent="Veuillez écrire un nom.";
    } else {
        txt.textContent="Vous n'avez pas de tâche à ce nom.";
    }
}

function supprimer() {
    let Ndelete=document.getElementById("Ndelete").value;
    if (Ltasks.includes(Ndelete)===true) {
        let pos=Ltasks.indexOf(Ndelete);
        Ltasks.splice(pos, 1);
        document.getElementById(Ndelete).remove();
        txt.textContent="Votre tâche a bien été supprimée.";
    } else if (Ndelete==="") { 
        txt.textContent="Veuillez écrire un nom.";
    } else {
        txt.textContent="Vous n'avez pas de tâche à ce nom.";
    }
}