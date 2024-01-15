// Your existing code for loading more products
function loadMoreProducts() {
  var currentNextUrl = $(".products-on-page").data("next-url");

  if (!currentNextUrl) {
    // No more products to load, hide the "Load More" button
    $(".load-more").hide();
    return;
  }

  $.ajax({
    url: currentNextUrl,
    type: "GET",
    dataType: "html",
  }).done(function (next_page) {
    var new_products = $(next_page).find(".products-on-page");
    var new_url = new_products.data("next-url");

    if (!new_url) {
      // No more products to load, hide the "Load More" button
      $(".load-more").hide();
    }

    $(".products-on-page").append(new_products.html());
  });
}

// Function to update the next_url and check "Load More" button visibility
function updateNextUrl() {
  var new_products_on_page = $(".products-on-page");
  var new_next_url = new_products_on_page.data("next-url");

  // Check if there's a next_url after filter update
  if (!new_next_url) {
    // No more products to load, hide the "Load More" button
    $(".load-more").hide();
  } else {
    $(".load-more").show();
  }

  // Update the next_url after checking button visibility
  next_url = new_next_url;
}

// Add an event listener for filter changes
$(document).on('change', '.filter-selector', function() {
  // Update the next_url and check "Load More" button visibility
  updateNextUrl();
});

// Initial check for "Load More" button visibility
updateNextUrl();

// Add an event listener for clicking the "Load More" button
$(".load-more").on('click', function() {
  // Load more products when the button is clicked
  loadMoreProducts();
});
