let life = 3;
let timeLeft = 60;

window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("loaded");
    showStart();
}

function showStart() {
    console.log("show start");
    document.querySelector("#mand_sprite").classList.add("walk");
    document.querySelector("#start").classList.add("pulse");
    document.querySelector("#start").addEventListener("click", hideStart);
}

function hideStart() {
    console.log("hide start");
    document.querySelector("#start").removeEventListener("click", hideStart);
    document.querySelector("#start_background").classList.add("paused");
    document.querySelector("#game_elements").classList.add("zoommand");
    document.querySelector("#menu_background").classList.add("zoom");
    document.querySelector("#mand_sprite").classList.add("paused");
    document.querySelector("#start").classList.remove("pulse");
    document.querySelector("#start").classList.add("fade_out");
    document.querySelector("#screen").classList.add("fade_out2");
    setTimeout(startGame, 3000);
    //
    //    startGame();
    //    document.querySelector("#mand_sprite").classList.add("paused");

}

function showSettings() {
    console.log("show settings");
}

function closeSettings() {
    console.log("close setting");
}

function toggleSounds() {
    console.log("toggle sounds");
}

function unmuteLyd() {
    console.log("unmute lyd");
}

function muteLyd() {
    console.log("mute lyd");
}

function toggleMusik() {
    console.log("toggle musik");
}

function unmuteMusik() {
    console.log("unmute musik");
}

function muteMusik() {
    console.log("mute musik");
}

function startGame() {
    console.log("start game");
    document.querySelector("#game_elements").classList.remove("zoommand");
    document.querySelector("#screen").classList.remove("fade_out2");
    document.querySelector("#start_background").classList.add("hide");
    document.querySelector("#game_background").classList.remove("hide");
    document.querySelector("#game_background").classList.add("fade_in");
    document.querySelector("#mand_sprite").classList.remove("walk");
    document.querySelector("#mand_sprite").classList.remove("paused");
    document.querySelector("#mand_sprite").classList.add("hide");

    document.querySelector("#nøgen").classList.add("falde");
    document.querySelector("#nøgen").classList.remove("hide");
    document.querySelector("#nøgen").addEventListener("animationend", gameOver);
    document.querySelector("#person").classList.add("falde");
    document.querySelector("#person").addEventListener("animationend", gonePerson);
    document.querySelector("#person").classList.remove("hide");
    document.querySelector("#andet").classList.add("falde");
    document.querySelector("#andet").classList.remove("hide");

    document.querySelector("#nøgen").addEventListener("click", clickNøgen);
    document.querySelector("#person").addEventListener("click", clickPerson);
    document.querySelector("#andet").addEventListener("click", clickAndet);

    timeLeftFc();
}

function clickNøgen() {
    console.log("nøgen klikket");
    document.querySelector("#nøgen").classList.remove("falde");
    document.querySelector("#nøgen").removeEventListener("animationend", gameOver);

    document.querySelector("#container1").classList.add("dissappear");
    document.querySelector("#nøgen").addEventListener("animationend", clearClassNøgen);
    document.querySelector("#nøgen").removeEventListener("click", clickNøgen);


}

function clearClassNøgen() {
    document.querySelector("#nøgen").removeAttribute("class");
    nyNøgen();
}

function nyNøgen() {
    console.log("ny nøgen");
    document.querySelector("#nøgen").classList.add("position" + Math.floor((Math.random() * 4) + 1));

    document.querySelector("#nøgen").classList.add("nøgentype" + Math.floor((Math.random() * 4) + 1));

    document.querySelector("#nøgen").classList.remove("dissappear");

    document.querySelector("#nøgen").addEventListener("click", clickNøgen);
    document.querySelector("#nøgen").classList.add("falde");
    document.querySelector("#nøgen").addEventListener("animationend", gameOver);
}

function clickPerson() {
    console.log("person klikket");
    document.querySelector("#person").classList.remove("falde");


    document.querySelector("#person").classList.add("dissappear");
    document.querySelector("#person").addEventListener("click", clearClassPerson);
    document.querySelector("#person").addEventListener("animationend", clearClassPerson);
    document.querySelector("#person").removeEventListener("click", clickPerson);
    document.querySelector("#person").removeEventListener("animationend", gonePerson);
}

function clearClassPerson() {
    document.querySelector("#person").removeAttribute("class");
    nyPerson();
}


function nyPerson() {
    console.log("ny person");
    document.querySelector("#person").classList.add("position" + Math.floor((Math.random() * 4) + 1));

    document.querySelector("#person").classList.add("persontype" + Math.floor((Math.random() * 4) + 1));

    document.querySelector("#person").classList.remove("dissappear");

    document.querySelector("#person").addEventListener("click", clickPerson);
    document.querySelector("#person").classList.add("falde");
    document.querySelector("#person").addEventListener("animationend", gonePerson);
}

function gonePerson() {
    life--;
    console.log("life er" +
        life);
    console.log("person gone");
    if (life == 0) {
        gameOver();
    }
    //   document.querySelector("#person").classList.remove("falde");
    //
    //
    //    document.querySelector("#person").classList.add("dissappear");
    //    document.querySelector("#person").addEventListener("click", clearClassPerson);
    //    document.querySelector("#person").addEventListener("animationend", clearClassPerson);
    //    document.querySelector("#person").removeEventListener("click", clickPerson);
    //    document.querySelector("#person").removeEventListener("animationend", gonePerson);

}

function clickAndet() {
    console.log("andet klikket");

    document.querySelector("#andet").classList.remove("falde");


    document.querySelector("#andet").classList.add("dissappear");
    document.querySelector("#andet").addEventListener("animationend", clearClassAndet);
    document.querySelector("#andet").removeEventListener("click", clickAndet);

}

function clearClassAndet() {
    document.querySelector("#andet").removeAttribute("class");
    nyAndet();
}

function nyAndet() {
    console.log("ny andet");
    document.querySelector("#andet").classList.add("position" + Math.floor((Math.random() * 4) + 1));

    document.querySelector("#andet").classList.add("andettype" + Math.floor((Math.random() * 3) + 1));

    document.querySelector("#andet").classList.remove("dissappear");

    document.querySelector("#andet").addEventListener("click", clickAndet);
    document.querySelector("#andet").classList.add("falde");
}

function levelComplete() {
    console.log("level complete")
}

function gameOver() {
    console.log("game over");
}


function timeLeftFc() {
    console.log("timeleft" + timeLeft);
    if (timeLeft > 0) {

        timeLeft--;
        timeOut = setTimeout(timeLeftFc, 1000);
    } else {


        levelComplete();
    }
}
