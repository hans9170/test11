document.addEventListener("DOMContentLoaded", function () {
    const regionSelect = document.getElementById("region-select");
    const districtSelect = document.getElementById("district-select");
    const searchBox = document.getElementById("search-box");
    const searchBtn = document.getElementById("search-btn");
    const cardContainer = document.getElementById("card-container");

    // 대한민국 광역시 및 구 목록
    const districts = {
        "서울": ["강남구", "강동구", "강북구", "강서구", "관악구", "광진구", "구로구", "금천구", "노원구", "도봉구", "동대문구", "동작구", "마포구", "서대문구", "서초구", "성동구", "성북구", "송파구", "양천구", "영등포구", "용산구", "은평구", "종로구", "중구", "중랑구"],
        "부산": ["강서구", "금정구", "기장군", "남구", "동구", "동래구", "부산진구", "북구", "사상구", "사하구", "서구", "수영구", "연제구", "영도구", "중구", "해운대구"],
        "대구": ["남구", "달서구", "달성군", "동구", "북구", "서구", "수성구", "중구"],
        "인천": ["강화군", "계양구", "남동구", "동구", "미추홀구", "부평구", "서구", "연수구", "옹진군", "중구"],
        "광주": ["광산구", "남구", "동구", "북구", "서구"],
        "대전": ["대덕구", "동구", "서구", "유성구", "중구"],
        "울산": ["남구", "동구", "북구", "울주군", "중구"],
        "세종": ["세종특별자치시"],
        "경기도": ["가평군", "고양시", "과천시", "광명시", "광주시", "구리시", "군포시", "김포시", "남양주시", "동두천시", "부천시", "성남시", "수원시", "시흥시", "안산시", "안성시", "안양시", "양주시", "양평군", "여주시", "연천군", "오산시", "용인시", "의왕시", "의정부시", "이천시", "파주시", "평택시", "포천시", "하남시", "화성시"]
    };

    regionSelect.addEventListener("change", function () {
        districtSelect.innerHTML = "<option value=''>시/군/구 선택</option>";
        const selectedRegion = regionSelect.value;
        if (districts[selectedRegion]) {
            districts[selectedRegion].forEach(district => {
                const option = document.createElement("option");
                option.value = district;
                option.textContent = district;
                districtSelect.appendChild(option);
            });
        }
    });

    searchBtn.addEventListener("click", function () {
        const query = searchBox.value.trim();
        if (query) {
            alert("검색 기능은 아직 구현되지 않았습니다: " + query);
        }
    });

    document.querySelectorAll(".heart").forEach((heart) => {
        heart.addEventListener("click", function () {
            if (this.src.includes("heart.svg")) {
                this.src = "../icon/heart_fill.svg"; // 찜하기 상태
            } else {
                this.src = "../icon/heart.svg"; // 다시 원래 상태로
            }
        });
    });
    
    const swiper = new Swiper('.swiper', {
	    
	    direction: 'horizontal', // 가로 방향 (기본값)
	    loop: true, // 무한 반복
	    
	    navigation: { // 네비게이션 버튼 활성화
	        nextEl: '.swiper-button-next',
	        prevEl: '.swiper-button-prev', 
	    },
	    pagination: { // 페이지네이션 활성화
	        el: '.swiper-pagination',
	        clickable: true,
	    },
	    autoplay: { // 자동 재생
	        delay: 10000,
	        disableOnInteraction: false,  // 사용자가 슬라이드를 터치하거나 마우스로 조작한 후에도 자동 재생(autoplay)이 계속 유지될지 여부
	        reverseDirection: true,       // 자동 재생도 반대 방향으로 설정
	    },
	    slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
	    spaceBetween: 10 // 슬라이드 사이 간격 */
	});
    
    
});
