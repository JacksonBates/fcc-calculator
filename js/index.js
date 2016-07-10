// Note - I looked at the example when I finished and saw that what took me 300+ lines of JS could be done in 28 lines. Bloody show-off!

// Starting variables
var screenOutput = "";
var storedValue = 0;
var lastOperator = "";
var lastButton = "";

// Functions

function test() {
  $(".test").html("screenOutput: " + screenOutput +
    "<br> storedValue:" + storedValue.toString() +
    "<br> lastOperator: " + lastOperator +
    "<br> lastButton: " + lastButton);
}

function allClear() {
  screenOutput = "";
  storedValue = 0;
  lastOperator = "";
  lastButton = "";
  $("#output-box").text("");
};

function clearEntry() {
  screenOutput = screenOutput.substr(0, screenOutput.length - 1);
  $("#output-box").text(screenOutput);
}

function add() {
  storedValue = storedValue + eval(screenOutput);
  screenOutput = storedValue.toString();
  $("#output-box").text(screenOutput);
}

function minus() {
  storedValue = storedValue - eval(screenOutput);
  screenOutput = storedValue.toString();
  $("#output-box").text(screenOutput);
}

function times() {
  storedValue = storedValue * eval(screenOutput);
  screenOutput = storedValue.toString();
  $("#output-box").text(screenOutput);
}

function divide() {
  storedValue = storedValue / eval(screenOutput);
  screenOutput = storedValue.toString();
  $("#output-box").text(screenOutput);
}

function percent() {
  storedValue = eval(screenOutput) / 100;
  screenOutput = storedValue.toString();
  $("#output-box").text(screenOutput);
}

// Button onclick event triggers

$("#all-clear").on("click", function() {
  allClear();
})

$("#clear-entry").on("click", function() {
  clearEntry();
})

$("#one").on("click", function() {
  if (lastButton === "number" || lastButton === "") {
    screenOutput += "1";
    $("#output-box").text(screenOutput);
    lastButton = "number";
  } else if (lastButton === "operator") {
    screenOutput = "1";
    $("#output-box").text(screenOutput);
    lastButton = "number";
  }
});

$("#two").on("click", function() {
  if (lastButton === "number" || lastButton === "") {
    screenOutput += "2";
    $("#output-box").text(screenOutput);
    lastButton = "number";
  } else if (lastButton === "operator") {
    screenOutput = "2";
    $("#output-box").text(screenOutput);
    lastButton = "number";
  }
});

$("#three").on("click", function() {
  if (lastButton === "number" || lastButton === "") {
    screenOutput += "3";
    $("#output-box").text(screenOutput);
    lastButton = "number";
  } else if (lastButton === "operator") {
    screenOutput = "3";
    $("#output-box").text(screenOutput);
    lastButton = "number";
  }
});

$("#four").on("click", function() {
  if (lastButton === "number" || lastButton === "") {
    screenOutput += "4";
    $("#output-box").text(screenOutput);
    lastButton = "number";
  } else if (lastButton === "operator") {
    screenOutput = "4";
    $("#output-box").text(screenOutput);
    lastButton = "number";
  }
});

$("#five").on("click", function() {
  if (lastButton === "number" || lastButton === "") {
    screenOutput += "5";
    $("#output-box").text(screenOutput);
    lastButton = "number";
  } else if (lastButton === "operator") {
    screenOutput = "5";
    $("#output-box").text(screenOutput);
    lastButton = "number";
  }
});

$("#six").on("click", function() {
  if (lastButton === "number" || lastButton === "") {
    screenOutput += "6";
    $("#output-box").text(screenOutput);
    lastButton = "number";
  } else if (lastButton === "operator") {
    screenOutput = "6";
    $("#output-box").text(screenOutput);
    lastButton = "number";
  }
});

$("#seven").on("click", function() {
  if (lastButton === "number" || lastButton === "") {
    screenOutput += "7";
    $("#output-box").text(screenOutput);
    lastButton = "number";
  } else if (lastButton === "operator") {
    screenOutput = "7";
    $("#output-box").text(screenOutput);
    lastButton = "number";
  }
});

$("#eight").on("click", function() {
  if (lastButton === "number" || lastButton === "") {
    screenOutput += "8";
    $("#output-box").text(screenOutput);
    lastButton = "number";
  } else if (lastButton === "operator") {
    screenOutput = "8";
    $("#output-box").text(screenOutput);
    lastButton = "number";
  }
});

$("#nine").on("click", function() {
  if (lastButton === "number" || lastButton === "") {
    screenOutput += "9";
    $("#output-box").text(screenOutput);
    lastButton = "number";
  } else if (lastButton === "operator") {
    screenOutput = "9";
    $("#output-box").text(screenOutput);
    lastButton = "number";
  }
});

