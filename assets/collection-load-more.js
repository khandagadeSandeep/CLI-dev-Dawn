function loadMoreProducts() {
  var products_on_page = $(".products-on-page"); // Move inside the function
  var next_url = products_on_page.data("next-url");

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
