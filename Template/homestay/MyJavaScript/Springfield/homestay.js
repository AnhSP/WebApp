// Kiểm tra đã login chưa
function checkBook1(){
    var isLogined = localStorage.getItem("userLoggedIn")
    if(isLogined==="true"){
        window.location.href = "/WebApp/Views/Dat Phong/Homestay/An House/datphong1.html";
    }else{
        alert("Bạn cần đăng nhập để có thể đặt phòng");
    }
}

function checkBook1(){
    var isLogined = localStorage.getItem("userLoggedIn")
    if(isLogined==="true"){
        window.location.href = "/WebApp/Views/Dat Phong/Homestay/An House/datphong2.html";
    }else{
        alert("Bạn cần đăng nhập để có thể đặt phòng");
    }
}