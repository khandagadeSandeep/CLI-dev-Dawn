var next_url = $(".products-on-page").data("next-url");

// Your existing code for loading more products
function loadMoreProducts() {
  if (!next_url) {
    // No more products to load, hide the "Load More" button
    $(".load-more").hide();
    return;
  }

  $.ajax({
    url: next_url,
    type: "GET",
    dataType: "html",
  }).done(function (next_page) {
    var new_products = $(next_page).find(".products-on-page");
    var new_url = new_products.data("next-url");

    if (!new_url) {
      // No more products to load, hide the "Load More" button
      $(".load-more").hide();
    }

    next_url = new_url;
    $(".products-on-page").append(new_products.html());
  });
}

// Function to update the next_url and check "Load More" button visibility
function updateNextUrl() {
  var new_products_on_page = $(".products-on-page");
  var new_next_url = new_products_on_page.data("next-url");
  next_url = new_next_url;

  // Check if there's a next_url after filter update
  if (!next_url) {
    // No more products to load, hide the "Load More" button
    $(".load-more").hide();
  } else {
    $(".load-more").show();
  }
}

// Add an event listener for filter changes
$(document).on('change', '.filter-selector', function() {
  // Update the next_url and check "Load More" button visibility
  updateNextUrl();
});

// Initial check for "Load More" button visibility
updateNextUrl();
