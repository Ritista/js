console.log("day15");
// condtion
// if else else if
// switch
// for loop

let a="saturday";
switch(a){
  case"monday":
    console.log("today is monday");
    break;
  case"sunday", "saturday":
    console.log("today is holiday");
    break;
  default:
    console.log("none of the above");
}


// for loop
console.log("for loop");
for(i = 10; i >= 0; i--){
    console.log(i);
}
for(i = 0; i<=10; i++){
    console.log(i);
}


//while loop
i=10;
console.log("while loop");
while(i>=0){
    console.log(i);
    i--;
    console.log(i);
}
console.log(i);

// d0while loop
console.log("do while loop");
do{
    console.log(i);
    i--;
}while(i>=0);


//continue
//continue doesnot work in do while loop


for(i=10; i>=0; i--){
    if(i==2){
        continue;
    }
    console.log(i);
    
}
