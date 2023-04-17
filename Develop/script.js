// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


// //Removing hourNow variable as I think it was a misstep.
// var hourNow = dayjs().format('H')
//   console.log(hourNow);
//   // console.log(timeNow);
//   // console.log(nineAmTime);


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




 // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?




$(function () {
  var timeNow = dayjs()
$('#currentDay').text(timeNow.format('dddd, MMMM D YYYY, h:mm a'));
  var $saveButtons = $('.saveBtn');



  $saveButtons.on('click', function() {
    var $thisButton = $(this);
    var siblingTextArea = $thisButton.siblings('.description')
    var inputValue = siblingTextArea.val()
    var timeBlockEl = $thisButton.parent()
    var timeBlockId = timeBlockEl.attr('id')
    
    console.log(timeBlockId)
    localStorage.setItem(timeBlockId,inputValue)
    localStorage.getItem(timeBlockId, inputValue)

    
  });

  
  $('.time-block').each(function(){
    var $thisTimeBlock = $(this);
    var timeBlockId = $thisTimeBlock.attr('id').split('hour-',  [2]) //String method will be helpful.
    console.log(timeBlockId[1]) 
    timeBlockHour = ($(this).attr("id").split('hour-',[2]));
    // console.log(timeBlockHour);
    // console.log(timeBlockHour[0])
  //   $(inputValue).ready().on('load', function() {
  //     localStorage.getItem('hour-9');
  // localStorage.getItem('hour-10');
  // localStorage.getItem('hour-11');
  // localStorage.getItem('hour-12');
  // localStorage.getItem('hour-13');
  // localStorage.getItem('hour-14');
  // localStorage.getItem('hour-15');
  // localStorage.getItem('hour-16');
  // localStorage.getItem(('hour-17'));
    // })
  
  if (timeBlockId[1] == timeNow.hour()) {
      $(this).addClass('present');
      $(this).removeClass('past');
      $(this).removeClass('future');
  }
  else if (timeBlockId[1] > timeNow.hour()) {
      $(this).addClass('future');  
      $(this).removeClass('present');
      $(this).removeClass('past');
  }
   else { 
      $(this).addClass('past');
      $(this).removeClass('future');
      $(this).removeClass('present');
  }
  
  })
  var inputLoadNine = localStorage.getItem('hour-9');
  var inputLoadTen = localStorage.getItem('hour-10');
  var inputLoadEleven = localStorage.getItem('hour-11');
  var inputLoadTwelve = localStorage.getItem('hour-12');
  var inputLoadOne = localStorage.getItem('hour-13');
  var inputLoadTwo = localStorage.getItem('hour-14');
  var inputLoadThree = localStorage.getItem('hour-15');
  var inputLoadFour = localStorage.getItem('hour-16');
  var inputLoadFive = localStorage.getItem('hour-17');
 console.log(inputLoadFive)

 var textAreaInput = [
  localStorage.getItem('hour-9'),
  localStorage.getItem('hour-10'),
  localStorage.getItem('hour-11'),
  localStorage.getItem('hour-12'),
  localStorage.getItem('hour-13'),
  localStorage.getItem('hour-14'),
  localStorage.getItem('hour-15'),
  localStorage.getItem('hour-16'),
  localStorage.getItem('hour-17')
 ]
 console.log(textAreaInput);
})

// $('#hour9 .description').val(localStorage.getItem()));
// localStorage.getItem(timeBlockId);



 
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //



// Added timeNow variable, which displays the current date/time within the header.


// console.log(timeNow.hour());
  
// Added variables for the hours of the workday, assigning them to the IDs of their respetive hour blocks. Next step is hopefully to create conditional statements to determine color.
// var nineAm = $("#hour-9")
// var tenAm = $('#hour-10')
// var elevenAm = $('#hour-11')
// var twelvePm = $('#hour-12')
// var onePm = $('#hour-1')
// var twoPm = $('#hour-2')
// var threePm = $('#hour-3')
// var fourPm = $('#hour-4')
// var fivePm = $('#hour-5')
// var sixPm = $('#hour-6')

