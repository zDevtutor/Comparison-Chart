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
            "<i class='las la-angle-down'></i> Show More Features";
        } else {
          e.target.innerHTML = "<i class='las la-angle-up'></i> Close";
        }
        break;
      case 1:
        collapsedSectionTwo.classList.toggle("collapse-hide");

        if (e.target.innerHTML.includes("Close")) {
          e.target.innerHTML =
            "<i class='las la-angle-down'></i> Show More Features";
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

// Checking first table row height
const comparisonChartOneRow = document.querySelectorAll(
  "#comparison__chart-1 tbody tr"
);

const comparisonChartTwoRow = document.querySelectorAll(
  "#comparison__chart-2 tbody tr"
);

const comparisonChartThreeRow = document.querySelectorAll(
  "#comparison__chart-3 tbody tr"
);

const adjustTablesRowsHeight = () => {
  comparisonChartOneRow.forEach((chOneTr, idx1) => {
    // 45 equal one line
    if (chOneTr.clientHeight > 45) {
      comparisonChartTwoRow.forEach((chTwoTr, idx2) => {
        if (idx2 === idx1) {
          chTwoTr.style.height = chOneTr.clientHeight + "px";
        }
      });

      comparisonChartThreeRow.forEach((chThreeTr, idx3) => {
        if (idx3 === idx1) {
          chThreeTr.style.height = chOneTr.clientHeight + "px";
        }
      });
    }
  });
};

adjustTablesRowsHeight();

// Restore normal heights on smalll screens and responsive layout
const restorePreviousHeights = () => {
  comparisonChartOneRow.forEach((chOneTr) => {
    chOneTr.style.height = "45px";
  });

  comparisonChartTwoRow.forEach((chTwoTr) => {
    chTwoTr.style.height = "45px";
  });

  comparisonChartThreeRow.forEach((chThreeTr) => {
    chThreeTr.style.height = "45px";
  });
};

window.addEventListener("resize", () => {
  if (window.innerWidth < 768) {
    restorePreviousHeights();
  } else {
    adjustTablesRowsHeight();
  }
});
