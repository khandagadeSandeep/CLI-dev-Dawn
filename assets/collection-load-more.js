var products_on_page = $(".products-on-page");
var next_url = products_on_page.data("next-url");
console.log(next_url);

function loadMoreProducts(url, productsContainer) {
  return new Promise(function(resolve, reject) {
    if (!productsContainer || productsContainer.length === 0) {
      reject("productsContainer is not defined or empty");
      return;
    }

    $.ajax({
      url: url,
      type: "GET",
      dataType: "html",
    }).done(function (next_page) {
      var new_products = $(next_page).find(".products-on-page");
      var new_url = new_products.data("next-url");
      next_url = new_url;

      productsContainer.append(new_products.html());
      resolve(); // Resolve the promise once the operation is complete
    }).fail(function(error) {
      reject(error); // Reject the promise if there is an error
    });
  });
}