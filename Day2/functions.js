let a = 12;
let b=18;

function add()
{
    console.log(a+b);
}
add();

//Function parameters

function area(l,b)
{
    console.log(l*b);
}

area(3,4);

function multiply(a, b) 
{
    return a*b;
}

console.log(multiply(3,4));

function myName()
{
    return "3shaa";
}
console.log(myName());

function oddEven(a)
{
    if(a%2==0)
    {
        return "Even";
    }
    else
    {
        return "Odd";
    }
}
console.log(oddEven(25));

//ARROW FUNCTION

function add(a,b)
{
    return a+b;
}
let sub=(a,b) => a-b;