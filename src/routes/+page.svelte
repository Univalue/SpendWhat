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
    <iconify-icon icon="mdi:home" width="128" height="128"></iconify-icon>
    <p style="font-size: 128px">占位文字</p>
    <p style="font-size: 128px">占位文字</p>
    <p style="font-size: 128px">占位文字</p>
    <p style="font-size: 128px">占位文字</p>
</div>
