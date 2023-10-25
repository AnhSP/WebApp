window.addEventListener("load", function(){
    $('.datepicker').datepicker({
        autoclose: true, 
        todayHighlight: true,
        todayBtn : "linked",
        title : "Chon ngày tháng năm",
        format: 'dd/mm/yyyy'
    });
})
function search() {
    // Lấy giá trị ngày tháng năm từ các phần tử input
    const ngayDi = document.querySelector("#ngay-di").value;
    const ngayVe = document.querySelector("#ngay-ve").value;
    // Lấy giá trị thành phố từ phần tử select
    const thanhPho = document.querySelector("#thanh-pho").value;
  
    // Kiểm tra nếu có giá trị hợp lệ thì thực hiện tác vụ tìm kiếm
    if (ngayDi && ngayVe && thanhPho !== "Thành phố") {
      // Thực hiện tác vụ tìm kiếm, ví dụ: chuyển người dùng đến trang kết quả
      // window.location.href = `/ket-qua-tim-kiem?ngayDi=${ngayDi}&ngayVe=${ngayVe}&thanhPho=${thanhPho}`;
      alert(`Tìm kiếm với ngày đi: ${ngayDi}, ngày về: ${ngayVe}, thành phố: ${thanhPho}`);
    } else {
      // Xử lý trường hợp người dùng chưa nhập đủ thông tin hoặc chưa chọn thành phố
      alert("Vui lòng nhập ngày và chọn thành phố để tìm kiếm.");
    }
  }
  