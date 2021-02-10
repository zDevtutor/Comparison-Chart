const collapseBtn = document.querySelectorAll(".collapse-row");
const collapsedSectionOne = document.querySelector("#collapsed__section-1");
const collapsedSectionTwo = document.querySelector("#collapsed__section-2");

collapseBtn.forEach((collapse, index) => {
  collapse.addEventListener("click", (e) => {
    e.preventDefault();

    // check which collapse link is clicked
    switch (index) {
      case 0:
        collapsedSectionOne.classList.toggle("collapse-hide");

        if (e.target.innerHTML.includes("Close")) {
          e.target.innerHTML =
            "<i class='bi bi-caret-down-fill'></i> Show More Features";
        } else {
          e.target.innerHTML = "<i class='las la-angle-up'></i> Close";
        }
        break;
      case 1:
        collapsedSectionTwo.classList.toggle("collapse-hide");

        if (e.target.innerHTML.includes("Close")) {
          e.target.innerHTML =
            "<i class='bi bi-caret-down-fill'></i> Show More Features";
        } else {
          e.target.innerHTML = "<i class='las la-angle-up'></i> Close";
        }
        break;
      default:
        console.log(
          "Can't expand.. maybe you have changed the html #id or .Class"
        );
    }
  });
});
