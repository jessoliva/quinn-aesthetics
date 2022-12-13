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
const consultEl = document.getElementById('consultPage');
//
// display body image
function consultation() {
    modalEl.classList.remove('fade-in');
    modalEl.classList.add('fade-out');
    firstPageEl.classList.add('hide');

    // ONLY FOR WEEBLY
    location.replace("https://www.w3schools.com")
    
    setTimeout(function () {
        consultEl.classList.remove('hide');
        consultEl.classList.add('fade-in');
        modalEl.classList.add('hide');
    }, 1000 / 2);
}
consultBtnEl.addEventListener('click', consultation);
// //
// // display list
// // dropdown button el
// const listBtnEl = document.getElementById('listBtn');
// function displayBodyAreas() {

//     // get the list element
//     const listEl = document.getElementById('myDropdown');
//     // toggle classList
//     listEl.classList.toggle('show');
// }
// listBtnEl.addEventListener('click', displayBodyAreas);

// Close the dropdown if the user clicks outside of it
// window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//         var dropdowns = document.getElementsByClassName("dropdown-content");
//         var i;
//         for (i = 0; i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
//             if (openDropdown.classList.contains('show')) {
//                 openDropdown.classList.remove('show');
//             }
//         }
//     }
// }

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

// closeBtnEl.addEventListener('click', function() {
//     modalEl.classList.add('hidden');
// });
