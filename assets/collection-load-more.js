function loadMoreProducts(url) {
  return new Promise(function(resolve, reject) {
    $.ajax({
      url: url,
      type: "GET",
      dataType: "html",
    }).done(function (next_page) {
      var new_products = $(next_page).find(".products-on-page");
      var new_url = new_products.data("next-url");
      next_url = new_url;
      products_on_page.append(new_products.html());
      resolve(); // Resolve the promise once the operation is complete
    }).fail(function(error) {
      reject(error); // Reject the promise if there is an error
    });
  });
}
