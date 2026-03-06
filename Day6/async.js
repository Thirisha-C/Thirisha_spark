//async - always return a promise

async function fn(){
    return "Hello";
}
console.log(fn());

fn().then((msg) => console.log(msg));