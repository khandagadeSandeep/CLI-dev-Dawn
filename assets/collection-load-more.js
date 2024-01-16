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
    products_on_page.append(new_products.html());
  });
}


function handleResponse() {
 let data = JSON.parse(this.responseText);
 console.log(data); 
}

const request = new XMLHttpRequest();

request.addEventListener('load', handleResponse);
request.open('GET', '/?section="template--16141488390196__product-grid"', true);
request.send();
