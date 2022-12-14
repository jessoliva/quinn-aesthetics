// first page element NOT FOR WEEBLY
const firstPageEl = document.getElementById('firstPage');

// modal element
const modalEl = document.getElementById('modal');
//
// display modal after 5 seconds
setTimeout(function () {
    modalEl.classList.remove('hide');
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

    // NOT FOR WEEBLY
    firstPageEl.classList.add('hide');

    setTimeout(function () {
        window.location.href = 'consultationBody.html';
    }, 1000 / 2);
}
consultBtnEl.addEventListener('click', consultation);

