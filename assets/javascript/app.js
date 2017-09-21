
var QA=[
	{question:"I am the question?",
	answers:["blah","blah","blah","blah"]},

	{question:"I am the question2?",
	answers:["blah2","blah2","blah2","blah2"]},

	{question:"I am the question3?",
	answers:["blah3","blah3","blah3","blah3"]},




];
var number=20;
var trueAnswers=[0,1,2];
var intervalId;
var userAnswers=new Array(QA.length);
for (var i = 0; i < userAnswers.length; i++) {
	userAnswers[i]=20;
}
var corrects=0;
var incorrects=0;
var unanswereds=0;








$("#start").on("click",function () {
	run();
	$("#start").css("display","none");
	for (var i = 0; i < QA.length; i++) {
		var Qnode=$("<div>").addClass("q");
		Qnode.attr("id","q"+i);

		Qnode.append(QA[i].question);
		
		$("#questions").append(Qnode);

		var ans=$("<div>").attr("id","answ");
		$("#questions").append(ans);


		for (var j = 0; j < 4; j++) {
			var Anode=$("<div>").append("<input id=\""+i+j+"\""+ "type=\"radio\" class=\"ans"+i+"\""+"name=\"ans"+i+"\""+"value=\""+ QA[i].answers[j]+"\">"+QA[i].answers[j]);
			
			ans.append(Anode);

		}
	}
	$("#doneButton").css("display","block");
	

	
});

$("#doneButton").on("click",function (event) {
	

event.preventDefault();
clearInterval(intervalId);


for (var i = 0; i < QA.length; i++) {
	var obj=document.getElementsByClassName("ans"+i);
	console.log("Here is the selected obj: "+obj);
	for (var j = 0; j < 4; j++) {
		
		//console.log(obj[j].checked);	
		if (obj[j].checked) {
			userAnswers[i]=j;
		}
		
	}
}
console.log(userAnswers);
for (var i = 0; i < QA.length; i++) {
	if (userAnswers[i]===trueAnswers[i]) {
		corrects++;
	}
	else if(userAnswers[i]!==trueAnswers[i]&& userAnswers[i]!==20)
		incorrects++;
	else
		unanswereds++;
}
console.log(corrects+" "+incorrects+" "+unanswereds);

//var obj=document.getElementsByClassName("ans1");
//console.log(obj[1].checked);

$("form").css("display","none");
$("#over").css("display","block");
$("#c").html(corrects);
$("#i").html(incorrects);
$("#u").html(unanswereds);
$("#timeRemaining").empty();







});






function decrement() {

	number--;
	$("#timeRemaining").html("<h2>Time Remaining: "+number+"</h2>");
	if (number==0) 
		stop();
}

function run() {
	intervalId=setInterval(decrement,1000);
}

function stop() {
	clearInterval(intervalId);
	$("#over").css("display","block");
	$("#main").css("display","none");
	$("#c").html("0");
	$("#i").text(QA.length);
	$("#u").text(QA.length);

}