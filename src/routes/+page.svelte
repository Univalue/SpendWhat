<script lang="ts">
    import * as m from "$lib/paraglide/messages.js";
</script>

<nav class="navbar">
    <div class="nav-title">10.5大阪</div>
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
                <p class="spent-amount" style="margin-top: -4px;">$114511.10</p>
            </div>
            <div class="budget">
                <div
                    style="height: 100%;width:100%;border-radius:3.125rem;background-color:#66CCFF"
                ></div>
            </div>
        </div>
        <div class="box team-spent">
            <div>
                <p>{m.team_spent()}</p>
                <p class="spent-amount" style="margin-top: -4px;">
                    $11454191.10
                </p>
            </div>
            <div>
                <p class="spent-amount">
                    {m.transaction_count({ count: 1919 })}
                </p>
            </div>
        </div>
        <div class="box bill-info">
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
    <a href="/demo">demo</a>
    <iconify-icon icon="mdi:home" width="128" height="128"></iconify-icon>
    <p style="font-size: 128px">占位文字</p>
    <p style="font-size: 128px">占位文字</p>
    <p style="font-size: 128px">占位文字</p>
    <p style="font-size: 128px">占位文字</p>
</div>

<style>
    nav.navbar {
        position: fixed;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 0.875rem;
    }

    div.nav-title {
        font-size: 2.25rem;
        font-family: var(--font-text-blod);
    }

    div.nav-buttons {
        display: flex;
        gap: 0.75rem;
    }

    div.home-main {
        position: absolute;
        top: 3.375rem;
        margin: 0.875rem;
        width: calc(100% - 1.75rem);
        background-color: #66ccff;
        display: flex;
        flex-direction: column;
    }

    div.home-header {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 2fr 1fr;
        grid-gap: 0.5rem 0.9375rem;
        height: 12.5rem;
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
        font-size: 1.25rem;
        font-family: var(--font-text-blod);
    }

    div.budget {
        height: 6.25rem;
        width: 6.25rem;
        margin: 0 auto;
    }

    div.bill-info {
        padding: 0.6875rem 1.25rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    p.bill-info-desc {
        font-size: 0.625rem;
        color: var(--bulma-text-00-invert);
    }
</style>
