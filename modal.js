// first page element
const firstPageEl = document.getElementById('firstPage');

// modal element
const modalEl = document.getElementById('modal');
//
// display modal after 5 seconds
setTimeout(function () {
    modalEl.classList.add('fade-in');
}, 5000);
//
// close modal
const closeBtnEl = document.getElementById('close-btn');
//
function closeModal() {
    modalEl.classList.remove('fade-in');
    modalEl.classList.add('fade-out');

    setTimeout(function () {
        modalEl.classList.add('hide');
    }, 1000);
}
closeBtnEl.addEventListener('click', closeModal);


// consultation button element
const consultBtnEl = document.getElementById('consult-btn');
//
// display body image
function consultation() {
    modalEl.classList.remove('fade-in');
    modalEl.classList.add('fade-out');
    firstPageEl.classList.add('hide');

    setTimeout(function () {
        window.location.href = 'consultation.html';
    }, 1000 / 2);
}
consultBtnEl.addEventListener('click', consultation);

