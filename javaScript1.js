
var bienCuaToi= "thành nhân";
var a=5;
var b=2;


// var c= "xin chao";
// var d="tất cả các bạn";
var a= new Number();
a[1]= 2;
a[2]=3;
a[4]=5;

var myBoolean = true;
var myObject= {};
var myArray=[];



// alert(myArray + ": " + typeof myArray);
// document.write(a+c);
// console.log("giá trị của c la "+c);

// ------------------------
 
var x;
var S=0;
for (let i = 0; i < 10;i++) 
{
    S+=i;
}

// ------------------
var i =0;
var tong = 0;
while (i<10) {
    tong+=i;
    i++;
    if(i ==5) break;
}


// ---------------

var key =3 ;
switch (key) {
    case 1: alert("hello");
        
        break;
    case 2: alert("xin chào ");
            break;    

    default: 
        break;
}
// --------------



function HamDauTien(a,b)
{   
    
    var c = a/b;
    return c;
 
}

try {
    var s = HamDauTien(10,0);

} catch (error) 
{

  alert("không chia được");

}

var x= "1.23333333333" ;

// var y= Number(x);

// alert(typeof y +":" + y);

// alert(parseInt(x));

var date_1 = new Date(2019,1,20);
var date_2= new Date();

// alert(date_1.getFullYear());

// alert(date_1.getHours());

// -------------
// var obj = document.getElementById("icon");
// var h= htm.innerHTML;
// var h= obj.outerHTML;
// alert(h);

// ---------------
// var obj = document.getElementsByTagName("h1");
// var g= obj.length;
// var g= obj[1].innerHTML;

// ---------------
// var obj= document.querySelector(".h11");
// var g= obj.innerHTML;
// obj.innerHTML = "đây là thành nhân";    
// alert(g);

// ----------------
//  var obj= document.querySelector(".h11");
//  alert( obj.innerHTML);
//  alert(obj.getAttribute("class"));
//  obj.setAttribute("class","row1");

// -------------------------


//  var obj= document.getElementById("icon");
//  obj.style.backgroundColor = "red";
// var a= obj.getAttribute("id");
// obj.setAttribute('style',"background-color: gray");


// --------------------------
function batDauTinh(txbUser,txbPass){
    var a = parseInt(txbUser);
    var b=parseInt(txbPass);
    alert(a+ b);
    
}

 
 

 







