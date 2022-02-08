
import "bootstrap/dist/js/bootstrap.min.js";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper.min.js";
// import "@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css";
// import "@laylazi/bootstrap-rtl-scss/scss/bootstrap-rtl.scss";
import "@fortawesome/fontawesome-free/js/all.min";
import "./sass/stayle.scss"
import "./css/style.css";
import "webpack-jquery-ui";
import "webpack-jquery-ui/css";
import "jquery-ui-touch-punch/jquery.ui.touch-punch"

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

  var citiesByCountry = {
    SA: ["جدة", "الرياض"],
    EG: ["القاهرة", "الإسكندرية"],
    JO: ["عمان", "الزرقاء"],
    SY: ["دمشق", "حمص", "حلب"],
  };

  //When country change
  $('#form-checkout select[name="country"]').on("change", function () {
    //جلب رمز البلد
    var country = $(this).val();

    // اجلب مدن هذا البلد من المصفوفة
    var cities = citiesByCountry[country];

    //فرغ قائمة المدينة
    $('#form-checkout select[name="city"]').empty();
    //اضافة خيار اختر مدينة
    $('#form-checkout select[name="city"]').append(
      '<option disabled selected value="">اختر المدينة</option>'
    );

    //اضافة المدن الى قائمة المدن
    cities.forEach(function (city) {
      var newOption = $("<option></option>");
      newOption.text(city);
      newOption.val(city);
      $('#form-checkout select[name="city"]').append(newOption);
    });
  });

  $("#form-checkout  input[name='payment_method']").on("change", function () {
    var paymentMethod = $(this).val();

    if (paymentMethod === "on_delivary") {
      $("#credit-card-info input").prop("disabled", true);
      $("#credit-card-info").hide();
    } else {
      $("#credit-card-info input").prop("disabled", false);
      $("#credit-card-info").show();
    }
  });

  $("#price-range").slider({
    range: true,
    min: 50,
    max: 1000,
    step: 50,
    values: [250, 800],
    slide: function (event, ui) {
      $("#price-min").text(ui.values[0]);
      $("#price-max").text(ui.values[1]);
    }
  });
  
});
