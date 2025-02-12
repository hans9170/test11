
var isOver1 = false;
var isOver2 = false;

/* 
	. 숨기기 함수를 정의해 놓는다
	   1) goHide1()   -  .gnb_depth2_1 숨기기
	   2) goHide2()   -  .gnb_depth2_2 숨기기
	   3) goHide3()   -  .gnb_depth2_3 숨기기
	   4) goHide4()   -  .gnb_depth2_4 숨기기
	   5) goHide5()   -  .gnb_depth2_5 숨기기
	   
        . 정의해 놓은 함수를  아래 smoothScroll()에서 animate로 호출해서 실행시킨다.
	
*/
/*.gnb_depth2_1클래스를 찾아서 애니메이션을 stop하고 빠르게 사라지게 한다*/
function goHide1() {
             /* true        true  --- > 둘다 참이어야지 사라진다.*/
	if (!isOver1 && !isOver2) {
		$('.gnb_depth2_1').stop().fadeOut('fast');
	}
}


var isOver11 = false;
var isOver22 = false;

/*이 함수는 특정 조건에 따라 UI 요소를 숨기는 애니메이션을 실행*/
function goHide2() {
	if (!isOver11 && !isOver22)	{                               /*isOver11과 isOver22가 모두 false일 때*/
		$('.gnb_depth2_2').stop().fadeOut('fast');       /*클래스 .gnb_depth2_2이 현재 실행 중인 jQuery 애니메이션이 있다면 이를 중지하고 빠르게(200ms) 숨겨라 */
	}
}


var isOver111 = false;
var isOver222 = false;

function goHide3() {
	if (!isOver111 && !isOver222) {
		$('.gnb_depth2_3').stop().fadeOut('fast');
	}
}


var isOver1111 = false;
var isOver2222 = false;
function goHide4() {
	if (!isOver1111 && !isOver2222) {
		$('.gnb_depth2_4').stop().fadeOut('fast');
	}
}
var isOver11111 = false;
var isOver22222 = false;
function goHide5() {
	if (!isOver11111 && !isOver22222) {
		$('.gnb_depth2_5').stop().fadeOut('fast');
	}
}






$(()=> {


	//gnb_depth2_1	
	$('.openAll1').mouseover(function(){  /*마우스가 올라갔을때*/
		if ( parseInt( $('header').css('width') ) > 800 ) {  
		    $('.gnb_depth2_1').fadeIn('fast');                /*막대바를 나타나게 한다*/
		}    
		isOver1 = true;   /*isOver2는 false*/
	});	
	$('.openAll1').focus(function(){   /*포커스를 받을때*/
		if ( parseInt($('header').css('width')) > 800 ) {
		    $('.gnb_depth2_1').fadeIn('fast');
		}
		isOver1 = true;   /*isOver2는 false*/
	});
	
	$('.openAll1').mouseout(function(){  /*마우스가 벗어났을때*/
		isOver1 = false;   /*isOver1을  false로 설정하고 */
		setTimeout("goHide1()",200); /*사라지게 하는 함수호출하면  사라진다.*/
	});	
	$('.gnb_depth2_1 li:last-child a').blur(function(){  /*포커스를 잃었을때*/
		isOver1 = false;   /*isOver1을  false로 설정하고 */
		setTimeout("goHide1()",200); /*사라지게 하는 함수호출*/
	});	
	
	$('.gnb_depth2_1').mouseover(function(){
		isOver2 = true;      /*isOver1은 false상태	*/		
	});	
	$('.gnb_depth2_1').focus(function(){
		isOver2 = true;			
	});	
	$('.gnb_depth2_1').mouseout(function(){
		isOver2 = false;
		setTimeout("goHide1()",200);
	});	
	$('.gnb_depth2_1').blur(function(){
		isOver2 = false;
		setTimeout("goHide1()",200);
	});	
	
	
	//gnb_depth2_2	
	$('.openAll2').mouseover(function(){
		if ( parseInt($('header').css('width')) > 800 ) $('.gnb_depth2_2').fadeIn('fast');
		isOver11 = true;
	});
	$('.openAll2').focus(function(){
		if ( parseInt($('header').css('width')) > 800 ) $('.gnb_depth2_2').fadeIn('fast');
		isOver11 = true;
	});
	$('.openAll2').mouseout(function(){
		isOver11 = false;
		setTimeout("goHide2()",200);
	});	
	$('.gnb_depth2_2 li:last-child a').blur(function(){
		isOver11 = false;
		setTimeout("goHide2()",200);
	});	
	$('.gnb_depth2_2').mouseover(function(){
		isOver22 = true;			
	});	
	$('.gnb_depth2_2').focus(function(){
		isOver22 = true;			
	});	
	$('.gnb_depth2_2').mouseout(function(){
		isOver22 = false;
		setTimeout("goHide2()",200);
	});	
	$('.gnb_depth2_2').blur(function(){
		isOver22 = false;
		setTimeout("goHide2()",200);
	});
	
	//gnb_depth2_3	
	$('.openAll3').mouseover(function(){
		if ( parseInt($('header').css('width')) > 800 ) $('.gnb_depth2_3').fadeIn('fast');
		isOver111 = true;
	});
	$('.openAll3').focus(function(){
		if ( parseInt($('header').css('width')) > 800 ) $('.gnb_depth2_3').fadeIn('fast');
		isOver111 = true;
	});
	$('.openAll3').mouseout(function(){
		isOver111 = false;
		setTimeout("goHide3()",200);
	});	
	$('.gnb_depth2_3 li:last-child a').blur(function(){
		isOver111 = false;
		setTimeout("goHide3()",200);
	});	
	$('.gnb_depth2_3').mouseover(function(){
		isOver222 = true;			
	});	
	$('.gnb_depth2_3').focus(function(){
		isOver222 = true;			
	});	
	$('.gnb_depth2_3').mouseout(function(){
		isOver222 = false;
		setTimeout("goHide3()",200);
	});	
	$('.gnb_depth2_3').blur(function(){
		isOver222 = false;
		setTimeout("goHide3()",200);
	});	
	
	//gnb_depth2_4	
	$('.openAll4').mouseover(function(){
		if ( parseInt($('header').css('width')) > 800 ) $('.gnb_depth2_4').fadeIn('fast');
		isOver1111 = true;
	});
	$('.openAll4').focus(function(){
		if ( parseInt($('header').css('width')) > 800 ) $('.gnb_depth2_4').fadeIn('fast');
		isOver1111 = true;
	});
	$('.openAll4').mouseout(function(){
		isOver1111 = false;
		setTimeout("goHide4()",200);
	});	
	$('.gnb_depth2_4 li:last-child a').blur(function(){
		isOver1111 = false;
		setTimeout("goHide4()",200);
	});	
	$('.gnb_depth2_4').mouseover(function(){
		isOver2222 = true;			
	});	
	$('.gnb_depth2_4').focus(function(){
		isOver2222 = true;			
	});	
	$('.gnb_depth2_4').mouseout(function(){
		isOver2222 = false;
		setTimeout("goHide4()",200);
	});	
	$('.gnb_depth2_4').blur(function(){
		isOver2222 = false;
		setTimeout("goHide4()",200);
	});	

	
	
	
});

