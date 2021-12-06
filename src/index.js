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
});
