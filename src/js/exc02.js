var usersArray2 = users2;
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

  for (var i = 0; i <= users2.length - 1; i++) {

    var _mdl_com = '</span><span class="mdl-list__item-sub-title">' + getPostByUsers02(users2[i].id) +' posts</span></span>'; 
    var btn = '<button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" onclick="deleteUser02('+i+')"> DELETE </button>'
    var _mdl_cardContent01  = '<div class="mdl-card__actions mdl-card--border">Total users: <b>'+users2.length+'</b></div><div class="mdl-card__menu"></div></div></div>'
    var _mdl_cardLi01  = '<li class="mdl-list__item mdl-list__item--two-line"><span class="mdl-list__item-primary-content"> <i class="material-icons mdl-list__item-avatar">person</i><span>';

		userList += _mdl_cardLi01+users2[i].name + _mdl_com+btn+' </li>'
	}

	userList += '</ul></div>'+_mdl_cardContent01;
  // console.log(userListTotal);
 	return userList;
}

function getPostByUsers02(id){
  var postCounter = 0;
  for (var i = 0; i <= posts.length - 1; i++) {

    if(id == posts[i].userId){
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
  reloadUsersList02();
}

function unLoadEx02(){
  document.getElementById('app').innerHTML = '';
}


var getJSON = function(url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.responseType = 'jsonp';
    xhr.onload = function() {
      var status = xhr.status;
      if (status == 200) {
        resolve(xhr.response);
      } else {
        reject(status);
      }
    };
    xhr.send();
  });
};

getJSON('https://jsonplaceholder.typicode.com/users').then(function(data) {
    alert('Your Json result is:  ' + data.result); //you can comment this, i used it to debug

    result.innerText = data.result; //display the result in an HTML element
}, function(status) { //error detection....
  alert('Something went wrong.');
});


