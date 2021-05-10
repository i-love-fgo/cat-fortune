const { formDisableSelector } = require("@rails/ujs");

function result2 (){
  const commit = document.getElementById("result2");
  commit.addEventListener("click", (e) => {
    e.preventDefault();
    const type_id = document.getElementById("type");
    var num1 = "";
      if (type_id.value == 2) {
        num1 = 4;
      } else if (type_id.value == 3) {
        num1 = 3;
      } else if (type_id.value == 4) {
        num1 = 2;
      } else if (type_id.value == 5) {
        num1 =1;
      }
    const total_num = num1;
    if (total_num == 4) {
      document.getElementById("text").innerHTML = `
        <div class="h1">&#127882; 占い結果 &#127882;</div><br>
        <div class="content">
         <p>A型のあなたは、几帳面な性格のため仕事もきめ細やかにこなしミスが少なく、<br>
         プライベートも計画性をもって過ごされることでしょう。</p><br>
         <p>繊細な心の持ち主でもあり、初対面の人に対して懐疑心を抱くこともあるでしょう。</p><br>
         <p>しかし、あなたという人を知れば知るほど、味のある人間味が伝わるようになり、<br>
         『第一印象と違う』なんて言われることもあるかもしれません。</p><br>
         <p>また、常識を大切にしたい性格のため、常に周囲の反応を気にしてしまったり、<br>
         『自分の意見より他人の意見を尊重したい』という気遣いも持たれています。</p><br>
         <p>そういった点で、臨機応変な対応ができ、冷静で理論的な決断を下すことが<br>
         できるでしょう！</p><br>
        </div><br>
        <div class="sub-content"><br>
         <p>そんなあなたと相性のいいにゃんこは、『メインクーン』です！</p><br>
         <p>成長すると、体調が1メートルを超える程大きな体格の持ち主ですが、<br>
         性格は穏やかで優しく、とても賢い猫でもあるので、あなたとの相性バッチリです！</p><br>
         <p>信頼関係を築くことができれば、きっとあなたの良きパートナーとなるでしょう！<p></br>
        </div><br>
        <div class="picture4 animation-target">
         <div></div>
        </div>
        <div class="again">
         <a href="/dailies" class="again-btn">もう一度占う</a>
       </div>
       <div class="save">
           <a href="" class="save-btn">結果を保存する</a>
       </div>
       <div class="top">
         <a href="/fortunes" class="top-btn">トップへ戻る</a>
       </div>`;
      document.getElementById("questions").textContent = '';
    } else if (total_num == 3) {
      document.getElementById("text").innerHTML = `
        <div class="h1">&#127882; 占い結果 &#127882;</div><br>
        <div class="content">
         <p>B型のあなたは、好奇心が強く新しいことに対して積極的に挑戦していきます。</p><br>
         <p>自分の意見をしっかり持っていて、誰も想像しない奇抜な視点を持っているアイディアマンです。</p><br>
         <p>また、驚異的な集中力を発揮する習性も持ち合わせており、好きなこと・夢中になる趣味などを見つけると、<br>
         自分の世界に入り込んでしまい周りが見えなくなることもあります。</p><br>
         <p>更に自分の感情に正直なため、感情の浮き沈みが激しいところがあります。</p><br>
         <p>一見すると気分屋に見えてしまいがちですが、自分の気持ちに嘘がつけないだけなので、<br>
         不思議と周りから憎まれない人物です。</p><br>
        </div><br>
        <div class="sub-content"><br>
         <p>そんなあなたと相性のいいにゃんこは、『バーミーズ』です！</p><br>
         <p>バーミーズは、とても大らかで穏やかな性格をしています。</p><br>
         <p>また思いやりの心が強く、飼い主が悲しんでいるとそれを察することができると言われており、</br>
         『慈悲深い猫』とも言われています。</p><p>更に頭もよく、先住猫がいたとしてもその環境に適応するのが<br>
         比較的早いとされています。</p>バーミーズはおしゃべりが好きで、飼い主さんの顔を覗き込むように話を聞いて<br>
         くれますよ！</p><p>何事に対しても興味津々な、あなたとの相性抜群です！</p>
        </div><br>
        <div class="picture5 animation-target">
         <div></div>
        </div>
        <div class="again">
         <a href="/dailies" class="again-btn">もう一度占う</a>
       </div>
       <div class="save">
           <a href="" class="save-btn">結果を保存する</a>
       </div>
       <div class="top">
         <a href="/fortunes" class="top-btn">トップへ戻る</a>
       </div>`;
      document.getElementById("questions").textContent = '';
    } else if (total_num == 2) {
      document.getElementById("text").innerHTML = `
        <div class="h1">&#127882; 占い結果 &#127882;</div><br>
        <div class="content">
         <p>O型のあなたは、大らかで細かいことを気にしない器が広い性格の持ち主です。</p><br>
         <p>フレンドリーで初対面の人に対しても、気兼ねなく話せる話せる特徴もあります。</p><br>
         <p>そういった性質のため、あなたの周囲にはいつも人がいて楽しそうな雰囲気に見えることから、<br>
         自然と人が集まってきて交友関係が広がっていくでしょう。</p><br>
         <p>また、細部をあまり気にしないことから、物事をシンプルに捉えることができ、問題の本質がどこにあるかを<br>
         追求することができ、素早い決断をすることができます。</p><br><p>そういった点から、カリスマ性があると言われます。</p><br>
         <p>ただ、周りの期待に応えたいと思うあまりに、お人好しが発揮されてしまい頼み事を断れないという点もみられます。</p><br>
        </div><br>
        <div class="sub-content"><br>
         <p>そんなあなたと相性のいいにゃんこは、『アメリカン・ショートヘア』です！</p><br>
         <p>アメリカンショートヘアは、あまり人見知りをせず人懐っこい性格をしています。</p><br>
         <p>穏やかな性格をしており、弱い者に優しいので他の動物と仲良くできたり、赤ちゃんがいらっしゃる<br>
         家庭においても安心して飼育することができます。</p><br>
         <p>また活発で運動が大好きです。運動不足になると、ストレスが溜まったり太りやすくなってしまいます。</p><br>
         <p>猫とたくさん遊んであげることで、絆も築き上げることができます！ただ、抱っこは嫌いなので触れ合いたい時は<br>
         地面に座って膝の上で撫でてあげてください！</p>
        </div><br>
        <div class="picture6 animation-target">
         <div></div>
        </div>
        <div class="again">
         <a href="/dailies" class="again-btn">もう一度占う</a>
       </div>
       <div class="save">
           <a href="" class="save-btn">結果を保存する</a>
       </div>
       <div class="top">
         <a href="/fortunes" class="top-btn">トップへ戻る</a>
       </div>`;
      document.getElementById("questions").textContent = '';
    } else if (total_num == 1) {
      document.getElementById("text").innerHTML = `
        <div class="h1">&#127882; 占い結果 &#127882;</div><br>
        <div class="content">
         <p>AB型のあなたは、感受性が感受性が高く想像力が豊かな人物です。</p><br>
         <p>実は芸能人の女優や俳優さんは、AB型の方が大勢いらっしゃるので天職は役者かも？</p><br>
         <p>また、警戒心が強いのでなかなか本心を見せないというミステリアスな一面もあります。</p><br>
         <p>切れ物も多く、全体像を全体像を把握してから効率よく作業を進めることが大好きです。</p><br>
         <p>感性を信じて行動するのも、AB型の特徴としてあげられます。他人軸で物事を考えず、<br>
         「自分はどうしたいか」を大切にしています。</p><p>そんなAB型ですが、口下手で引っ込み思案に<br>
         見られがちです。これは、人よりも多く考えてしまうためで、きちんと考えがまとまるまで発言を控えて<br>
         いるので、思慮深い人だといえます。</p><br>
        </div><br>
        <div class="sub-content"><br>
         <p>そんなあなたと相性のいいにゃんこは、『マンチカン』です！</p><br>
         <p>マンチカンは、短い足が特徴の猫ちゃんで、歩いている姿を見るだけで癒されます！</p><br>
         <p>マンチカンの性格は、社交的で人や他の動物とも仲良くすることができます。また、お留守番も<br>
         上手にできると言われており、外出が多い方でも安心して飼うことができます。</p><br>
         <p>更に好奇心旺盛で遊ぶことが大好きで、特に飼い主さんと遊ぶのが大好きな性格です！</p><br>
         <p>無邪気に甘えてこられたら、心を開かざるを得ないですよね？</p>
         </div><br>
         <div class="picture7 animation-target">
           <div></div>
         </div>
         <div class="again">
         <a href="/dailies" class="again-btn">もう一度占う</a>
       </div>
       <div class="save">
           <a href="" class="save-btn">結果を保存する</a>
       </div>
       <div class="top">
         <a href="/fortunes" class="top-btn">トップへ戻る</a>
       </div>`;
        document.getElementById("questions").textContent = '';
    };
  });
}

window.addEventListener('load', result2);