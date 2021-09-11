$(document).ready(function(){
    //메인 베너 자동 회전 슬라이드
   
    setInterval(function(){

        var $first = $(".b_img li").first(); //첫번째 이미지
        console.log($first)//slide_01 // 인덱스번호 0
        $(".b_img ul").stop().animate({"margin-left":"-100%"},2000,function(){
            $(".b_img ul").append($first).css("margin-left","0%")
        });


    },3000)

    //Lastest_Stories article 배열객체로 이미지 나타내기
    //#1.배열 데이터 구성
   
   
    var $lastest_arr = [
        ["animal_news_4.jpg","ANIMALS",`Zoo animals get COVID-19 vaccines across the U.S.`],
        ["animal_news_5.jpg","ANIMALS",`Rattlesnakes trick humans into thinking they’re closer than they are`],
        ["animal_news_6.jpg","ANIMALS",`Meet the incredible ice worm, which lives in glaciers`],
        ["animal_news_7.jpg","ANIMALS",`Why mammal pregnancies are so diverse`],
        ["animal_news_8.jpg","ANIMALS",`Photographing the sleepless effort to save a cheetah`],
        ["animal_news_9.jpg","ANIMALSWILDLIFE WATCH",`Photos show how people are working to protect cheetahs`],
        ["animal_news_10.jpg","ANIMALSWILDLIFE WATCH",`How you can help fight the illegal cheetah cub trade`],
        ["animal_news_11.jpg","ANIMALSWILDLIFE WATCH",`Cheetah cubs poached and sold as pets, Instagram props`],
    ]
   //#2. 패턴 구문 저장하기
   var $cont = `
   <div class="b_box">
        <div class="img_box_js">
            <img src="./img/animals/animal_news_3.jpg" alt="">
        </div>
        <div class="txt_box_js">
            <p>ANIMALS</p>
            <h3>The adorable pika sounds an alarm 
                for global warming</h3>
            <a href="">READ MORE </a>
        </div>
    </div>
   `;
   //#3. 반복문 부모를 선택자로 + append를 활용하여 자식의 구조를 채우기
   for(i=0; i<$lastest_arr.length; i++){
       $(".Lastest_Stories .wrap_box .bottom_box").append($cont);
   }

   //#4. each문을 활용하여 배열요소 껴넣기
   $(".bottom_box .b_box").each(function(index){
       $(this).find("img").attr("src","./img/animals/"+$lastest_arr[index][0]);
       $(this).find("p").text($lastest_arr[index][1]);
       $(this).find("h3").text($lastest_arr[index][2]);

   });


   //Subscriber 이미지
   var $subscriber_arr = [
       ["./img/poster_1.jpg","How viruses shape our world"],
       ["./img/poster_2.jpg","Why are people so dang obsessed with Mars?"],
       ["./img/poster_3.jpg","See how new Mars rover will explore the red planet"],
       ["./img/poster_4.jpg","The era of greyhound racing in the U.S. is coming to an end"],
   ]

   var $cont_sub = `
   <div class="box">
        <div class="dark">
            <h4>magazine</h4>
            <div class="line"></div>
            <h3>How viruses shape 
                our world</h3>
            <button>Read</button>
        </div>
    </div>
   `
   
   for(i=0; i <$subscriber_arr.length; i++){
       $(".Subscriber .cont").append($cont_sub);
   }

   $(".Subscriber .cont .box").each(function(index){
    $(this).css("background-image","url('"+ $subscriber_arr[index][0] +"')")
    $(this).find("h3").text($subscriber_arr[index][1])
   });




});