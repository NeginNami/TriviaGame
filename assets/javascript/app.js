
var QA=[
	{question:"What is the name of Will Smith\'s character in Independence Day?",
	answers:["David Levinson","Captain Steven Hiller","Jake Morrison","President Thomas"]},

	{question:"Which 1997 film stars Nicolas Cage, John Cusack, and John Malkovich?",
	answers:["Con Air","Batman","The Fifth Element","Cop Land"]},

	{question:"How many people were killed in the 1996 film Scream?",
	answers:["Ten","Eight","Eleven","Seven"]},

	{question:"What year was Forrest Gump released?",
	answers:["1993","1995","1994","1997"]},

	{question:"Who is Keyser Soze in the film The Usual Suspects?",
	answers:["Benicio del Toro","Kevin Spacey","Gabriel Byrne","Paul Bartel"]},

	{question:"What year was the song \"My Heart Will Go On\" from Titanic released?",
	answers:["1998","1997","1999","1996"]},

	{question:"Which artist sang the song \"Oh, Pretty Woman\" from the film Pretty Woman?",
	answers:["Roy Orbison","Gloria Estefan","Moby","Gwen Stefani"]},

	{question:"Which 90\'s movie featured the Looney Tunes on its soundtrack?",
	answers:["Space Jam","Clueless","The Big Lebowski","Pretty Woman"]},

	{question:"Which 90'\s movie soundtrack is the best-selling soundtrack of all time?",
	answers:["K Track","Love Jones","Batman Forever","The Bodyguard"]},

	{question:"Which 90\'s movie featured the songs \"My Guy (My God)\" and \"I Will Follow Him\"?",
	answers:["American Beauty","Groundhog Day","Fargo","Sister Act"]},

	{question:"Which artist sang the hit \"Unchained Melody\" from the film Ghost?",
	answers:["Madonna","Alanis Morissette","The Righteous Brothers","Bryan Adams"]},

	{question:"What movie was Robin Williams\' first animated film?",
	answers:["Mulan","The Last Rainforest","Hercules","Toy Story"]},

	{question:"What are the names of the two mice from The Rescuers Down Under?",
	answers:["Bianca and Bernard","Timothy and Gadget","Jack and Gus","Morty and Ferdie"]},

	{question:"James Woods voiced the villain for which 1997 animated movie?",
	answers:["Anastasia","The Swan Princess","Beauty and the Beast","Hercules"]},

	{question:" What 90\'s movie was the first and only animated film to receive a Special Achievement Academy Award?",
	answers:["The Lion King","Toy Story","Aladdin","Tarzan"]},

];
var trueAnswers=[1,0,3,2,1,1,0,0,3,3,2,1,0,3,1];
var number=90;

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
	$("#pic_section").css("display","none");

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
	$("#doneButton").css("display","inline-block");

});

$("#doneButton").on("click",function (event) {
	
$("#pic_section").css("display","block");
event.preventDefault();
clearInterval(intervalId);


for (var i = 0; i < QA.length; i++) {
	var obj=document.getElementsByClassName("ans"+i);
	for (var j = 0; j < 4; j++) {
		
		//console.log(obj[j].checked);	
		if (obj[j].checked) {
			userAnswers[i]=j;
		}
		
	}
}

for (var i = 0; i < QA.length; i++) {
	if (userAnswers[i]===trueAnswers[i]) {
		corrects++;
	}
	else if(userAnswers[i]!==trueAnswers[i]&& userAnswers[i]!==20)
		incorrects++;
	else
		unanswereds++;
}

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
	$("#pic_section").css("display","block");
	$("#main").css("display","none");
	$("#c").html("0");
	$("#i").text(QA.length);
	$("#u").text(QA.length);

}