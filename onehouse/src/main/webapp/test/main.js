var container = document.getElementById('map');
kakao.maps.load(function() {
    var options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 5
    };
    
    var map = new kakao.maps.Map(container, options);
    
    // 주소-좌표 변환 객체를 생성합니다
    var geocoder = new kakao.maps.services.Geocoder();

    let location = [
        {
            name: "여의도 스테이",
            location: "서울 영등포구 여의대방로62길 4"
        },
        {
            name: "스테이엔영등포점",
            location: "서울 영등포구 영등포로84길 21"
        },
        {
            name: "구디생활",
            location: "서울 영등포구 시흥대로 629"
        },
        {
            name: "아지레지던스 원룸텔",
            location: "서울 영등포구 영중로4길 8"
        },
        {
            name: "새롬하우스",
            location: "서울 영등포구 영등포로72길 3"
        },
        {
            name: "해피하우스",
            location: "서울 영등포구 도신로64길 16"
        },
        {
            name: "메가스테이",
            location: "서울 영등포구 영신로40길 15"
        }
    ]
        // 마커를 클릭하면 장소명을 표출할 인포윈도우 입니다
        var infowindow = new kakao.maps.InfoWindow({zIndex:1});
    
        // 장소 검색 객체를 생성합니다
        var ps = new kakao.maps.services.Places(); 

        // 키워드로 장소를 검색합니다
        ps.keywordSearch('영등포 고시원', placesSearchCB); 

        // 키워드 검색 완료 시 호출되는 콜백함수 입니다
        function placesSearchCB (data, status, pagination) {
            if (status === kakao.maps.services.Status.OK) {

                // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
                // LatLngBounds 객체에 좌표를 추가합니다
                var bounds = new kakao.maps.LatLngBounds();

                for (var i=0; i<data.length; i++) {
                    displayMarker(data[i]);    
                    bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
                }       

                // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
                map.setBounds(bounds);
            } 
        }

        // 지도에 마커를 표시하는 함수입니다
        function displayMarker(place) {
            
            // 마커를 생성하고 지도에 표시합니다
            var marker = new kakao.maps.Marker({
                map: map,
                position: new kakao.maps.LatLng(place.y, place.x) 
            });

            // 마커에 클릭이벤트를 등록합니다
            kakao.maps.event.addListener(marker, 'click', function() {
                // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
                infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
                infowindow.open(map, marker);
            });
        }


    // for(let local of location) {
    //     console.log("for문 시작: " ,local);
        
    //     // 주소로 좌표를 검색합니다
    //     geocoder.addressSearch(local.location, function(result, status) {
    //         console.log("함수 내부: ", local.location);
            
    //         // 정상적으로 검색이 완료됐으면 
    //         if (status === kakao.maps.services.Status.OK) {
                
    //             var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        
    //             // 결과값으로 받은 위치를 마커로 표시합니다
    //             var marker = new kakao.maps.Marker({
    //                 map: map,
    //                 position: coords,
    //                 clickalbe: true
    //             });
        
    //             // 인포윈도우로 장소에 대한 설명을 표시합니다
    //             var infowindow = new kakao.maps.InfoWindow({
    //                 content: '<div style="width:150px;text-align:center;padding:6px 0;">' + local.name + '</div>'
    //             });
                
    //             // 마커에 마우스를 올리는 이벤트 등록
    //             kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
    //             // 마커에 클릭 이벤트 등록
    //             kakao.maps.event.addListener(marker, 'click', function() {
    //                 // 실행함수
    //             });
    //             // 마커에 마우스 떼는 이벤트 등록
    //             kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));

    //             // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
    //             // map.setCenter(coords);
    //         } 
    //         else {
    //             console.log("ERROR");
    //             console.log("Location not Found", local.name);
    //         }
    //     });  
    // }

    // geocoder.addressSearch("서울특별시 영등포구 경인로 지하843 (영등포동3가)", function(result, status) {
    //     if(status == kakao.maps.services.Status.OK) {

    //         let coords = new kakao.maps.LatLng(result[0].y, result[0].x);

    //         map.setCenter(coords);
    //     }
    // })
})

// 인포윈도우를 표시하는 클로저를 만드는 함수입니다 
function makeOverListener(map, marker, infowindow) {
    return function() {
        infowindow.open(map, marker);
    };
}

// 인포윈도우를 닫는 클로저를 만드는 함수입니다 
function makeOutListener(infowindow) {
    return function() {
        infowindow.close();
    };
}