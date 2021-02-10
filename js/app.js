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

        if (e.target.innderHTML.includes("Close")) {
          e.target.innderHTML = "<i class='las la-angle-down'></i> Close";
        }
        break;
      case 1:
        collapsedSectionTwo.classList.toggle("collapse-hide");

        if (e.target.innderHTML.includes("Close")) {
          e.target.innderHTML =
            "<i class='las la-angle-down'></i> Show More Features";
        }
        break;
      default:
        console.log(
          "Can't expand.. maybe you have changed the html #id or .Class"
        );
    }
  });
});
