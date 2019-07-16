

window.onload =() =>{
    document.querySelector('.number').classList.add(randomType());
    document.querySelector('.number').innerHTML = randomNum();
};

function randomNum(){
    let numbers = ['A','1','2','3','4','5','6','7','8','9','10','J','K','Q'];
    let randomNum= Math.floor(Math.random() * numbers.length);


    return numbers[randomNum];
};

function randomType(){
    let types = ['club','heart','spade','diamond'];
     let randomType= Math.floor(Math.random() * types.length);

     return types[randomType];
};