let isDevice = false;
const wait = () => {}

const nextDialogue = () => {
    document.querySelector(".helpCat__text").style.display = "none";
    document.querySelector(".helpCat__text--hidden").style.display = "block";
    document.querySelector(".helpCat__fakeDoor").style.display = "block";
    document.querySelector(".helpCat").style.setProperty("cursor","text");
    document.querySelector(".helpCat__text--hidden").style.setProperty("cursor","text");
}

const goToSection = (section) => {
    if (section === "section-B") {
        document.getElementById(section).scrollIntoView({behavior: "smooth"});
        document.querySelector(".helpCat__fakeDoor").style.display = "none";
        document.querySelector(".wind--A").style.display = "none";
        document.querySelector(".wind--B").style.display = "none";
    } else if (section === "section-C") {
        document.getElementById(section).scrollIntoView({behavior: "smooth"});
        section3Animation();
    } else if (section === "section-D") {
        document.getElementById(section).scrollIntoView({behavior: "smooth"});
    }
}

const section2Animation = () => {
    document.querySelector(".cloud--A").style.setProperty("display","block");
    document.querySelector(".cloud--B").style.setProperty("display","block");
    document.querySelector(".clouds").style.setProperty("display","block");
    document.querySelector(".frameFix--A").style.setProperty("display","block");
    document.querySelector(".frameFix--B").style.setProperty("display","block");
    document.querySelector(".frameFix--C").style.setProperty("display","block");
    document.querySelector(".bird").style.setProperty("display","block");
    document.querySelector(".technologiesPennants").style.setProperty("display","block");
    document.querySelector(".softSkillsPennants").style.setProperty("display","block");
    document.querySelector(".pointer").style.setProperty("display","block");
    document.querySelector(".helpCat-food").style.setProperty("display","block");
    document.querySelector(".helpCat-BowlFood").style.setProperty("display","block");
    document.querySelector(".helpCat-foodText").style.setProperty("display","block");
    document.querySelector(".pointerOut").style.setProperty("display","block");
    document.querySelector(".softSkillBoard").style.setProperty("display","block");
    document.querySelector(".helpCat-BowlFood").style.setProperty("cursor","pointer");
}

const section3Animation = () => {
    document.querySelector(".bedRoom").style.setProperty("background","url(images/bedRoom2.png) no-repeat");
    if (isDevice === true) {
        document.querySelector(".bedRoom").style.setProperty("background-size","100vw 100vh");
        document.querySelector(".bedRoom").style.setProperty("width","95.8vw");
    }
    document.querySelector("#purrText").style.setProperty("display","none");
    document.querySelector(".cloud--A").style.setProperty("display","none");
    document.querySelector(".cloud--B").style.setProperty("display","none");
    document.querySelector(".clouds").style.setProperty("display","none");
    document.querySelector(".frameFix--A").style.setProperty("display","none");
    document.querySelector(".frameFix--B").style.setProperty("display","none");
    document.querySelector(".frameFix--C").style.setProperty("display","none");
    document.querySelector(".bird").style.setProperty("display","none");
    document.querySelector(".technologiesPennants").style.setProperty("display","none");
    document.querySelector(".softSkillsPennants").style.setProperty("display","none");
    document.querySelector(".pointer").style.setProperty("display","none");
    document.querySelector(".helpCat-BowlFood").style.setProperty("display","none");
    document.querySelector(".helpCat-foodText").style.setProperty("display","none");
    document.querySelector(".pointerOut").style.setProperty("display","none");
    document.querySelector(".softSkillBoard").style.setProperty("display","none");
    document.getElementById("purrText").classList.remove("purrText");
    document.querySelector(".helpCat-food").style.setProperty("display","none");
    document.querySelector(".thanks").style.setProperty("display","block");
    document.querySelector(".toyMouse").style.setProperty("display","block");
    document.querySelector(".pointer3").style.setProperty("display","block");
    document.querySelector(".messyBooks").style.setProperty("display","block");
    
}

