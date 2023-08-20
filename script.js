let images = ["dice-01.svg", "dice-02.svg", "dice-03.svg", "dice-04.svg", "dice-05.svg", "dice-06.svg"];

let dice = document.querySelectorAll("img");

function roll(){
    dice.forEach(function (die){
        die.classList.add("shake")
    });

    setTimeout(() => {
        dice.forEach(function (die){
            die.classList.remove("shake")
        });
        let dieone = Math.floor(Math.random()* 6);
        let dietwo = Math.floor(Math.random()* 6);
        console.log(dieone, dietwo);
        document.querySelector("#die-1").setAttribute("src", "/images/" + images[dieone]);
        document.querySelector("#die-2").setAttribute("src", "/images/" + images[dietwo]);
        document.querySelector("#total").innerHTML = "your roller is " + ((dieone+1) + (dietwo+1));
    }, 1000);
}