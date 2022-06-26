const textTag=document.getElementById('text')
// function touchstartHandler() {
//     alert('touch start handler')
// }
function touchmoveHandler() {
    alert('touch move handler')
}
function touchendHandler() {
    alert('touch end handler')
}
textTag.addEventListener('touchstart',touchstartHandler)
textTag.addEventListener('touchend',touchendHandler)
textTag.addEventListener('touchmove',touchmoveHandler)
