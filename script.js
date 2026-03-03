// for(var i=1; i<=5; i++){
//     console.log(i);
    
// }
// console.log(i);
// let sum = 0;
// let y = 100;
// for(let n=1; n<=y; n++){
//  sum = sum + n 
// }console.log("sum =",sum);

// let p = 1;
// while (p<=5) {
//     console.log(p);
//     p++;
// }


// let t=2;
// do{
//     console.log("vivek");
//     t++;
// } while (t<=10) {
//     console.log(t);
//     t++;
// }

// let b = "vivek";
// let s=1;
// for (let i of b) {
//     console.log(i);
//     s++;
    
    
// }
// console.log(s);


// practice que1

//print even no from 0-100

// let e=0;
// for (let e = 0; e<=100; e++ ){
//     if (e%2!=0) {
//         console.log(e)
//     }
    
// } 

// let g = 26;
// let gme= prompt("gusse the no.");
// while (gme!=g) {
//     gme=prompt("oops guess again");
    
// }
// console.log("congtulation you guess right");
// let str = "vivek";
// console.log(str);

// let obj = {
//     name:"vivek",
//     age: 22,
//     city: "delhi"
// }
// console.log(obj);

// console.log(`my name is ${obj.name} and my age is ${obj.age} and i live in  ${obj.city}`);

// let str1 = "hello";
// let str2 = "JavaScript";

// console.log(str1.slice(1,3));
// console.log(str1.concat(str2));
// console.log(str1.replace("34","js"));
// console.log(str2.charAt(3));

// let name = prompt("enter your name");
// console.log(name);
// console.log("username -" "@" + name + name.length);

let get = [3,4,5,6,7,8,9,10];
console.log(get);

let heros = ["ironman","thor","hulk","captain america"];
console.log(heros);
heros.push("black panther");
console.log(heros);

for (let i = 0; i < heros.length; i++) {
    console.log(heros[i]);     
}
console.log(heros[4]);

for (let hero of heros) {
    console.log(hero);
}