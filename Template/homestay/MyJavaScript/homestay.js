// Kiểm tra đã login chưa
function checkBook(){
    var isLogined = localStorage.getItem("userLoggedIn")
    if(isLogined==="true"){
        window.location.href = "/WebApp/Views/Dat Phong/datphong.html";
    }else{
        alert("Bạn cần đăng nhập để có thể đặt phòng");
    }
}