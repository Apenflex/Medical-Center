<script setup>
const navigationLinks = [
    {
        name: "Сканер",
        link: "/scanner",
        icon: resolveComponent("IconScanner"),
        children: []
    },
    {
        name: "Співробітники",
        link: "/employees",
        icon: resolveComponent("IconEmployees"),
        children: []
    },
    {
        name: "Клієнти",
        link: "/clients",
        icon: resolveComponent("IconClients"),
        children: []
    },
    {
        name: "Вправи",
        link: "/exercises",
        icon: resolveComponent("IconExercises"),
        children: [
            {
                name: "Категорії",
                link: "/exercises/categories",
            }
        ]
    },
    {
        name: "Банери",
        link: "/banners",
        icon: resolveComponent("IconBanners"),
        children: []
    }
]
</script>

<template>
    <aside class="layout__sidebar dflex">
        <ul class="layout__sidebar-navigation dflex">
            <li 
                v-for="(link, idx) in navigationLinks"
                :key="idx"
            >
                <NuxtLink :to="link.link" class="dflex font-400">
                    <component  :is="link.icon" />
                    {{ link.name }}
                </NuxtLink>
            </li>
        </ul>
        <div class="layout__sidebar-exit">
            <button class="dflex font-400">
                <IconExit />
                Вийти
            </button>
        </div>
    </aside>
</template>
