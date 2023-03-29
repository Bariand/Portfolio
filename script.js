let switchValueOne = 1;
let switchValueTwo = 0;
let switchValueThree = 0;
let switchValueFour = 1;
let sectionHeaderCrt = document.getElementById("section-header");

//Turns CRT on at startup
sectionHeaderCrt.setAttribute("sectionHeaderBefore", "1");
sectionHeaderCrt.setAttribute("sectionHeaderAfter", "1");

//Dropdown menu and cog animation logic
document.querySelector(".cog-link").onclick = function ConfigMenuDowndown() {

    let showDropdown = document.getElementById("cog-dropdown").classList.toggle("show-dropdown");
    showDropdown;
    
    if (showDropdown) {
        document.getElementById("cog-img").style.animationDuration = "10s";
    } else {
        document.getElementById("cog-img").style.animationDuration = "0s";
    }
}

//CRT scanlines switch logic
document.getElementById("flexSwitchCheck1").onchange = function SwitchCRT() {

    if (switchValueOne === 1) {
        switchValueOne = 0;

        sectionHeaderCrt.removeAttribute("sectionHeaderBefore");
        sectionHeaderCrt.removeAttribute("sectionHeaderAfter");

    } else {
        switchValueOne = 1;

        sectionHeaderCrt.setAttribute("sectionHeaderBefore", "1");
        sectionHeaderCrt.setAttribute("sectionHeaderAfter", "1");
    }
}

//CRT flicker switch logic
document.getElementById("flexSwitchCheck2").onchange = function SwitchFX() {

    let styleElem = document.head.appendChild(document.createElement("style"));

    if (switchValueTwo === 1) {
        switchValueTwo = 0;

        // var styleElem = document.head.appendChild(document.createElement("style"));
        styleElem.innerHTML = "#section-header[sectionHeaderAfter]::after {animation: none ;}";

    } else {
        switchValueTwo = 1;

        // var styleElem = document.head.appendChild(document.createElement("style"));
        styleElem.innerHTML = "#section-header[sectionHeaderAfter]::after {animation: flicker 0.15s infinite;}";
    }
}

// Language selection logic
document.getElementById("flexSwitchCheck3").onchange = function SwitchLang() {

    let ptBrElement = document.getElementsByClassName("pt-br");
    let engElement = document.getElementsByClassName("eng");

    if (switchValueThree === 1) {
        switchValueThree = 0;

        for(let i = 0; i < ptBrElement.length; i++){
            ptBrElement[i].style.display = "inherit";
        }
        for(let i = 0; i < engElement.length; i++){
            engElement[i].style.display = "none";
        }

    } else {
        switchValueThree = 1;

        for(let i = 0; i < ptBrElement.length; i++){
            ptBrElement[i].style.display = "none";
        }
        for(let i = 0; i < engElement.length; i++){
            engElement[i].style.display = "inherit";
        }
    }
}

