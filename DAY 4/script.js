var a;  //Global scope
a = 10;
var a = 20;

//let b;  //block scope
//b = 10;

const c=10;  //block scope


var p = 20; //number
var q = "Hello";  //string
var bool = true;  //boolean
var r;  //undefine
var s = null; //null

//type function
console.log(typeof p);
console.log(typeof q);
console.log(typeof bool);   
console.log(typeof r);
console.log(typeof s);


var arr = [1,2,3,4,5,]; //array
console.log(arr);

console.log(typeof arr);
var object={
   name:"namjoon",
   age:28,
   city:"seoul"
}

console.log(object);
//arithmetic operators
var a=10;
var b=20;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);


//relational operator
var a=10;
var b="20";
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);
console.log(a==b);
console.log(a!=b);

//assign operator
a=10;
console.log(a);
console.log(a+=10);
console.log(a-=10);
console.log(a*=10);

//logical operator
a=true;
b=false;
console.log(a&&b);
console.log(a||b); 
console.log(!a);

//for loop 
for(i=0;i<10;i++){
    console.log(i);
}

//if 
a=5;
if(a%2==0) console.log("a is even");

//if ..else
    if(a%2==0) console.log("a is greater than b");
    else console.log("b is greater than a");

//else if
mark=70
if(mark >=90) console.log("0");
else if(mark>=70) console.log("A");
else if(mark >=50) console.log("B");
else console.log("Fail");

//switch
day = 1;  
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

//ternary operator
var result=(a%2==0)?"Even":"Odd";
console.log(result);

mark=90;
var result=(mark>=90) ? "O":(mark>=70)? "A" : (mark>=50) ? "B" : "Fail";
console.log(result);


function add(){
    console.log(10+20);
}
add();
function addparam(a,b){
    console.log(a+b);
}

addparam(10,20);
//arrow functiooon
var  addparam=(a,b)=>{
   console.log(a+b);
}
addparam(10,20);
//class

class Person{
    name;
    age;
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
    display(){
        console.log(this.name);
        console.log(this.age);
    }   
}

var a =2;
var flag=true;
if(a>=1)flag=false;

else{
    for(let i=2;i<=a/2;i++){
        if(a%i==0){
            flag=false;
            break;
        }
    }
}
const res=flag==true ? "Prime" : "Not Prime";
console.log(res);



// Template Literals
var age = 24;
var name = "Shree"
var str = `Shree's age is ${age}`;
console.log(str);
console.log(`${name}'s age is ${age}`);

//map
var arr = [1,2,3,4,5];
var double=arr.map((num)=>num*2);
console.log(double)

//filter
var even=arr.filter((num)=>(num%2==0));
console.log(even);

//reduce
var total=arr.reduce((sum,num)=>(sum,num),0);
console.log(total);

var evencount=arr.map(num=>num**3).filter(num=>num%2==0).reduce((sum,num)=>(sum+1),0);
console.log(evencount);

//object
var student=[
    {name:"Shree",marks:24},
    {name:"Hari",marks:65},
    {name :"poojana",marks:95},
]
var studentmark=student.filter(s=>s.marks>88);
console.log(studentmark);


