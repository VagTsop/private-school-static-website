
$(document).ready(function() {


 $("form").submit(function(e){
      e.preventDefault();
      var trainerID = $("input[name='trainerID']").val();
      var firstName = $("input[name='firstName']").val();
      var lastName = $("input[name='lastName']").val();
      var subject = $("input[name='subject']").val();




      $(".data-table tbody").append("<tr data-trainerID='"+trainerID+"'data-firstName='"+firstName+"'data-lastName='"+lastName+"'data-subject='"+subject+"'><td>"+trainerID+"</td><td>"+firstName+"</td><td>"+lastName+"</td><td>"+subject+"</td><td><button class='btn btn-info btn-xs btn-edit'>Edit</button><button class='btn btn-danger btn-xs btn-delete'>Delete</button></td></tr>");

      $("input[name='trainerID']").val('');
      $("input[name='firstname']").val('');
      $("input[name='lastName']").val('');
      $("input[name='subject']").val('');

    });

    $("body").on("click", ".btn-delete", function(){
      $(this).parents("tr").remove();
    });
    
    $("body").on("click", ".btn-edit", function(){
     var trainerID = $(this).parents("tr").attr('data-trainerID');
     var firstName = $(this).parents("tr").attr('data-firstName');
     var lastName = $(this).parents("tr").attr('data-lastName');
     var subject= $(this).parents("tr").attr('data-subject');


     $(this).parents("tr").find("td:eq(0)").html('<input name="edit_trainerID" value="'+trainerID+'">');
     $(this).parents("tr").find("td:eq(1)").html('<input name="edit_firstName" value="'+firstName+'">');
     $(this).parents("tr").find("td:eq(2)").html('<input name="edit_lastName" value="'+lastName+'">');
     $(this).parents("tr").find("td:eq(3)").html('<input name="edit_subject" value="'+subject+'">');


     $(this).parents("tr").find("td:eq(4)").prepend("<button class='btn btn-info btn-xs btn-update'>Update</button><button class='btn btn-warning btn-xs btn-cancel'>Cancel</button>")
     $(this).hide();
   });

    $("body").on("click", ".btn-cancel", function(){
      var trainerID = $(this).parents("tr").attr('data-trainerID');
      var firstName = $(this).parents("tr").attr('data-firstName');
      var lastName = $(this).parents("tr").attr('data-lastName');
      var subject = $(this).parents("tr").attr('data-subject');


      $(this).parents("tr").find("td:eq(0)").text(trainerID);
      $(this).parents("tr").find("td:eq(1)").text(firstName);
      $(this).parents("tr").find("td:eq(2)").text(lastName);
      $(this).parents("tr").find("td:eq(3)").text(subject);


      $(this).parents("tr").find(".btn-edit").show();
      $(this).parents("tr").find(".btn-update").remove();
      $(this).parents("tr").find(".btn-cancel").remove();
    });

    $("body").on("click", ".btn-update", function(){
      var trainerID = $(this).parents("tr").find("input[name='edit_trainerID']").val();
      var firstName = $(this).parents("tr").find("input[name='edit_firstName']").val();
      var lastName = $(this).parents("tr").find("input[name='edit_lastName']").val();
      var subject = $(this).parents("tr").find("input[name='edit_subject']").val();


      $(this).parents("tr").find("td:eq(0)").text(trainerID);
      $(this).parents("tr").find("td:eq(1)").text(firstName);
      $(this).parents("tr").find("td:eq(2)").text(lastName);
      $(this).parents("tr").find("td:eq(3)").text(subject);
      


      $(this).parents("tr").attr('data-trainerID', trainerID);
      $(this).parents("tr").attr('data-firstName', firstName);
      $(this).parents("tr").attr('data-lastName', lastName);
      $(this).parents("tr").attr('data-subject', subject);
      



      $(this).parents("tr").find(".btn-edit").show();
      $(this).parents("tr").find(".btn-cancel").remove();
      $(this).parents("tr").find(".btn-update").remove();
    });

    $(document).ready(function(){
     $('#trainerID, #firstName, #lastName, #subject').on("cut copy paste",function(e) {
      e.preventDefault();
    });
   });

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
  $("#trainerID").keypress(function(e){
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

