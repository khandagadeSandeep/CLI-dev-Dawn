var products_on_page = $(".products-on-page");
var next_url = products_on_page.data("next-url");
console.log(next_url);

function loadMoreProducts() {
  $.ajax({
    url: next_url,
    type: "GET",
    dataType: "html",
  }).done(function (next_page) {
    var new_products = $(next_page).find(".products-on-page");
    var new_url = new_products.data("next-url");
    next_url = new_url;
    
    var new_products_container = $(next_page).find("#product-grid");
    var new_next_url = new_products_container.data("next-url");
    products_on_page.append(new_products.html());
    products_on_page.data("next-url", new_next_url);
  });
}

