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
    if (next_url === '') {
 $('.load-more').css("display","none");
} 
  });  
}

function handleResponse() {
  JSON.parse(this.responseText);
  console.log(data , "sectionData");
}
var section = document.querySelector('[data-section-type="section-type"]');
var id = section.dataset.id;

const request = new XMLHttpRequest();

request.addEventListener('load', handleResponse);
request.open('GET', `?section_id=${id}`, true);
request.send();
