
 	var wnum=0;  /*슬라이드번호*/
	var wwslidingAuto=null;
	
	/*right , left버튼을 누를때마다 이 함수에  left나  right를 넣어서 호출한다.*/
	function play_w(directw) {	
	
	    		/*오른쪽을 눌렀다면*/
			if(directw=="right"){
				wnum++;
				if(wnum>2){
				    wnum=0;
				}   
				
			/*왼쪽을 눌렀다면*/	
			}else if(directw=="left"){
				wnum--;
				if(wnum<0){
				    wnum=2;
				}    
			}else {
				wnum = directw;
			}
			
			
			
			/*
        			$(선택자).each(function(인덱스, 요소) {    // each(콜백함수)
        			    // 요소별 실행할 코드
        			});
			*/

			/*선택된 나머지  버튼 이미지 모두 on에서  off로 변경*/
			$(".rollingbtn").find('li.seq a').each(function(){
				$(".rollingbtn li.seq a img").attr('src',$(".rollingbtn li.seq a img").attr('src').replace('_on.png','_off.png')); /* btn_rollbutt_on.png -> btn_rollbutt_off.png */
			});
			
			
			/*선택버튼은 on으로 변경  .butt0,  .butt1,  .butt2  버튼 이미지를  off에서 on으로 이미지로 변경*/
			$(".rollingbtn li.butt"+wnum+ " a img").attr('src',$(".rollingbtn li.butt"+wnum+ " a img").attr('src').replace('_off.png','_on.png'));

			
			/*만약 0이라면*/
			if(wnum==0) {
    				$(".viewImgList li.imglist1").animate({'opacity' : 0 },1000);   /*imglist1을 안보이게*/
    				$(".viewImgList li.imglist2").animate({'opacity' : 0 },1000);   /*imglist2를 안보이게*/
    				$(".viewImgList li.imglist0").animate({'opacity' : 1 },1000);   /*imglist0을 보이게*/
				
			}else if (wnum==1){
				$(".viewImgList li.imglist0").animate({'opacity' : 0 },1000);
				$(".viewImgList li.imglist2").animate({'opacity' : 0 },1000);
				$(".viewImgList li.imglist1").animate({'opacity' : 1 },1000);
				
			}else if (wnum==2){
				$(".viewImgList li.imglist0").animate({'opacity' : 0 },1000);
				$(".viewImgList li.imglist1").animate({'opacity' : 0 },1000);
				$(".viewImgList li.imglist2").animate({'opacity' : 1 },1000);
			}

			
			/*만약 예약된 애니메이션이 있다면 중지...  중복예방차원*/
			if(wwslidingAuto){
			    clearTimeout(wwslidingAuto);
			}
			
			/*그리고 6초뒤에 play_w()실행*/
			
			wwslidingAuto=wwslidingAuto = setTimeout(function() {
			    play_w('right');
			}, 5000);
	}
	
	
			
	/*위에 정의해 놓은 함수를  6초마다 호출한다  - 여기서 start시켜준다  그 다음부터는 안쪽에서 자동호출 연속된다 */	
	var wwslidingAuto = setTimeout(function() {
	    play_w('right');
	}, 6000);

	
	
	
	
	
	$(()=>{
	
	    	/*클릭하면*/
		$(".rollstop a").click(function(){
			$(this).parent().hide();                       /*stop을 가리고*/
			$(".rollplay").css('display','inline-block');  /*play를 보이게*/
			if(wwslidingAuto)clearTimeout(wwslidingAuto);  /*애니메이션을 중지*/	
		});
	
		/*클릭하면*/
		$(".rollplay a").click(function(){
			$(this).parent().hide();                       /*play를 가리고*/
			$(".rollstop").css('display','inline-block');  /*stop을 보이게*/
			play_w('right');                               /*play_w함수에 'right'를 넣어서 호출*/
		});
	
		$(".rollingbtn li.seq a").each(function(index){       /*각 이미지에*/
			$(this).click(function(){                     /*클릭이되면*/
				$(".rollplay").hide();                /*자동 play를 숨기고*/
				$(".rollstop").css('display','inline-block');
				if(wwslidingAuto)clearTimeout(wwslidingAuto);  /*만약 애니매이션이 중지되어있다면*/	
				play_w(index);                                 /*실행시켜라*/
			});
		});
	
	});