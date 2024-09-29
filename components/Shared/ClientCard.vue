<script setup>
defineProps({
    client: {
        type: Object,
        default: () => ({})
    }
})
const clientsStore = useClientsStore()
</script>

<template>
    <div class="client-card">
        <div class="client-card__wrapper dflex">
            <div class="client-card__content">
                <div class="client-card__item">
                    <div class="client-card__item-label">
                        Ім’я/Нікнейм
                    </div>
                    <div>
                        {{ client.name }}
                    </div>
                </div>
                <div class="client-card__item">
                    <div class="client-card__item-label">
                        Категорія
                    </div>
                    <div>
                        {{ client.category }}
                    </div>
                </div>
                <div class="client-card__item">
                    <div class="client-card__item-label">
                        Телефон
                    </div>
                    <div class="space-nowrap">
                        {{ client.phone }}
                    </div>
                </div>
                <div class="client-card__item font-500">
                    <div class="client-card__item-label space-nowrap">
                        Дата оновлення
                    </div>
                    <div class="space-nowrap">
                        {{ client.updatedAt }}
                    </div>
                </div>
            </div>
            <button 
                @click="clientsStore.ACT_DELETE_CLIENT(client.id)"
                class="pointer"
            >
                <IconDelete />
            </button>
        </div>
    </div>
</template>
