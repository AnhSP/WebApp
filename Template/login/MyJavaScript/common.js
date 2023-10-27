document.addEventListener("DOMContentLoaded", function () {
    var userLoggedIn = localStorage.getItem("userLoggedIn");
    // Kiểm tra người dùng đã đăng nhập hay chưa
    if (userLoggedIn === "true") {
        var loginButton = document.getElementById("login-button");
        var loginButtonPhone = document.getElementById("login-button-phone");
        // Ẩn nút đăng nhập
        if (loginButton) {
            loginButton.style.display = "none";
        }
        // Ẩn nút đăng nhập trên điện thoại
        if (loginButtonPhone) {
            loginButtonPhone.style.display = "none";
        }

        var username = localStorage.getItem("username");
        var wellcome = document.getElementById("welcome-user");
        var welcomeUser = document.getElementById("user-greeting");
        // Hiển thị lời chào
        if (username && wellcome) {
            wellcome.style.display = "block";
            welcomeUser.innerText = username;
        }

        var wellcomePhone = document.getElementById("welcome-user-phone");
        var welcomeUserPhone = document.getElementById("user-greeting-phone");
        // Hiển thị lời chào trên điện thoại
        if (wellcomePhone) {
            wellcomePhone.style.display = "block";
            welcomeUserPhone.innerText = username;
        }

        var logoutButton = document.getElementById("logout-button");
        var logoutButtonPhone = document.getElementById("logout-button-phone");
        // Hiện nút đăng xuất
        if (logoutButton) {
            logoutButton.style.display = "block";
        }
        // Hiện nút đăng xuất trên điện thoại
        if (logoutButtonPhone) {
            logoutButtonPhone.style.display = "inline-block";
        }
    }
});
// Đăng xuất
function logout() {
    // var userLoggedIn = localStorage.getItem("userLoggedIn");
    // Hủy trạng thái đăng nhập
    localStorage.setItem("userLoggedIn", "false");

    var wellcome = document.getElementById("welcome-user");
    var welcomeUser = document.getElementById("user-greeting");
    var wellcomePhone = document.getElementById("welcome-user-phone");
    var welcomeUserPhone = document.getElementById("user-greeting-phone");
    // Ẩn lời chào
    if (wellcome && welcomeUser) {
        wellcome.style.display = "none";
        welcomeUser.innerText = "";
    }
    // Ẩn lời chào trên điện thoại
    if (wellcomePhone) {
        wellcomePhone.style.display = "none";
        welcomeUserPhone.innerText = "";
    }

    var logoutButton = document.getElementById("logout-button");
    var logoutButtonPhone = document.getElementById("logout-button-phone");
    // Ẩn nút đăng xuất
    if (logoutButton) {
        logoutButton.style.display = "none";
    }

    // Ẩn nút đăng xuất trên điện thoại
    if (logoutButtonPhone) {
        logoutButtonPhone.style.display = "none";
    }

    var loginButton = document.getElementById("login-button");
    var loginButtonPhone = document.getElementById("login-button-phone");
    // Hiện nút đăng nhập
    if (loginButton) {
        loginButton.style.display = "block";
    }
    // Hiện nút đăng nhập trên điện thoại
    if (loginButtonPhone) {
        loginButtonPhone.style.display = "inline-block";
    }
}
function deleteAccount() {
    // Xóa tất cả các biến trong localStorage
    localStorage.clear();

    // Hiện nút đăng nhập và ẩn nút đăng xuất
    var loginButton = document.getElementById("login-button");
    if (loginButton) {
        loginButton.style.display = "block";
    }
    var logoutButton = document.getElementById("logout-button");
    if (logoutButton) {
        logoutButton.style.display = "none";
    }

    // Hiện nút đăng nhập và ẩn nút đăng xuất trên điện thoại
    var loginButtonPhone = document.getElementById("login-button-phone");
    if (loginButtonPhone) {
        loginButtonPhone.style.display = "inline-block";
    }
    var logoutButtonPhone = document.getElementById("logout-button-phone");
    if (logoutButtonPhone) {
        logoutButtonPhone.style.display = "none";
    }

    // Ẩn lời chào
    var wellcome = document.getElementById("welcome-user");
    var welcomeUser = document.getElementById("user-greeting");
    if (wellcome && welcomeUser) {
        wellcome.style.display = "none";
        welcomeUser.innerText = "";
    }

    // Ẩn lời chào trên điện thoại
    var wellcomePhone = document.getElementById("welcome-user-phone");
    var welcomeUserPhone = document.getElementById("user-greeting-phone");
    if (wellcomePhone && welcomeUser) {
        wellcomePhone.style.display = "none";
        welcomeUserPhone.innerText = "";
    }
}
