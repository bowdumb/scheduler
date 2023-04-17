
$(function () {
  var timeNow = dayjs()
$('#currentDay').text(timeNow.format('dddd, MMMM D YYYY, h:mm a')); //Returns the current local time from the timeNow variable above, and formats it as written.
  var $saveButtons = $('.saveBtn'); //Targets all of the save buttons, and groups them as an object. Below they are used to target the appropriate text boxes for time blocks in order to enable saving to local storage.
  



  $saveButtons.on('click', function() {
    var $thisButton = $(this);
    var siblingTextArea = $thisButton.siblings('.description')
    var inputValue = siblingTextArea.val()
    var timeBlockEl = $thisButton.parent()
    var timeBlockId = timeBlockEl.attr('id')
    
    localStorage.setItem(timeBlockId,inputValue) //Determines the key:value combination and saves it to local storage for recall on lines 50-58.
   
  });

  //Functions as a for loop, allowing us to loop through the id values assigned to each time block div.
  $('.time-block').each(function(){
    var $thisTimeBlock = $(this);
    var timeBlockId = $thisTimeBlock.attr('id').split('hour-',  [2]);
    timeBlockHour = ($(this).attr("id").split('hour-',[2])); //Initially an array is returned, and then the .split() method is used to remove the 'hour-' portion and target the number value to make a direct comparison with the current time in hours down below.
   
    
  // timeBlockId[1] targets the hour value assigned to each time block, and compares it directly to the current time in hours by selecting the appropriate 
  if (timeBlockId[1] == timeNow.hour()) {
      $(this).addClass('present');
      $(this).removeClass('past');
      $(this).removeClass('future');
  } // CSS classes are either added or removed depending on the boolean output of true or false, relative to current time.
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

//Targets the id and classes, and inputs the corresponding key values from local storage. Currently unable to figure out how to loop through these values to simplify the code.
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

  })

});