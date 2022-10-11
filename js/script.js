$(document).ready(function () {
  $(".menu").click(function (e) {
    e.preventDefault();
    $(".menu-content").addClass("active");
    $(".cover").addClass("active");
  });
  $(".cover").click(function (e) {
    e.preventDefault();
    $(".menu-content").removeClass("active");
    $(".cover").removeClass("active");
  });
  //Product
  $(".menu-products-inner a").click(function (e) {
    e.preventDefault();
    const tab_target = $(this).attr("tab-target");
    // Xóa active của các product-list và product-tab a
    $(".menu-products-inner a").removeClass("active");
    $(".products").removeClass("active");
    // /Khi click vào product-tab nào thì nó sẽ được thêm class active
    // Đồng thời product list có id = giá trị của thuộc tính tab - target cũng được thêm class active
    $(this).addClass("active");
    $(tab_target).addClass("active");
  });
});
