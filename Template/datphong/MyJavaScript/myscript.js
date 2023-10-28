// Hiệu ứng di chuyển từ điền thông tin sang đặt hàng
function stepOder() {
    const circles = document.querySelectorAll('.circle');
    const dividers = document.querySelectorAll('.divider');
    circles[0].classList.add('active');
    dividers[0].classList.add('active');
    circles[1].classList.remove('active');

    // circles[1].classList.add('active');
    // dividers[0].classList.add('active');
    // circles[0].classList.add('active');
    setTimeout(function () {
        circles[0].classList.add('active');
        dividers[0].classList.add('active');
        circles[1].classList.add('active');
    }, 200); // mili giây
    setTimeout(function(){
        alert("Chúc mừng bạn đã xác nhận đặt phòng thành công!\nChúng tôi sẽ liên hệ với bạn qua số điện thoại sớm nhất có thể");
        window.location.href = "/WebApp/Views/index.html";
    },400);
}
// Xác nhận đặt phòng
function order() {
    stepOder();
}


document.addEventListener("DOMContentLoaded", function () {
    // Tạo màu xanh tại hình tròn 1
    const circles = document.querySelectorAll('.circle');
    circles[0].classList.add('active');

    // Kiểm tra tính hợp lệ khi ấn Đặt phòng
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone-number');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const phoneError = document.getElementById('phone-error');
    const bookButton = document.getElementById('book-button');

    bookButton.addEventListener('click', function () {
        let isValid = true;

        // Kiểm tra họ tên
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Vui lòng nhập họ tên';
            isValid = false;
        } else {
            nameError.textContent = '';
        }

        // Kiểm tra email
        // const emailPattern = /^\S+@\S+\.\S+$/; // Biểu thức chính quy
        const emailPattern = /^(\s*|\S+@\S+\.\S+)$/;
        if (!emailPattern.test(emailInput.value)) {
            emailError.textContent = 'Vui lòng nhập email hợp lệ';
            isValid = false;
        } else {
            emailError.textContent = '';
        }

        // Kiểm tra SĐT
        if (phoneInput.value.trim() === '') {
            phoneError.textContent = 'Vui lòng nhập số điện thoại';
            isValid = false;
        } else {
            nameError.textContent = '';
        }
        
        // Kiểm tra SĐT (chỉ chấp nhận số)
        const phonePattern = /^\d+$/;
        if (!phonePattern.test(phoneInput.value)) {
            phoneError.textContent = 'Vui lòng nhập số điện thoại hợp lệ';
            isValid = false;
        } else {
            phoneError.textContent = '';
        }
        
        if (isValid) {
            order();
        }
    });
});
