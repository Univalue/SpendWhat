<script lang="ts">
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { ModeWatcher, mode } from "mode-watcher";
	let { children } = $props();
</script>

<svelte:head>
    <!-- 深色模式主题 -->
    <meta name="theme-color" content={$mode === "light" ? "#ffffff" : "#000000"}>
    <title></title>
</svelte:head>

<ModeWatcher />

<ParaglideJS {i18n}>
	{@render children()}
</ParaglideJS>
