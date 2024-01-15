var products_on_page = $(".products-on-page");
var next_url = products_on_page.data("next-url");

function loadMoreProducts(nextUrl) {
  var loadMoreButton = $(".load-more_btn");

  if (loadMoreButton.hasClass("loading")) {
    // Prevent multiple clicks while the request is ongoing
    return;
  }

  loadMoreButton.addClass("loading");

  $.ajax({
    url: nextUrl,
    type: "GET",
    dataType: "html",
  }).done(function (next_page) {
    var new_products = $(next_page).find(".products-on-page");
    var new_url = new_products.data("next-url");

    if (new_products.length > 0) {
      next_url = new_url;
      products_on_page.append(new_products.html());
    }

    loadMoreButton.removeClass("loading");
  });
}

// Call loadMoreProducts with initial next_url
$('.load-more_btn').on('click', function() {
  loadMoreProducts(next_url);
});