$("#zero").on("click", function() {
  if (lastButton === "number" || lastButton === "") {
    screenOutput += "0";
    $("#output-box").text(screenOutput);
    lastButton = "number";
  } else if (lastButton === "operator") {
    screenOutput = "0";
    $("#output-box").text(screenOutput);
    lastButton = "number";
  }
});

$("#point").on("click", function() {
  if (lastButton === "number" || lastButton === "") {
    if (!screenOutput.includes(".")) {
      screenOutput += ".";
      $("#output-box").text(screenOutput);
      lastButton = "number";
    }
  } else if (lastButton === "operator") {
    screenOutput = "0.";
    $("#output-box").text(screenOutput);
    lastButton = "number";
  }
});

$("#plus").on("click", function() {
  if (screenOutput !== "") {
    if (lastOperator === "equals") {
      storedValue = eval(screenOutput);
    } else if (lastButton === "number" && lastOperator === "plus" || lastOperator === "") {
      add();
    } else if (lastButton === "number" && lastOperator === "minus" || lastOperator === "") {
      minus();
    } else if (lastButton === "number" && lastOperator === "times" || lastOperator === "") {
      times();
    } else if (lastButton === "number" && lastOperator === "divide" || lastOperator === "") {
      divide();
    } else if (lastButton === "number" && lastOperator === "percent" || lastOperator === "") {
      percent();
    }
  }
  lastOperator = "plus";
  lastButton = "operator";
})

$("#minus").on("click", function() {
  if (screenOutput !== "") {
    if (lastOperator === "equals") {
      storedValue = eval(screenOutput);
    } else if (lastButton === "number" && lastOperator === "plus" || lastOperator === "") {
      add();
    } else if (lastButton === "number" && lastOperator === "minus" || lastOperator === "") {
      minus();
    } else if (lastButton === "number" && lastOperator === "times" || lastOperator === "") {
      times();
    } else if (lastButton === "number" && lastOperator === "divide" || lastOperator === "") {
      divide();
    } else if (lastButton === "number" && lastOperator === "percent" || lastOperator === "") {
      percent();
    }
  }
  lastOperator = "minus";
  lastButton = "operator";

})

$("#divide").on("click", function() {
  if (screenOutput !== "") {
    if (lastOperator === "equals") {
      storedValue = eval(screenOutput);
    } else if (lastButton === "number" && lastOperator === "plus" || lastOperator === "") {
      add();
    } else if (lastButton === "number" && lastOperator === "minus" || lastOperator === "") {
      minus();
    } else if (lastButton === "number" && lastOperator === "times" || lastOperator === "") {
      times();
    } else if (lastButton === "number" && lastOperator === "divide" || lastOperator === "") {
      divide();
    } else if (lastButton === "number" && lastOperator === "percent" || lastOperator === "") {
      percent();
    }
  }
  lastOperator = "divide";
  lastButton = "operator";
})

$("#times").on("click", function() {
  if (screenOutput !== "") {
    if (lastOperator === "equals") {
      storedValue = eval(screenOutput);
    } else if (lastButton === "number" && lastOperator === "plus" || lastOperator === "") {
      add();
    } else if (lastButton === "number" && lastOperator === "minus" || lastOperator === "") {
      minus();
    } else if (lastButton === "number" && lastOperator === "times" || lastOperator === "") {
      times();
    } else if (lastButton === "number" && lastOperator === "divide" || lastOperator === "") {
      divide();
    } else if (lastButton === "number" && lastOperator === "percent" || lastOperator === "") {
      percent();
    }
  }
  lastOperator = "times";
  lastButton = "operator";
})

$("#percent").on("click", function() {
  if (screenOutput !== "") {
    if (lastOperator === "equals") {
      storedValue = eval(screenOutput);
    } else if (lastButton === "number" && lastOperator === "percent" || lastOperator === "") {
      percent();
    }
  }
  lastOperator = "percent";
  lastButton = "operator";
})

$("#equals").on("click", function() {
  if (screenOutput !== "") {
    if (lastOperator === "plus") {
      add();
    } else if (lastOperator === "minus") {
      minus();
    } else if (lastOperator === "times") {
      times();
    } else if (lastOperator === "divide") {
      divide();
    } else if (lastOperator === "percent") {
      percent();
    }
  }
  lastOperator = "equals";
  lastButton = "operator";
})

$("#egg").on("click", function() {
  //test();
  $("#output-box").text("Floating point math sucks");
});