const openTheDoor = (section) => {
    document.querySelector(".right").style.setProperty("background","url(images/houseOutsideOpen.png)");
    document.querySelector(".right").style.setProperty("background-position","right");
    if (isDevice === true) {
        document.querySelector(".right").style.setProperty("background-size","61.5vw 100vh");
        document.querySelector(".right").style.setProperty("width","50.5vw");
    }
    document.querySelector(".meowText").style.setProperty("display","none");
    document.querySelector(".section-A--cat").style.setProperty("display","none");
    document.querySelector(".bigLeave").style.setProperty("display","none");
    document.querySelector(".smallLeave-fall").style.setProperty("display","none");
    document.querySelector(".smallLeave-fall--B").style.setProperty("display","none");
    document.querySelector(".section-A--cat2").style.setProperty("display","block");
    clearInterval(intervalCatMoveA);
    clearInterval(intervalCatMoveB);
    clearInterval(intervalCatMoveABack);
    clearInterval(intervalCatMoveBBack);
    setTimeout(goToSection, 1000, section);
    setInterval(catErase,950);
    setTimeout(section2Animation, 1550);
}

const catSettings = () => {
    document.querySelector(".section-A--cat").style.setProperty("background-repeat","no-repeat");
    document.querySelector(".section-A--cat").style.setProperty("background-size","contain");
    document.querySelector(".section-A--cat").style.setProperty("height","15vh");
    document.querySelector(".section-A--cat").style.setProperty("left","72%");
    document.querySelector(".section-A--cat").style.setProperty("position","absolute");
    document.querySelector(".section-A--cat").style.setProperty("top","54%");
    document.querySelector(".section-A--cat").style.setProperty("transform","rotate(-7deg)");
    document.querySelector(".section-A--cat").style.setProperty("width","22vh");

    if (isDevice) {
        document.querySelector(".section-A--cat").style.setProperty("left","72vw");
        document.querySelector(".section-A--cat").style.setProperty("top","54vh");
    }
}

const catMoveA = () => {
    document.querySelector(".section-A--cat").style.setProperty("display","block");
    document.querySelector(".section-A--cat").style.setProperty("background","url(images/cat1.png)");
    catSettings();
}

const catMoveB = () => {
    document.querySelector(".section-A--cat").style.setProperty("background","url(images/cat2.png)");
    catSettings();
}

const catErase = () => {
    document.querySelector(".section-A--cat2").style.setProperty("display","none")
}

var intervalCatMoveABack = setInterval(wait,250000);
var intervalCatMoveBBack = setInterval(wait,250000);
const intervalCatMoveA = setInterval(catMoveA, 300);
const intervalCatMoveB = setInterval(catMoveB, 800);

