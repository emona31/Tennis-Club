const frmArtikelNeu = window.document.neuerartikel;
const inpArtikelId = frmArtikelNeu.artikelnummer;
const inpArtikelBezeichnung = frmArtikelNeu.artikelbezeichnung;
const inpBruttopreis = frmArtikelNeu.bruttopreis;
const btnAbschicken = frmArtikelNeu.abschicken;
const lblMeldung = document.querySelector('#meldung');

btnAbschicken.addEventListener("click", fArtikelEinfuegen);

function fArtikelEinfuegen(event) {
        event.preventDefault(); // Prevent page reload
        const bezeichnen = parseFloat(inpArtikelBezeichnung.value);
        const artikelnummer = parseFloat (inpArtikelId);
        const bruttopreis = parseFloat (inpBruttopreis.value);
        const nettopreis = (bruttopreis/1.19);
        lblMeldung.innerHTML = "Der Nettopreis beträgt"+nettopreis+bezeichnen+artikelnummer;
    }
    