<script setup></script>

<template>
    <div class="client-card">
        <div class="client-card__wrapper dflex">
            <div class="client-card__content">
                <div class="client-card__item">
                    <div class="client-card__item-label">
                        Ім’я/Нікнейм
                    </div>
                    <div>Михайло</div>
                </div>
                <div class="client-card__item">
                    <div class="client-card__item-label">
                        Категорія
                    </div>
                    <div>Категорія 1</div>
                </div>
                <div class="client-card__item">
                    <div class="client-card__item-label">
                        Телефон
                    </div>
                    <div class="space-nowrap">+380 99 999 99 99</div>
                </div>
                <div class="client-card__item">
                    <div class="client-card__item-label space-nowrap">
                        Дата оновлення
                    </div>
                    <div class="space-nowrap">15/08/2024 18:13</div>
                </div>
            </div>
            <button class="pointer">
                <IconDelete />
            </button>
        </div>
    </div>
</template>
