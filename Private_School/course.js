
$(document).ready(function() {

    $("form").submit(function(e){
      e.preventDefault();
      var courseID = $("input[name='courseID']").val();
      var title = $("input[name='title']").val();
      var stream = $("input[name='stream']").val();
      var type = $("input[name='type']").val();




      $(".data-table tbody").append("<tr data-courseID='"+courseID+"'data-title='"+title+"'data-stream='"+stream+"'data-type='"+type+"'><td>"+courseID+"</td><td>"+title+"</td><td>"+stream+"</td><td>"+type+"</td><td><button class='btn btn-info btn-xs btn-edit'>Edit</button><button class='btn btn-danger btn-xs btn-delete'>Delete</button></td></tr>");

      $("input[name='courseID']").val('');
      $("input[name='title']").val('');
      $("input[name='stream']").val('');
      $("input[name='type']").val('');

    });

    $("body").on("click", ".btn-delete", function(){
      $(this).parents("tr").remove();
    });
    
    $("body").on("click", ".btn-edit", function(){
     var courseID = $(this).parents("tr").attr('data-courseID');
     var title = $(this).parents("tr").attr('data-title');
     var stream = $(this).parents("tr").attr('data-stream');
     var type= $(this).parents("tr").attr('data-type');


     $(this).parents("tr").find("td:eq(0)").html('<input name="edit_courseID" value="'+courseID+'">');
     $(this).parents("tr").find("td:eq(1)").html('<input name="edit_title" value="'+title+'">');
     $(this).parents("tr").find("td:eq(2)").html('<input name="edit_stream" value="'+stream+'">');
     $(this).parents("tr").find("td:eq(3)").html('<input name="edit_type" value="'+type+'">');


     $(this).parents("tr").find("td:eq(4)").prepend("<button class='btn btn-info btn-xs btn-update'>Update</button><button class='btn btn-warning btn-xs btn-cancel'>Cancel</button>")
     $(this).hide();
   });

    $("body").on("click", ".btn-cancel", function(){
      var courseID = $(this).parents("tr").attr('data-courseID');
      var title = $(this).parents("tr").attr('data-title');
      var stream = $(this).parents("tr").attr('data-stream');
      var type = $(this).parents("tr").attr('data-type');


      $(this).parents("tr").find("td:eq(0)").text(courseID);
      $(this).parents("tr").find("td:eq(1)").text(title);
      $(this).parents("tr").find("td:eq(2)").text(stream);
      $(this).parents("tr").find("td:eq(3)").text(type);


      $(this).parents("tr").find(".btn-edit").show();
      $(this).parents("tr").find(".btn-update").remove();
      $(this).parents("tr").find(".btn-cancel").remove();
    });

    $("body").on("click", ".btn-update", function(){
      var courseID = $(this).parents("tr").find("input[name='edit_courseID']").val();
      var title = $(this).parents("tr").find("input[name='edit_title']").val();
      var stream = $(this).parents("tr").find("input[name='edit_stream']").val();
      var type = $(this).parents("tr").find("input[name='edit_type']").val();


      $(this).parents("tr").find("td:eq(0)").text(courseID);
      $(this).parents("tr").find("td:eq(1)").text(title);
      $(this).parents("tr").find("td:eq(2)").text(stream);
      $(this).parents("tr").find("td:eq(3)").text(type);
      


      $(this).parents("tr").attr('data-courseID', courseID);
      $(this).parents("tr").attr('data-title', title);
      $(this).parents("tr").attr('data-stream', stream);
      $(this).parents("tr").attr('data-type', type);
      



      $(this).parents("tr").find(".btn-edit").show();
      $(this).parents("tr").find(".btn-cancel").remove();
      $(this).parents("tr").find(".btn-update").remove();
    });

    $(document).ready(function(){
     $('#courseID, #title, #stream, #type').on("cut copy paste",function(e) {
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







    $(document).ready(function(){
  $("#courseID").keypress(function(e){
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

