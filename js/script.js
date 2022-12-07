// Copyright (c) 2020 Chloe Havel All rights reserved
//
// Created by: Chloe Havel
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-5-06/sw.js", {
    scope: "/ICS2O-Unit-5-06/",
  })
}

/**
 * This function displays an alert.
 */
function myButtonClicked() {
  let counter = 0
  let answer = 0

  const firstNumber = parseInt(document.getElementById("first").value)
  const secondNumber = parseInt(document.getElementById("second").value)

  while (counter < secondNumber) {
    answer = firstNumber + answer
    counter++
  }
  // output
  document.getElementById("answer").innerHTML =
    firstNumber + " x " + secondNumber + " = " + answer
}
