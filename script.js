const buttonInfo = [
  {
    label: "Age Calculator",
    filePath: "project_demo/age_calculator/age-index.html",
  },
  {
    label: "Amine Pics",
    filePath: "project_demo/amine_pics_generator/amine-index.html",
  },
  {
    label: "Animated Search Bar",
    filePath: "project_demo/animated_search_bar/animated_index.html",
  },
  {
    label: "Auto Text",
    filePath: "project_demo/auto_text_effect_animation/auto_text_index.html",
  },
  {
    label: "Image Scroll Effect",
    filePath: "project_demo/background_image_scroll_effect/index.html",
  },
  {
    label: "Basic Calculator",
    filePath: "project_demo/basic_calculator/calculator_index.html",
  },
  {
    label: "Blurred Popup",
    filePath: "project_demo/background_popup/popup_index.html",
  },
  {
    label: "BMI Calculator",
    filePath: "project_demo/bmi_calculator/bmi_index.html",
  },
  {
    label: "Currency Converter",
    filePath: "project_demo/currency_converter/currency_index.html",
  },
  {
    label: "Matrix Effect",
    filePath: "project_demo/matrix/matrix_index.html",
  },
];

const listContainer = document.createElement("div");
listContainer.className = "list-container";

buttonInfo.forEach(function (button) {
  const buttonElement = document.createElement("button");
  buttonElement.textContent = button.label;
  buttonElement.onclick = function () {
    openFile(button.filePath);
  };

  listContainer.appendChild(buttonElement);
});

const rootElement = document.getElementById("root");
rootElement.appendChild(listContainer);

function openFile(filePath) {
  window.location.href = filePath;
}
