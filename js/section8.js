// 카드뉴스
$(function() {
    fetch("https://dapi.kakao.com/v3/search/book?target=isbn&query=9788936429430&size=12", {
        method: "GET",
        headers: {
            "Authorization": "KakaoAK 945761d34847595bd835ffc829d0509d"
        }
    })
    .then(response => response.json()) // JSON 변환
    .then(data => cardNewsBook(data.documents)) // 데이터 출력
    .catch(error => console.error("에러 발생:", error)); // 에러 처리
});

function cardNewsBook(data) {
    console.log("section8.js - cardNewsBook");
    $("#cardNewsBook").empty();

    $("#cardNewsBook").append(`
        <div class="book_img"><img src="${data[0].thumbnail}" alt="${data[0].title}"></div>
        <p class="book_title">${data[0].title}</p>
        <div class="book_info">
            <p class="name">${data[0].title}</p>
            <p class="pub">${data[0].authors} | ${data[0].publisher}</p>
        </div>
    `);
}