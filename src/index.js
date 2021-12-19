import "bootstrap/dist/js/bootstrap.min.js";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper.min.js";
import "@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css";
import "@fortawesome/fontawesome-free/js/all.min";
import "./css/style.css";

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
  $(".add-to-card-btn").click(function () {
    alert("اضافة العنصر الى العربة");
  });

  $("#copyright").text(
    "جميع الحقوق محفوظة للمتجر سنة " + new Date().getFullYear()
  );
  $('.product-option input[type="radio"]').change(function () {
    $(this).parents(".product-option").siblings().removeClass("active");
    $(this).parents(".product-option").addClass("active");
  });

  //when change the quntity
  $("[data-product-quntity]").change(function () {
    //
    var newQuantity = $(this).val();

    //
    var $perent = $(this).parents("[data-product-info]");

    //
    var pricePerUnit = $perent.attr("data-product-price");

    //
    var totalPriceForProduct = newQuantity * pricePerUnit;

    //
    $perent.find(".total-price-for-product").text(totalPriceForProduct + "$");
    calculateTotalPrice();
  });

  $("[data-remove-from-cart]").click(function () {
    $(this).parents("[data-product-info]").remove();
    calculateTotalPrice();
  });

  function calculateTotalPrice() {
    //
    var totalPriceForAllProduct = 0;

    //
    $("[data-product-info]").each(function () {
      //
      var pricePerUnit = $(this).attr("data-product-price");

      //
      var quntity = $(this).find("[data-product-quntity]").val();

      //
      var totalPriceForProduct = quntity * pricePerUnit;

      //
      totalPriceForAllProduct = totalPriceForAllProduct + totalPriceForProduct;
    });

    //
    $("#total-price-for-all-products").text(totalPriceForAllProduct + "$");
  }
});
