<script lang="ts">
    import * as m from "$lib/paraglide/messages.js";
</script>

<nav class="navbar">
    <div class="nav-title">我是标题</div>
    <div class="nav-buttons">
        <button class="button" aria-label="settings" type="button"
            ><iconify-icon
                class="icon"
                icon="ic:baseline-settings"
                width="24"
                height="24"
            ></iconify-icon></button
        >
        <button class="button" aria-label="share" type="button"
            ><iconify-icon
                class="icon"
                icon="ic:baseline-ios-share"
                width="24"
                height="24"
            ></iconify-icon></button
        >
        <button class="button" aria-label="add" type="button"
            ><iconify-icon
                class="icon"
                icon="ic:baseline-add"
                width="24"
                height="24"
            ></iconify-icon></button
        >
    </div>
</nav>
<div class="home-main">
    <!-- TODO:金额自适应字体大小保持宽度 -->
    <div class="home-header">
        <div class="box you-spent">
            <div>
                <p>{m.you_spent()}</p>
                <p class="spent-amount" style="margin-top: -0.25rem;">$114511.10</p>
            </div>
            <div class="budget">
                <div
                    style="height: 100%;width:100%;border-radius:50%;background-color:#66CCFF"
                ></div>
            </div>
        </div>
        <div class="box team-spent">
            <div>
                <p>{m.team_spent()}</p>
                <p class="spent-amount" style="margin-top: -0.25rem;">
                    $11454191.10
                </p>
            </div>
            <div>
                <p class="spent-amount">
                    {m.transaction_count({ count: 1919 })}
                </p>
            </div>
        </div>
        <div class="bill-info box">
            <div>
                <p>{m.bill_info()}</p>
                <p class="bill-info-desc">
                    {m.bill_info_desc()}
                </p>
            </div>
            <iconify-icon icon="ic:baseline-edit-note" width="32" height="32"
            ></iconify-icon>
        </div>
    </div>
    <div class="box main-bill">
        <a href="/demo">demo</a>
        <iconify-icon icon="mdi:home" width="128" height="128"></iconify-icon>
        <p style="font-size: 8rem">占位文字</p>
        <p style="font-size: 8rem">占位文字</p>
        <p style="font-size: 8rem">占位文字</p>
        <p style="font-size: 8rem">占位文字</p>
    </div>
    <div class="add-expenses"><div></div></div>
</div>

<style>
    nav.navbar {
        position: fixed;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 14px;
        /* background-color: hsla(0, 0%, 100%, .9);
        backdrop-filter: blur(.625rem); */
    }

    div.nav-title {
        font-size: 36px;
        font-family: var(--font-text-blod);
    }

    div.nav-buttons {
        display: flex;
        gap: 12px;
    }

    div.home-main {
        position: absolute;
        top: 54px;
        margin: 14px;
        width: calc(100% - 28px);
        /* background-color: #66ccff; */
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding-bottom: 1.5rem;
    }

    div.home-header {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 2fr 1fr;
        grid-gap: 8px 15px;
        height: 200px;
    }

    div.home-header > div.you-spent {
        grid-area: 1 / 1 / span 2 / span 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    div.home-header > div.team-spent {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    p.spent-amount {
        font-size: 20px;
        font-family: var(--font-text-blod);
    }

    div.budget {
        height: 100px;
        width: 100px;
        margin: 0 auto;
    }

    div.bill-info {
        padding: 11px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    p.bill-info-desc {
        font-size: 10px;
        color: var(--bulma-text-00-invert);
    }

    div.add-expenses {
        position: fixed;
        bottom: 50px;
        left: calc(50% - 25px);
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #ff7300;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    div.main-bill {
        width: 100%;
        /* TODO:如果账单够多底部才使用大圆角 */
        border-radius: var(--bulma-box-radius) var(--bulma-box-radius) 2rem 2rem;
    }
</style>
