var question1 ={
	question:"Đầu rồng đuôi phụng cánh tiên.<br>Ngày năm bảy vợ, tối ngủ riêng một mình?",
	answer1:"Con gà trống",
	answer2:"Con gà mái",
	answer3:"Con chó",
	answer4:"Con mèo",
	correct:"Con gà trống"
}
var question2 ={
	question:"Đầu bằng con ruồi, đuôi bằng cái đĩa?",
	answer1:"Lá trầu",
	answer2:"Lá mít",
	answer3:"Lá bưởi",
	answer4:"Lá khoai",
	correct:"Lá trầu"
}
var question3 ={
	question:"Con gì đập thì sống mà không đập thì chết?",
	answer1:"Con tim",
	answer2:"Con chim",
	answer3:"Con vượn",
	answer4:"Con khỉ",
	correct:"Con tim"
}
var question4 ={
	question:"Cái gì đi thì nằm mà nằm thì lại đứng?",
	answer1:"Bàn chân",
	answer2:"Bàn vả",
	answer3:"Bàn ghế",
	answer4:"Bàn thắng",
	correct:"Bàn chân"
}
var question5 ={
	question:"Đầu tròn mình nhỏ thon thon<br>Nắm đầu vặn cổ hai hàng lệ rơi?",
	answer1:"Vòi voi",
	answer2:"Vòi nước",
	answer3:"Vòi tiền",
	answer4:"Vòi vĩnh",
	correct:"Vòi nước"
}
var question6 ={
	question:"Vắt cổ gì ra nước?",
	answer1:"Chim",
	answer2:"Chày",
	answer3:"Chuối",
	answer4:"Chân",
	correct:"Chim"
}
 var arr = [question1,question2,question3,question4,question5,question6];
 var qN=document.getElementById("questNumber");
 var q= document.getElementById("mainQuest");
 var a1= document.getElementById("answer1");
 var a2= document.getElementById("answer2");
 var a3= document.getElementById("answer3");
 var a4= document.getElementById("answer4");
 var valueQuest=1;
 var mark=0;

 qN.innerHTML= "Câu số "+valueQuest+":"; 
 q.innerHTML = arr[0].question;
 a1.innerHTML = arr[0].answer1;
 a2.innerHTML = arr[0].answer2;
 a3.innerHTML = arr[0].answer3;
 a4.innerHTML = arr[0].answer4;

 var btnElemt = document.getElementsByClassName("btnAnswer");
 
 for(var i=0; i<btnElemt.length; i++){
 	btnElemt[i].addEventListener("click",function(){
 		var res=this.innerText;
 		if(res==arr[valueQuest-1].correctAnswer){
 			mark+=1;
 		}
		if(valueQuest<arr.length){

		qN.innerHTML= "Câu số "+(valueQuest+1)+":"; 
		 q.innerHTML = arr[valueQuest].question;
		 a1.innerHTML = arr[valueQuest].answer1;
		 a2.innerHTML = arr[valueQuest].answer2;
		 a3.innerHTML = arr[valueQuest].answer3;
		 a4.innerHTML = arr[valueQuest].answer4;

		}else if(mark==6){
			window.location.href = 'win.html';
			
		}else {
			document.getElementById("questions").style.display="none";
			document.getElementById("correctAnswer").style.display="none";
			document.getElementById("resAlert1").innerHTML= "<h1>Loser!</h1>";
			for (var i=0; i<mark;i++){
				document.getElementById("resAlert2").innerHTML+= "<img src='image/winner.jpg' style='width:50px' />"
			}
			document.getElementById("resAlert3").innerHTML="<button id='back' onclick='clickBtnBack()'>Replay!</button>";
		}
		
		valueQuest+=1;
	})
 }
 
 function clickBtnBack (){
 	document.getElementById("resAlert1").innerHTML= "";
	document.getElementById("resAlert2").innerHTML= "";
	document.getElementById("resAlert3").innerHTML= "";
  	document.getElementById("questions").style.display="block";
	document.getElementById("correctAnswer").style.display="block";
	valueQuest=1;
	mark=0;
	qN.innerHTML= "Câu số "+valueQuest+":"; 
	 q.innerHTML = arr[0].question;
	 a1.innerHTML = arr[0].answer1;
	 a2.innerHTML = arr[0].answer2;
	 a3.innerHTML = arr[0].answer3;
	 a4.innerHTML = arr[0].answer4;
 }