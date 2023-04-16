// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// Added timeNow variable, which displays the current date/time within the header.
var timeNow = dayjs()
  $('#currentDay').text(timeNow.format('dddd, MMMM D YYYY, h:mm a'));
  console.log(timeNow);



$() (function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  

  
  
  
  // var saveButtons = document.querySelectorAll('.saveBtn');
  //   console.log(saveButtons);
  
  //   for (i=0; saveButtons.length; i++) {
  //     saveButtons[i].addEventListener('click', function(){
  //       var blockContent = 


  //       localStorage.setItem()
  //     })
  //   }

 

  // saveButtons.on('click', function() {
    
  //   var btnNodes = saveButtons[i]
    
    


  // } )

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  
  
//Removing hourNow variable as I think it was a misstep.

// var hourNow = dayjs().format('H')
//   console.log(hourNow);
//   console.log(timeNow);
  
// Added variables for the hours of the workday, assigning them to the IDs of their respetive hour blocks. Next step is hopefully to create conditional statements to determine color.
var nineAm = $("#hour-9")
var tenAm = $('#hour-10')
var elevenAm = $('#hour-11')
var twelvePm = $('#hour-12')
var onePm = $('#hour-1')
var twoPm = $('#hour-2')
var threePm = $('#hour-3')
var fourPm = $('#hour-4')
var fivePm = $('#hour-5')
var sixPm = $('#hour-6')

// Created additional variables to assign each block a time using the .set() property of Day.js to be compared against the current global time in order to assess appropriate color status.
var nineAmTime = dayjs().set('hour', 9)
var tenAmTime  = dayjs().set('hour', 10)
var elevenAmTime = dayjs().set('hour', 11)
var twelvePmTime = dayjs().set('hour', 12)
var onePmTime = dayjs().set('hour', 1)
var twoPmTime = dayjs().set('hour', 2)
var threePmTime = dayjs().set('hour', 3)
var fourPmTime = dayjs().set('hour', 4)
var fivePmTime = dayjs().set('hour', 5)
var sixPmTime = dayjs().set('hour', 6)

console.log(nineAmTime);
  

// Added conditional 'if' statements for all blocks between 9am-6pm intended to check against local time, remove existing classes, and replace with appropriate classes where appropriate.
  if (timeNow == nineAmTime) {
    nineAm.removeClass('past');
    nineAm.removeClass('future');
    nineAm.addClass('present');
  } else if (timeNow < nineAmTime) {
    nineAm.removeClass('past');
    nineAm.removeClass('present');
    nineAm.addClass('future');
  } else if (timeNow > nineAmTime) {
    nineAm.removeClass('present');
    nineAm.removeClass('future');
    nineAm.addClass('past');
  }
  
  
  if (timeNow == tenAmTime) {
    tenAm.removeClass('past');
    tenAm.removeClass('future');
    tenAm.addClass('present');
  } else if (timeNow < tenAmTime) {
    tenAm.removeClass('past');
    tenAm.removeClass('present');
    tenAm.addClass('future');
  } else if (timeNow > tenAmTime) {
    tenAm.removeClass('present');
    tenAm.removeClass('future');
    tenAm.addClass('past');
  } 

  if (timeNow == elevenAmTime) {
    elevenAm.removeClass('past');
    elevenAm.removeClass('future');
    elevenAm.addClass('present');
  } else if (timeNow < elevenAmTime) {
    elevenAm.removeClass('past');
    elevenAm.removeClass('present');
    elevenAm.addClass('future');
  } else if (timeNow > elevenAmTime) {
    elevenAm.removeClass('present');
    elevenAm.removeClass('future');
    elevenAm.addClass('past');
  } 
  
  
  if (timeNow == twelvePmTime) {
    twelvePm.removeClass('past');
    twelvePm.removeClass('future');
    twelvePm.addClass('present');
  } else if (timeNow < twelvePmTime) {
    twelvePm.removeClass('past');
    twelvePm.removeClass('present');
    twelvePm.addClass('future');
  } else if (timeNow > twelvePmTime) {
    twelvePm.removeClass('present');
    twelvePm.removeClass('future');
    twelvePm.addClass('past');
  }

  if (timeNow == onePmTime) {
    onePm.removeClass('past');
    onePm.removeClass('future');
    onePm.addClass('present');
  } else if (timeNow < onePmTime) {
    onePm.removeClass('past');
    onePm.removeClass('present');
    onePm.addClass('future');
  } else if (timeNow >onePmTime) {
    onePm.removeClass('present');
    onePm.removeClass('future');
    onePm.addClass('past');
  }

  if (timeNow == twoPmTime) {
    twoPm.removeClass('past');
    twoPm.removeClass('future');
    twoPm.addClass('present');
  } else if (timeNow < twoPmTime) {
    twoPm.removeClass('past');
    twoPm.removeClass('present');
    twoPm.addClass('future');
  } else if (timeNow > twoPmTime) {
    twoPm.removeClass('present');
    twoPm.removeClass('future');
    twoPm.addClass('past');
  }


  if (timeNow == threePmTime) {
    threePm.removeClass('past');
    threePm.removeClass('future');
    threePm.addClass('present');
  } else if (timeNow < threePmTime) {
    threePm.removeClass('past');
    threePm.removeClass('present');
    threePm.addClass('future');
  } else if (timeNow > threePmTime) {
    threePm.removeClass('present');
    threePm.removeClass('future');
    threePm.addClass('past');
  }


  if (timeNow == fourPmTime) {
    fourPm.removeClass('past');
    fourPm.removeClass('future');
    fourPm.addClass('present');
  } else if (timeNow < fourPmTime) {
    fourPm.removeClass('past');
    fourPm.removeClass('present');
    twoPm.addClass('future');
  } else if (timeNow > fourPmTime) {
    fourPm.removeClass('present');
    fourPm.removeClass('future');
    fourPm.addClass('past');
  }


  if (timeNow == fivePmTime) {
    fivePm.removeClass('past');
    fivePm.removeClass('future');
    fivePm.addClass('present');
  } else if (timeNow < fivePmTime) {
    fivePm.removeClass('past');
    fivePm.removeClass('present');
    fivePm.addClass('future');
  } else if (timeNow > fivePmTime) {
    fivePm.removeClass('present');
    fivePm.removeClass('future');
    fivePm.addClass('past');
  }


  if (timeNow == sixPmTime) {
    sixPm.removeClass('past');
    sixPm.removeClass('future');
    sixPm.addClass('present');
  } else if (timeNow < sixPmTime) {
    sixPm.removeClass('past');
    sixPm.removeClass('present');
    sixPm.addClass('future');
  } else if (timeNow > sixPmTime) {
    sixPm.removeClass('present');
    sixPm.removeClass('future');
    sixPm.addClass('past');
  }



  $("#hour8 .description").val(localStorage.getItem("hour8"));
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));



})