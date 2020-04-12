   


$(document).ready(function() {


    $("form").submit(function(e){
      e.preventDefault();
      var studentID = $("input[name='studentID']").val();
      var firstName = $("input[name='firstName']").val();
      var lastName = $("input[name='lastName']").val();
      var dateOfBirth = $("input[name='dateOfBirth']").val();




      $(".data-table tbody").append("<tr data-studentID='"+studentID+"'data-firstName='"+firstName+"'data-lastName='"+lastName+"'data-dateOfBirth='"+dateOfBirth+"'><td>"+studentID+"</td><td>"+firstName+"</td><td>"+lastName+"</td><td>"+dateOfBirth+"</td><td><button class='btn btn-info btn-xs btn-edit'>Edit</button><button class='btn btn-danger btn-xs btn-delete'>Delete</button></td></tr>");

      $("input[name='studentID']").val('');
      $("input[name='firstName']").val('');
      $("input[name='lastName']").val('');
      $("input[name='dateOfBirth']").val('');




});






    

    $("body").on("click", ".btn-delete", function(){
      $(this).parents("tr").remove();
    });
    
    $("body").on("click", ".btn-edit", function(){





     var studentID = $(this).parents("tr").attr('data-studentID');
     var firstName = $(this).parents("tr").attr('data-firstName');
     var lastName = $(this).parents("tr").attr('data-lastName');
     var dateOfBirth = $(this).parents("tr").attr('data-dateOfBirth');


     $(this).parents("tr").find("td:eq(0)").html('<input name="edit_studentID" value="'+studentID+'">');
     $(this).parents("tr").find("td:eq(1)").html('<input name="edit_firstName" value="'+firstName+'">');
     $(this).parents("tr").find("td:eq(2)").html('<input name="edit_lastName" value="'+lastName+'">');
     $(this).parents("tr").find("td:eq(3)").html('<input name="edit_dateOfBirth" value="'+dateOfBirth+'">');


     $(this).parents("tr").find("td:eq(4)").prepend("<button class='btn btn-info btn-xs btn-update'>Update</button><button class='btn btn-warning btn-xs btn-cancel'>Cancel</button>")
     $(this).hide();
   });


    $("body").on("click", ".btn-cancel", function(){
      var studentID = $(this).parents("tr").attr('data-studentID');
      var firstName = $(this).parents("tr").attr('data-firstName');
      var lastName = $(this).parents("tr").attr('data-lastName');
      var dateOfBirth = $(this).parents("tr").attr('data-dateOfBirth');


      $(this).parents("tr").find("td:eq(0)").text(studentID);
      $(this).parents("tr").find("td:eq(1)").text(firstName);
      $(this).parents("tr").find("td:eq(2)").text(lastName);
      $(this).parents("tr").find("td:eq(3)").text(dateOfBirth);


      $(this).parents("tr").find(".btn-edit").show();
      $(this).parents("tr").find(".btn-update").remove();
      $(this).parents("tr").find(".btn-cancel").remove();
    });

    $("body").on("click", ".btn-update", function(){
      var studentID = $(this).parents("tr").find("input[name='edit_studentID']").val();
      var firstName = $(this).parents("tr").find("input[name='edit_firstName']").val();
      var lastName = $(this).parents("tr").find("input[name='edit_lastName']").val();
      var dateOfBirth = $(this).parents("tr").find("input[name='edit_dateOfBirth']").val();


      $(this).parents("tr").find("td:eq(0)").text(studentID);
      $(this).parents("tr").find("td:eq(1)").text(firstName);
      $(this).parents("tr").find("td:eq(2)").text(lastName);
      $(this).parents("tr").find("td:eq(3)").text(dateOfBirth);
      


      $(this).parents("tr").attr('data-studentID', studentID);
      $(this).parents("tr").attr('data-firstName', firstName);
      $(this).parents("tr").attr('data-lastName', lastName);
      $(this).parents("tr").attr('data-dateOfBirth', dateOfBirth);
      



      $(this).parents("tr").find(".btn-edit").show();
      $(this).parents("tr").find(".btn-cancel").remove();
      $(this).parents("tr").find(".btn-update").remove();
    });

    var today = new Date();
    var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
if(dd<10){
  dd='0'+dd
} 
if(mm<10){
  mm='0'+mm
} 
today = yyyy+'-'+mm+'-'+dd;
document.getElementById("dateOfBirth").setAttribute("max", today);

$(document).ready(function(){
 $('#studentID ,#firstName, #lastName, #dateOfBirth').on("cut copy paste",function(e) {
  e.preventDefault();
});
});

$(document).ready(function() {



(function() {
  $('form input').keyup(function() {

    var empty = false;
    $('form  input').change(function() {
      if ($(this).val() == '') {
        empty = true;
      }
    });
    if (empty) {
      $('#submit').attr('disabled', 'disabled');
    } else {
      $('#submit').removeAttr('disabled');
    }
  });
})()

});
$(document).ready(function() {
$("#firstName, #lastName").on("keydown", function(event){
  // Allow controls such as backspace, tab etc.
  var arr = [8,9,16,17,20,35,36,37,38,39,40,45,46];

  // Allow letters
  for(var i = 65; i <= 90; i++){
    arr.push(i);
  }

  // Prevent default if not in array
  if(jQuery.inArray(event.which, arr) === -1){
    event.preventDefault();
  }
});
});


 $(document).ready(function(){
  $("#studentID").keypress(function(e){
     var keyCode = e.which;
    /*
      8 - (backspace)
      32 - (space)
      48-57 - (0-9)Numbers
    */
 
    if ( (keyCode != 8 || keyCode ==32 ) && (keyCode < 48 || keyCode > 57)) { 
      return false;
    }
  });
});

});