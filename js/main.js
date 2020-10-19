window.onscroll = function () {
    function fadeIn(el, duration) {
        var node = document.getElementById(el);
        // display: noneでないときは何もしない
        if (getComputedStyle(node).display !== 'none') {
            return;
        } else {
            node.style.display = 'block';
        }
        //opacityの操作
        node.style.opacity = 0;
        var start = performance.now();
        requestAnimationFrame(function tick(timestamp) {
            // イージング計算式（linear）
            var easing = (timestamp - start) / duration;
            // opacityが1以下の値を代入
            node.style.opacity = Math.min(easing, 1);
            // opacityが1より小さいとき
            if (easing < 1) {
                requestAnimationFrame(tick);
            }
        });
    }
    //ページトップ以外の時は関数を呼び出す（ページトップ時以外の時はボタンは表示される）
    var scrollTop = window.pageYOffset;
    if (scrollTop > 0) {
        fadeIn('js-button', 100);
    }
}
