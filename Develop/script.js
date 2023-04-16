// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.



$(function () {
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
  //       var calEvent


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
  
  // Added timeNow variable, which displays the current date/time within the header.
var timeNow = dayjs()
  $('#currentDay').text(timeNow.format('dddd, MMMM D YYYY, h:mm a'));
  console.log(timeNow);

var hourNow = dayjs().format('H')
  console.log(hourNow);
  console.log(timeNow);
  
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
  

  // if (hourNow > nineAmTime) {
  //   nineAm.addClass(past)
  //   nineAm.removeClass('present');
  //   nineAm.removeClass('future');
  // }

  if (timeNow == nineAmTime) {
    nineAm.removeClass('past');
    nineAm.removeClass('future');
    nineAm.addClass('present');
  } else if (timeNow > nineAmTime) {
    nineAm.removeClass('present');
    nineAm.removeClass('future');
    nineAm.addClass('past');
  } else if (timeNow < nineAmTime) {
    nineAm.removeClass('past');
    nineAm.removeClass('present');
    nineAm.addClass('future');
  }

  if (timeNow == tenAmTime) {
    tenAm.removeClass('past');
    tenAm.removeClass('future');
    tenAm.addClass('present');
  } else if (timeNow > tenAmTime) {
    tenAm.removeClass('present');
    tenAm.removeClass('future');
    tenAm.addClass('past');
  } else if (timeNow < tenAmTime) {
    tenAm.removeClass('past');
    tenAm.removeClass('present');
    tenAm.addClass('future');
  }

  if (timeNow == elevenAmTime) {
    elevenAm.removeClass('past');
    elevenAm.removeClass('future');
    elevenAm.addClass('present');
  } else if (timeNow > elevenAmTime) {
    elevenAm.removeClass('present');
    elevenAm.removeClass('future');
    elevenAm.addClass('past');
  } else if (timeNow < elevenAmTime) {
    elevenAm.removeClass('past');
    elevenAm.removeClass('present');
    elevenAm.addClass('future');
  }
  
  
  if (timeNow == twelvePmTime) {
    twelvePm.removeClass('past');
    twelvePm.removeClass('future');
    twelvePm.addClass('present');
  } else if (timeNow > twelvePm) {
    twelvePm.removeClass('present');
    twelvePm.removeClass('future');
    twelvePm.addClass('past')
  }
  // if (hourNow < nineAm) {
  //   nineAm.addClass("future");
  // }

  // if (hourNow > tenAm) {
  //   tenAm.addClass("past");
  //   tenAm.removeClass('future');
  //   tenAm.removeClass('present');
  // }
  
  // if (hourNow == tenAm) {
  //   tenAm.addClass('present');
  // }

  // //    

  // if (hourNow < fivePm) {
  //   fivePm.addClass('future');
  // }

  if (hourNow == fivePm) {
    fivePm.addClass('present');
  }

  if (hourNow > fivePm) {
    fivePm.addClass('past');
  }
  
  
  if (hourNow < sixPm) {
    sixPm.addClass('future');
  

  }



  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
