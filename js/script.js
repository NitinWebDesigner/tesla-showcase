const yearTabs = document.querySelectorAll(".year-tab");
const modelItems = document.querySelectorAll(".model-item");

yearTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove active class

    yearTabs.forEach((btn) => {
      btn.classList.remove("active");
    });

    // Add active class

    tab.classList.add("active");

    // Selected year

    const selectedYear = tab.dataset.year;

    // Filter cards

    modelItems.forEach((item) => {
      const modelYear = item.dataset.year;

      if (selectedYear === "all" || modelYear === selectedYear) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    });
  });
});
