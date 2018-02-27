## futaba move to catalog
このUserscriptはふたば☆ちゃんねるでスレとカタログをダブルクリックで移動できるようにするものです。  

Firefoxの場合、[Tampermonkey](https://addons.mozilla.org/ja/firefox/addon/tampermonkey/)を先にインスールしてからスクリプトをインストールして下さい。  
（GreasemonkeyやViolentmonkeyでの動作は未確認です）  
Chromeの場合、[Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)を先にインスールしてからスクリプトをインストールして下さい。  

※こののUserscriptはFirefoxアドオン[Duplicate Tabs Closer](https://addons.mozilla.org/ja/firefox/addon/duplicate-tabs-closer/)・[move to an already opened tab](https://addons.mozilla.org/ja/firefox/addon/move-to-an-already-opened-tab/)・[move to an already opened tab kai](https://github.com/akoya-tomo/move_to_an_already_opened_tab_kai/)やChromeアドオン[No Dupe Tabs](https://chrome.google.com/webstore/detail/no-dupe-tabs/fajkhkmabkgflclnlmfdafpikejjncca/)などの重複したタブを閉じて既に開いているタブへ移動するアドオンが必要です。  
※他のUserscriptやFirefoxアドオン[KOSHIAN](https://addons.mozilla.org/ja/firefox/user/anonymous-a0bba9187b568f98732d22d51c5955a6/)の改変版は[こちら](https://github.com/akoya-tomo/futaba_auto_reloader_K/wiki)の一覧からどうぞ。  

## 使い方
* ふたばのスレ画面で背景をダブルクリックするとそのスレの板のカタログに移動します。  
* カタログ画面で背景をダブルクリックすると、最後にダブルクリックでカタログに移動したスレに移動します。  

## インストール

[GreasyFork](https://greasyfork.org/ja/scripts/36988-futaba-move-to-catalog)　[GitHub](https://github.com/akoya-tomo/futaba_move_to_catalog/raw/master/futaba_move_to_catalog.user.js)  

## 設定
機能の動作はスクリプト冒頭の大文字変数をエディタで編集すれば変更することができます。  

* LEFT\_BUTTON\_ONLY :マウス左ボタンのみダブルクリック移動有効  
  - 左のマウスボタンでのダブルクリックのみが移動有効となります。falseにすると右のマウスボタンでもダブルクリックで移動できます。
* ENABLE\_EXCLUSION:ダブルクリック判定除外機能有効  
  - ダブルクリックした場所を判別して移動を無効にする機能を有効にします。（主に操作する部分を移動無効にしています）  
    falseに設定すると、どこをダブルクリックしても移動します。  
  - この項目の下には個別の除外項目が並んでいます。各項目をtrueに設定するとその項目の領域でダブルクリックしても移動しません。  
  - TAG\_BLOCKQUOTEはレス本文が対象です。trueに設定するとレス本文をダブルクリックで選択ができます。判定範囲が文字列より右側に長いので、ダブルクリックによる文字列選択をしないのであればfalseに設定することで、気付かずに移動できないことを防げます。  
  - ふたクロ以外の環境ではレスNo.を選択しようとダブルクリックするとカタログに移動してしまいます。これを回避したいときはCLASS\_RTDをtrueにするとレスの背景色の付いた領域全体が移動無効となります。  

## 注意事項
* 必ず**重複したタブを閉じて既に開いているタブに移動するアドオン**を併用してください。  
* 移動先のカタログやスレが既に閉じられていた場合は新たにタブが開きます。  
* 判定除外機能は一つでも条件が一致すると有効になります。例えばレス\(CLASS\_RTD\)を除外有効にすると、レス本文\(TAG\_BLOCKQUOTE\)を除外無効にしていても、レス本文がレスの領域内のため移動無効になります。  
* FirefoxアドオンDuplicate Tabs Closer使用時は以下の設定にしてください。  
  - On duplicate tab detected : Close tab automatically  
  - On remaining tab : Activate  
  - Priority : Keep older tab  
  - Compare with tab title のチェックを外す（タブタイトルを変更しているとき）  

## 既知の問題
* Duplicate Tabs Closer 3.1.4で残ったタブがactiveにならないことがあります。  
  不具合が発生した場合はDuplicate Tabs Closerを3.1.2にダウングレードしてください。  

## 更新履歴
* v1.0.2 2018-02-07
  - ダブルクリック判定除外項目にfutaba thread highlighterメニューとfutaba catalog NGを追加  
* v1.0.1 2018-01-04
  - ダブルクリック判定除外の判定タイミング不具合修正  
  - ダブルクリック判定除外項目追加  
* v1.0.0 2018-01-03
  - 初回リリース  

