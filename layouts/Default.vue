<script setup>

</script>

<template>
    <HeaderBlock />
    <main class="mt-30">
        <div class="container-80">
            <div class="layout__wrapper">
                <LayoutSidebar />
                <slot />
            </div>
        </div>
    </main>
</template>