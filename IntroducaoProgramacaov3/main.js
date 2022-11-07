function changeLanguage() {
  var element_select = document.getElementById("linguagens");
  var linguagem = element_select.options[element_select.selectedIndex].text;

  if (linguagem == "Todas") {
    setVisibleElementsFromLanguage("C");
    setVisibleElementsFromLanguage("JS");
    return;
  }
  changeVisibilityNoneFromLanguage(linguagem);
}

function changeVisibilityNoneFromLanguage(linguagem) {
  if (linguagem == "JavaScript") {
    var elements = document.getElementsByClassName("ling-c");

    for (let item of elements) {
      item.style.display = "none";
    }

    setVisibleElementsFromLanguage("JS");
  } else {
    var elements = document.getElementsByClassName("ling-js");

    for (let item of elements) {
      item.style.display = "none";
    }

    setVisibleElementsFromLanguage("C");
  }
}

function setVisibleElementsFromLanguage(linguagem) {
  if (linguagem == "C") {
    var elements = document.getElementsByClassName("ling-c");

    for (let item of elements) {
      item.style.display = "block";
    }
  } else {
    var elements = document.getElementsByClassName("ling-js");

    for (let item of elements) {
      item.style.display = "block";
    }
  }
}

// Botão Voltar Ao Menu //
window.onload = () => {
  var floatButton = document.getElementById("float-button");

  window.onscroll = () => {
    scrollFunction();
  };
  scrollFunction = () => {
    if (
      document.body.scrollTop > 600 ||
      document.documentElement.scrollTop > 600
    ) {
      floatButton.style.display = "flex";
    } else {
      floatButton.style.display = "none";
    }
  };
};
