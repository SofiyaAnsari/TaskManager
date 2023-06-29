"use strict";

$(document).ready(() => {
  const tasks = [];
  //adding on click event on add task button
  $("#add_task").click(() => {
    const textbox = $("#task");
    const task = textbox.val();
    if (task === "") {
      alert("Please enter a task.");
      textbox.focus();
    } else {
      // add task to array
      //Here i m using split function to split the value on ','.
      const multiple_tasks = task.split(",");
      //Now i tried using something new called spread syntax which is used to expand the array into individual elements.
      tasks.push(...multiple_tasks);

      // clear task text box and re-display tasks
      textbox.val("");
      $("#task_list").val(tasks.join("\n"));
      textbox.focus();
    }
  });
  //adding on click event on the clear task button
  $("#clear_tasks").click(() => {
    tasks.length = 0;
    $("#task_list").val("");
    $("#task").focus();
  });

  $("#task").focus();
});
