function loadMoreProducts() {
  var loadMoreButton = $(".load-more_btn");

  if (loadMoreButton.hasClass("loading")) {
    // Prevent multiple clicks while the request is ongoing
    return;
  }

  loadMoreButton.addClass("loading");

  $.ajax({
    url: next_url,
    type: "GET",
    dataType: "html",
  }).done(function (next_page) {
    var new_products = $(next_page).find(".products-on-page");
    var new_url = new_products.data("next-url");

    if (new_products.length > 0) {
      next_url = updateFilterParams(new_url); // Update filter params if needed
      products_on_page.append(new_products.html());
    }

    loadMoreButton.removeClass("loading");
  });
}

// Function to update filter parameters in the URL
function updateFilterParams(url) {
  // Implement your logic to update filter parameters here
  // For example, if you're using a filter form with ID 'filter-form'
  // Serialize the form data and append it to the URL

  var filterForm = $("#filter-form");
  var formData = filterForm.serialize();
  return url + (url.indexOf('?') === -1 ? '?' : '&') + formData;
}
