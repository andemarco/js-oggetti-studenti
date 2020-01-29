// ESERCIZIO 1
// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
var studente = {
  'Nome' : 'Andrea',
  'Cognome' : 'De Marco',
  'Eta' : 28,
  'Sesso' : 'm',
  'Livello' : 'beginner'
}

console.log('Esercizio 1', studente);

for (var key in studente) {
  var proprieta = key + ':' + studente[key] + ', ';
  console.log(proprieta);
  $('.es1 .student').append(proprieta)
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
  $('.es2 .student').append(alunno.nome + ' ' + alunno.cognome + ', ')
}

// ESERCIZIO 3
// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
//
var iscritto = {
  'nome' : prompt('inserisci il tuo nome'),
  'cognome' : prompt('inserisci il tuo Cognome'),
  'eta' : parseInt(prompt('inserisci la tua eta')),
}
studenti.push(iscritto)

console.log('Esercizio 3', studenti);

for (var i = 0; i < studenti.length; i++) {
  var alunno = studenti[i]
  $('.es3 .student').append(studenti[i].nome + ' ' + studenti[i].cognome + ' ' + studenti[i].eta + ', ')
}
