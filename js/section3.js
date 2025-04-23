// 지금, 이 책
$(function() {
    fetch("https://dapi.kakao.com/v3/search/book?target=title&query=자바&size=12", {
        method: "GET",
        headers: {
            "Authorization": "KakaoAK 945761d34847595bd835ffc829d0509d"
        }
    })
    .then(response => response.json()) // JSON 변환
    .then(data => nowBook(data.documents)) // 데이터 출력
    .catch(error => console.error("에러 발생:", error)); // 에러 처리
});

function nowBook(data) {
    console.log("section3.js - nowBook");
    $("#nowBookCont").empty();

    for(let i = 0; i < 3; i++) {
        $("#nowBookCont").append(`
            <div class="nowBookSet">
                <ul>
                </ul>
            </div>
        `);
        for(let j = 0; j < 4; j++) {
            $("#nowBookCont ul").eq(i).append(`
                <li>
                    <div class="nowBookImg">
                        <a href="#"><img src="${data[i*4+j].thumbnail}" alt="${data[i*4+j].title}"></a>
                    </div>
                    <div class="nowBookInfo">
                        <p class="nowBookCmt">${data[i*4+j].contents}</p>
                        <p class="nowBookName"><a href="#">${data[i*4+j].title}</a></p>
                        <p class="nowBookPub">${data[i*4+j].authors} 저 | ${data[i*4+j].publisher}</p>
                        <p class="nowBookPrice"><span>${data[i*4+j].sale_price}</span>원</p>
                    </div>
                </li>
            `)
        }
    }

    $("#nowBookCont .nowBookSet").eq(0).addClass("on");
}