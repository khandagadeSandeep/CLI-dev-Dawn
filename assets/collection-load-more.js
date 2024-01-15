var products_on_page = $(".products-on-page");
var next_url = products_on_page.data("next-url");
console.log(next_url);

function loadMoreProducts(url) {
  $.ajax({
    url: url,
    type: "GET",
    dataType: "html",
  }).done(function (next_page) {
    var new_products = $(next_page).find(".products-on-page");
    var new_url = new_products.data("next-url");
    next_url = new_url;
    products_on_page.append(new_products.html());
  });
}

// Assuming there's a function triggered when a filter is applied
function onFilterApplied() {
  // Update next_url based on the filter selection
  next_url = $(".products-on-page").data("next-url");
}

// Example event listener for filter change
$(".filter-checkbox").change(function() {
  onFilterApplied();
});

// Example usage of loadMoreProducts with the updated next_url
$(".load-more_btn").click(function() {
  loadMoreProducts(next_url);
});
