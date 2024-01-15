var next_url = $(".products-on-page").data("next-url");
var loadedProducts = [];

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

    // Filter out already loaded products
    new_products = new_products.filter(function() {
      return loadedProducts.indexOf($(this).data("product-id")) === -1;
    });

    loadedProducts = loadedProducts.concat(
      new_products.map(function() {
        return $(this).data("product-id");
      }).get()
    );

    $(".products-on-page").append(new_products);
    next_url = new_url;
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
