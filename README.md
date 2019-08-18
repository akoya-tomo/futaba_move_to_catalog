## futaba move to catalog
このUserscriptはふたば☆ちゃんねるでスレとカタログをダブルクリックで移動できるようにするものです。  

Firefoxの場合、[Tampermonkey](https://addons.mozilla.org/ja/firefox/addon/tampermonkey/)を先にインスールしてからスクリプトをインストールして下さい。  
（GreasemonkeyやViolentmonkeyでの動作は未確認です）  
Chromeの場合、[Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)を先にインスールしてからスクリプトをインストールして下さい。  

※このUserscriptはFirefoxアドオン[Duplicate Tabs Closer](https://addons.mozilla.org/ja/firefox/addon/duplicate-tabs-closer/)・[move to an already opened tab](https://addons.mozilla.org/ja/firefox/addon/move-to-an-already-opened-tab/)・[move to an already opened tab kai](https://github.com/akoya-tomo/move_to_an_already_opened_tab_kai/)やChromeアドオン[No Dupe Tabs](https://chrome.google.com/webstore/detail/no-dupe-tabs/fajkhkmabkgflclnlmfdafpikejjncca/)・[Duplicate Tabs Closer](https://chrome.google.com/webstore/detail/duplicate-tabs-closer/gnmdbogfankgjepgglmmfmbnimcmcjle/)などの重複したタブを閉じて既に開いているタブへ移動するアドオンが必要です。  
※Firefoxではこのスクリプトの代わりにほぼ同機能で新しいタブを開かずに移動できる[**KOSHIAN タブ制御**](https://github.com/akoya-tomo/koshian_tab_controller/)アドオンの使用を推奨します。  
※他のふたば閲覧支援ツールは[こちら](https://github.com/akoya-tomo/futaba_auto_reloader_K/wiki)。  

## 使い方
* ふたばのレス送信モード画面で背景をダブルクリックするとそのスレの板のカタログに移動します。  
* カタログ画面で背景をダブルクリックすると、最後にダブルクリックでカタログに移動したスレに移動します。  

## インストール

[GreasyFork](https://greasyfork.org/ja/scripts/36988-futaba-move-to-catalog)　[GitHub](https://github.com/akoya-tomo/futaba_move_to_catalog/raw/master/futaba_move_to_catalog.user.js)  

## 設定
機能の動作はスクリプト冒頭の大文字変数をエディタで編集すれば変更することができます。  

* `LEFT_BUTTON_ONLY` : マウス左ボタンのみダブルクリック移動有効  
  - 左のマウスボタンでのダブルクリックのみが移動有効となります。`false`に設定すると右のマウスボタンでもダブルクリックで移動できます。
* `ENABLE_EXCLUSION` : ダブルクリック判定除外機能有効  
  - ダブルクリックした場所を判別して移動を抑止する機能を有効にします。（主に操作する部分を抑止しています）  
    `false`に設定すると、どこをダブルクリックしても移動します。  
  - この項目の下には個別の除外項目が並んでいます。各項目を`true`に設定するとその項目の領域でダブルクリックしても移動しません。  
  - `TAG_BLOCKQUOTE`はレス本文が対象です。`true`に設定するとレス本文をダブルクリックで選択ができます。判定範囲が文字列より右側に長いので、ダブルクリックによる文字列選択をしないのであれば`false`に設定することで、気付かずに移動できないことを防げます。  
  - レス内の本文以外の文字列をダブルクリックで選択しようとするとカタログに移動してしまいます。これを回避したいときは`CLASS_RTD`を`true`に設定するとレスの背景色の付いた領域全体が移動抑止されます。  

## 注意事項
* 必ず**重複したタブを閉じて既に開いているタブに移動するアドオン**を併用してください。  
* 移動先のカタログやスレが既に閉じられていた場合は新たにタブが開きます。  
* 判定除外機能は一つでも条件が一致すると有効になります。例えばレス\(`CLASS_RTD`\)を除外有効にすると、レス本文\(`TAG_BLOCKQUOTE`\)を除外無効にしていても、レス本文がレスの領域内のため移動抑止されます。  
* Duplicate Tabs Closerアドオン使用時は以下の設定にしてください。  
  - On duplicate tab detected : Close tab automatically  
  - On remaining tab : Activate  
  - Priority : Keep older tab  
  - Compare with tab title のチェックを外す（タブタイトルを変更しているとき）  

## 既知の問題
* 重複したタブが閉じたあと、既に開いているタブがactiveにならない。  
  - Duplicate Tabs Closer3.1.4の不具合です。3.1.5で修正されました。最新版（[Firefox](https://addons.mozilla.org/ja/firefox/addon/duplicate-tabs-closer/)・[Chrome](https://chrome.google.com/webstore/detail/duplicate-tabs-closer/gnmdbogfankgjepgglmmfmbnimcmcjle/)）へ更新してください。  
  - Chrome版Duplicate Tabs Closer3.1.5にて偶に発生することが確認されています。気になる方は[No Dupe Tabs](https://chrome.google.com/webstore/detail/no-dupe-tabs/fajkhkmabkgflclnlmfdafpikejjncca/)の使用を推奨します。  

## 更新履歴
* v1.0.5 2018-09-26
  - カタログテーブルのダブルクリック判定除外を有効にするとレスまでダブルクリック判定が除外される不具合を修正
  - コード整理
* v1.0.4 2018-03-24
  - KOSHIAN フォーム拡張アドオンと併用すると誤動作する不具合修正
* v1.0.3 2018-03-10
  - ダブルクリック判定除外項目にカタログテーブルを追加  
* v1.0.2 2018-02-07
  - ダブルクリック判定除外項目にfutaba thread highlighterメニューとfutaba catalog NGを追加  
* v1.0.1 2018-01-04
  - ダブルクリック判定除外の判定タイミング不具合修正  
  - ダブルクリック判定除外項目追加  
* v1.0.0 2018-01-03
  - 初回リリース  

