<script lang="ts">
    import { ModeWatcher, mode } from "mode-watcher";
    let { children } = $props();
</script>

<svelte:head>
    <!-- 深色模式主题 -->
    <meta name="theme-color" content={$mode === "light" ? "#ffffff" : "#000000"}>
    <title></title>
</svelte:head>

<ModeWatcher />
{@render children()}