const goBack = (section) => {
    document.getElementById(section).scrollIntoView();
    if (section === "section-A") {
        document.querySelector(".contact").style.display = "none";
        document.querySelector(".btn__goBackForm").style.display = "none";
        document.querySelector(".helpCat__text").style.display = "block";
        document.querySelector(".helpCat").style.setProperty("cursor","pointer");
        document.querySelector(".helpCat__text--hidden").style.display = "none";
        document.querySelector(".right").style.setProperty("background","url(images/houseOutside.png)");
        document.querySelector(".right").style.setProperty("background-position","right");
        document.querySelector(".meowText").style.setProperty("display","block");
        document.querySelector(".bigLeave").style.setProperty("display","block");
        document.querySelector(".smallLeave-fall").style.setProperty("display","block");
        document.querySelector(".smallLeave-fall--B").style.setProperty("display","block");
        document.querySelector(".wind--A").style.display = "block";
        document.querySelector(".wind--B").style.display = "block";
        document.querySelector(".cloud--A").style.setProperty("display","none");
        document.querySelector(".cloud--B").style.setProperty("display","none");
        document.querySelector(".clouds").style.setProperty("display","none");
        document.querySelector(".frameFix--A").style.setProperty("display","none");
        document.querySelector(".frameFix--B").style.setProperty("display","none");
        document.querySelector(".frameFix--C").style.setProperty("display","none");
        document.querySelector(".bird").style.setProperty("display","none");
        document.querySelector(".technologiesPennants").style.setProperty("display","none");
        document.querySelector(".softSkillsPennants").style.setProperty("display","none");
        document.querySelector(".pointer").style.setProperty("display","none");
        document.querySelector(".helpCat-food").style.setProperty("display","none");
        document.querySelector(".helpCat-BowlFood").style.setProperty("display","none");
        document.querySelector(".helpCat-BowlFood").style.removeProperty("animation","fillFood 6s ease");
        document.querySelector(".helpCat-foodText").style.setProperty("display","none");
        document.querySelector(".helpCat-foodText").style.setProperty("cursor","default");
        document.getElementById("helpCat__text").innerHTML = `<h3 class="helpCat__text" id="helpCat__text">Oh no, the bowl is empty, can you fill it? ⭩[Click the blue bowl]</h3>`;
        document.querySelector(".softSkillBoard").style.setProperty("display","none");
        document.getElementById("purrText").classList.remove("purrText");
        document.querySelector(".hidden").style.setProperty("display","none");
        document.querySelector(".pointerOut").style.setProperty("display","none");
        intervalCatMoveABack = setInterval(catMoveA, 300);
        intervalCatMoveBBack = setInterval(catMoveB, 800);

        /* Styles required for devices*/
        if (isDevice === true) {
            document.querySelector(".right").style.setProperty("background-size","62vw 100vh");
            document.querySelector(".right").style.setProperty("width","50.5vw");
            document.querySelector(".pointerOut").style.setProperty("display","none");
        }
        
    }

    if (section === "section-B") {
        document.getElementById("helpCat__text").innerHTML = `<h3 class="helpCat__text" id="helpCat__text">Oh no, the bowl is empty, can you fill it? ⭩[Click the blue bowl]</h3>`;
        document.getElementById("helpCat__text").style.setProperty("cursor","default");
        document.querySelector(".toyMouse").style.setProperty("display","none");
        document.querySelector(".thanks").style.setProperty("display","none");
        document.querySelector(".pointer3").style.setProperty("display","none");
        document.querySelector(".messyBooks").style.setProperty("display","none");
        document.querySelector(".monitor").style.setProperty("display","none");
        document.getElementById("purrText").classList.remove("purrText");
        document.getElementById("purrText").classList.add("hidden");
        document.querySelector("#purrText").style.setProperty("display","none");
        section2Animation();
        document.querySelector(".helpCat-BowlFood").style.setProperty("animation","none 6s ease");
        document.querySelector(".bedRoom").style.setProperty("animation","none 5s");
        document.querySelector(".pet").style.setProperty("display","none");
    }
}

const wasReload = () => {
    let data= window.performance.getEntriesByType("navigation")[0].type;
    if (data === "reload") {
        document.getElementById("section-A").scrollIntoView();
    }
}

wasReload();

