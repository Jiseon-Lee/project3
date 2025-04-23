// 크레마샵
$(function() {
    fetch("https://dapi.kakao.com/v3/search/book?target=title&query=파이썬&size=12", {
        method: "GET",
        headers: {
            "Authorization": "KakaoAK 945761d34847595bd835ffc829d0509d"
        }
    })
    .then(response => response.json()) // JSON 변환
    .then(data => cremaShop(data.documents)) // 데이터 출력
    .catch(error => console.error("에러 발생:", error)); // 에러 처리
});

function cremaShop(data) {
    console.log("section4.js - cremaShop");
    $("#cremaShopCont").empty();

    for(let i = 0; i < 3; i++) {
        $("#cremaShopCont").append(`
            <div class="cremaShopSet">
                <ul>
                </ul>
            </div>
        `);
        for(let j = 0; j < 4; j++) {
            $("#cremaShopCont ul").eq(i).append(`
                <li>
                    <div class="cremaShopImg">
                        <a href="#"><img src="${data[i*4+j].thumbnail}" alt="${data[i*4+j].title}"></a>
                    </div>
                    <div class="cremaShopInfo">
                        <p class="cremaShopName"><a href="#">${data[i*4+j].title}</a></p>
                        <p class="cremaShopPub">${data[i*4+j].authors} 저 | ${data[i*4+j].publisher}</p>
                        <p class="cremaShopPrice"><span>${data[i*4+j].sale_price}</span>원</p>
                    </div>
                </li>
            `)
        }
    }

    $("#cremaShopCont .cremaShopSet").eq(0).addClass("on");
}