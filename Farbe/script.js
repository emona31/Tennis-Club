const frmFarbwahl = window.document.Farbwahl; 
const inpFarbe = frmFarbwahl.farbe;
const btnNeu = frmFarbwahl.neu; 
btnNeu.addEventListener("click", farbeSetzen);

function farbeSetzen(event){
    event.preventDefault();
    let farbe = inpFarbe.value;
    document.body.style.background = farbe;
}
