var question1 = {
	question: "Đầu rồng đuôi phụng cánh tiên.<br>Ngày năm bảy vợ, tối ngủ riêng một mình?",
	answer1: "Con gà trống",
	answer2: "Con gà mái",
	answer3: "Con chó",
	answer4: "Con mèo",
	correct: "Con gà trống"
}
var question2 = {
	question: "Đầu bằng con ruồi, đuôi bằng cái đĩa?",
	answer1: "Lá trầu",
	answer2: "Lá mít",
	answer3: "Lá bưởi",
	answer4: "Lá khoai",
	correct: "Lá trầu"
}
var question3 = {
	question: "Con gì đập thì sống mà không đập thì chết?",
	answer1: "Con tim",
	answer2: "Con chim",
	answer3: "Con vượn",
	answer4: "Con khỉ",
	correct: "Con tim"
}
var question4 = {
	question: "Cái gì đi thì nằm mà nằm thì lại đứng?",
	answer1: "Bàn chân",
	answer2: "Bàn vả",
	answer3: "Bàn ghế",
	answer4: "Bàn thắng",
	correct: "Bàn chân"
}
var question5 = {
	question: "Đầu tròn mình nhỏ thon thon<br>Nắm đầu vặn cổ hai hàng lệ rơi?",
	answer1: "Vòi voi",
	answer2: "Vòi nước",
	answer3: "Vòi tiền",
	answer4: "Vòi vĩnh",
	correct: "Vòi nước"
}
var question6 = {
	question: "Vắt cổ gì ra nước?",
	answer1: "Chim",
	answer2: "Chày",
	answer3: "Chuối",
	answer4: "Chân",
	correct: "Chim"
}
var listQuestion = [question1, question2, question3, question4, question5, question6];
var qN = document.getElementById("questNumber");
var q = document.getElementById("mainQuest");
var asw1 = document.getElementById("answer1");
var asw2 = document.getElementById("answer2");
var asw3 = document.getElementById("answer3");
var asw4 = document.getElementById("answer4");
var valueQuest = 1;
var mark = 0;

qN.innerHTML = "Câu số " + valueQuest + ":";
q.innerHTML = listQuestion[0].question;
asw1.innerHTML = listQuestion[0].answer1;
asw2.innerHTML = listQuestion[0].answer2;
asw3.innerHTML = listQuestion[0].answer3;
asw4.innerHTML = listQuestion[0].answer4;

var btnIntermediate = document.getElementsByClassName("Answer");

for (var i = 0; i < btnIntermediate.length; i++) {
	btnIntermediate[i].addEventListener("click", function () {
		var result = this.innerText;
		if (result == listQuestion[valueQuest - 1].correct) {
			document.getElementsByClassName("answerAll").innerHTML="Correct";
			mark += 1;
		}else{ 
			document.getElementsByClassName("answerAll").innerHTML="Wrong!!!";
			mark += 0;
		}
		console.log(this.innerText);
		console.log(mark);
		console.log(valueQuest);
		if (valueQuest < listQuestion.length) {

			qN.innerHTML = "Câu số " + (valueQuest + 1) + ":";
			q.innerHTML = listQuestion[valueQuest].question;
			asw1.innerHTML = listQuestion[valueQuest].answer1;
			asw2.innerHTML = listQuestion[valueQuest].answer2;
			asw3.innerHTML = listQuestion[valueQuest].answer3;
			asw4.innerHTML = listQuestion[valueQuest].answer4;

		} else if (mark == 6) {
			window.location.href = "win.html";
		} else {
			document.getElementById("questions").style.display = "none";
			document.getElementById("answer").style.display = "none";
			document.getElementById("alertFailed").innerHTML = "<h1 style='text-align:center;'>Loser!</h1>";
			document.getElementById("alertReplay").innerHTML = "<button onclick='rePlay()'>Replay!</button>";
		}

		valueQuest += 1;
		console.log(valueQuest);
	})
}

function rePlay() {
	document.getElementById("alertFailed").innerHTML = "";
	document.getElementById("alertWin").innerHTML = "";
	document.getElementById("alertReplay").innerHTML = "";
	document.getElementById("questions").style.display = "block";
	document.getElementById("answer").style.display = "block";
	valueQuest = 1;
	mark = 0;
	qN.innerHTML = "Câu số " + valueQuest + ":";
	q.innerHTML = listQuestion[0].question;
	asw1.innerHTML = listQuestion[0].answer1;
	asw2.innerHTML = listQuestion[0].answer2;
	asw3.innerHTML = listQuestion[0].answer3;
	asw4.innerHTML = listQuestion[0].answer4;
}