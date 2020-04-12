
$(document).ready(function() {

$("form").submit(function(e){
      e.preventDefault();
      var assignmentID = $("input[name='assignmentID']").val();
      var title = $("input[name='title']").val();
      var description = $("input[name='description']").val();
      var subDateTime = $("input[name='subDateTime']").val();
      var oralMark = $("input[name='oralMark']").val();
      var totalMark = $("input[name='totalMark']").val();



      $(".data-table tbody").append("<tr data-assignmentID='"+assignmentID+"'data-title='"+title+"'data-description='"+description+"'data-subDateTime='"+subDateTime+"'data-oralMark='"+oralMark+"'data-totalMark='"+totalMark+"'><td>"+assignmentID+"</td><td>"+title+"</td><td>"+description+"</td><td>"+subDateTime+"</td><td>"+oralMark+"</td><td>"+totalMark+"</td><td><button class='btn btn-info btn-xs btn-edit'>Edit</button><button class='btn btn-danger btn-xs btn-delete'>Delete</button></td></tr>");

      $("input[name='assignmentID']").val('');
      $("input[name='title']").val('');
      $("input[name='description']").val('');
      $("input[name='subDateTime']").val('');
      $("input[name='oralMark']").val('');
      $("input[name='totalMark']").val('');
    });

    $("body").on("click", ".btn-delete", function(){
      $(this).parents("tr").remove();
    });
    
    $("body").on("click", ".btn-edit", function(){
     var assignmentID = $(this).parents("tr").attr('data-assignmentID');
     var title = $(this).parents("tr").attr('data-title');
     var description = $(this).parents("tr").attr('data-description');
     var subDateTime = $(this).parents("tr").attr('data-subDateTime');
     var oralMark = $(this).parents("tr").attr('data-oralMark');
     var totalMark = $(this).parents("tr").attr('data-totalMark');

     $(this).parents("tr").find("td:eq(0)").html('<input name="edit_assignmentID" value="'+assignmentID+'">');
     $(this).parents("tr").find("td:eq(1)").html('<input name="edit_title" value="'+title+'">');
     $(this).parents("tr").find("td:eq(2)").html('<input name="edit_description" value="'+description+'">');
     $(this).parents("tr").find("td:eq(3)").html('<input name="edit_subDateTime" value="'+subDateTime+'">');
     $(this).parents("tr").find("td:eq(4)").html('<input name="edit_oralMark" value="'+oralMark+'">');
     $(this).parents("tr").find("td:eq(5)").html('<input name="edit_totalMark" value="'+totalMark+'">');

     $(this).parents("tr").find("td:eq(6)").prepend("<button class='btn btn-info btn-xs btn-update'>Update</button><button class='btn btn-warning btn-xs btn-cancel'>Cancel</button>")
     $(this).hide();
   });

    $("body").on("click", ".btn-cancel", function(){
      var assignmentID = $(this).parents("tr").attr('data-assignmentID');
      var title = $(this).parents("tr").attr('data-title');
      var description = $(this).parents("tr").attr('data-description');
      var subDateTime = $(this).parents("tr").attr('data-subDateTime');
      var oralMark = $(this).parents("tr").attr('data-oralMark');
      var totalMark = $(this).parents("tr").attr('data-totalMark');

      $(this).parents("tr").find("td:eq(0)").text(assignmentID);
      $(this).parents("tr").find("td:eq(1)").text(title);
      $(this).parents("tr").find("td:eq(2)").text(description);
      $(this).parents("tr").find("td:eq(3)").text(subDateTime);
      $(this).parents("tr").find("td:eq(4)").text(oralMark);
      $(this).parents("tr").find("td:eq(5)").text(totalMark);

      $(this).parents("tr").find(".btn-edit").show();
      $(this).parents("tr").find(".btn-update").remove();
      $(this).parents("tr").find(".btn-cancel").remove();
    });

    $("body").on("click", ".btn-update", function(){
      var assignmentID = $(this).parents("tr").find("input[name='edit_assignmentID']").val();
      var title = $(this).parents("tr").find("input[name='edit_title']").val();
      var description = $(this).parents("tr").find("input[name='edit_description']").val();
      var subDateTime = $(this).parents("tr").find("input[name='edit_subDateTime']").val();
      var oralMark = $(this).parents("tr").find("input[name='edit_oralMark']").val();
      var totalMark = $(this).parents("tr").find("input[name='edit_totalMark']").val();

      $(this).parents("tr").find("td:eq(0)").text(assignmentID);
      $(this).parents("tr").find("td:eq(1)").text(title);
      $(this).parents("tr").find("td:eq(2)").text(description);
      $(this).parents("tr").find("td:eq(3)").text(subDateTime);
      $(this).parents("tr").find("td:eq(4)").text(oralMark);
      $(this).parents("tr").find("td:eq(5)").text(totalMark);


      $(this).parents("tr").attr('data-assignmentID', assignmentID);
      $(this).parents("tr").attr('data-title', title);
      $(this).parents("tr").attr('data-description', description);
      $(this).parents("tr").attr('data-subDateTime', subDateTime);
      $(this).parents("tr").attr('data-oralMark', oralMark);
      $(this).parents("tr").attr('data-totalMark', totalMark);



      $(this).parents("tr").find(".btn-edit").show();
      $(this).parents("tr").find(".btn-cancel").remove();
      $(this).parents("tr").find(".btn-update").remove();
    });

    $(document).ready(function(){
     $('#assignmentID, #title, #description, #subDateTime, #oralMark, #totalMark').on("cut copy paste",function(e) {
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
  $("#assignmentID,#oralMark,#totalMark").keypress(function(e){
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

