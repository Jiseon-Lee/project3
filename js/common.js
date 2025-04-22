// 마이페이지 하위메뉴 드롭다운
$(function(){
    const myPageMenu = $("#top_header .right li:nth-child(3) a");
    const myPageDrop = $("#myPageSub");

    myPageMenu.mouseover(function() {
        myPageDrop.css("display", "block");
    });

    myPageMenu.mouseout(function() {
        myPageDrop.css("display", "none");
    });

    myPageDrop.mouseover(function() {
        myPageDrop.css("display", "block");
    });

    myPageDrop.mouseout(function() {
        myPageDrop.css("display", "none");
    });
});
