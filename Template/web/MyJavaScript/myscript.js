window.addEventListener("load", function () {
  $('.datepicker').datepicker({
    autoclose: true,
    todayHighlight: true,
    todayBtn: "linked",
    title: "Chon ngày tháng năm",
    format: 'dd/mm/yyyy'
  });
})

document.addEventListener("DOMContentLoaded", function () {
  const homestayOption = document.querySelector("#homestay-option");
  const hotelOption = document.querySelector("#hotel-option");

  // Sự kiện click cho lựa chọn "Homestay"
  homestayOption.addEventListener("click", function () {
    // Loại bỏ lớp CSS "selected" từ tất cả các lựa chọn
    hotelOption.classList.remove("selected");

    // Thêm lớp CSS "selected" cho lựa chọn "Homestay"
    homestayOption.classList.add("selected");
  });

  // Sự kiện click cho lựa chọn "Khách sạn"
  hotelOption.addEventListener("click", function () {
    // Loại bỏ lớp CSS "selected" từ tất cả các lựa chọn
    homestayOption.classList.remove("selected");

    // Thêm lớp CSS "selected" cho lựa chọn "Khách sạn"
    hotelOption.classList.add("selected");
  });

  // Hàm xử lý tìm kiếm và điều hướng
  function searchAndNavigate() {
    const ngayDi = document.querySelector("#ngay-di").value;
    const ngayVe = document.querySelector("#ngay-ve").value;
    const thanhPho = document.querySelector("#thanh-pho").value;
    const selectedOption = document.querySelector(".selected").textContent.trim();// Lựa chọn đã chọn

    if (ngayDi && ngayVe && thanhPho !== "Thành phố") {
      // alert(`Tìm kiếm với ngày đi: ${ngayDi}, ngày về: ${ngayVe}, thành phố: ${thanhPho}`);
      if (selectedOption === "Homestay") {
        // Điều hướng đến trang homestay
        window.location.href = "/WebApp/Views/homestay/Homestay.html";
      } else if (selectedOption === "Khách sạn") {
        // Điều hướng đến trang khách sạn
        window.location.href = "/WebApp/Views/Khach san/Khach san.html";
      }
    } else {
      alert("Vui lòng nhập đủ thông tin và chọn một lựa chọn.");
    }
  }

  // Sự kiện click cho nút tìm kiếm và điều hướng
  const searchButton = document.querySelector("#search-button");
  searchButton.addEventListener("click", searchAndNavigate);
});
