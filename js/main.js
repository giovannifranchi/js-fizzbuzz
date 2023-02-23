const main = document.querySelector('main');


for(let i = 1; i <= 100; i++){
    const box = document.createElement('div');
    box.classList.add('box');
    main.append(box);
    const text = document.createElement('h2');
    box.append(text);
    if(i % 3 === 0 && i % 5 === 0){
        console.log('FizzBuzz');
        text.innerHTML = 'FizzBuzz';
        box.classList.add('red');
    }else if(i % 3 === 0){
        console.log('Fizz');
        text.innerHTML = 'Fizz';
        box.classList.add('green');
    }else if(i % 5 === 0){
        console.log('Buzz');
        text.innerHTML = 'Buzz';
        box.classList.add('yellow');
    }else {
        console.log(i);
        text.innerHTML = i;
        box.classList.add('blue');
    }
}


