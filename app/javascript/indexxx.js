const { formDisableSelector } = require("@rails/ujs");

function result3 (){
  const commit = document.getElementById("result3");
  commit.addEventListener("click", (e) => {
    e.preventDefault();
    const sign_id = document.getElementById("sign");
    var num1 = "";
      if (sign_id.value == 2) {
        num1 = 1;
      } else if (sign_id.value == 3) {
        num1 = 2;
      } else if (sign_id.value == 4) {
        num1 = 3;
      } else if (sign_id.value == 5) {
        num1 = 4;
      } else if (sign_id.value == 6) {
        num1 = 5;
      } else if (sign_id.value == 7) {
        num1 = 6;
      } else if (sign_id.value == 8) {
        num1 = 7;
      } else if (sign_id.value == 9) {
        num1 = 8;
      } else if (sign_id.value == 10) {
        num1 = 9;
      } else if (sign_id.value == 11) {
        num1 = 10;
      } else if (sign_id.value == 12) {
        num1 = 11;
      } else if (sign_id.value == 13) {
        num1 = 12;
      }
      const total_num = num1;
      if (total_num == 1) {
        document.getElementById("text").innerHTML = `
         <div class="h1">&#127882; 占い結果 &#127882;</div><br>
         <div class="content">
           <p>山羊座のあなたは、忍耐強く一度決めたことを変えるのが苦手です。こだわりが強く、個性を大切にしています。</p><br>
           <p>人の力を借りるのが苦手で、何でも一人でやろうとします。必要以上に気を遣ってしまう性格で、思ったことを伝えるのも苦手なので<br>
           人と協力して物事を進めるより、一人でやったほうが楽という考えを持っています。また、シャイで大人しい性格で自分をよく見せることが<br>
           苦手です。何事にも慎重で用心深く、危険なことを好みません。</p><br>
           <p>とても優しい性格で、自分よりも人のためという思いがあり、相手の要求に応えようと努力できる人です。</p>
         </div><br>
         <div class="sub-content"><br>
           <p>そんなあなたと相性のいいにゃんこは、『ブリティッシュ・ショートヘア』です！毛色は独特の「ブリティッシュブルー」と呼ばれる<br>
           綺麗な毛色を持っています。</p><br>
           <p>そんなブリティッシュショートヘアは、知的で学習能力の高い性格をしています。物静かでとても穏やかな性格をしており、賢い上に<br>
           自立心も高く、無駄に鳴くことはありません。</p><br>
           <p>その一方で、ハンター気質なのでおもちゃで遊ぶことが大好きです。狩の真似をして遊んで、遊んだ後に飼い主さんに褒められることが<br>
           大好きな猫ちゃんです！あなたとはまたタイプが違って、新しい刺激になること間違いなしです！</p>
         </div><br>`;
        var question = document.getElementById("questions");
        question.style.visibility = "hidden";
      } else if (total_num == 2) {
        document.getElementById("text").innerHTML = `
         <div class="h1">&#127882; 占い結果 &#127882;</div><br>
         <div class="content">
           <p>水瓶座のあなたは、とにかくマイペースです！自由を求め、束縛されたり誰かに命令されることを嫌う傾向にあります。</p><br>
           <p>社交的で話をするのが大好きです。媚を売るタイプではなく、マイペースに会話を楽しみます。他人にあまり興味がなく、<br>
           人と比べたり干渉干渉したりすることはありません。</p><p>また、相手を恨んだり陰湿な行動を陰湿な行動を取ることはなく、<br>
           感情的になることも滅多にない人です。</p><p>世間的に「良い」と言われている物も、自分が気に入らなければ興味を示さず、<br>
           自分の考えをしっかり持っている人です。</p>
         </div><br>
         <div class="sub-content"><br>
           <p>そんなあなたと相性のいいにゃんこは、『アビシニアン』です！現在いる家猫の中で、最も古いとされている猫種です。</p><br>
           <p>見た目も美しく、独特な被毛としなやかな身体をしており、かのクレオパトラに愛された猫と言われています。</p><br>
           <p>アビシニアンの顔は、V字型で耳が大きめです。目も大きく、アーモンドのような形をしています。はっきりしたアイラインと、<br>
           クレオパトララインと呼ばれる、更に外側のラインがオリエンタルな雰囲気を醸し出し、高貴な印象を与えます。</p><br>
           <p>そんな神秘的なアビシニアンですが、人懐っこく大らかな性格をしています。名前を呼んだら走り寄ってきたり、鳴きながら<br>
           すり寄ってきたりと分かりやすい愛情表現をします。一方で、そのしなやかな体は筋肉質であり、体力もあることからかなり活発に<br>
           動き回る、遊び好きな性格をしています。ストレスのない程度に遊び、猫にしては寂しがり屋なので、しっかりかまってあげてください！</p>
         </div><br>`;
        var question = document.getElementById("questions");
        question.style.visibility = "hidden";
      } else if (total_num == 3) {
        document.getElementById("text").innerHTML = `
         <div class="h1">&#127882; 占い結果 &#127882;</div><br>
         <div class="content">
           <p>魚座のあなたは、変化に適応しやすく集団の中でも調和を保つことができる「空気を読める人」です。また攻撃的な所は少なく、<br>
           対立や衝突を嫌う傾向にあります。</p><p>そして感性が鋭く理屈よりも感覚で行動する人です。しかしその分、精神状態が体調に<br>
           変化を及ぼしやすいことも特徴の一つです。精神的に疲れやすい所があり、対立を嫌って自分の意見を言えずにストレスを抱えている、<br>
           という可能性もあります。自分なりのストレス発散できる場を確保しておきましょう！</p>
         </div><br>
         <div class="sub-content"><br>
           <p>そんなあなたと相性のいいにゃんこは、『シャム猫』です！
         </div>`;
      } else if (total_num == 4) {
        document.getElementById("text").innerHTML = `
         <div class="h1">&#127882; 占い結果 &#127882;</div><br>
         <div class="content">
           <p>牡羊座のあなたは、とにかく実行力がある人で、躊躇なく新しいことに挑戦していける人です。牡羊座は12星座の中で最初に位置し、<br>
           「生まれたて、始まり」を意味することから由来するのかもしれません。</p><p>思い立ったらすぐ行動をするタイプで、行き当たりばったり<br>
           なところが見られます。しかし、それこそがあなたの最大の魅力です！既にあるもので何かをするよりも、新しく自分で開拓していくのが好きで、<br>
           リスクを恐れずにチャレンジすることに喜びや楽しさを感じられる人です！</p>
         </div><br>
         <div class="sub-content"><br>
           <p>そんなあなたと相性のいいにゃんこは、『』
         </div>`;
      } else if (total_num == 5) {
        document.getElementById("text").innerHTML = `
         <div class="h1">&#127882; 占い結果 &#127882;</div><br>
         <div class="content">
           <p>牡牛座のあなたは、慎重でじっくり物事を進めていく性格です。性格は穏やかで落ち着いた行動や態度、雰囲気から周りに安心感を与える<br>
           存在です。その雰囲気から、周りに人が集まってきやすいという特徴があり、初対面の人から話しかけられることもあるのではないでしょうか？</p><br>
           <p>また、我慢強いという特徴もあり、物事を途中で投げ出すことなく粘り強く最後までやり通すことができる強さを持っています。</p><br>
           <p>お金に関しても慎重で、ものを大切にするタイプです。そして、味覚が優れているため食通が多いという特徴があります。</p>
         </div><br>
         <div class="sub-content"><br>
           <p>そんなあなたと相性のいいにゃんこは、『』
         </div>`;
      } else if (total_num == 6) {
        document.getElementById("text").innerHTML = `
         <div class="h1">&#127882; 占い結果 &#127882;</div><br>
         <div class="content">
           <p>双子座のあなたは、明るく行動力がある人です。話術に長けていて、積極的に自分から他人に関わっていく性格の持ち主です。</p><br>
           <p>社交的で交友関係が広く、コミュニケーションが得意なので、初対面の人とでもすぐに仲良くなることができます。頭の回転が速く、<br>
           好奇心旺盛で楽観的なので一緒にいるのが楽しい人です。また落ち込んでも切り替えが早く、過去のことは割り切って前に進みます。</p><br>
           <p>普段から明るいですが、人との関係で神経質になったり些細なことで傷つくこともあります。</p>
         </div><br>
         <div class="sub-content"><br>
           <p>そんなあなたと相性のいいにゃんこは、『』
         </div>`;
      } else if (total_num == 7) {
        document.getElementById("text").innerHTML = `
         <div class="h1">&#127882; 占い結果 &#127882;</div><br>
         <div class="content">
           <p>蟹座のあなたは、自分の意見を押し通したりせずに、相手の意見を受け止めることが得意です。逆に自分が発言をすることは苦手で、<br>
           あまり目立ちたくないと思っているでしょう。</p><br>
           <p>また蟹座の人は、組織やグループ内において「愛される」人間です。自分より相手を優先することが多く、まずは相手の要求に応えようと<br>
           します。更に相手への気遣いもできることから、愛されやすい存在と言えます。</p><br>
           <p>蟹座の人は自己主張をしない分、自分の深い部分を内面に秘めています。</p><br>
           <p>そして蟹座の人は家庭を大切にし、家族に深い愛情を持って接することができる人です。</p>
         </div><br>
         <div class="sub-content"><br>
           <p>そんなあなたと相性のいいにゃんこは、『』
         </div>`;
      } else if (total_num == 8) {
        document.getElementById("text").innerHTML = `
         <div class="h1">&#127882; 占い結果 &#127882;</div><br>
         <div class="content">
           <p>獅子座のあなたは、明るくポジティブ思考という特徴があり、周りの人を巻き込むことができます。そうすると、自分が注目されていると<br>
           感じて、力を発揮することができます。</p><br>
           <p>獅子座の人は、ライオンのようなワイルドさがあり自分に自信を持っています。ただし、プライドも高く子供っぽいところもあり、自身の<br>
           プライドが傷つけられることには、過剰に反応します。</p><br>
           <p>また、獅子座の人は正直で嘘がつけない性格であり、それが災いしてしまうこともあるので、注意してください。</p>
         </div><br>
         <div class="sub-content"><br>
           <p>そんなあなたと相性のいいにゃんこは、『』
         </div>`;
      } else if (total_num == 9) {
        document.getElementById("text").innerHTML = `
         <div class="h1">&#127882; 占い結果 &#127882;</div><br>
         <div class="content">
           <p>乙女座のあなたは、道徳心を重んじており、気遣いができて責任感のある人です。几帳面なところがあり、計画通りに物事が進むことを好みます。<br>
           常識があることから、年上や年配の方から好まれる傾向にあります。</p><br>
           <p>乙女座の由来には諸説ありますが、「豊穣」を示すものが有名です。農作物を育てるように、コツコツ努力し成果を上げることができます。現実主義で<br>
           勉強熱心、地道な努力を惜しみません。</p><br>
           <p>また、「自然」と縁が深く、動植物を好む傾向にあります。ストレスが溜まった際には、大自然の中でゆっくりしてみては、いかがでしょうか？</p>
         </div><br>
         <div class="sub-content><br>
           <p>そんなあなたと相性のいいにゃんこは、『』
         </div>`;
      } else if (total_num == 10) {
        document.getElementById("text").innerHTML = `
         <div class="h1">&#127882; 占い結果 &#127882;</div><br>
         <div class="content">
           <p>天秤座のあなたは、調和を大切にし、衝突や矛盾のない関係を望みます。また、バランスを表す「天秤」は性格にも現れており、争いを好まず、<br>
           穏やかで安全な生活を望む平和主義者です。</p><br>
           <p>調和を重視しすぎるため、白黒はっきりさせることが苦手で、優柔不断な性格をしています。争いを避けるために、自分が折れることも多々あります。<br>
           しかしいざ争いに巻き込まれた時には、矛盾を好まないため事実を冷静に照らし合わせ、何が正しくて何が悪いのかを考えます。どちらの意見も理解できる為、<br>
           結果的に中立の立場になります。</p><br>
           <p>他にも、知的・社交的・陽気といった特徴があるとても魅力的な人です。</p>
         </div><br>
         <div class="sub-content"><br>
           <p>そんなあなたと相性のいいにゃんこは、『』
         </div>`;
      } else if (total_num == 11) {
        document.getElementById("text").innerHTML = `
         <div class="h1">&#127882; 占い結果 &#127882;</div><br>
         <div class="content">
           <p>蠍座のあなたは、場の雰囲気を大切にして感情をあまり表に出さないため、ミステリアスな印象を持たれていることでしょう。しかし、根は情熱的で<br>
           物事を達成するためには努力を惜しまず、「持続力」や「継続力」がある人です。</p><br>
           <p>逆に複数のことに情熱を持つのは不得意で、何か一つに熱中するタイプです。熱中しているときの集中力は凄まじく、周囲の雑音が聞こえなくなる程の<br>
           集中力を発揮します。失敗しても、困難があっても目的を達成するために様々な創意工夫を行い、継続することができます。</p><br>
           <p>また、揺るぎない信念を持っていて頑固なところがありますが、周りの声をあまり気にしない人です。</p>
         </div><br>
         <div class="sub-content"><br>
           <p>そんなあなたと相性のいいにゃんこは、『』
         </div>`;
      } else if (total_num == 12) {
        document.getElementById("text").innerHTML = `
         <div class="h1">&#127882; 占い結果 &#127882;</div><br>
         <div class="content">
           <p>射手座のあなたは、エネルギッシュで行動力があり、思い立ったらすぐ行動できる人です。「せっかち」と言われてしまうことも、あるかもしれません。<br>
           明るく前向きで、過去のことを引き摺らないタイプです。また、好奇心が強く新しいことに挑戦したり、新たなことを学ぶことが好きな人です。</p><br>
           <p>更に行動範囲や趣味も広いという特徴があり、体を動かしたり本を読むのが好きです。</p>
           <p>社交的である反面、協調性に欠けるところがあり頻繁に人間関係で衝突が起きてしまいがちです。人の話を聞くのが苦手で、更に自分が妥協することを<br>
           好まない性質なので、つい感情的になり相手を傷つけてしまうことがあります。</p>
         </div><br>
         <div class="sub-content"><br>
           <p>そんなあなたと相性のいいにゃんこは、『』
         </div>`;
      };
  });
}

window.addEventListener('load', result3);