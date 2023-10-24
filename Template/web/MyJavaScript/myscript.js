window.addEventListener("load", function(){
    $('.datepicker').datepicker({
        autoclose: true, 
        todayHighlight: true,
        todayBtn : "linked",
        title : "Chon ngày tháng năm",
        format: 'dd/mm/yyyy'
    });
})
