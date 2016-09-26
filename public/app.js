
//ul
//li
//img

// window.onload = function() {
//   var catUl = document.createElement('ul');
//   catUl.classList.add('cat');

//   var catName = document.createElement('li');
//   catName.innerText = "Name: Lola";

//   var catFavFood = document.createElement('li');
//   catFavFood.innerText = "Favourite food: Beef jerky";

//   var catImg = document.createElement('img');
//   catImg.src = "Lola.jpg"

//   catUl.appendChild(catName);
//   catUl.appendChild(catFavFood);
//   catUl.appendChild(catImg);

//   var cats = document.querySelector('#cats');
//   cats.appendChild(catUl);
// }

/////////////////////////////////////////////////////////////////////

var app = function() {
  addCat( "Name: Lola", "Favourite food: Beef jerky", "Lola.jpg" );
}

var addCat = function( name, food, img ) {
  var catUl = createCatUl();
  var catName = createCatName(name);
  var catFavFood = createCatFavFood(food);
  var catImg = createCatImg(img);
  var cats = document.querySelector('#cats');
  appendElements(cats, catUl, catName, catFavFood, catImg);
}

var createCatUl = function() {
  var catUl = document.createElement('ul');
  catUl.classList.add('cat');
  return catUl;
}

var createCatName = function( name ) {
  var catName = document.createElement('li');
  catName.innerText = name + " ";
  return catName;
}

var createCatFavFood = function( food ) {
  var catFavFood = document.createElement('li');
  catFavFood.innerText = food + " ";
  return catFavFood;
}

var createCatImg = function( img ) {
  var catImg = document.createElement('img');
  catImg.innerHTML = img;
  return catImg;
}

var appendElements = function( cats, catUl, catName, catFavFood, catImg ) {
  catName.appendChild(catFavFood);
  catUl.appendChild(catImg);
  catUl.appendChild(catName);
  cats.appendChild(catUl);
}

window.onload = app;