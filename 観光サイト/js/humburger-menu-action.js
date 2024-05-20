$(".btn-gNav").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $(".gNav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$(".gNav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".btn-gNav").removeClass('active');//ボタンの activeクラスを除去し
    $(".gNav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});