function removeElementsByClass(className){
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

const closeModal = () => {
    document.getElementById("modal").classList.remove("modal");
    document.getElementById("modal__elements").classList.remove("modal__elements");
    document.querySelector(".btn__closeModal").style.setProperty("display","none");

    for (let i = 1; i < 9; i++) {
        if ( document.querySelector(".span"+i.toString())) {
            removeElementsByClass("span"+i.toString());
        }
    }
}

const elementValue = (className, value) => {
    document.querySelector(className).innerHTML = value;
}

const technologiesModal = (url, board) => {
    document.getElementById("modal").classList.add("modal");
    document.getElementById("modal__elements").classList.add("modal__elements");

    document.querySelector(".modal").style.setProperty("background",url);
    document.querySelector(".modal").style.setProperty("background-size","100% 100%");
    
    let div = document.querySelector(".modal__elements")
        let span1 = document.createElement("span");
        let span2 = document.createElement("span");
        let span3 = document.createElement("span");
        let span4 = document.createElement("span");
        let span5 = document.createElement("span");
        let span6 = document.createElement("span");

        span1.className = "span1";
        span2.className = "span2";
        span3.className = "span3";
        span4.className = "span4";
        span5.className = "span5";
        span6.className = "span6";

        div.appendChild(span1);
        div.appendChild(span2);
        div.appendChild(span3);
        div.appendChild(span4);
        div.appendChild(span5);
        div.appendChild(span6);
    if (board === "hard") {
        let span7 = document.createElement("span");
        let span8 = document.createElement("span");

        span7.className = "span7";
        span8.className = "span8";
        
        div.appendChild(span7);
        div.appendChild(span8);

        elementValue(".span1","HTML");
        elementValue(".span2","CSS");
        elementValue(".span3","JavaScript");
        elementValue(".span4","React");
        elementValue(".span5","MySQL");
        elementValue(".span6","Git");
        elementValue(".span7","Bootstrap");
        elementValue(".span8","Adobe Photoshop");

    } else if (board === "soft") {
        elementValue(".span1",`Self-confidence <a href="files/Accenture.pdf">certificate</a>`);
        elementValue(".span2",`Communication <a href="files/Accenture.pdf">certificate</a>`);
        elementValue(".span3",`Productivity <a href="files/Productivity.pdf">certificate</a>`);
        elementValue(".span4",`Focus <a href="files/Focus.pdf">certificate</a>`);
        elementValue(".span5",`Habits <a href="files/Habits.pdf">certificate</a>`);
        elementValue(".span6","Scrum");
    }
}

document.getElementById("helpCat-BowlFood").onclick = function(){
    document.querySelector(".helpCat-BowlFood").style.setProperty("animation","fillFood 6s ease");
    document.querySelector(".helpCat-BowlFood").style.setProperty("animation-fill-mode","forwards");
    document.getElementById("helpCat__text").innerHTML = `<h3 class="helpCat__moveOn" onclick="goToSection('section-C')">Thank you!. Now it's nap time<b class="highlightText">[Click here to move on]</b></h3>`;
    document.querySelector(".helpCat-BowlFood:hover").style.setProperty("cursor","default");
    document.querySelector(".helpCat-foodText").style.setProperty("cursor","pointer");
    document.getElementById("purrText").classList.add("purrText");
    document.querySelector(".hidden").style.setProperty("display","block");
}

const hardSkillModal = () => {
    document.querySelector(".pointer").style.setProperty("display","none");
    document.querySelector(".btn__closeModal").style.setProperty("display","block");
    technologiesModal("url(images/hardSkillBoard.png)", "hard");
}

const softSkillModal = () => {
    document.querySelector(".btn__closeModal").style.setProperty("display","block");
    technologiesModal("url(images/softSkillBoard.png)", "soft");
}

const dontMoveMouse = () => {
    document.querySelector(".toyMouse").style.setProperty("animation","none");
}

const moveMouse = () => {
    document.querySelector(".toyMouse").style.setProperty("animation","mouseMove 10s");
    setInterval(dontMoveMouse, 10200);
}

const walk = () => {
    document.querySelector(".bedRoom").style.setProperty("animation","walk 5s");
    document.querySelector(".bedRoom").style.setProperty("background","url(images/bedroomOrderBook4.png) no-repeat");
    document.querySelector(".bedRoom").style.setProperty("animation-fill-mode","forwards");
}

const monitor = () => {
    document.querySelector(".monitor").style.setProperty("display","block");
}

const borderPet = () => {
    document.querySelector(".pet").style.setProperty("display","block");
}

document.getElementById("messyBooks").onclick = function(){
    document.querySelector(".messyBooks").style.setProperty("display","none");
    document.querySelector(".pointer3").style.setProperty("display","none");
    document.querySelector(".thanks").style.setProperty("display","none");
    document.querySelector(".toyMouse").style.setProperty("display","none");
    setTimeout(walk, 500);
    setTimeout(borderPet, 5000);
    setTimeout(monitor, 6000);
}

const sleep = () => {
    document.querySelector(".pet").style.removeProperty("background","url(images/purrText.svg) no-repeat");

}

const touch = () => {
    document.querySelector(".pet").style.setProperty("background","url(images/purrText.svg) no-repeat");
    setTimeout(sleep,2250);
}

/* Monitor proyects */

const attachEvents = () => {

    let badge = document.querySelector(".badge");
    let caption = document.querySelector(".monitorFigcaption");
    let details = document.querySelector(".details");
    let detailsContent = document.querySelector(".details__content");
    let front = document.querySelector(".front");
    let back = document.querySelector(".back");
    let showFrontBtn = document.querySelector("#show-front");
    let showBackBtn = document.querySelector("#show-back");
    
caption.addEventListener("mouseover", function () {
    let contentHeight = detailsContent.offsetHeight;
    details.style.height = contentHeight + 10 + "px";
    badge.innerHTML = "<img src='images/minus.png' class='minus' alt='minus'>";
});

caption.addEventListener("mouseout", function () {
    details.style.height = 0;
    badge.innerHTML = "<img src='images/plus.png' class='minus' alt='plus'>";
});

showBackBtn.addEventListener("click", function () {
    back.style.transform = "perspective( 2000px ) rotateY( 0deg )";
    front.style.transform = "perspective( 2000px ) rotateY( -180deg )";
});

showFrontBtn.addEventListener("click", function () {
    front.style.transform = "perspective( 2000px ) rotateY( 0deg )";
    back.style.transform = "perspective( 2000px ) rotateY( 180deg )";
});
}

let totalProyects = 3, proyect = 0;
attachEvents();

document.querySelector(".previous").addEventListener('click', function() {
    proyect--;
    if (proyect < 0) proyect = totalProyects - 1;
    if (proyect === (totalProyects)) proyect = 0;
    if (proyect === 0) {
        //HangMan game
        document.querySelector(".monitorFigure").innerHTML = `
        <div class="back">
            <div class="back__header">
                <h2 class="titleBack">Hangman game (Spanish).</h2>
                <button id="show-front">Back to front</i></button>
            </div>
            <p class="detailsBack">
                Using a row of dashes, the word to be guessed is represented, giving the number of letters (in the form of dashes). If the guessing player suggests a letter that appears in the word, the other player writes it in all its correct positions. If the letter is not correct, it is shown on the hanged stickman figure as a tally mark.<br>
                · More than 40 words.<br>
                · You have 7 attempts per word.<br>
                · It does not have words that use "ñ" or umlauts.<br>
                · Possibility to add your own word.<br>
                Can you save the person?... Let's find out.
            </p>
        </div>
        <div class="front">
            <div class="image">
                <a class="link" href="https://velascocristian.github.io/Juego-del-ahorcado/" target="_blank"><img class="imgProyect" src="images/proyectHangGame.png" alt="hangman game"></a>
            </div>
            <figcaption class="monitorFigcaption">
                <h4 class="titleFront">Hangman game.<b class="badge"><img src="images/plus.png" class="minus" alt="plus"></b></h4>
                <div class="details">
                    <p class="details__content">The classic hangman game. HTML5 - CSS3 - JAVASCRIPT.
                        <button id="show-back">Read the back<i class="plus"></i></button>
                    </p>
                </div>
            </figcaption>
        </div>`;
    } else if (proyect === 1) {
        // Encrypter
        document.querySelector(".monitorFigure").innerHTML = `
        <div class="back">
            <div class="back__header">
                <h2 class="titleBack">Simple Encrypter.</h2>
                <button id="show-front">Back to front</i></button>
            </div>
            <p class="detailsBack">
                'The encryption "keys" used are the following: <br>
                ·The letter "e" is converted to "enter" <br>
                ·The letter "i" is converted to "imes" <br>
                ·The letter "a" is converted to "ai" <br>
                ·The letter "o" is converted to "ober" <br>
                ·The letter "u" is converted to "ufat" <br>
                <br>Requirements: <br>
                ·Uppercase letters are set to lowercase <br>
                ·Special characters are ignored';
            </p>
        </div>
        <div class="front">
            <div class="image">
                <a class="link" href="https://velascocristian.github.io/Encriptador/" target="_blank"><img class="imgProyect" src="images/proyectEncrypter.png" alt="Encrypter"></a>
            </div>
            <figcaption class="monitorFigcaption">
                <h4 class="titleFront">Encrypter.<b class="badge"><img src="images/plus.png" class="minus" alt="plus"></b></h4>
                <div class="details">
                    <p class="details__content">A simple tool capable of encrypting and/or a string of text. HTML5 - CSS3 - JAVASCRIPT.
                        <button id="show-back">Read the back<i class="plus"></i></button>
                    </p>
                </div>
            </figcaption>
        </div>`;
    } else if (proyect === 2) {
        document.querySelector(".monitorFigure").innerHTML = `
        <div class="back">
            <div class="back__header">
                <h2 class="titleBack">Personal Github.</h2>
                <button id="show-front">Back to front</i></button>
            </div>
            <p class="detailsBack">
                I will upload more projects soon, while you have a look in my Github repository.
            </p>
        </div>
        <div class="front">
            <div class="image">
                <a class="link" href="https://github.com/VelascoCristian" target="_blank"><img class="imgProyect" src="images/proyectSoon.png" alt="myGithub"></a>
            </div>
            <figcaption class="monitorFigcaption">
                <h4 class="titleFront">Personal Github.<b class="badge"><img src="images/plus.png" class="minus" alt="plus"></b></h4>
                <div class="details">
                    <p class="details__content">While you have a look in my Github repository.
                        <button id="show-back">Read the back<i class="plus"></i></button>
                    </p>
                </div>
            </figcaption>
        </div>`
    }
    attachEvents();
});

document.querySelector(".goOn").addEventListener('click', function() {
    proyect++;
    
    if (proyect === (totalProyects)) proyect = 0;
    if (proyect === 0) {
        //HangMan game
        document.querySelector(".monitorFigure").innerHTML = `
        <div class="back">
            <div class="back__header">
                <h2 class="titleBack">Hangman game (Spanish).</h2>
                <button id="show-front">Back to front</i></button>
            </div>
            <p class="detailsBack">
                Using a row of dashes, the word to be guessed is represented, giving the number of letters (in the form of dashes). If the guessing player suggests a letter that appears in the word, the other player writes it in all its correct positions. If the letter is not correct, it is shown on the hanged stickman figure as a tally mark.<br>
                · More than 40 words.<br>
                · You have 7 attempts per word.<br>
                · It does not have words that use "ñ" or umlauts.<br>
                · Possibility to add your own word.<br>
                Can you save the person?... Let's find out.
            </p>
        </div>
        <div class="front">
            <div class="image">
                <a class="link" href="https://velascocristian.github.io/Juego-del-ahorcado/" target="_blank"><img class="imgProyect" src="images/proyectHangGame.png" alt="hangman game"></a>
            </div>
            <figcaption class="monitorFigcaption">
                <h4 class="titleFront">Hangman game.<b class="badge"><img src="images/plus.png" class="minus" alt="plus"></b></h4>
                <div class="details">
                    <p class="details__content">The classic hangman game. HTML5 - CSS3 - JAVASCRIPT.
                        <button id="show-back">Read the back<i class="plus"></i></button>
                    </p>
                </div>
            </figcaption>
        </div>`;
    } else if (proyect === 1) {
        // Encrypter
        document.querySelector(".monitorFigure").innerHTML = `
        <div class="back">
            <div class="back__header">
                <h2 class="titleBack">Simple Encrypter.</h2>
                <button id="show-front">Back to front</i></button>
            </div>
            <p class="detailsBack">
                'The encryption "keys" used are the following: <br>
                ·The letter "e" is converted to "enter" <br>
                ·The letter "i" is converted to "imes" <br>
                ·The letter "a" is converted to "ai" <br>
                ·The letter "o" is converted to "ober" <br>
                ·The letter "u" is converted to "ufat" <br>
                <br>Requirements: <br>
                ·Uppercase letters are set to lowercase <br>
                ·Special characters are ignored';
            </p>
        </div>
        <div class="front">
            <div class="image">
                <a class="link" href="https://velascocristian.github.io/Encriptador/" target="_blank"><img class="imgProyect" src="images/proyectEncrypter.png" alt="Encrypter"></a>
            </div>
            <figcaption class="monitorFigcaption">
                <h4 class="titleFront">Encrypter.<b class="badge"><img src="images/plus.png" class="minus" alt="plus"></b></h4>
                <div class="details">
                    <p class="details__content">A simple tool capable of encrypting and/or a string of text. HTML5 - CSS3 - JAVASCRIPT.
                        <button id="show-back">Read the back<i class="plus"></i></button>
                    </p>
                </div>
            </figcaption>
        </div>`;
    } else if (proyect === 2) {
        document.querySelector(".monitorFigure").innerHTML = `
        <div class="back">
            <div class="back__header">
                <h2 class="titleBack">Personal Github.</h2>
                <button id="show-front">Back to front</i></button>
            </div>
            <p class="detailsBack">
                I will upload more projects soon, while you have a look in my Github repository.
            </p>
        </div>
        <div class="front">
            <div class="image">
                <a class="link" href="https://github.com/VelascoCristian" target="_blank"><img class="imgProyect" src="images/proyectSoon.png" alt="myGithub"></a>
            </div>
            <figcaption class="monitorFigcaption">
                <h4 class="titleFront">Personal Github.<b class="badge"><img src="images/plus.png" class="minus" alt="plus"></b></h4>
                <div class="details">
                    <p class="details__content">While you have a look in my Github repository.
                        <button id="show-back">Read the back<i class="plus"></i></button>
                    </p>
                </div>
            </figcaption>
        </div>`
    }
    attachEvents();
});

const goToContact = (section) => {

    if (section === "section-A") {
        document.querySelector(".wind--A").style.display = "none";
        document.querySelector(".wind--B").style.display = "none";
        document.querySelector(".bigLeave").style.display = "none";
        document.querySelector(".smallLeave-fall").style.display = "none";
        document.querySelector(".smallLeave-fall--B").style.display = "none";
        document.querySelector(".meowText").style.display = "none";
        document.querySelector(".section-A--cat").style.display = "none";
        document.querySelector(".section-A--cat2").style.display = "none";
        document.querySelector(".helpCat__fakeDoor").style.display = "none";
    } else if (section === "section-B") {
        document.querySelector(".pointerOut").style.display = "none";
        document.querySelector(".cloud--A").style.setProperty("display","none");
        document.querySelector(".cloud--B").style.setProperty("display","none");
        document.querySelector(".clouds").style.setProperty("display","none");
        document.querySelector(".frameFix--A").style.setProperty("display","none");
        document.querySelector(".frameFix--B").style.setProperty("display","none");
        document.querySelector(".frameFix--C").style.setProperty("display","none");
        document.querySelector(".bird").style.setProperty("display","none");
        document.querySelector(".technologiesPennants").style.setProperty("display","none");
        document.querySelector(".softSkillsPennants").style.setProperty("display","none");
        document.querySelector(".pointer").style.setProperty("display","none");
        document.querySelector(".helpCat-food").style.setProperty("display","none");
        document.querySelector(".helpCat-BowlFood").style.setProperty("display","none");
        document.querySelector(".helpCat-foodText").style.setProperty("display","none");
        document.querySelector(".softSkillBoard").style.setProperty("display","none");
    } else if (section === "section-C") {
        
        document.querySelector(".pointer3").style.setProperty("display","none");
        document.querySelector(".thanks").style.setProperty("display","none");
        document.querySelector(".messyBooks").style.setProperty("display","none");
        document.querySelector(".toyMouse").style.setProperty("display","none");
        document.querySelector(".pet").style.setProperty("display","none");
        document.querySelector(".monitor").style.setProperty("display","none");
        document.querySelector(".goOn").style.setProperty("display","none");
        document.querySelector(".previous").style.setProperty("display","none");
        document.querySelector(".titleProyect").style.setProperty("display","none");
        document.querySelector(".bedRoom").style.setProperty("animation","none 5s");
    }
    clearInterval(intervalCatMoveABack);
    clearInterval(intervalCatMoveBBack);
    clearInterval(intervalCatMoveA);
    clearInterval(intervalCatMoveB);
    document.querySelector(".btn__goBackForm").style.display = "block";
    document.querySelector(".contact").style.display = "block";
}

const typesOfErrors = [
    "valueMissing",
    "typeMismatch",
];

const errorMessage = {
    name: {
        valueMissing: "The name field cannot be empty",
    },
    email: {
        valueMissing: "The email field cannot be empty",
        typeMismatch: "The email is invalid",
    },
    message: {
        valueMissing: "The message field cannot be empty",
    }
}


function showErrorMessage(typeOfInput, input) {
    let message = "";
    typesOfErrors.forEach((error) => {
        if (input.validity[error]) {
            console.log(typeOfInput, error);
            console.log(input.validity[error]);
            console.log(errorMessage[typeOfInput][error]);
            message = errorMessage[typeOfInput][error];
        }
    });
    return message;
}

function validation(input) {
    const inputType = input.dataset.type;
    if (input.validity.valid) {
        input.parentElement.classList.remove("form__error--invalid");
        input.parentElement.querySelector(".form__error").innerHTML = "";
    } else {
        input.parentElement.classList.add("form__error--invalid");
        input.parentElement.querySelector(".form__error").innerHTML =
        showErrorMessage(inputType, input);
    }
}


const inputs = document.querySelectorAll("input");
const textAreas = document.querySelectorAll("textarea");

inputs.forEach((input) => {
    input.addEventListener("blur", (input) => {
        validation(input.target);
    });
});

textAreas.forEach((textarea) => {
    textarea.addEventListener("blur", (textarea) => {
        validation(textarea.target);
    });
});

const adviceGone = () => {
    document.querySelector(".adviceSmartPhone").style.display = "none"
    isDevice = true;
}

window.addEventListener("orientationchange", () => {
    getOrientation();
});

function getOrientation() {
    if (window.matchMedia("(orientation: landscape)").matches) {
        location.reload();
    }
};
