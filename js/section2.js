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
    console.log(data);
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

$(function() {
    $("#section2 #todayBookList .tbThumb").mouseover(function() {
        $("#section2 #todayBookList .tbUnit").removeClass("on");
    });
});
