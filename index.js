let btn = document.querySelectorAll('.div button');
let divv = document.querySelector('.divv');
let audio = document.querySelector('.audio');
let audio1 = document.querySelector('.audio1');
let audio2 = document.querySelector('.audio2');
let play = document.querySelector('.play'); 
let cancel = document.querySelector('.cancel'); 
let game = document.querySelector('.game');
let main = document.querySelector('.main');

play.addEventListener('click', function(){
    main.style.display = 'none';
    game.style.display = 'block';
});

cancel.addEventListener('click', function(){
    window.close()
})

let arr = ["KIWI", "ORANGE", "LEMON", "LIME"];
let random = Math.floor(Math.random() * arr.length);
let randomName = arr[random];
console.log(randomName);

for (let i of btn) {
    i.addEventListener('click', function (event) {
        console.log(event.target.textContent);
        let clickedBtnText = event.target.textContent;

        if (randomName.indexOf(clickedBtnText) !== -1) {
            divv.innerText += clickedBtnText;
            alert('Correct!');
            audio.play();
            if (divv.innerText === randomName) {
                alert('You win!');
                audio2.play()
            }
        } else {
            alert('Incorrect!');
            audio1.play();
        }
    });
}


