function showResult(){

let roll=document.getElementById("roll").value;

let students={

101:{
name:"Sindhuja",
math:85,
science:78,
english:90
},

102:{
name:"Chaithanya",
math:70,
science:80,
english:75
},

103:{
name:"Shiny",
math:60,
science:65,
english:55
}

};

let result=document.getElementById("result");

if(students[roll]){

let s=students[roll];

let total=s.math+s.science+s.english;

let percentage=(total/3).toFixed(2);

let grade="";

if(percentage>=90)
grade="A+";
else if(percentage>=75)
grade="A";
else if(percentage>=60)
grade="B";
else
grade="C";

result.innerHTML=
"Name: "+s.name+"<br>"+
"Math: "+s.math+"<br>"+
"Science: "+s.science+"<br>"+
"English: "+s.english+"<br>"+
"Percentage: "+percentage+"%<br>"+
"Grade: "+grade;

}

else{
result.innerHTML="Student not found";
}

}