// Created additional variables to assign each block a time using the .set() property of Day.js to be compared against the current global time in order to assess appropriate color status.
// var nineAmTime = dayjs().set('hour', 9)
// var tenAmTime  = dayjs().set('hour', 10)
// var elevenAmTime = dayjs().set('hour', 11)
// var twelvePmTime = dayjs().set('hour', 12).set('minute', 59).set('second', 59)
// var onePmTime = dayjs().set('hour', 1).set('minute', 59).set('seconds', 59);
// var twoPmTime = dayjs().set('hour', 2)
// var threePmTime = dayjs().set('hour', 3)
// var fourPmTime = dayjs().set('hour', 4)
// var fivePmTime = dayjs().set('hour', 5)
// var sixPmTime = dayjs().set('hour', 6)


  // Added conditional 'if' statements for all blocks between 9am-6pm intended to check against local time, remove existing classes, and replace with appropriate classes where appropriate.
  //Changed timeNow arguement to timeNow.hour() in order to compare solely the hour value of the timeNow object.

  // if (timeNow.hour() == 9) {
  //   nineAm.addClass('present');
  //   nineAm.removeClass('past');
  //   nineAm.removeClass('future');
  // }
  // if (timeNow.hour() < 9) {
  //   nineAm.addClass('future');
  //   nineAm.removeClass('past');
  //   nineAm.removeClass('present');
  // }
  // if (timeNow.hour() > 9) {
  //   nineAm.addClass('past');
  //   nineAm.removeClass('present');
  //   nineAm.removeClass('future');
  // }
  
  
  // if (timeNow.hour() == 10) {
  //   tenAm.addClass('present');
  //   tenAm.removeClass('past');
  //   tenAm.removeClass('future');
  // }
  // if (timeNow.hour() < 10) {
  //   tenAm.addClass('future');
  //   tenAm.removeClass('past');
  //   tenAm.removeClass('present');
  // }
  // if (timeNow.hour() > 10) {
  //   tenAm.addClass('past');
  //   tenAm.removeClass('present');
  //   tenAm.removeClass('future');
  // } 

  // if (timeNow.hour() == 11) {
  //   elevenAm.addClass('present');
  //   elevenAm.removeClass('past');
  //   elevenAm.removeClass('future');
  // }
  // if (timeNow.hour() < 11) {
  //   elevenAm.addClass('future');
  //   elevenAm.removeClass('past');
  //   elevenAm.removeClass('present');
  // }
  // if (timeNow.hour() > 11) {
  //   elevenAm.addClass('past');
  //   elevenAm.removeClass('present');
  //   elevenAm.removeClass('future');
  // } 
  
  
  // if (timeNow.hour() == 12) {
  //   twelvePm.addClass('present');
  //   twelvePm.removeClass('past');
  //   twelvePm.removeClass('future');
  // }
  // if (timeNow.hour() < 12) {
  //   twelvePm.addClass('future');
  //   twelvePm.removeClass('past');
  //   twelvePm.removeClass('present');
    
  // }
  // if (timeNow.hour() > 12) {
  //   twelvePm.addClass('past');
  //   twelvePm.removeClass('present');
  //   twelvePm.removeClass('future');
    
  // }

  // if (timeNow.hour() == 13) {
  //   onePm.addClass('present');
  //   onePm.removeClass('past');
  //   onePm.removeClass('future');
  // }
  // if (timeNow.hour() < 13) {
  //   onePm.addClass('future');
  //   onePm.removeClass('past');
  //   onePm.removeClass('present');
  // }
  // if (timeNow.hour() > 13) {
  //   onePm.addClass('past');
  //   onePm.removeClass('present');
  //   onePm.removeClass('future');
  // }

  // if (timeNow.hour() == 14) {
  //   twoPm.addClass('present');
  //   twoPm.removeClass('past');
  //   twoPm.removeClass('future');
  // }
  // if (timeNow.hour() < 14) {
  //   twoPm.addClass('future');
  //   twoPm.removeClass('past');
  //   twoPm.removeClass('present');
  // }
  // if (timeNow.hour() > 14) {
  //   twoPm.addClass('past');
  //   twoPm.removeClass('present');
  //   twoPm.removeClass('future');
  // }


  // if (timeNow.hour() == 15) {
  //   threePm.addClass('present');
  //   threePm.removeClass('past');
  //   threePm.removeClass('future');
  // }
  // if (timeNow.hour() < 15) {
  //   threePm.addClass('future');
  //   threePm.removeClass('past');
  //   threePm.removeClass('present');
  // }
  // if (timeNow.hour() > 15) {
  //   threePm.addClass('past');
  //   threePm.removeClass('present');
  //   threePm.removeClass('future');
  // }


  // if (timeNow.hour() == 16) {
  //   fourPm.addClass('present');
  //   fourPm.removeClass('past');
  //   fourPm.removeClass('future');
  // }
  // if (timeNow.hour() < 16) {
  //   twoPm.addClass('future');
  //   fourPm.removeClass('past');
  //   fourPm.removeClass('present');
  // }
  // if (timeNow.hour() > 16) {
  //   fourPm.addClass('past');
  //   fourPm.removeClass('present');
  //   fourPm.removeClass('future');
  // }


  // if (timeNow.hour() == 17) {
  //   fivePm.addClass('present');
  //   fivePm.removeClass('past');
  //   fivePm.removeClass('future');
  // }
  // if (timeNow.hour() < 17) {
  //   fivePm.addClass('future');
  //   fivePm.removeClass('past');
  //   fivePm.removeClass('present');
  // }
  // if (timeNow.hour() > 17) {
  //   fivePm.addClass('past');
  //   fivePm.removeClass('present');
  //   fivePm.removeClass('future');
  // }


  // if (timeNow.hour() == 18) {
  //   sixPm.addClass('present');
  //   sixPm.removeClass('past');
  //   sixPm.removeClass('future');
  // }
  // if (timeNow.hour() < 18) {
  //   sixPm.addClass('future');
  //   sixPm.removeClass('past');
  //   sixPm.removeClass('present');
  // }
  // if (timeNow.hour() > 18) {
  //   sixPm.addClass('past');
  //   sixPm.removeClass('present');
  //   sixPm.removeClass('future');
  // }


// };