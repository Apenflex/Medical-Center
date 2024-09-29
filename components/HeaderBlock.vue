<script setup>

</script>

<template>
    <header class="header container-80">
        <div class="header__wrapper dflex">
            <NuxtLink
                to="/"
                class="header__logo"
            >
                <NuxtImg 
                    src="/company_logo.svg" 
                    alt="Company Logo" 
                    width="140"
                />
            </NuxtLink>
            <div class="header__user dflex">
                <div class="font-400">Привіт, <span class="font-600">Адмін</span></div>
                <NuxtLink to="/profile">
                    <NuxtImg
                        src="/user_avatar.svg"
                        alt="User Avatar"
                        width="40"
                        height="40"
                    />
                </NuxtLink>
            </div>
        </div>
    </header>
</template>