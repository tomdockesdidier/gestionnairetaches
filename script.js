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
        if (precedent!==element) {
            element.style.display="flex";
            precedent=element;
            x=1;
        } else {
            x=0;
        }
        return (x, precedent)
    }
}

let Ltasks=[];

let txt=document.getElementById("texte");

let Liste=document.getElementById("listetaches");

function ajouter() {
    let Nadd=document.getElementById("Nadd").value;
    if (Nadd!=="") {
        let Dadd=document.getElementById("Dadd").value;
        let Nadd2=Nadd.toLowerCase();
        Ltasks.push(Nadd2);

        let main=document.createElement("div");
        main.classList.add("task");
        main.id=(Nadd2);

        let name=document.createElement("h2");
        name.id=(Nadd2 + "nom");
        let description=document.createElement("p");
        description.id=(Nadd2 + "description");
        let deletebutton=document.createElement("button");
        deletebutton.id=("Dbutton");
        deletebutton.addEventListener("click", () => supprimer(Nadd2));

        name.textContent=Nadd;
        description.textContent=Dadd;

        main.appendChild(deletebutton);
        main.appendChild(name);
        main.appendChild(description);

        Liste.appendChild(main);
        txt.textContent=`Votre tâche "${Nadd}" a été créée.`;

        let Hide1=document.getElementById("Nadd");
        let Hide2=document.getElementById("Dadd");
        Hide1.value="";
        Hide2.value="";
    } else {
        txt.textContent=`Veuillez écrire un nom.`;
    }
}

function modifier() {
    let Nmodif=document.getElementById("Nmodif").value;
    let Nmodif2=Nmodif.toLowerCase();
    let newname=document.getElementById("Newname").value;
    let newname2=newname.toLowerCase();
    let newD=document.getElementById("NewD").value;

    if (Ltasks.includes(Nmodif2)===true) {
        let pos=Ltasks.indexOf(Nmodif2);
        if (newname!=="") {
            document.getElementById(Nmodif2 + "nom").textContent=newname;
            document.getElementById(Nmodif2).id=(newname2);
            Ltasks.splice(pos,1);
            Ltasks.push(newname2);
            document.getElementById(Nmodif2 + "nom").id=(newname2 + "nom");
        }
        if (newD!=="") {
            document.getElementById(Nmodif2 + "description").textContent=newD;
            document.getElementById(Nmodif2 + "description").id=(newname2 + "description");
        }
        if (newname==="") {
            txt.textContent=`Votre tâche "${Nmodif}" a bien été modifiée.`;
        } else {
            txt.textContent=`Votre tâche "${Nmodif}" a bien été modifiée, elle se nomme à présent "${newname}".`;
        }
        let Hide1=document.getElementById("Nmodif");
        let Hide2=document.getElementById("Newname");
        let Hide3=document.getElementById("NewD");
        Hide1.value="";
        Hide2.value="";
        Hide3.value="";
    } else if (Nmodif==="") {
        txt.textContent="Veuillez écrire un nom.";
    } else {
        txt.textContent="Vous n'avez pas de tâche à ce nom.";
    }
}

function supprimer(element) {
    let Ndelete=document.getElementById("Ndelete").value.toLowerCase();
    if (Ltasks.includes(Ndelete)===true) {
        let pos=Ltasks.indexOf(Ndelete);
        Ltasks.splice(pos, 1);
        document.getElementById(Ndelete).remove();
        txt.textContent="Votre tâche a bien été supprimée.";

        let Hide1=document.getElementById("Ndelete");
        Hide1.value="";
    } else if (Ltasks.includes(element)===true) {
        let pos=Ltasks.indexOf(element);
        Ltasks.splice(pos, 1);
        document.getElementById(element).remove();
        txt.textContent="Votre tâche a bien été supprimée.";
    } else if (Ndelete==="") { 
        txt.textContent="Veuillez écrire un nom.";
    } else {
        txt.textContent="Vous n'avez pas de tâche à ce nom.";
    }
}