
$(document).ready(function() {

$("form").submit(function(e){
        e.preventDefault();
        var title = $("input[name='title']").val();
        var stream = $("input[name='stream']").val();
        var firstName = $("input[name='firstName']").val();
        var lastName = $("input[name='lastName']").val();
        



        $(".data-table tbody").append("<tr data-title='"+title+"'data-stream='"+stream+"'data-firstName='"+firstName+"'data-lastName='"+lastName+"'><td>"+title+"</td><td>"+stream+"</td><td>"+firstName+"</td><td>"+lastName+"</td><td><button class='btn btn-info btn-xs btn-edit'>Edit</button><button class='btn btn-danger btn-xs btn-delete'>Delete</button></td></tr>");
    
        $("input[name='title']").val('');
        $("input[name='stream']").val('');
        $("input[name='firstName']").val('');
        $("input[name='lastName']").val('');
        
    });
   
    $("body").on("click", ".btn-delete", function(){
        $(this).parents("tr").remove();
    });
    
    $("body").on("click", ".btn-edit", function(){
       var title = $(this).parents("tr").attr('data-title');
       var stream = $(this).parents("tr").attr('data-stream');
        var firstName = $(this).parents("tr").attr('data-firstName');
        var lastName= $(this).parents("tr").attr('data-lastName');
        
    
      $(this).parents("tr").find("td:eq(0)").html('<input name="edit_title" value="'+title+'">');
      $(this).parents("tr").find("td:eq(1)").html('<input name="edit_stream" value="'+stream+'">');
        $(this).parents("tr").find("td:eq(2)").html('<input name="edit_firstName" value="'+firstName+'">');
        $(this).parents("tr").find("td:eq(3)").html('<input name="edit_lastName" value="'+lastName+'">');
        

        $(this).parents("tr").find("td:eq(4)").prepend("<button class='btn btn-info btn-xs btn-update'>Update</button><button class='btn btn-warning btn-xs btn-cancel'>Cancel</button>")
        $(this).hide();
    });
   
    $("body").on("click", ".btn-cancel", function(){
        var title = $(this).parents("tr").attr('data-title');
        var stream = $(this).parents("tr").attr('data-stream');
        var firstName = $(this).parents("tr").attr('data-firstName');
        var lastName = $(this).parents("tr").attr('data-lastName');
        
    
        $(this).parents("tr").find("td:eq(0)").text(title);
        $(this).parents("tr").find("td:eq(1)").text(stream);
        $(this).parents("tr").find("td:eq(2)").text(firstName);
        $(this).parents("tr").find("td:eq(3)").text(lastName);
        
   
        $(this).parents("tr").find(".btn-edit").show();
        $(this).parents("tr").find(".btn-update").remove();
        $(this).parents("tr").find(".btn-cancel").remove();
    });
   
    $("body").on("click", ".btn-update", function(){
        var title = $(this).parents("tr").find("input[name='edit_title']").val();
         var stream = $(this).parents("tr").find("input[name='edit_stream']").val();
        var firstName = $(this).parents("tr").find("input[name='edit_firstName']").val();
        var lastName = $(this).parents("tr").find("input[name='edit_lastName']").val();
       
       
        $(this).parents("tr").find("td:eq(0)").text(title);
        $(this).parents("tr").find("td:eq(1)").text(stream);
        $(this).parents("tr").find("td:eq(2)").text(firstName);
        $(this).parents("tr").find("td:eq(3)").text(lastName);
      
     
     
      $(this).parents("tr").attr('data-title', title);
      $(this).parents("tr").attr('data-stream', stream);
      $(this).parents("tr").attr('data-fName', firstName);
      $(this).parents("tr").attr('data-lName', lastName);
      



        $(this).parents("tr").find(".btn-edit").show();
        $(this).parents("tr").find(".btn-cancel").remove();
        $(this).parents("tr").find(".btn-update").remove();
    });

$(document).ready(function(){
     $('#title #stream, #firstName,#lastName').on("cut copy paste",function(e) {
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