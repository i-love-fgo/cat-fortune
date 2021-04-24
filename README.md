## アプリケーション名
 Cat Fortune      

## アプリケーション概要
 このアプリケーションでは、"今日の運勢"・"血液型占い"・"星座占い"を行って頂けます。
 占いは、事前にユーザー登録をした利用者のみで行える仕様となっています。           
 それぞれ必須項目を選択して頂くと、内容に応じた結果画面が表示されます。           
 今後の実装予定としては、占い結果をスクリーンショットなどで保存し、トップページにて 
 表示できるようにしていきたいと考えています。また、その結果を見た他ユーザーがコメン 
 ト投稿できる機能を追加したいです。更に、ユーザーのマイページを実装し、占い結果に紐 
 づくユーザーの詳細ページを見られるような実装を検討しています。                  

## URL
 http://54.238.36.94/

## テスト用アカウント
 E-mail: test@test   
 Password: 111qqq

## 利用方法
 ご利用頂く際には、ユーザー登録が必要となります。上記に記載しました、テスト用アカウン 
 トをご使用の上、ログインをお願いいたします。その後は、トップページに記載されている3 
 つのカテゴリーの中から、ご利用になりたい占いを選択してください。選択されますと、各リ 
 ンク先へ画面遷移いたします。画面に表示されている必須選択フォームを全て満たされた上で 
 "結果を見る"を押してください。(正しく入力されていないと、結果が表示されないことがあ 
 ります。)選択して頂いた内容に対する結果画面が表示されます。                     

## 目指した課題解決
 本アプリは、娯楽目的で利用して頂きたく開発いたしました。ターゲットとしては、10~40代 
 までの幅広い世代の女性です。コロナ禍となった現代、今までと生活様式が一変してしまい、 
 様々なストレスに悩まされている方に必要なものとは。それは、癒しだと考えます。その中で 
 も、猫は非常に人気があると思い私自身も猫好きだったことから、猫を題材としたアプリケー 
 ションを開発しようと思いました。ただ、猫だけだと物足りないと感じたので、女性に根強い 
 人気のある占いの要素を融合しようと思い、このような形のアプリケーションとなりました。 
 私自身、占いに関する知識は皆無なため、絶対に当たる占いという保証はできませんが、この 
 アプリケーションを利用される全ての方に対して、前向きな気持ちであったり元気になれるよ 
 うなメッセージを、届けられればと思い開発しております。                          

## 洗い出した要件
 https://docs.google.com/spreadsheets/d/1g4tUHOiNirG9SJGv4djwaJfz-SmnbKqHJGMIauyeuYU/edit?usp=sharing 

## 独自の占いコンテンツ
 [![Image from Gyazo](https://i.gyazo.com/3a7d623be6e3df4891fd42d27af962c0.png)](https://gyazo.com/3a7d623be6e3df4891fd42d27af962c0) 

## ユーザーのログイン機能
[![Image from Gyazo](https://i.gyazo.com/ac9b027693fd382d232beaa8c142d01e.gif)](https://gyazo.com/ac9b027693fd382d232beaa8c142d01e) 

## 今日の運勢（パターン1）
[![Image from Gyazo](https://i.gyazo.com/27b3ccf1906752cb6836e27e0cc07701.gif)](https://gyazo.com/27b3ccf1906752cb6836e27e0cc07701)

## 今日の運勢（パターン2）
[![Image from Gyazo](https://i.gyazo.com/84b219774acce99dbdae806c94c707ef.gif)](https://gyazo.com/84b219774acce99dbdae806c94c707ef)

## 血液型診断（A型）
[![Image from Gyazo](https://i.gyazo.com/b316448dfc2c012a9c92ca425656fdb8.gif)](https://gyazo.com/b316448dfc2c012a9c92ca425656fdb8)

## 血液型診断（O型）
[![Image from Gyazo](https://i.gyazo.com/b49de6413c8d573176b699080d59bc42.gif)](https://gyazo.com/b49de6413c8d573176b699080d59bc42)

## 星座別診断（パターン1）
[![Image from Gyazo](https://i.gyazo.com/89ed26fc647b7dc13b2cf53c2e763415.gif)](https://gyazo.com/89ed26fc647b7dc13b2cf53c2e763415)

## 星座別診断（パターン2）
[![Image from Gyazo](https://i.gyazo.com/1037d05ef2faef29bd0e84f466c4f08f.gif)](https://gyazo.com/1037d05ef2faef29bd0e84f466c4f08f)

## 実装予定の機能
 マイページの実装、コメント投稿機能、占い結果の投稿機能、チャットルーム機能etc. 

## データベース設計
 [![Image from Gyazo](https://i.gyazo.com/0d02b507b2178efa4f67d75750b71620.png)](https://gyazo.com/0d02b507b2178efa4f67d75750b71620)

## ローカルでの操作
 git clone http://54.238.36.94/  
 cd cat-fortune                 
 bundle install                 
 yarn install                   
 rails db:create                
 rails db:migrate               
