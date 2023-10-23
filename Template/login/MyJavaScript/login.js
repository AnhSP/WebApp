function showLoginForm() {
    document.getElementById("login-form").style.display = "block";
    document.getElementById("register-form").style.display = "none";
}

function showRegisterForm() {
    document.getElementById("register-form").style.display = "block";
    document.getElementById("login-form").style.display = "none";
}

function validateLoginForm() {
    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;

    if (username === "" || password === "") {
        document.getElementById("login-username-error").innerText = username === "" ? "Vui lòng nhập tên đăng nhập" : "";
        document.getElementById("login-password-error").innerText = password === "" ? "Vui lòng nhập mật khẩu" : "";
        return false;
    }
}

function validateRegisterForm() {
    var fullname = document.getElementById("register-fullname").value;
    var email = document.getElementById("register-email").value;
    var password = document.getElementById("register-password").value;
    var confirmPassword = document.getElementById("register-confirm-password").value;

    if (fullname === "" || email === "" || password === "" || confirmPassword === "") {
        document.getElementById("register-fullname-error").innerText = fullname === "" ? "Vui lòng nhập họ và tên" : "";
        document.getElementById("register-email-error").innerText = email === "" ? "Vui lòng nhập email" : "";
        document.getElementById("register-password-error").innerText = password === "" ? "Vui lòng nhập mật khẩu" : "";
        document.getElementById("register-confirm-password-error").innerText = confirmPassword === "" ? "Vui lòng xác nhận mật khẩu" : "";
        return false;
    }

    if (password !== confirmPassword) {
        document.getElementById("register-confirm-password-error").innerText = "Mật khẩu xác nhận không khớp";
        return false;
    }
} document.getElementById("login-form").style.display = "none";
