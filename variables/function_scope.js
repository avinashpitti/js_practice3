function add(){
    let a=1;
    var b=2;
    const c=3;
    return a+b+c;
    // console.log(a+b-c) 
    // anything written after the return inside the function will be ignored
}
let result=add()
console.log(result);

function add_nums(x,y,z){
    return x+y+z;
}

let q1=add_nums(30,40,50)
console.log(q1);

let q2=add_nums(70,80,90)
console.log(q2)


function sum_of_nums(p,q,r,s=45){
    return p+q+r+s;
}

let p1=sum_of_nums(15,30,40,50);
console.log(p1);
let p2=sum_of_nums(35,50,80)
// Here it takes the default parameter s=45
console.log(p2);