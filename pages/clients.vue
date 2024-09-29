<script setup>
import { useDebounceFn } from '@vueuse/core';

const clientsListHeader = ref([
    { label: 'Ім’я/Нікнейм', key: 'name' },
    { label: 'Категорія', key: 'category' },
    { label: 'Телефон', key: 'phone' },
    { label: 'Дата оновлення', key: 'updatedAt' },
])

const clientsStore = useClientsStore()
// Search by name
const search = ref('')
const debouncedSearch = ref('');
const debouncedFn = useDebounceFn((value) => {
    debouncedSearch.value = value;
}, 500);
watch(search, (newValue) => {
    debouncedFn(newValue);
});
// Sort by category
const sortOptions = ref([
    { value: 'Категорія 1', label: 'Категорія 1' },
    { value: 'Категорія 2', label: 'Категорія 2' },
    { value: 'Категорія 3', label: 'Категорія 3' },
    { value: 'Категорія 4', label: 'Категорія 4' },
    { value: 'Категорія 5', label: 'Категорія 5' },
])
const sortBy = ref('')
const sortedClients = computed(() => {
    // Спочатку фільтруємо клієнтів за пошуком
    const filteredClients = clientsStore.FILTERED_CLIENTS(debouncedSearch.value);
    // Потім сортуємо за вибраною категорією
    if (sortBy.value) {
        return filteredClients.filter(client => client.category === sortBy.value);
    }
    return filteredClients;
});
</script>

<template>
    <section class="page-clients">
        <div class="page-clients__bar dflex">
            <div class="page-clients__count dflex">
                <span class="font-700">клієнти</span>
                <span class="font-400 space-nowrap">
                    {{ clientsStore.GET_CLIENTS?.length }} чоловік
                </span>
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
                @click="clientsStore.ACT_ADD_CLIENT"
                class="basic-btn"
            >
                Додати
                <template #icon>
                    <IconPlus />
                </template>
            </Button>
        </div>
        <div class="page-clients__wrapper">
            <ul class="client-list-header font-600">
                <li
                    v-for="item in clientsListHeader"
                    :key="item.key"
                    class="client-list-header__item"
                >
                    {{ item.label }}
                </li>
            </ul>
            <TransitionGroup
                tag="div"
                name="remove-card"
            >
                <ClientCard
                    v-if="sortedClients.length"
                    v-for="client in sortedClients"
                    :key="client.id"
                    :client="client"
                />
                <div
                    v-else
                    class="empty-list"
                >
                    <span>Список порожній</span>
                </div>
            </TransitionGroup>
        </div>
    </section>
</template>
