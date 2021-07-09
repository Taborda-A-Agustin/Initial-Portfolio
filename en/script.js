function hideDiv () {
    welcome.style.display = "none";
}
setTimeout("hideDiv()", 4000);

let welcome = document.getElementById("welcome");

function hideDiv1 () {
    starsBody.style.display = "none";
}
setTimeout("hideDiv1()", 4000);

let starsBody = document.getElementById("starsBody");

function showDiv () {
    all.style.display= "block"
}
setTimeout("showDiv()", 4000);

$(function(){
    setTimeout(function(){
      $('html, body')
      .css({
        'overflow': 'auto'
      })
      .animate({
        scrollTop: $('.myDiv').offset()
      }, 4000);
    }, 4000);
  });

let all = document.getElementById("all");

let homeNav = document.querySelector("#homeNav");
let home = document.querySelector ("#home");
let aboutNav = document.querySelector ("#aboutNav");
let about = document.querySelector ("#about");
let contactNav = document.querySelector ("#contactNav");
let contact = document.querySelector ("#contact");

homeNav.addEventListener("click", scrollHome, false);
aboutNav.addEventListener("click", scrollAbout, false);
contactNav.addEventListener("click", scrollContact, false);

function scrollHome (e) {
    home.scrollIntoView ({behavior: "smooth"});
};

function scrollAbout (e) {
    about.scrollIntoView ({behavior: "smooth"});
};

function scrollContact (e) {
    contact.scrollIntoView ({behavior: "smooth"});
};

let linkedin = document.querySelector(".linkedin");
linkedin.addEventListener("click", goLinkedin);

let github = document.querySelector(".github");
github.addEventListener("click", goGithub);

let whatsapp = document.querySelector(".whatsapp");
whatsapp.addEventListener("click", goWhatsapp);

function htmlbyn () {
    let image = document.getElementById('html');
    if (image.src.match("byn")) {
        image.src = "../imgs/htmlcolor.png";
    }
}

function htmlcolor () {
    let image = document.getElementById('html');
    if (image.src.match("color")) {
        image.src = "../imgs/htmlbyn.png";
    }
}

function cssbyn () {
    let imagecss = document.getElementById('css');
    if (imagecss.src.match("byn")) {
        imagecss.src = "../imgs/csscolor.png";
    }
}

function csscolor () {
    let imagecss = document.getElementById('css');
    if (imagecss.src.match("color")) {
        imagecss.src = "../imgs/cssbyn.png";
    }
}

function jsbyn () {
    let imagejs = document.getElementById('js');
    if (imagejs.src.match("byn")) {
        imagejs.src = "../imgs/jscolor.png";
    }
}

function jscolor () {
    let imagecss = document.getElementById('js');
    if (imagecss.src.match("color")) {
        imagecss.src = "../imgs/jsbyn.png";
    }
}

function bbyn () {
    let imageb = document.getElementById('b');
    if (imageb.src.match("byn")) {
        imageb.src = "../imgs/bcolor.png";
    }
}

function bcolor () {
    let imageb = document.getElementById('b');
    if (imageb.src.match("color")) {
        imageb.src = "../imgs/bbyn.png";
    }
}

function jquerybyn () {
    let imagejquery = document.getElementById('jquery');
    if (imagejquery.src.match("byn")) {
        imagejquery.src = "../imgs/jquerycolor.png";
    }
}

function jquerycolor () {
    let imagejquery = document.getElementById('jquery');
    if (imagejquery.src.match("color")) {
        imagejquery.src = "../imgs/jquerybyn.png";
    }
}

function goLinkedin (e) {
    window.open("https://www.linkedin.com/in/albertoagustintaborda/")
};

function goGithub (e) {
    window.open("https://github.com/aguskapool")
};

function goWhatsapp (e) {
    window.open("https://wa.me/+5493442641913")
};

let hhh = document.getElementById ("hhh");
hhh.addEventListener ("mousemove", mohhh);
hhh.addEventListener ("mouseleave", mlhhh);
let hhe = document.getElementById ("hhe");
hhe.addEventListener ("mousemove", mohhe);
hhe.addEventListener ("mouseleave", mlhhe);
let hhl = document.getElementById ("hhl");
hhl.addEventListener ("mousemove", mohhl);
hhl.addEventListener ("mouseleave", mlhhl);
let hhl2 = document.getElementById ("hhl2");
hhl2.addEventListener ("mousemove", mohhl2);
hhl2.addEventListener ("mouseleave", mlhhl2);
let hho = document.getElementById ("hho");
hho.addEventListener ("mousemove", mohho);
hho.addEventListener ("mouseleave", mlhho);
let hhcoma = document.getElementById ("hhcoma");
hhcoma.addEventListener ("mousemove", mohhcoma);
hhcoma.addEventListener ("mouseleave", mlhhcoma);
let hhi = document.getElementById ("hhi");
hhi.addEventListener ("mousemove", mohhi);
hhi.addEventListener ("mouseleave", mlhhi);
let hha = document.getElementById ("hha");
hha.addEventListener ("mousemove", mohha);
hha.addEventListener ("mouseleave", mlhha);
let hhm = document.getElementById ("hhm");
hhm.addEventListener ("mousemove", mohhm);
hhm.addEventListener ("mouseleave", mlhhm);
let hha2 = document.getElementById ("hha2");
hha2.addEventListener ("mousemove", mohha2);
hha2.addEventListener ("mouseleave", mlhha2);
let hhg = document.getElementById ("hhg");
hhg.addEventListener ("mousemove", mohhg);
hhg.addEventListener ("mouseleave", mlhhg);
let hhu = document.getElementById ("hhu");
hhu.addEventListener ("mousemove", mohhu);
hhu.addEventListener ("mouseleave", mlhhu);
let hhs = document.getElementById ("hhs");
hhs.addEventListener ("mousemove", mohhs);
hhs.addEventListener ("mouseleave", mlhhs);
let hhexcla = document.getElementById ("hhexcla");
hhexcla.addEventListener ("mousemove", mohhexcla);
hhexcla.addEventListener ("mouseleave", mlhhexcla);

