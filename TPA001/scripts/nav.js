let navDir = {
    Home : "index.html",
    About : "about.html",
    Portfolio : "portfolio.html",
    Articles : "articles.html"
}

let nav = document.getElementsByTagName("nav")[0];
let ul = document.createElement("ul");

// let logo = document.createElement("img");
// logo.setAttribute(`src`, `../images/logo.jpeg`);
// logo.setAttribute(`alt`, "Logo");
// nav.appendChild(logo);

for (key in navDir) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.innerText = `${key}`;
    a.setAttribute("href", navDir[key]);

    li.appendChild(a);
    ul.appendChild(li);
}
console.log(ul)

nav.appendChild(ul);