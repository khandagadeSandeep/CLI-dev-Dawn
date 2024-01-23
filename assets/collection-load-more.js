var products_on_page = $(".products-on-page");
var next_url = products_on_page.data("next-url");

console.log(next_url);
$("body").click(function(){
 next_url = $(location).attr('href');
console.log("next", next_url);
});
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
