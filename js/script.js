// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
var studente = {
  'nome' : 'Andrea',
  'cognome' : 'De Marco',
  'eta' : 28,
  'sesso' : 'm',
  'livello' : 'beginner'
}

console.log(studente);

for (var proprieta in studente) {
  console.log(studente[proprieta]);
}


Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome.



Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.