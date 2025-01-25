<script lang="ts">
    import * as m from "$lib/paraglide/messages.js";
</script>

<nav
    class="navbar"
    style="position: fixed;width: 100%;display:flex;align-items: center;justify-content:space-between;padding: 0 0.875rem;"
>
    <div style="font-size: 2.25rem">10.5大阪</div>
    <div style="display: flex;gap: .75rem">
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
<div
    style="position: absolute;top: 3.375rem;margin: 0.875rem;width: calc(100% - 1.75rem); background-color: #66ccff"
>
    <div
        style="display: grid;grid-template-columns:1fr 1fr;grid-template-rows:2fr 1fr;grid-gap: .5rem .9375rem;height: 12.5rem"
    >
        <div
            class="box"
            style="grid-area:1 / 1 / span 2 / span 1;display:flex;flex-direction:column;justify-content:space-between"
        >
            <div>
                <p>你已支出</p>
                <p
                    style="font-size: 1.25rem;margin-top: -4px;font-family: var(--font-text-blod)"
                >
                    $1145.14
                </p>
            </div>
            <div style="height: 6.25rem;width: 6.25rem;margin: 0 auto">
                <div
                    style="height: 100%;width:100%;border-radius:3.125rem;background-color:#66CCFF"
                ></div>
            </div>
        </div>
        <div
            class="box"
            style="display: flex;flex-direction:column;justify-content:space-between"
        >
            <div>
                <p>团队共支出</p>
                <p
                    style="font-size: 1.25rem;margin-top: -4px;font-family: var(--font-text-blod)"
                >
                    $1145.14
                </p>
            </div>
            <div>
                <p
                    style="font-size: 1.25rem;font-family: var(--font-text-blod)"
                >
                    1919笔交易
                </p>
            </div>
        </div>
        <div
            class="box"
            style="padding: .6875rem 1.25rem;display:flex;justify-content:space-between;align-items:center"
        >
            <div>
                <p>账单信息</p>
                <p style="font-size: .625rem;color:var(--bulma-text-00-invert)">
                    管理成员等账单信息
                </p>
            </div>
            <iconify-icon icon="ic:baseline-edit-note" width="32" height="32"
            ></iconify-icon>
        </div>
    </div>
    <iconify-icon icon="mdi:home" width="128" height="128"></iconify-icon>
    <p style="font-size: 128px">占位文字</p>
    <p style="font-size: 128px">占位文字</p>
    <p style="font-size: 128px">占位文字</p>
    <p style="font-size: 128px">占位文字</p>
</div>
