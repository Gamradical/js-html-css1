var footer = document.querySelector("footer");
console.log(footer);
footer.style.backgroundColor = "#d7ddf3";

var tagline = document.querySelector(".tagline");
console.log(tagline);
tagline.innerText = "Say what you can't say--in a floral bouquet!";
console.log(tagline);

var address = document.querySelector("address");
address.style.lineHeight = "1.5em";
address.style.fontSize = "1.75em";
//console.log(address);

var everyDay = document.querySelector(".contact h3");
console.log(everyDay);
//<h3>We're here for you every day of the week.</h3>
everyDay.innerHTML = "We're here for you <em>every day</em> of the week.";
console.log(everyDay);


