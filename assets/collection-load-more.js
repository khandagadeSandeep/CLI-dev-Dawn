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

// Initial load
loadMoreProducts(next_url);
