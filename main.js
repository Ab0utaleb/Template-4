// add and remove active class
const pActivity = document.querySelectorAll(".setting .activity p");
pActivity.forEach((e) => {
  e.addEventListener("click", () => {
    pActivity.forEach((e) => e.classList.remove("active-color"));
    e.classList.add("active-color");
  });
});

// toggle switch id and local storage
document.querySelectorAll(".box-settings").forEach((setting, index) => {
  const input = setting.querySelector("input[type='checkbox']");
  const label = setting.querySelector("label.button");
  const id = `toggle-${index + 1}`;

  input.id = id;
  label.setAttribute("for", id);

  const saved = localStorage.getItem(id);
  if (saved !== null) {
    input.checked = saved === "true";
  }

  input.addEventListener("change", () => {
    localStorage.setItem(id, input.checked);
  });
});

// show all extension
const showAllButton = document.querySelector(".activity p:nth-child(1)");
showAllButton.addEventListener("click", () => {
  const allBoxes = document.querySelectorAll(".box");
  allBoxes.forEach((box) => {
    box.style.display = "flex";
  });
});

// show active extension

const showActiveButton = document.querySelector(".activity p:nth-child(2)");

showActiveButton.addEventListener("click", () => {
  const allBoxes = document.querySelectorAll(".box");
  allBoxes.forEach((box) => {
    const checkbox = box.querySelector("input[type='checkbox']");
    if (checkbox.checked) {
      box.style.display = "flex";
    } else {
      box.style.display = "none";
    }
  });
});

// show inactive extension
const showInactiveButton = document.querySelector(".activity p:nth-child(3)");

showInactiveButton.addEventListener("click", () => {
  const allBoxes = document.querySelectorAll(".box");
  allBoxes.forEach((box) => {
    const checkbox = box.querySelector("input[type='checkbox']");
    if (!checkbox.checked) {
      box.style.display = "flex";
    } else {
      box.style.display = "none";
    }
  });
});
