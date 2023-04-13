`use strict`;
console.log(`this is the app for Al-Eman project`);

// ELEMENTS
const listItems = document.querySelectorAll(`#list-items li`);
const sections = document.querySelectorAll(`.main-sections`);
//services
const serviceBoxes = document.querySelectorAll(`.service-box`);
const serviceBoxesChildren = document.querySelectorAll(`.service-box > *`);
const serviceDescriptionPars = document.querySelectorAll(
  `#service-description p`
);
// Modal window 
const modalWindow = document.querySelector(`#modal-window`);
const modalWindowCloseBtn = document.querySelector(`#close-icon`);
const overlay = document.querySelector(`#overlay`);
const developerName = document.getElementById(`developer-name`);

// Contact form
const nameInput = document.getElementById(`your-name`);


// FUNCTIONS
console.log(listItems);
sections.forEach((sec) => {
  listItems.forEach((li) => {
    li.addEventListener(`click`, function () {
      const currentLiId = li.id;
      console.log(currentLiId);
      // const correspondingSec = sec.getAttribute(`refersTo`)
      if (sec.getAttribute(`refersTo`) == currentLiId) {
        sec.scrollIntoView();
      }
    });
  });
});

// Reveal the current service's description
//logic
/* by clicking on any of the services boxes children reveal corresponding p to that parent box and hide the others
 * foreach service box parent
 * click on the child
 * get the parents id
 * get the corresponding paragraph
 * hide all the paragraphs
 * reveal the current p
 */
// for each service box's child
serviceBoxesChildren.forEach((sbc) => {
  // when hovering over the child turn the arrow into pointer
  sbc.style.cursor = `pointer`;
  //by clicking the child get it's parent's id
  sbc.addEventListener(`click`, function () {
    const serviceBox = sbc.parentElement;
    const serviceBoxId = sbc.parentElement.id;
    // console.log(serviceBoxId);
    // get the corresponding p show attribute
    serviceDescriptionPars.forEach((p) => {
      p.getAttribute(`jump`);
      if (p.getAttribute(`jump`) == `to-${serviceBoxId}`) {
        serviceDescriptionPars.forEach((otherP) => {
          // otherP.style.color =`white`
            otherP.classList.add(`hidden`);
            // sbc.getElementsByTagName(`span`)[0].style.background = `red`
        });
        p.classList.remove(`hidden`);

      }
    });
  });
});

// much better way is to use event.target
/* instead of targeting the clicked child manulay just identify the parent and it will choose the clicked child directly  */
/* serviceBoxes.forEach((sb) => {
  sb.addEventListener(
    `click`,

    function (event) {
      const t = event.target;
      //  t.style.cursor = `pointer`;
      const targetParentId = t.parentElement.id;

      serviceDescriptionPars.forEach((p) => {
        if (p.getAttribute(`jump`) == `to-${targetParentId}`) {
          serviceDescriptionPars.forEach((otherP) => {
            // otherP.style.color =`white`
            otherP.classList.add(`hidden`);
          });
          p.classList.remove(`hidden`);
        }
      });
    }
  );
});
 */

// click developer name to reveal the modal window 
developerName.addEventListener(`click`, revealModalWindow)
function revealModalWindow() {
  modalWindow.classList.remove(`hidden`)
  overlay.classList.remove(`hidden`)

}
// Modal window functioning
// By clicking the close btn close the modal window and remove the overlay
// * click the close btn
modalWindowCloseBtn.addEventListener(`click`, closeModalWindow) // by adding the parenthesis to the function name inside this event it called the function  without executing the event itself
function closeModalWindow() {
  modalWindow.classList.add(`hidden`)
  overlay.classList.add(`hidden`)
}

// contact form

// add astretek for required inputs placeholders 
// console.log(nameInput.getAttribute(`placeholder`) + `name`);
// if (nameInput.getAttribute(`required`) === `true` ) {
//   console.log(`req`)
// } else {
//   `not`
// }