// 예스24 유튜브
$(function() {
    fetch("https://dapi.kakao.com/v3/search/book?target=isbn&query=9791130655765&size=1", {
        method: "GET",
        headers: {
            "Authorization": "KakaoAK 945761d34847595bd835ffc829d0509d"
        }
    })
    .then(response => response.json()) // JSON 변환
    .then(data => {yTv1(data.documents)}) // 데이터 출력
    .catch(error => console.error("에러 발생:", error)); // 에러 처리

    fetch("https://dapi.kakao.com/v3/search/book?target=isbn&query=	9788937456275&size=1", {
        method: "GET",
        headers: {
            "Authorization": "KakaoAK 945761d34847595bd835ffc829d0509d"
        }
    })
    .then(response => response.json()) // JSON 변환
    .then(data => {yTv2(data.documents)}) // 데이터 출력
    .catch(error => console.error("에러 발생:", error)); // 에러 처리

    fetch("https://dapi.kakao.com/v3/search/book?target=isbn&query=9788932911618&size=1", {
        method: "GET",
        headers: {
            "Authorization": "KakaoAK 945761d34847595bd835ffc829d0509d"
        }
    })
    .then(response => response.json()) // JSON 변환
    .then(data => {yTv3(data.documents)}) // 데이터 출력
    .catch(error => console.error("에러 발생:", error)); // 에러 처리
});

function yTv1(data) {
    console.log("section7.js - yTv1");

    $("#section7 .TvSub").append(`
        <div class="TvSubGrp on">
            <a href="#" class="imgbox">
                <img src="${data[0].thumbnail}" alt="${data[0].title}" />
            </a>
            <div class="TvSubExp">
                <p class="subCmt">${data[0].contents}</p>
                <p class="subTit">
                    <a href="#">${data[0].title}</a>
                </p>
                <p class="subPub">
                    <span class="auth">${data[0].authors} 저/${data[0].translators[0]} 역</span>
                    <span class="pub">${data[0].publisher}</span>
                </p>
            </div>
        </div>
    `);
}

function yTv2(data) {
    console.log("section7.js - yTv1");

    $("#section7 .TvSub").append(`
        <div class="TvSubGrp">
            <a href="#" class="imgbox">
                <img src="${data[0].thumbnail}" alt="${data[0].title}" />
            </a>
            <div class="TvSubExp">
                <p class="subCmt">${data[0].contents}</p>
                <p class="subTit">
                    <a href="#">${data[0].title}</a>
                </p>
                <p class="subPub">
                    <span class="auth">${data[0].authors} 저/${data[0].translators[0]} 역</span>
                    <span class="pub">${data[0].publisher}</span>
                </p>
            </div>
        </div>
    `);
}

function yTv3(data) {
    console.log("section7.js - yTv1");

    $("#section7 .TvSub").append(`
        <div class="TvSubGrp">
            <a href="#" class="imgbox">
                <img src="${data[0].thumbnail}" alt="${data[0].title}" />
            </a>
            <div class="TvSubExp">
                <p class="subCmt">${data[0].contents}</p>
                <p class="subTit">
                    <a href="#">${data[0].title}</a>
                </p>
                <p class="subPub">
                    <span class="auth">${data[0].authors} 저/${data[0].translators[0]} 역</span>
                    <span class="pub">${data[0].publisher}</span>
                </p>
            </div>
        </div>
    `);
}