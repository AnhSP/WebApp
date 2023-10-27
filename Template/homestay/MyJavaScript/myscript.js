// Sử dụng jquery để Làm nổi 3D các khách sạn
// $(document).ready(function() {
//     // Bắt sự kiện hover khi con chuột di chuyển vào hoặc ra khỏi .hotel-card
//     $('.hotel-card').hover(function() {
//         // Hover vào
//         $(this).css('transform', 'translateY(-20px)');
//         $(this).css('background-color', '#ccc');
//     }, function() {
//         // Hover ra
//         $(this).css('transform', 'translateY(0)');
//         $(this).css('background-color', 'transparent');
//     });
// });
// Không hiểu tại sao không có Sử dụng jquery để Làm nổi 3D các khách sạn mà nó vẫn hoạt động bình thường

// Js cho danh sách các phòng
document.addEventListener("DOMContentLoaded", function () {
    const thumbnails = document.querySelectorAll(".image-thumbnails img");
    const popup = document.querySelector(".image-popup");
    const popupContent = document.querySelector(".image-popup-content");
    const closePopup = document.querySelector(".popup-close");
    let isPopupOpen = false;

    thumbnails.forEach((thumbnail) => {
        thumbnail.addEventListener("click", function (e) {
            e.stopPropagation();
            if (!isPopupOpen) {
                popup.style.display = "flex";
                popupContent.innerHTML = `<img src="${thumbnail.src}" alt="Room Image">`;
                isPopupOpen = true;
            }
        });
    });

    closePopup.addEventListener("click", function () {
        popup.style.display = "none";
        isPopupOpen = false;
    });

    popup.addEventListener("click", function () {
        popup.style.display = "none";
        isPopupOpen = false;
    });
    // // Kiểm tra xem chuột có ở trên cửa sổ modal không
    // popupContent.addEventListener("mousemove", function () {
    //     isMouseOverPopup = true;
    // });

    // popupContent.addEventListener("mouseout", function () {
    //     isMouseOverPopup = false;
    // });

    // // Ngăn chặn di chuyển chuột ra khỏi cửa sổ modal
    // document.addEventListener("mousemove", function (e) {
    //     if (isPopupOpen && !isMouseOverPopup) {
    //         e.preventDefault();
    //         e.stopPropagation();
    //     }
    // });
});

