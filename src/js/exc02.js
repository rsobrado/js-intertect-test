var usersArray2;

//--------- funciones mantenimiento usuarios 
//-----------------------------------------
function addUser02(userName){
  var i = {
      "id": users2.slice(-1)[0].id+1,
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
    this.users2.push(i);
    this.reloadUsersList02();
  }
}

function newUser02(){
  var textBox = document.getElementById('userName').value;
  this.addUser02(textBox);
  document.getElementById('userName').value = '';
}

function deleteUser02(userIndex){
  users2.splice(userIndex,1);
  reloadUsersList02();
}


//-------- Funciones Lista Usuarios -------
//-----------------------------------------

function createUsersList02(){

	var userList = '<ul class="demo-list-two mdl-list">'
  var btnReset = '<button class="mdl-button mdl-js-button mdl-button--raised  mdl-button--colored" onclick="resetUsers()"> RESET </button>';
  var btnLoad = '<button class="mdl-button mdl-js-button mdl-button--raised  mdl-button--accent" onclick="reloadUsersList02()"> LOAD </button>';
  var btns = '<div class="buttons">'+btnLoad+btnReset+'';

  for (var i = 0; i <= users2.length - 1; i++) {

    var _mdl_com = '</span><span class="mdl-list__item-sub-title">' + getPostByUsers02(users2[i].id) +' posts</span></span>'; 
    var btn = '<button class="mdl-button mdl-js-button mdl-button--raised  mdl-button--colored" onclick="deleteUser02('+i+')"> DELETE </button>';
    var _mdl_cardContent01  = '<div class="mdl-card__actions mdl-card--border">Total users: <b>'+users2.length+'</b></div></div>'
    var _mdl_cardLi01  = '<li class="mdl-list__item mdl-list__item--two-line"><span class="mdl-list__item-primary-content"> <i class="material-icons mdl-list__item-avatar">person</i><span>';

		userList += _mdl_cardLi01+users2[i].name + _mdl_com+btn+' </li>'
	}

	userList += '</ul></div>'+_mdl_cardContent01+btns;
  // console.log(userListTotal);
 	return userList;
}

function getPostByUsers02(id){
  var postCounter = 0;
  for (var i = 0; i <= posts2.length - 1; i++) {

    if(id == posts2[i].userId){
      postCounter++;
    }
  }
  
  return postCounter;
}


function reloadUsersList02(){
  document.getElementById('usersList').innerHTML = '';
  document.getElementById('usersList').innerHTML = createUsersList02();
}

function loadEx02(){
  document.getElementById('app').innerHTML = '';
  document.getElementById('app').innerHTML =  mdl_header(2);
  resetUsers()
}

function unLoadEx02(){
  document.getElementById('app').innerHTML = '';
}


function resetUsers(){
  getJSON('https://jsonplaceholder.typicode.com/users', function(err, data) {
    if (err != null) {
      alert('Something went wrong: ' + err);
    } else {
      users2 = data;
    }
  });
  reloadUsersList02();
}

var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status == 200) {
        callback(null, xhr.response);
      } else {
        callback(status);
      }
    };
    xhr.send();
};


getJSON('https://jsonplaceholder.typicode.com/users', function(err, data) {
    if (err != null) {
      alert('Something went wrong: ' + err);
    } else {
      users2 = data;
    }
  });


getJSON('https://jsonplaceholder.typicode.com/posts', function(err, data) {
    if (err != null) {
      alert('Something went wrong: ' + err);
    } else {
      posts2 = data;
    }
  });
