// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-eat").on("click", function(event) {
      var id = $(this).data("id");
      var neweat = $(this).data("neweat");
  
      var neweatState = {
        devoured: true
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "UPDATE",
        data: neweatState
      }).then(
        function() {
          console.log("changed eat to", neweat);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  })
