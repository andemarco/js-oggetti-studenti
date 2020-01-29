// ESERCIZIO 1
// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
var studente = {
  'nome' : 'Andrea',
  'cognome' : 'De Marco',
  'eta' : 28,
  'sesso' : 'm',
  'livello' : 'beginner'
}

console.log('Esercizio 1', studente);

for (var key in studente) {
  proprieta = (studente[key]);
}

// ESERCIZIO 2
// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome.

var studenti = [
  {
    'nome' : 'Michele',
    'cognome' : 'Alberti',
    'eta' : 28,
    'sesso' : 'm',
    'livello' : 'beginner'
  },
  {
    'nome' : 'Antonio',
    'cognome' : 'Giano',
    'eta' : 24,
    'sesso' : 'm',
    'livello' : 'beginner'
  },
  {
    'nome' : 'Savio',
    'cognome' : 'Nicolai',
    'eta' : 35,
    'sesso' : 'm',
    'livello' : 'beginner'
  }
]

for (var i = 0; i < studenti.length; i++) {
  var alunno = studenti[i]
  console.log('Esercizio 2', alunno);
  console.log(alunno.nome + ' ' + alunno.cognome);
}

// ESERCIZIO 3
// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

var iscritto = {
  'nome' : prompt('inserisci il tuo nome'),
  'cognome' : prompt('inserisci il tuo Cognome'),
  'eta' : parseInt(prompt('inserisci la tua eta')),
}
studenti.push(iscritto)

console.log('Esercizio 3', studenti);
