function changeImage(element){
  var x = document.getElementById("image0");

  // var x = element.getElementsByTagName("img").item(0);
  console.log("x = ", x);

  var v = x.getAttribute("src");
  console.log("v  = ", v);
  var logo = null;

  x.setAttribute("src", "/img/nbalogo/Boston.svg")
  findLogo()

  //x.setAttribute("src", "logo")
  //console.log("resultat function"+ findLogo("Chichago", logo))
}












///////////////
function findLogo(ville, logo){
  Team = ["Boston, Brooklyn, New York, Philadelphia, Toronto, Chicago, Cleveland, Detroit, Indiana, Milwaukee, Atlanta, Charlotte, Miami, Orlando, Whashington, Denver, Minesota, Oklahoma City, Portland, Utah, Golden State, LA, Los Angeles, Phoenix, Sacramento, Atlanta, Charlotte, Miami, Orlando, Washington, Dallas, Houston, Memphis, New Orleans, San Antonio"];
  logo = Team.find(element)+".svg";
  return logo
}
