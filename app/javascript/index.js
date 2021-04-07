const { formDisableSelector } = require("@rails/ujs");

function result (){
  const commit = document.getElementById("result");
  commit.addEventListener("click", (e) => {
    e.preventDefault();
    const year_id = document.getElementById("year");
    var num1 = "";
      if (year_id.value <= 18) {
      num1 = 4;
      } else if (year_id.value <= 28) {
        num1 = 3;
      } else if (year_id.value <= 38) {
        num1 = 2;
      } else if (year_id.value <= 48) {
        num1 = 1;
      } 
    const month_id = document.getElementById("month");
    var num2 = "";
    if (month_id.value <= 4) {
      num2 = 4;
    } else if (month_id.value <= 7) {
      num2 = 3;
    } else if (month_id.value <= 10) {
      num2 = 2;
    } else if (month_id.value <= 13) {
      num2 = 1;
    } 
    const sleep = document.getElementById("sleeping");
    var num3 = "";
    if (document.getElementById("sleeping1").checked) {
      num3 = 3;
    } else if (document.getElementById("sleeping2").checked) {
      num3 = 2;
    } else if (document.getElementById("sleeping3").checked) {
      num3 =1;
    }
    const eat = document.getElementById("eating");
    var num4 = "";
    if (document.getElementById("eating1").checked) {
      num4 = 3;
    }  else if (document.getElementById("eating2").checked) {
      num4 = 2;
    } else if (document.getElementById("eating3").checked) {
      num4 = 1;
    }
    const condition = document.getElementById("condition");
    var num5 = "";
    if (document.getElementById("condition1").checked) {
      num5 = 3;
    } else if (document.getElementById("condition2").checked) {
      num5 = 2;
    } else if (document.getElementById("condition3").checked) {
      num5 = 1;
    }
    const total_num = num1 + num2 + num3 + num4 + num5; 
    if (total_num <= 8) {
      document.getElementById("text").innerHTML = `
       <div class="h1">&#127882; 占い結果 &#127882;</div><br>
       <div class="content">
         <p>今日のあなたは、疲れが溜まった『疲労困憊ちゃん』です！</p><br><p>頑張るあなたも素敵ですが、しっかり休息をとらないとダウンしちゃうかも・・・</p><br>
         <p>ご家庭で猫ちゃんを飼われている方は、猫ちゃんが嫌がらない程度に甘えてみてはいかがでしょうか？</p><br><p>また、猫ちゃんを飼われていない方は、猫カフェなどに行かれてみるのはいかがでしょうか？</p><br>
         <p>モフモフにゃんこ達が、頑張るあなたをまったり癒してくれますよ♪</p>
       </div><br>
       <div class="sub-content"><br>
         <p>そんなあなたのラッキーにゃんこは、『スコティッシュフォールド』です！</p><br><p>甘えん坊で人懐っこく、近寄るとお腹を見せて転がりアピールしてくることもあるそうです。</p><br>
         <p>とても寂しがり屋さんなので、甘えてきたらとことん甘やかしてあげましょう！</p>
       </div><br>
       <p><img src="suko2.jpg" width="400" height="300" align="bottom" class="photo"></a></p>`;
      //var photos = document.getElementById("cat-photo");
       //photos.innerHTML = ``;
      var question = document.getElementById("questions");
      question.style.visibility = "hidden";
    } else if (total_num => 9 && total_num <= 14) {
        document.getElementById("text").innerHTML =`
          <div class="h2">&#127882; 占い結果 &#127882;</div><br>
          <div class="content">
           <p>今日のあなたは、とても穏やかな気持ちで1日を過ごせそうです！</p><br><p>冷静な判断力も備わっているので、大きな決断をする場面においても、適切な判断をすることができるでしょう！</p><br>
           <p>気分転換に遠出をすると、運命の出会いがあるかもしれません。</p><br>
           <p>猫ちゃん達と触れ合い、癒しと刺激をもらいながら、あなたの魅力をもっと高めてくださいね！</p>
          </div><br>
         <div class="sub-content"><br>
           <p>そんなあなたのラッキーにゃんこは、『メインクーン』です！</p><br><p>『穏やかな巨人』と称される程、大きな体に似合わず優しく穏やかな性格をしています。</p><br>
           <p>学習能力も高い上に、環境適応能力・協調性も優れており、小さな子供や他の動物とも仲良くなれる特徴を持っています！</p><br>
           <p>一般のペットショップや猫カフェにいることはごく稀ですが、今日のあなたなら出会えるチャンスがあるかもしれません！</p>
         </div><br>`;
        var question = document.getElementById("questions");
        question.style.visibility = "hidden";
        // var img_element = document.getElementById("photo");
        //  img_element.src = 'assets/images/meinkun2.jpg';
        //  img_element.alt = 'メインクーン';
        //  img_element.width = 400;
        //  img_element.height = 300;
         var img = document.getElementById("photo");
         img.insertAdjacentHTML("beforeBegin", img_element);
        (img_element).attr({
          src: "<%= asset_path('meikun2.jpg') %>"
         });
    } else if (total_num => 15) {
      document.getElementById("text").innerHTML = `
        <div class="h2">&#127882; 占い結果 &#127882;</div><br>
        <div class="content">
          <p>今日のあなたは、エネルギーに満ち溢れています！</p><br><p>キラキラと輝いていて、いつものあなた以上に素敵です♪</p><br>
          <p>またあなたの周囲の人達も、あなたのエネルギーを貰って、力がみなぎりそう！</p><br>
          <p>たまには猫ちゃん達と触れ合って、いつまでも素敵なあなたでいて下さいね♪</p>
        </div><br>
        <div class="sub-content"><br>
          <p>そんなあなたのラッキーにゃんこは、『エキゾチックショートヘア』です！</p><br><p>愛嬌のある可愛らしい顔が特徴の猫ちゃんで、ペルシャ譲りの穏やかな性格をしています。</p><br>
          <p>また、人懐っこい性格でもあり、人と遊ぶことが大好きです。</p><br><p>是非、スキンシップを兼ねて遊んであげてください！</p>
        </div><br>
        <p class="photo"><img src="/assets/images/ekizo2.jpg" width="400" height="300" align="bottom"></p>;`
      //var photos = document.getElementById("cat-photo");
       //photos.innerHTML = ``; 
      var question = document.getElementById("questions");
      question.style.visibility = "hidden";
    };
    // XHR.onload = () => {
    //   const html = 
    // }
  });
}

window.addEventListener('load', result);


