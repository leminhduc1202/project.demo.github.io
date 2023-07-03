
var buttonInfo = [
    { label: "Age Calculator", filePath: "project_demo/age_calculator/age-index.html" },
    { label: "Amine Pics", filePath: "project_demo/amine_pics_generator/amine-index.html" },
    { label: "Animated Search Bar", filePath: "project_demo/animated_search_bar/animated_index.html" },
    { label: "Button 3", filePath: "file3.html" }
  ];
  
  var listContainer = document.createElement("div");
  listContainer.className = "list-container";
  
  buttonInfo.forEach(function(button) {
    var buttonElement = document.createElement("button");
    buttonElement.textContent = button.label;
    buttonElement.onclick = function() {
      openFile(button.filePath);
    };
  
    listContainer.appendChild(buttonElement);
  });
  
  var rootElement = document.getElementById("root");
  rootElement.appendChild(listContainer);
  
  function openFile(filePath) {
    window.location.href = filePath;
  }
  