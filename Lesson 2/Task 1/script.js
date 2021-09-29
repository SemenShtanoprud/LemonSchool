// заменить SWITCH на If  

let browser;

// switch (browser) {
//     case "Edge":
//         alert("You've got the Edge!")
//         break;
//     case "Chrome":
//     case "Firefox":
//     case "Safari":
//     case "Opera":
//         alert('Okay we support these browsers too')
//         break;
//     default:
//         alert("We hope that this page looks ok!")
//         break;
// }

let browserEdge = browser === "Edge";
let browsers = browser === "Chrome" || browser === "Firefox" || browser === "Safari" || browser === "Opera";

if (browserEdge) {
    alert("You've got the Edge!")
} else if (browsers) {
    alert('Okay we support these browsers too')
} else {
    alert("We hope that this page looks ok!")
}