// Amber / LCD mode
document.getElementById("flexSwitchCheck4").onchange = function SwitchMode(){
    let fontColor = document.querySelectorAll("h1, h2, h3, h4, .pt-br, .eng, .switch-text, .link-1, .link");
    let barColor = document.querySelectorAll(".black-line");
    let background = document.querySelectorAll("main, .col-6, .item-row-left-to-right, .item-row-right-to-left, .techs-subtitle, .item-row-techs, .item-row");
    let fontColorNav = document.querySelectorAll(".navbar-div .pt-br, .navbar-div .eng, .intra-navbar-div .pt-br, .intra-navbar-div .eng, .switch-text");
    let divTituloSecao = document.querySelectorAll(".div-titulo-secao");
    let cogImg = document.querySelector("#cog-img");
    let switchesSecao = document.querySelectorAll(".form-check-input:checked, .form-switch .form-check-input, .form-switch .form-check-input, .form-switch .form-check-input:not(:checked), .form-switch .form-check-input:focus, .form-switch .form-check-input:focus:not(:checked)");
    let face = document.querySelector(".my-image");
    let images = document.querySelectorAll(".image-projects");
    let tituloSecaoH3 = document.querySelectorAll(".titulo-secao");
    let pillColors = document.querySelectorAll(".text-bg-primary, .text-bg-danger, .text-bg-info, .text-bg-warning");
    let pillColorsP = document.querySelectorAll(".white-pill, .white-pill");

    //Amber mode

    if(switchValueFour === 1){
        switchValueFour = 0;
        console.log("0");

        for(i = 0; i < fontColor.length; i++){
            fontColor[i].style.color = "var(--amber-pc)";
        }
        for(i = 0; i < barColor.length; i++){
            barColor[i].style.backgroundColor = "var(--amber-pc)";
        }
        for(i = 0; i < background.length; i++){
            background[i].style.backgroundColor = "var(--black)";
        }
        for(i = 0; i < divTituloSecao.length; i++){
            divTituloSecao[i].style.background = "var(--grad-amber-pc)";
        }
        for(i = 0; i < switchesSecao.length; i++){
            switchesSecao[i].style.borderColor = "var(--amber-pc)";
            switchesSecao[i].style.backgroundColor = "var(--amber-pc)";
        }
        for(i = 0; i < images.length; i++){
            images[0].src = "imagens/michele-bolsas-index-amber.png";
            images[1].src = "imagens/img-four-gold-amber.png";
            images[2].src = "imagens/img-four-blog-amber.png";
            images[3].src = "imagens/img-four-task-amber.png";
            images[4].src = "imagens/img-design-thinking-amber.png";
        }
        for(i = 0; i < tituloSecaoH3.length; i++){
            tituloSecaoH3[i].style.color = "var(--black)";
        }
        for(i = 0; i < pillColors.length; i++){
            pillColors[i].style.background = "var(--grad-amber-pill)";
        }
        for(i = 0; i < pillColorsP.length; i++){
            pillColorsP[i].style.color = "var(--black)";
        }
        face.src = "imagens/minha-foto-amber.jpg";
        cogImg.src = "imagens/cogwheel-amber.svg";

    //LCD mode

    } else {
        switchValueFour = 1;
        console.log("1");

        for(i = 0; i < fontColor.length; i++){
            fontColor[i].style.color = "var(--black)";
            fontColor[i].style.color = "var(--black)";
        }
        for(i = 0; i < barColor.length; i++){
            barColor[i].style.backgroundColor = "var(--black)";
        }
        for(i = 0; i < background.length; i++){
            background[i].style.backgroundColor = "var(--white)";
        }
        for(i = 0; i < fontColorNav.length; i++){
            fontColorNav[i].style.color = "var(--white)";
        }
        for(i = 0; i < divTituloSecao.length; i++){
            divTituloSecao[i].style.background = "var(--dark-red)";
        }
        for(i = 0; i < switchesSecao.length; i++){
            switchesSecao[i].style.borderColor = "var(--dark-red)";
            switchesSecao[i].style.backgroundColor = "var(--white)";
        }
        for(i = 0; i < images.length; i++){
            images[0].src = "imagens/michele-bolsas-index.png";
            images[1].src = "imagens/img-four-gold.png";
            images[2].src = "imagens/img-four-blog.png";
            images[3].src = "imagens/img-four-task.png";
            images[4].src = "imagens/img-design-thinking.png";
        }
        for(i = 0; i < tituloSecaoH3.length; i++){
            tituloSecaoH3[i].style.color = "var(--white)";
        }
        for(i = 0; i < pillColors.length; i++){
            if(pillColors[i].className == "badge rounded-pill text-bg-primary"){

                pillColors[i].style.background = "var(--text-bg-primary)";

            } else if(pillColors[i].className == "badge rounded-pill text-bg-danger"){

                pillColors[i].style.background = "var(--text-bg-danger)";

            } else if (pillColors[i].className == "badge rounded-pill text-bg-info"){

                pillColors[i].style.background = "var(--text-bg-info)";

            } else {

                pillColors[i].style.background = "var(--text-bg-warning)";

            }
        }
        for(i = 0; i < pillColorsP.length; i++){

            for(i = 0; i < pillColorsP.length; i++){
                pillColorsP[i].style.color = "var(--white)";
            }
        }
        face.src = "imagens/minha-foto.jpg";
        cogImg.src = "imagens/cogwheel-white.svg";
    }
}