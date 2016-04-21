
//-------- Funciones Lista Usuarios -------
//-----------------------------------------

function createUsersList03(){

	var userList = '<ul class="demo-list-two mdl-list">'
	var btnReset = '<button class="mdl-button mdl-js-button mdl-button--raised  mdl-button--colored" onclick="resetUsers()"> RESET </button>';
	var btnLoad = '<button class="mdl-button mdl-js-button mdl-button--raised  mdl-button--accent" onclick="reloadUsersList02()"> LOAD </button>';
	var btns = '<div class="buttons">'+btnLoad+btnReset+'';

	for (var i = 0; i <= users2.length - 1; i++) {

		var _mdl_com = '</span><span class="mdl-list__item-sub-title">' + getPostByUsers02(users2[i].id) +' posts</span></span>'; 
		
    var btn = '<button class="mdl-button mdl-js-button mdl-button--raised  mdl-button--colored nf" onclick="deleteUser02('+i+')"> <i class="material-icons">clear</i><button class="mdl-button mdl-button--raised mdl-js-button dialog-button nf" onclick="dialogUser('+i+')"> <i class="material-icons">speaker_notes</i> </button>';
		var _mdl_cardContent01  = '<div class="mdl-card__actions mdl-card--border">Total users: <b>'+users2.length+'</b></div></div>'
		var _mdl_cardLi01  = '<li class="mdl-list__item mdl-list__item--two-line"><span class="mdl-list__item-primary-content"> <i class="material-icons mdl-list__item-avatar">person</i><span>';

		userList += _mdl_cardLi01+users2[i].name + _mdl_com+btn+' </li>'
	}

	userList += '</ul></div>'+_mdl_cardContent01+btns;
	// console.log(userListTotal);
	return userList;
}


function reloadUsersList03(){
  document.getElementById('usersList').innerHTML = '';
  document.getElementById('usersList').innerHTML = createUsersList03();
}

function resetUsers03(){
  getJSON('https://jsonplaceholder.typicode.com/users', function(err, data) {
    if (err != null) {
      alert('Something went wrong: ' + err);
    } else {
      users2 = data;
    }
  });
  reloadUsersList03();
}

function loadEx03(){
	document.getElementById('app').innerHTML = '';
	document.getElementById('app').innerHTML =  mdl_header(3);
	resetUsers03()
}

function unLoadEx03(){
	document.getElementById('app').innerHTML = '';
}


function dialogUser(id){
	var userName = '<h3 class="mdl-dialog__title">'+getUserName(id)+'</h3>';
	var userContent = '<div class="mdl-dialog__content">'+getPostsByUser(id)+'</div>';
	var btn = '<div class="mdl-dialog__actions"><button type="button" class="mdl-button">Close</button><button type="button" class="mdl-button" disabled>Disabled action</button></div>'
	document.getElementById('dialog').innerHTML = userName+userContent+btn;

	dialog.showModal()
}

function getUserName(id){
	for (var i = 0; i <= users2.length - 1; i++) {
		if(users2[i].id==id+1){
			return users2[i].name;
		}
	}
}

function getPostsByUser(id){
	var posts = '<ul class="getPostsByUser">';
	for (var i = 0; i <= users2.length - 1; i++) {
		var li = '';
		if(posts2[i].userId!==id){
			li += '<li><b>'+posts2[i].title+'</b><br><em class="comment">'+posts2[i].body+'</em></li>'
		}
		posts += li;
	}
	return posts+'</ul>'
}

