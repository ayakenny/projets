// Script d'affichage des menus d'applications et de gestion du profil

// Affichage du menu d'applications
var etat_appli = 0;
function menu_appli() {
  if(etat_appli == 0) { 
    $('#menu-appli').css("transform","translate(100%,0)");
    etat_appli = 1;
    // console.log(etat_appli);
  }else{
    $('#menu-appli').css("transform","translate(-100%,0)");
    etat_appli = 0;
    // console.log(etat_appli);
  }
};


// Script pour l'affichage du centre de notifications
var etat_notif = 0;
function centre_notification() { 
  if(etat_notif == 0) { 
    $('#centre-notification').css("transform","translate(0,104%)");
    etat_notif = 1;
    // console.log(etat_notif);
  }else{
    $('#centre-notification').css("transform","translate(0,-104%)");
    etat_notif = 0;
    // console.log(etat_notif);
  }
};


// Script pour l'affichage du profil de l'agent
var etat_agent = 0;
function profil_agent() { 
  if(etat_agent == 0) { 
    $('#menu-profil').css("transform","translate(-100%,0)");
    etat_agent = 1;
    // console.log(etat_agent);
  }else{
    $('#menu-profil').css("transform","translate(+100%,0)");
    etat_agent = 0;
    // console.log(etat_agent);
  }
};


// Pour changer l'état lu ou non lu d'une notification
function statut_notif(clicked_id) {
  var element = document.getElementById(clicked_id);
  var frere = document.getElementById(clicked_id).nextElementSibling;
  // console.log(frere);
  var closest = element.closest('.notif');
  
  if (closest) {
    closest.style.backgroundColor = "#1784a2";

    // Changement des icones pour correspondre avec la nouvelle couleur de fond
    element.src = "img/checkmark_2.png";
    frere.src = "img/fleche_2.png";
  };
}


//Gestion du drag and drop des applications
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  var img;
  ev.dataTransfer.setData("text", ev.target.id);
  ev.dataTransfer.setDragImage(img,10,10);
}


function drop(ev) {
  ev.preventDefault();
  let elementId = ev.dataTransfer.getData("text");
  let clone = document.getElementById(elementId).cloneNode(true);
  // console.debug(ev.target);
  ev.target.appendChild(clone);
}


// Apparition des bordures lors du drag d'une application
function apparition() {
  $('.zone-depot').css("border","solid 4px #fff");
  $('.zone-depot').css("border-radius","10px");
}


// Disparition des bordures lors du drop de l'application
function suppression() {
  $('.zone-depot').css("border","none");
}