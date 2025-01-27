<script>
    // 只有https协议下才能使用navigator.share
    function share() {
        if (navigator.share) {
            navigator
                .share({
                    title: "分享标题",
                    text: "分享内容",
                    url: window.location.href,
                })
                .then(() => {
                    console.log("分享成功");
                })
                .catch((error) => {
                    console.error("分享失败", error);
                });
        } else {
            alert("当前浏览器不支持 Web Share API");
        }
    }
</script>

<a href="/">home</a>
<a href="/demo/paraglide">paraglide</a>
<p>123</p>
<div
    style="display: grid;grid-template-columns:1fr 1fr;grid-template-rows:2fr 1fr;grid-gap: 8px 15px;"
>
    <div class="box" style="grid-area:1 / 1 / span 2 / span 1">1</div>
    <div class="box">2</div>
    <div class="box">3</div>
</div>

<button on:click={share}>分享</button>
