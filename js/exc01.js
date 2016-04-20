var usersArray1 = users;
//--------- funciones mantenimiento usuarios 
//-----------------------------------------
function addUser(userName){
  var i = {
      "id": users.slice(-1)[0].id+1,
      "name": userName,
      "username": "",
      "email": "",
      "address": {
        "street": "",
        "suite": "",
        "city": "",
        "zipcode": "",
        "geo": {
          "lat": "",
          "lng": ""
        }
      }};
  if (!userName=='') {
    this.users.push(i);
    this.reloadUsersList();
  }
}

function newUser01(){
  var textBox = document.getElementById('userName').value;
  this.addUser(textBox);
  document.getElementById('userName').value = '';
}

function deleteUser(userIndex){
  users.splice(userIndex,1);
  reloadUsersList();
}


//-------- Funciones Lista Usuarios -------
//-----------------------------------------

function createUsersList(){

	var userList = '<ul class="demo-list-two mdl-list">'

  for (var i = 0; i <= users.length - 1; i++) {

    var _mdl_com = '</span><span class="mdl-list__item-sub-title">' + getPostByUsers(users[i].id) +' posts</span></span>'; 
    var btn = '<button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" onclick="deleteUser('+i+')"> DELETE </button>'
    var _mdl_cardContent01  = '<div class="mdl-card__actions mdl-card--border">Total users: <b>'+users.length+'</b></div><div class="mdl-card__menu"></div></div></div>'
    var _mdl_cardLi01  = '<li class="mdl-list__item mdl-list__item--two-line"><span class="mdl-list__item-primary-content"> <i class="material-icons mdl-list__item-avatar">person</i><span>';

		userList += _mdl_cardLi01+users[i].name + _mdl_com+btn+' </li>'
	}

	userList += '</ul></div>'+_mdl_cardContent01;
  // console.log(userListTotal);
 	return userList;
}

function getPostByUsers(id){
  var postCounter = 0;
  for (var i = 0; i <= posts.length - 1; i++) {

    if(id == posts[i].userId){
      postCounter++;
    }
  }
  
  return postCounter;
}


function reloadUsersList(){
  document.getElementById('usersList').innerHTML = '';
  document.getElementById('usersList').innerHTML = createUsersList();
}

function loadEx01(){
  document.getElementById('app').innerHTML = '';
  document.getElementById('app').innerHTML =  mdl_header(1);
  reloadUsersList();
}

function unLoadEx01(){
  document.getElementById('app').innerHTML = '';
}

(function(){
  loadEx01();
})();




