let body = document.getElementsByTagName("body")[0];

let footer = document.createElement("footer");

let p = document.createElement("p");

let div = document.createElement("div");

let a = document.createElement("a");

let icon = document.createElement("i");

p.innerHTML = "Contact Me";
footer.appendChild(p);

icon.setAttribute('class', "fab fa-github");
icon.setAttribute("style", "font-size: 3vw");

a.appendChild(icon);

a.setAttribute("href","https://www.github.com/v123in4");
a.setAttribute("target", "_blank");

div.appendChild(a);

footer.appendChild(div);
body.appendChild(footer);