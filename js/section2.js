// 오늘의 책
$(function() {
    fetch("https://dapi.kakao.com/v3/search/book?target=title&query=인생&size=4", {
        method: "GET",
        headers: {
            "Authorization": "KakaoAK 945761d34847595bd835ffc829d0509d"
        }
    })
    .then(response => response.json()) // JSON 변환
    .then(data => todayBook(data.documents)) // 데이터 출력
    .catch(error => console.error("에러 발생:", error)); // 에러 처리
});

function todayBook(data) {
    console.log("section2.js - todayBook");
    $("#section2 #todayBookList").empty();

    for(let i in data){
        $("#section2 #todayBookList").append(`
            <div class="tbUnit"> 
                <div class="tbThumb">
                    <a href="#"><img src="${data[i].thumbnail}" alt="${data[i].title}"></a>
                </div>
                <div class="tbCont"> 
                    <div class="tbContImg">
                        <a href="#"><img src="${data[i].thumbnail}" alt="${data[i].title}"></a>
                    </div>
                    <div class="tbContInfo">
                        <p class="tbContInfoTitle">
                            <a href="#">${data[i].title}</a>
                        </p>
                        <p class="tbContInfoCon">
                            <a href="#">${data[i].contents}</a>
                        </p>
                        <p class="tbContInfoName">
                            <a href="#">${data[i].title}</a>
                        </p>
                        <p class="tbContInfoPub">
                            ${data[i].authors} 저 <span>|</span> ${data[i].publisher}
                        </p>
                        <p class="tbContInfoPrice">
                            <span class="price"><strong>${data[i].sale_price}</strong>원(10%할인)</span>
                            <span class="point"><em class="point"></em>750원</span>
                        </p>
                    </div>
                </div>
            </div>
        `);
    }

    $("#section2 #todayBookList .tbUnit").eq(0).addClass("on");
}

// $(function() {
//     $("#section2 #todayBookList .tbThumb > img").mouseover(function() {
//         console.log("onmouse");
//         //$("#section2 #todayBookList .tbUnit").removeClass("on");
//         //$(this).parent().addClass("on");
//     });
// });



// 베스트셀러
$(function() {
    fetch("https://dapi.kakao.com/v3/search/book?target=title&query=자바스크립트&size=10", {
        method: "GET",
        headers: {
            "Authorization": "KakaoAK 945761d34847595bd835ffc829d0509d"
        }
    })
    .then(response => response.json()) // JSON 변환
    .then(data => bestSeller(data.documents)) // 데이터 출력
    .catch(error => console.error("에러 발생:", error)); // 에러 처리
});

function bestSeller(data) {
    console.log("section2.js - bestSeller");
    $("#bestList #group01 ol").empty();
    $("#bestList #group02 ol").empty();

    for(let i = 0; i < 5; i++) {
        $("#bestList #group01 ol").append(`
            <li><a href="#">
                <strong class="icon rnk_${i+1}"></strong>
                <span class="rnk_img">
                    <img src="${data[i].thumbnail}" alt="${data[i].title}" />
                </span>
                <span class="rnk_info">
                    <strong>${data[i].title}</strong>
                    <em>${data[i].authors}</em>
                </span>
            </a></li>
        `);
    }

    for(let i = 0; i < 5; i++) {
        $("#bestList #group02 ol").append(`
            <li><a href="#">
                <strong class="icon rnk_${i+6}"></strong>
                <span class="rnk_img">
                    <img src="${data[i+5].thumbnail}" alt="${data[i+5].title}" />
                </span>
                <span class="rnk_info">
                    <strong>${data[i+5].title}</strong>
                    <em>${data[i+5].authors}</em>
                </span>
            </a></li>
        `);
    }
}


// 순위 바꾸기
// $(function() {

// });