function inchome(x,y) {
 let element = document.getElementById(y)
 old_value = element.textContent
 old_value = parseInt(old_value)
 element.textContent = old_value + x
}

// function inchome(x,y) {
//  document.getElementById(y).textContent = parseInt(document.getElementById(y).textContent) + x
// }


/* function inchome1() {
 countHome += 1
 homeScr.textContent = countHome
}
function inchome2() {
 countHome += 2
 homeScr.textContent = countHome
}
function inchome3() {
 countHome += 3
 homeScr.textContent = countHome
}
function incguest1() {
 countGuest += 1
 guestScr.textContent = countGuest
}
function incguest2() {
 countGuest += 2
 guestScr.textContent = countGuest
}
function incguest3-() {
 countGuest += 3
 guestScr.textContent = countGuest
} */
