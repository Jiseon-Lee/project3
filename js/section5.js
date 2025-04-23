// 예스's Pick
$(function() {
    fetch("https://dapi.kakao.com/v3/search/book?target=title&query=마음&size=3", {
        method: "GET",
        headers: {
            "Authorization": "KakaoAK 945761d34847595bd835ffc829d0509d"
        }
    })
    .then(response => response.json()) // JSON 변환
    .then(data => yesPickTop(data.documents)) // 데이터 출력
    .catch(error => console.error("에러 발생:", error)); // 에러 처리
});

function yesPickTop(data) {
    console.log("section5.js - yesPickTop");
    $("#section5 #multiSec001 .multiTop .multiCont ul").empty();

    for(var i in data) {
        $("#section5 #multiSec001 .multiTop .multiCont ul").append(`
            <li>
                <div class="multiBookImg">
                    <a href="#"><img src="${data[i].thumbnail}" alt="${data[i].title}"></a>
                </div>
                <div class="multiBookInfo">
                    <p class="multiBookCmt">${data[i].contents}</p>
                    <p class="multiBookName"><a href="#">${data[i].title}</a></p>
                    <p class="multiBookPub">${data[i].authors} 저 | ${data[i].publisher}</p>
                    <p class="multiBookPrice"><span>${data[i].sale_price}</span>원</p>
                </div>
            </li>
        `);
    }

    // $("#nowBookCont .nowBookSet").eq(0).addClass("on");
}

$(function() {
    fetch("https://dapi.kakao.com/v3/search/book?target=title&query=한국근대예술&size=4", {
        method: "GET",
        headers: {
            "Authorization": "KakaoAK 945761d34847595bd835ffc829d0509d"
        }
    })
    .then(response => response.json()) // JSON 변환
    .then(data => yesPickBtm(data.documents)) // 데이터 출력
    .catch(error => console.error("에러 발생:", error)); // 에러 처리
});

function yesPickBtm(data) {
    console.log("section5.js - yesPickBtm");
    $("#section5 #multiSec001 .multiBtm .bookCornerCon ul").empty();

    for(var i in data) {
        $("#section5 #multiSec001 .multiBtm .bookCornerCon ul").append(`
            <li class="M1BotBook">
                <div class="book_img">
                    <a href="#">
                        <img src="${data[i].thumbnail}" alt="${data[i].title}" />
                    </a>
                </div>
                <div class="book_info">
                    <p class="book_name">
                        <a href="">${data[i].title}</a>
                    </p>
                </div>
            </li>
        `);
    }
}