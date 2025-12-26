let number_type = 34;
let string_type = "Husen";
let boolean_type = true;
let null_type = null;
let symbol_type = Symbol("UID")
let bigInt_type = 123n;


document.getElementById("result").innerHTML += 
"<b>Number :</b> "+ number_type +"<br><br>" +
"<b>String :</b>" + string_type + "<br><br>" +
"<b>Boolean :</b>" + boolean_type + "<br><br>" +
"<b>Null :</b>" + null_type + "<br><br>" +
"<b>Symbol :</b>"+ symbol_type.toString()+"<br><br>" +
"<b>Big INT :</b>"+ bigInt_type+ "<br><br>" ;

let a = 10;
let b = 20;

let ADD = a+b;
let SUB = a-b;
let MUL = a*b;
let DIV = a/b;
let MOD = a%b;



document.getElementById("Math-fun").innerHTML +=
"<b>ADDITION :</b>" + ADD + "<br><br>" +
"<b>SUBTRACTION :</b>" + SUB + "<br><br>" +
"<b>MULTIPLICATION :</b>" + MUL + "<br><br>" +
"<b>DIVISION :</b>" + DIV + "<br><br>" +
"<b>MODULUS :</b>" + MOD + "<br><br>"  ;


function even(event){
    event.preventDefault();  

    let num = Number(document.getElementById("num").value);

    if(num % 2 == 0){
        document.getElementById("result").innerText = "Number is Even";
    } else {
        document.getElementById("result").innerText = "Number is Odd";
    }
}

even();