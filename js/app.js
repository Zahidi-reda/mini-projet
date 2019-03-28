//fonction invoqué immediatement 
(function () {
  var btn = document.getElementById("generate-btn");
  var citations = [{
    citaion: "Lorsque tu veux décrire la valeur d'un variable , dis : 'Vaat-Vaat'",
    autour: "Abderrahmane OUHNA"
  }, {
    citaion: "Dans la vie on ne fait pas ce que l'on veut mais on est responsable de ce que l'on est.s ",
    autour: "reda zahidi"
  }, {
    citaion: "citaion3 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur sint iste optio placeat dolor",
    autour: "auteur3"
  }, {
    citaion: "citaion4 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur sint iste optio placeat dolor",
    autour: "auteur4"
  }]
  btn.addEventListener('click', function () {

    var citationSpan = document.getElementById("quote");
    var auteurSpan = document.getElementById("autour");
    var item = citations[Math.floor(Math.random() * citations.length)];
    citationSpan.innerHTML = item.citaion;
    auteurSpan.innerHTML = item.autour;

  });
})();