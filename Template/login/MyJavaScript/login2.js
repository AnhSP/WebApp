
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

    if (username === "" || password === "") {
        document.getElementById("login-username-error").innerText = username === "" ? "Vui lòng nhập tên đăng nhập" : "";
        document.getElementById("login-password-error").innerText = password === "" ? "Vui lòng nhập mật khẩu" : "";
        return false;
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
        document.getElementById("needed").innerText = "";
        return true;
    }
}





  
