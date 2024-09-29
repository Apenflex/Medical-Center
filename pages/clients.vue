<script setup>
const search = ref('')
watch(search, (value) => {
    console.log('value', value)
})
// sort by category
const sortOptions = ref([
    { value: 'category1', label: 'Категорія 1' },
    { value: 'category2', label: 'Категорія 2' },
    { value: 'category3', label: 'Категорія 3' },
    { value: 'category4', label: 'Категорія 4' },
    { value: 'category5', label: 'Категорія 5' },
])
</script>

<template>
    <section class="page-clients">
        <div class="page-clients__bar dflex">
            <div class="page-clients__count dflex">
                <span class="font-700">клієнти</span>
                <span class="font-400 space-nowrap">35744 чоловік</span>
            </div>
            <div class="page-clients__filter dflex">
                <Input
                    v-model:value="search"
                    type="text"
                    name="search"
                    placeholder="Пошук"
                    class="basic-input"
                >
                    <template #icon>
                        <IconSearch />
                    </template>
                </Input>
                <Multiselect
                    v-model="sortBy"
                    :options="sortOptions"
                    placeholder="Виберіть зі списку"
                />
            </div>
            <Button
                class="basic-btn"
            >
                Додати
                <template #icon>
                    <IconPlus />
                </template>
            </Button>
        </div>
        <div class="page-clients__wrapper">
            <div v-for="(_, idx) in 15" :key="idx" class="client-card">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit cumque maiores, iusto, provident
                debitis numquam repudiandae minus expedita cum nostrum aliquid maxime. Assumenda ea perspiciatis id
                sint ratione, nam ducimus.
            </div>
        </div>
    </section>
</template>
