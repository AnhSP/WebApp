
function showLoginForm() {
    document.getElementById("login-form").style.display = "block";
    document.getElementById("signup-form").style.display = "none";
}

function showsignupForm() {
    document.getElementById("signup-form").style.display = "block";
    document.getElementById("login-form").style.display = "none";
}

function checkLoginForm() {
    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;

    // Lấy thông tin tài khoản từ localStorage
    var savedUsername = localStorage.getItem("username");
    var savedPassword = localStorage.getItem("password");

    if (username === "" || password === "") {
        document.getElementById("login-username-error").innerText = username === "" ? "Vui lòng nhập tên đăng nhập" : "";
        document.getElementById("login-password-error").innerText = password === "" ? "Vui lòng nhập mật khẩu" : "";
        return false;
    }
    if (username === savedUsername && password === savedPassword) {
        // Lưu trạng thái đăng nhập
        localStorage.setItem("userLoggedIn", "true");

        // Chuyển hướng sang trang chủ
        window.location.href = "/WebApp/Views/index.html";
        return false;
    } else {
        alert(`Tên đăng nhập hoặc mật khẩu không đúng`);
    }

}

function checksignupForm() {
    var fullname = document.getElementById("signup-fullname").value;
    var email = document.getElementById("signup-email").value;
    var password = document.getElementById("signup-password").value;
    var confirmPassword = document.getElementById("signup-confirm-password").value;

    if (fullname === "" || email === "" || password === "" || confirmPassword === "") {
        document.getElementById("signup-fullname-error").innerText = fullname === "" ? "Vui lòng nhập họ và tên" : "";
        document.getElementById("signup-email-error").innerText = email === "" ? "Vui lòng nhập email" : "";
        document.getElementById("signup-password-error").innerText = password === "" ? "Vui lòng nhập mật khẩu" : "";
        document.getElementById("signup-confirm-password-error").innerText = confirmPassword === "" ? "Vui lòng xác nhận mật khẩu" : "";
        return false;
    }

    if (password !== confirmPassword) {
        document.getElementById("signup-confirm-password-error").innerText = "Mật khẩu xác nhận không khớp";
        return false;
    }
    var isChecked = document.getElementById("argree").checked;

    if (!isChecked) {
        document.getElementById("needed").innerText = "Bạn cần đồng ý với điều khoản!";
        return false;
    } else {
        // alert(` tk: ${username} mail: ${email} mk: ${password}`);
        document.getElementById("needed").innerText = "";
        signup();
        // return true;
    }
}

// Đăng ký
function signup() {
    var username = document.getElementById("signup-fullname").value;
    var email = document.getElementById("signup-email").value;
    var password = document.getElementById("signup-password").value;

    // alert(` tk: ${username} mail: ${email} mk: ${password}`);

    // Lưu tài khoản vào localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    alert(`Chúc mừng bạn đã đăng ký thành công`);
    showLoginForm();
    return false; // Ngăn form được submit

}

