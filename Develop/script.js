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
  var timeNow = dayjs();
      $('#currentDay').text(timeNow.format('dddd, MMMM D YYYY, h:mm a'));
      console.log(timeNow);
  
// Added variables for the hours of the workday, assigning them to the IDs of their respetive hour blocks. Next step is hopefully to create conditional statements to determine color.
  var nineAM = $("#hour-9");
  var tenAM = $('#hour-10');
  var elevenAM =$('#hour-11');
  var twelvePM =$('#hour-12');
  var onePM = $('#hour-1');
  var twoPM = $('#hour-2');
  var threePM = $('#hour-3');
  var fourPM = $('#hour-4');
  var fivePM = $('#hour-5');
  var sixPM = $('#hour-6');

  

  // if ()



  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