function mohhh (e) {
    hhh.style.color = "#000000";
    hhh.style.fontSize = "4.7vw";
};
function mlhhh (e) {
    hhh.style.color = "#FFFFFF";
    hhh.style.fontSize= "4vw";
};
function mohhe (e) {
    hhe.style.color = "#000000";
    hhe.style.fontSize = "4.7vw";
};
function mlhhe (e) {
    hhe.style.color = "#FFFFFF";
    hhe.style.fontSize= "4vw";
};
function mohhl (e) {
    hhl.style.color = "#000000";
    hhl.style.fontSize = "4.7vw";
    hhl.style.borderBottom = "2px solid #000";
};
function mlhhl (e) {
    hhl.style.color = "#FFFFFF";
    hhl.style.fontSize= "4vw";
    hhl.style.borderBottom = "2px solid #FFFFFF";
};
function mohhl2 (e) {
    hhl2.style.color = "#000000";
    hhl2.style.fontSize = "4.7vw";
    hhl2.style.borderBottom = "2px solid #000";
};
function mlhhl2 (e) {
    hhl2.style.color = "#FFFFFF";
    hhl2.style.fontSize= "4vw";
    hhl2.style.borderBottom = "2px solid #FFFFFF";
};
function mohho (e) {
    hho.style.color = "#000000";
    hho.style.fontSize = "4.7vw";
    hho.style.borderBottom = "2px solid #000";
};
function mlhho (e) {
    hho.style.color = "#FFFFFF";
    hho.style.fontSize= "4vw";
    hho.style.borderBottom = "2px solid #FFFFFF";
};
function mohhcoma (e) {
    hhcoma.style.color = "#000000";
    hhcoma.style.fontSize = "4.7vw";
    hhcoma.style.borderBottom = "2px solid #000";
};
function mlhhcoma (e) {
    hhcoma.style.color = "#FFFFFF";
    hhcoma.style.fontSize= "4vw";
    hhcoma.style.borderBottom = "2px solid #FFFFFF";
};

function mohhi (e) {
    hhi.style.color = "#000000";
    hhi.style.fontSize = "4.7vw";
    hhi.style.borderBottom = "2px solid #000";
};
function mlhhi (e) {
    hhi.style.color = "#FFFFFF";
    hhi.style.fontSize= "4vw";
    hhi.style.borderBottom = "2px solid #FFFFFF";
};

function mohha (e) {
    hha.style.color = "#000000";
    hha.style.fontSize = "4.7vw";
    hha.style.borderBottom = "2px solid #000";
};
function mlhha (e) {
    hha.style.color = "#FFFFFF";
    hha.style.fontSize= "4vw";
    hha.style.borderBottom = "2px solid #FFFFFF";
};

function mohhm (e) {
    hhm.style.color = "#000000";
    hhm.style.fontSize = "4.7vw";
    hhm.style.borderBottom = "2px solid #000";
};
function mlhhm (e) {
    hhm.style.color = "#FFFFFF";
    hhm.style.fontSize= "4vw";
    hhm.style.borderBottom = "2px solid #FFF";
};

function mohha2 (e) {
    hha2.style.color = "#000000";
    hha2.style.fontSize = "4.7vw";
    hha2.style.borderBottom = "2px solid #000";
};

function mlhha2 (e) {
    hha2.style.color = "#FFFFFF";
    hha2.style.fontSize= "4vw";
    hha2.style.borderBottom = "2px solid #FFFFFF";
};

function mohhg (e) {
    hhg.style.color = "#000000";
    hhg.style.fontSize = "4.7vw";
    hhg.style.borderBottom = "2px solid #000";
};

function mlhhg (e) {
    hhg.style.color = "#FFFFFF";
    hhg.style.fontSize= "4vw";
    hhg.style.borderBottom = "2px solid #FFFFFF";
};

function mohhu (e) {
    hhu.style.color = "#000000";
    hhu.style.fontSize = "4.7vw";
    hhu.style.borderBottom = "2px solid #000";
};

function mlhhu (e) {
    hhu.style.color = "#FFFFFF";
    hhu.style.fontSize= "4vw";
    hhu.style.borderBottom = "2px solid #FFFFFF";
};

function mohhs (e) {
    hhs.style.color = "#000000";
    hhs.style.fontSize = "4.7vw";
};

function mlhhs (e) {
    hhs.style.color = "#FFFFFF";
    hhs.style.fontSize= "4vw";
};


function mohhexcla (e) {
    hhexcla.style.color = "#000000";
    hhexcla.style.fontSize = "4.7vw";
};

function mlhhexcla (e) {
    hhexcla.style.color = "#FFFFFF";
    hhexcla.style.fontSize= "4vw";
};





