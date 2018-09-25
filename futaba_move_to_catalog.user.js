// ==UserScript==
// @name           futaba move to catalog
// @namespace      https://github.com/akoya-tomo
// @description    ダブルクリックでカタログに移動
// @author         akoya_tomo
// @include        http://*.2chan.net/*/futaba.php?mode=cat*
// @include        https://*.2chan.net/*/futaba.php?mode=cat*
// @include        http://*.2chan.net/*/res/*
// @include        https://*.2chan.net/*/res/*
// @version        1.0.4
// @require        http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js
// @grant          GM_getValue
// @grant          GM_setValue
// @license        MIT
// @noframes
// ==/UserScript==

this.$ = this.jQuery = jQuery.noConflict(true);

(function($){
	/*
	 *	設定
	 */
	var LEFT_BUTTON_ONLY = true;	//マウス左ボタンのみダブルクリック移動有効
	var ENABLE_EXCLUSION = true;	//ダブルクリック判定除外機能有効
		//ダブルクリック判定除外項目(trueで除外)
		var TAG_BLOCKQUOTE = true;				//レス本文
		var TAG_A = true;						//リンク
		var TAG_IMG = true;						//画像
		var TAG_INPUT = true;					//テキスト入力欄・ボタン
		var TAG_TEXTAREA = true;				//コメント入力欄
		var TAG_SMALL = true;					//カタログ スレ本文
		var CLASS_RTD = false;					//レス（背景色の付いた領域）
		var CLASS_DEL = true;					//DELボタン
		var CLASS_SOD = true;					//そうだねボタン
		var CLASS_KOSHIAN_FTBL = true;			//KOSHIAN 返信フォームを固定
		var CLASS_KOSHIAN_DEL = true;			//KOSHIAN NG
		var ID_FUTAKURO_MENU = true;			//ふたクロ メニュー
		var ID_FUTAKURO_FORM = true;			//ふたクロ 返信フォーム
		var CLASS_FUTAKURO_RESNO = true;		//ふたクロ レスNo.
		var CLASS_FUTAKURO_NG = true;			//ふたクロ NG
		var ID_AKAFUKU_PANEL = true;			//赤福 スレ操作パネル
		var ID_AKAFUKU_FORM = true;				//赤福 返信フォーム
		var CLASS_FUTABA_LIGHTBOX = true;		//futaba lightbox
		var CLASS_FUTABA_ID_IP_POPUP = true;	//futaba ID+IP popup
		var CLASS_ID_COUNTER_WEBEXT = true;		//idcounter-webext
		var CLASS_ID_COUNTER_USERSCRIPT = true;	//idcounter-userscript
		var CLASS_FTH = true;					//futaba thread highlighter
		var ID_FTH_MENU = true;					//futaba thread highlighter メニュー
		var ID_FCN_MENU = true;					//futaba catalog NG メニュー
		var CLASS_FCN_BUTTON = true;			//futaba catalog NG NGボタン
		var TAG_TABLE_BORDER = false;			//カタログテーブル

	var serverName = document.domain.match(/^[^.]+/);
	var pathName = location.pathname.match(/[^/]+/);
	var serverFullPath = serverName + "_" + pathName;
	var hasCatalog = location.href.match(/\/futaba.php\?mode=cat/) ? true : false;
	var exclusion = "";
	var exclusionList = [
		TAG_BLOCKQUOTE,				"blockquote,",
		TAG_A,						"a,",
		TAG_IMG,					"img,",
		TAG_INPUT,					"input,",
		TAG_TEXTAREA,				"textarea,",
		TAG_SMALL,					"small,",
		CLASS_RTD,					".rtd,",
		CLASS_DEL,					".del,",
		CLASS_SOD,					".sod,",
		CLASS_KOSHIAN_FTBL,			".ftbl,",
		CLASS_KOSHIAN_DEL,			".KOSHIAN_del,",
		ID_FUTAKURO_MENU,			"#fvw_menu,",
		ID_FUTAKURO_FORM,			"#postform,",
		CLASS_FUTAKURO_RESNO,		".no_quote,",
		CLASS_FUTAKURO_NG,			".fvw_t_ng,",
		ID_AKAFUKU_PANEL,			"#akahuku_thread_operator,",
		ID_AKAFUKU_FORM,			"#akahuku_postform,",
		CLASS_FUTABA_LIGHTBOX,		".futaba_lightbox,.fancybox-overlay,.fancybox-wrap,",
		CLASS_FUTABA_ID_IP_POPUP,	".GM_fip_name,",
		CLASS_ID_COUNTER_WEBEXT,	".webext_fidc_a,.webext_fidc_popup,",
		CLASS_ID_COUNTER_USERSCRIPT,".gm_fidc_a,.gm_fidc_popup,",
		CLASS_FTH,					".GM_fth_pickuped_caption,.GM_fth_opened_caption,",
		ID_FTH_MENU,				"#GM_fth_container_header,",
		ID_FCN_MENU,				"#GM_fcn_ng_words_header,#GM_fcn_ng_list_header,",
		CLASS_FCN_BUTTON,			".GM_fcn_ng_button,",
		TAG_TABLE_BORDER,			"table[border='1'],",
	];

	init();

	function init(){
		setExclusion();
		setCatalogUrl();
		checkDoubleClick();
	}

	/*
	 *	判定除外設定
	 */
	function setExclusion() {
		if (!ENABLE_EXCLUSION) return;
		for (var i=0; i < exclusionList.length; i++) {
			if (exclusionList[i*2]) {
				exclusion += exclusionList[i*2+1];
			}
		}
		if (exclusion.slice(-1) == ",") {
			exclusion = exclusion.slice(0,-1);
		}
	}

	/*
	 *	カタログのURLを設定
	 */
	function setCatalogUrl() {
		if (hasCatalog) {
			setUrl(serverFullPath);
		}
	}

	/*
	 *	ダブルクリック監視
	 */
	function checkDoubleClick() {
		$(document).dblclick(function(event){
			if (LEFT_BUTTON_ONLY && event.button !== 0) return;
			var $target = $(event.target);
			//console.log("futaba move to catalog: target[0].tagName = " + $target[0].tagName);
			//console.log("futaba move to catalog: target.closest.length = " + $target.closest(exclusion).length);
			if (!$target.closest(exclusion).length) {
				if (hasCatalog) {
					moveToLastThread();
					removeSelection();
				} else {
					moveToCatalog();
					removeSelection();
				}
			}

			/*
			 *	最後にダブルクリックしたレスに移動する
			 */
			function moveToLastThread() {
				var lastThreadUrl = getUrl("last_thread");
				if (lastThreadUrl) {
					window.open(lastThreadUrl);
				}
			}

			/*
	 		 *	カタログに移動する
	 		 */
			function moveToCatalog() {
				var catalogUrl = "";
				if (window.opener) {
					catalogUrl = opener.location.href;
				} else {
					catalogUrl = getUrl(serverFullPath);
				}
				if (catalogUrl) {
					window.open(catalogUrl);
					setUrl("last_thread");
				}
			}

			/*
	 		 *	選択を解除する
	 		 */
			function removeSelection() {
				var selection = document.getSelection();
				if (selection) {
					selection.removeAllRanges();
				}
			}
		});
	}

	/*
	 * 移動先のカタログ・スレのURLの取得
	 */
	function getUrl(target) {
		var urlObj = getUrlObj();
		var str_Url = "";
		if ( urlObj !== "" ) {
			str_Url = urlObj[target];
		}
		return str_Url;
	}
	/*
	 * URLのオブジェクトを取得
	 */
	function getUrlObj() {
		var urlVal = GM_getValue("url", "");
		var obj_url = "";
		if (urlVal !== "") {
			obj_url = JSON.parse(urlVal);
		}
		return obj_url;
	}

	/*
	 * 現在のURLを設定
	 */
	function setUrl(currentUrl) {
		var obj_url = getUrlObj();
		if (obj_url === ""){
			obj_url = {};
		}
		obj_url[currentUrl] = location.href;
		var jsonstring = JSON.stringify(obj_url);
		GM_setValue("url", jsonstring);
		//console.log("futaba move to catalog: url updated@" + currentUrl + " - " + location.href);
	}

})(jQuery);
