//Problem: User when clicking on image goes to a dead end
//solution: create an overlay with the large image - Lightbox
//Add overlay
var $overlay = $('<div id="overlay"></div>');
$("body").append($overlay);
//Add image
//Add caption
//Plan:
      //Capture the click event on a link to an image
$("#imageGallery a").click(function(event){
      event.preventDefault();
      var href = $(this).attr("href");
      $overlay.show();
      //show the overlay
      //update overlay with the image linked in the linked
      //Get child's alt attribute and set caption
});


      //3. When the overlay is clicked
         //3.1 Hide the overlay
