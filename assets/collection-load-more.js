var products_on_page = $(".products-on-page");
var next_url = products_on_page.data("next-url");
console.log(next_url);

function updateNextUrl() {
  // Update next_url based on the current state of filters or any other criteria
  next_url = window.location.pathname;
}

function loadMoreProducts() {
  updateNextUrl(); // Call the updateNextUrl function before making the AJAX request

  $.ajax({
    url: next_url,
    type: "GET",
    dataType: "html",
  }).done(function (next_page) {
    var new_products = $(next_page).find(".products-on-page");
    var new_url = new_products.data("next-url");
    next_url = new_url;
    products_on_page.append(new_products.html());
  });
}

// Example: You can call updateNextUrl() when the filter changes
$(".filter").on("change", function () {
  updateNextUrl();
});

// Example: You can call loadMoreProducts() when you want to load more products
$(".load-more-button").on("click", function () {
  loadMoreProducts();
});
