// display body
const consultEl = document.getElementById('consultPage');
// setTimeout(function () {
//     consultEl.classList.remove('hide');
//     consultEl.classList.add('fade-in');
// }, 1000 / 2);

// face button element
const faceBtnEl = document.getElementById('face-btn');
const headBtnEl = document.getElementById('head-btn');
const headTxtEl = document.getElementById('head-heading')
const faceEl = document.getElementById('facePage');
//
// display face image
function face() {
    consultEl.classList.remove('fade-in');
    consultEl.classList.add('fade-out');

    setTimeout(function () {
        consultEl.classList.add('hide');
        faceEl.classList.remove('hide');
        faceEl.classList.add('fade-in');
    }, 1000);
}
faceBtnEl.addEventListener('click', face);
headBtnEl.addEventListener('click', face);
headTxtEl.addEventListener('click', face);