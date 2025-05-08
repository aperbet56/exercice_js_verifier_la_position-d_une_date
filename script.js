// Exercice JavaScript : vérifier la position d'une date

// Déclaration de la fonction datesInterval ayant comme paramètres begin(date de début de l'intervalle), end (date de fin de l'intervalle) et test (date de test) qui va retouner un booléen : true (si la date test est comprise entre begin et end) ou false (si la date test n'est pas comprise entre begin et end)
const datesInterval = (begin, end, test) => {
  return test > begin && test < end;
};

console.log(
  datesInterval(
    new Date(2009, 5, 24),
    new Date(2014, 9, 4),
    new Date(2022, 3, 22)
  )
); // false

console.log(
  datesInterval(
    new Date(2001, 12, 20),
    new Date(2014, 6, 7),
    new Date(2011, 9, 4)
  )
); // true
