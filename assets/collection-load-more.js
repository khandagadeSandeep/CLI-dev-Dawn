var next_url = $(".products-on-page").data("next-url");

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
    next_url = new_products.data("next-url");
    $(".products-on-page").append(new_products.html());

    // Check again after loading more products
    if (!next_url) {
      $(".load-more").hide();
    }
  });
}
