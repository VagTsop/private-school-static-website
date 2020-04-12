
$(document).ready(function() {

$("form").submit(function(e){
      e.preventDefault();
      var stream = $("input[name='stream']").val();
      var title = $("input[name='title']").val();
      var description = $("input[name='description']").val();
      var subDateTime = $("input[name='subDateTime']").val();
      



      $(".data-table tbody").append("<tr data-stream='"+stream+"'data-title='"+title+"'data-description='"+description+"'data-subDateTime='"+subDateTime+"'><td>"+stream+"</td><td>"+title+"</td><td>"+description+"</td><td>"+subDateTime+"</td><td><button class='btn btn-info btn-xs btn-edit'>Edit</button><button class='btn btn-danger btn-xs btn-delete'>Delete</button></td></tr>");
      
      $("input[name='stream']").val('');
      $("input[name='title']").val('');
      $("input[name='description']").val('');
      $("input[name='subDateTime']").val('');
      
    });
    
    $("body").on("click", ".btn-delete", function(){
      $(this).parents("tr").remove();
    });
    
    $("body").on("click", ".btn-edit", function(){
     var stream = $(this).parents("tr").attr('data-stream');
     var title = $(this).parents("tr").attr('data-title');
     var description = $(this).parents("tr").attr('data-description');
     var subDateTime= $(this).parents("tr").attr('data-subDateTime');
     
     
     $(this).parents("tr").find("td:eq(0)").html('<input name="edit_stream" value="'+stream+'">');
     $(this).parents("tr").find("td:eq(1)").html('<input name="edit_title" value="'+title+'">');
     $(this).parents("tr").find("td:eq(2)").html('<input name="edit_description" value="'+description+'">');
     $(this).parents("tr").find("td:eq(3)").html('<input name="edit_subDateTime" value="'+subDateTime+'">');
     

     $(this).parents("tr").find("td:eq(4)").prepend("<button class='btn btn-info btn-xs btn-update'>Update</button><button class='btn btn-warning btn-xs btn-cancel'>Cancel</button>")
     $(this).hide();
   });
    
    $("body").on("click", ".btn-cancel", function(){
      var stream = $(this).parents("tr").attr('data-stream');
      var title = $(this).parents("tr").attr('data-title');
      var description = $(this).parents("tr").attr('data-description');
      var subDateTime = $(this).parents("tr").attr('data-subDateTime');
      
      
      $(this).parents("tr").find("td:eq(0)").text(stream);
      $(this).parents("tr").find("td:eq(1)").text(title);
      $(this).parents("tr").find("td:eq(2)").text(description);
      $(this).parents("tr").find("td:eq(3)").text(subDateTime);
      
      
      $(this).parents("tr").find(".btn-edit").show();
      $(this).parents("tr").find(".btn-update").remove();
      $(this).parents("tr").find(".btn-cancel").remove();
    });
    
    $("body").on("click", ".btn-update", function(){
      var stream = $(this).parents("tr").find("input[name='edit_stream']").val();
      var title = $(this).parents("tr").find("input[name='edit_title']").val();
      var description = $(this).parents("tr").find("input[name='edit_description']").val();
      var subDateTime = $(this).parents("tr").find("input[name='edit_subDateTime']").val();
      
      
      $(this).parents("tr").find("td:eq(0)").text(stream);
      $(this).parents("tr").find("td:eq(1)").text(title);
      $(this).parents("tr").find("td:eq(2)").text(description);
      $(this).parents("tr").find("td:eq(3)").text(subDateTime);
      
      
      
      $(this).parents("tr").attr('data-stream', stream);
      $(this).parents("tr").attr('data-title', title);
      $(this).parents("tr").attr('data-description', description);
      $(this).parents("tr").attr('data-subDateTime', subDateTime);
      



      $(this).parents("tr").find(".btn-edit").show();
      $(this).parents("tr").find(".btn-cancel").remove();
      $(this).parents("tr").find(".btn-update").remove();
    });

    $(document).ready(function(){
     $('#stream, #title, #description, #subDateTime').on("cut copy paste",function(e) {
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
    
    });
    
    

    