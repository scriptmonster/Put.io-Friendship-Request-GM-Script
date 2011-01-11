// ==UserScript==
// @name			FriendShipRequester
// @author			İsmail Taha AYKAÇ
// @author-mail		ismailtaha@gmail.com
// @namespace		https://put.io
// @include			https://put.io/friendship
// @version			v0.1
//
// This script is intended to send request to all of put.io users to increase
// the sharing in the system.
//
// ==/UserScript==


//get jQuery from put.io
$ = unsafeWindow.$j;


function requestAllOnThePage(){
	//sends request all strangers in the current strangers page
	$('#strangers-box .friendsBox a').click();

	//refresh the active strangers page to eliminate the request sent users
	$('#strangers-box .strangers-pager .activepager a').click();

	//After 10 seconds control if the current strangers page has users left
	setTimeout(function(){
		if($('#strangers-box .friendsBox a').length == 0){
			//clearInterval(intervalId);
			alert('Successfuly all users have recieved your requests! Please disable script from Greasemonkey!\n\nSincerely,\nİsmail Taha AYKAÇ')
			return;
		}
		//recursively call same function to send requests to all
		requestAllOnThePage();
	}, 10000);
}


$(document).ready(function(){

var wannaContinue = confirm('All user in put.io will be receiving your requests. It will take some time according to the number of request that will be sent!\n\nWould you like to continue?');

if(wannaContinue){
	if($('#strangers-box .friendsBox a').length > 0){
		requestAllOnThePage();
	}else{
		alert('There are no users to be requested as friend, please disable Greasemonkey script till number of strangers increase!\n\nSincerely,\nİsmail Taha AYKAÇ')
	}
}
});
