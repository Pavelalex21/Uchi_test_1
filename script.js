var a_arr =[6,7,8,9];
var ab_arr=[11,12,13,14];
var first=document.getElementById("first");
var second=document.getElementById("second");
var result=document.getElementById("result");
var rand1 = Math.floor(Math.random() * a_arr.length);
var container=document.getElementById("container");
var w_first=232;
var h_first=116;
var m_first=10;
var w =39; 
var h =19;
var m_left= 20;
w_first += rand1*w;
h_first += rand1*h;
m_first -= rand1*h;
var txt_1_m_top = 165;
var txt_1_m_left = 205;
var txt_1_m_bot = 0 ;
txt_1_m_bot += rand1*m_left;
txt_1_m_top -= rand1*h;
txt_1_m_left += rand1*m_left;

document.getElementById("half-circle_1").style.width=w_first + 'px';
document.getElementById("half-circle_1").style.height=h_first + 'px';
document.getElementById("half-circle_1").style.borderTopRightRadius=h_first + 'px';
document.getElementById("half-circle_1").style.borderTopLeftRadius=h_first + 'px';
document.getElementById("half-circle_1").style.marginTop=m_first + 'px';

document.getElementById("txt_1").style.marginTop=txt_1_m_top + 'px';
document.getElementById("txt_1").style.marginBottom=txt_1_m_bot + 'px';
document.getElementById("txt_1").style.marginLeft=txt_1_m_left + 'px';

i=0;
b_arr=[2,3,4,5,6,7];
var rand2 = Math.floor(Math.random() * b_arr.length);


if((a_arr[rand1]+b_arr[rand2])<=14 && (a_arr[rand1]+b_arr[rand2])>=11){
first.innerHTML = a_arr[rand1];
second.innerHTML = b_arr[rand2];
}
else{
	window.location.reload();
}

//ВТОРОЙ КРУГ
var second_r= 471;
var second_w= 76;
var second_h= 40;
second_r -= (rand1+rand2-3)*w;
second_h += rand2*h;
second_w += rand2*w;
document.getElementById("half-circle_2").style.right=second_r + 'px';
document.getElementById("half-circle_2").style.width=second_w + 'px';
document.getElementById("half-circle_2").style.height=second_h + 'px';

//ВТОРОЙ ИНПУТ
var t_l=20;
var t_l_2=40;
var txt_2_left=370;
var txt_2_top=255;
txt_2_top =txt_2_top -(rand2-3)*t_l;
txt_2_left =txt_2_left + rand1*t_l_2 + (rand2-3)*t_l;
console.log(txt_2_left);
console.log(txt_2_top);
document.getElementById("txt_2").style.left=txt_2_left + 'px';
document.getElementById("txt_2").style.top=txt_2_top + 'px';



function first_input(){
	var val_1=document.getElementById("txt_1").value;
	if(val_1-a_arr[rand1]==0){
		document.getElementById("txt_1").style.color="#000000";
		document.getElementById("first").style.background="#ffffff";
		document.getElementById("txt_2").style.display="inline";
		document.getElementById("half-circle_2").style.display ="block";
		}
	else{
		document.getElementById("txt_1").style.color="#ff0000";
		document.getElementById("first").style.background="#ffb600";

	}

}


function second_input(){
	var val_2=document.getElementById("txt_2").value;
		if(val_2-b_arr[rand2]==0){;
		document.getElementById("txt_2").style.color="#000000";
		document.getElementById("second").style.background="#ffffff";
		console.log("correct");
		document.getElementById("txt_3").value = "";
		document.getElementById("txt_3").style.border = '2px inset #eeeeee';		
		document.getElementById("txt_3").style.width = "40px";
		
		}
	else{
		document.getElementById("txt_2").style.color="#ff0000";
		document.getElementById("second").style.background="#ffb600";
	}
} 

function third_input(){
	var val_3=document.getElementById("txt_3").value;
	if(val_3-a_arr[rand1]-b_arr[rand2]==0){
		document.getElementById("txt_3").style.color="#000000";
		}
	else{
		document.getElementById("txt_3").style.color="#ff0000";
		
	}
}
