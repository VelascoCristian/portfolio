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
    document.querySelector(".right").style.setProperty("background","url(houseOutsideOpen.png)");
    document.querySelector(".right").style.setProperty("background-position","right");
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
}

const catMoveA = () => {
    document.querySelector(".section-A--cat").style.setProperty("display","block");
    document.querySelector(".section-A--cat").style.setProperty("background","url(cat1.png)");
    catSettings();
}

const catMoveB = () => {
    document.querySelector(".section-A--cat").style.setProperty("background","url(cat2.png)");
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
        document.querySelector(".helpCat__text").style.display = "block";
        document.querySelector(".helpCat").style.setProperty("cursor","pointer");
        document.querySelector(".helpCat__text--hidden").style.display = "none";
        document.querySelector(".right").style.setProperty("background","url(houseOutside.png)");
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
        intervalCatMoveABack = setInterval(catMoveA, 300);
        intervalCatMoveBBack = setInterval(catMoveB, 800);
    }
}

const wasReload = () => {
    let data=window.performance.getEntriesByType("navigation")[0].type;
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
        elementValue(".span1",`Self-confidence <a href="Accenture.pdf">certificate</a>`);
        elementValue(".span2",`Communication <a href="Accenture.pdf">certificate</a>`);
        elementValue(".span3",`Productivity <a href="Productivity.pdf">certificate</a>`);
        elementValue(".span4",`Focus <a href="Focus.pdf">certificate</a>`);
        elementValue(".span5",`Habits <a href="Habits.pdf">certificate</a>`);
        elementValue(".span6","Scrum");

    }
}

const fill = () => {
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
    technologiesModal("url(hardSkillBoard.png)", "hard");
}

const softSkillModal = () => {
    document.querySelector(".btn__closeModal").style.setProperty("display","block");
    technologiesModal("url(softSkillBoard.png)", "soft");
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
    document.querySelector(".bedRoom").style.setProperty("background","url(bedroomOrderBook4.png) no-repeat");
    document.querySelector(".bedRoom").style.setProperty("animation-fill-mode","forwards");
}

const orderBooks = () => {
    document.querySelector(".messyBooks").style.setProperty("display","none");
    document.querySelector(".pointer3").style.setProperty("display","none");
    document.querySelector(".thanks").style.setProperty("display","none");
    document.querySelector(".toyMouse").style.setProperty("display","none");
    setTimeout(walk, 500);
    document.querySelector(".pet").style.setProperty("display","block");
    document.querySelector(".monitor").style.setProperty("display","block");
}


/*const pet = () => {
    document.querySelector(".pet").style.setProperty("background","url(purrText.svg) no-repeat");
}

const touch = () => {
    let sleep = setTimeout(pet, 1000);
    setTimeout(pet, 1000);
    clearInterval(sleep);
}*/


const sleep = () => {
    document.querySelector(".pet").style.removeProperty("background","url(purrText.svg) no-repeat");

}

const touch = () => {
    document.querySelector(".pet").style.setProperty("background","url(purrText.svg) no-repeat");
    setTimeout(sleep,2250);
}





