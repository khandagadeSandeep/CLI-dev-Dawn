var next_url = $(".products-on-page").data("next-url");

// Add an event listener for filter changes
$(document).on('change', '.filter-selector', function() {
  // Update the next_url when filters are changed
  updateNextUrl();
});

// Function to update the next_url
function updateNextUrl() {
  var new_products_on_page = $(".products-on-page");
  var new_next_url = new_products_on_page.data("next-url");
  next_url = new_next_url;
}

// Your existing code for loading more products
function loadMoreProducts() {
  $.ajax({
    url: next_url,
    type: "GET",
    dataType: "html",
  }).done(function (next_page) {
    var new_products = $(next_page).find(".products-on-page");
    var new_url = new_products.data("next-url");
    next_url = new_url;
    $(".products-on-page").append(new_products.html());
  });
}
