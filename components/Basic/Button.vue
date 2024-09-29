<script setup>
const props = defineProps({
    type: {
        type: String,
        default: 'button'
    },
    disabled: {
		type: Boolean,
		default: false
	},
	loading: {
		type: Boolean,
		default: false
	},
})

const compDisabled = computed(() => (props.loading ? true : props.disabled))
const emit = defineEmits([
	'btnClick',
	'keydownEnter',
	'blur',
	'focus',
	'mousedown',
	'mouseup',
	'mouseleave',
	'keyup'
])
</script>

<template>
    <button
        :type="type"
        :disabled="compDisabled"
        @click="$emit('btnClick', $event)"
		@mousedown="$emit('mousedown')"
		@mouseup="$emit('mouseup')"
		@mouseleave="$emit('mouseleave')"
		@keyup="$emit('keyup')"
		@keydown.enter="$emit('keydownEnter')"
		@blur="$emit('blur')"
		@focus="$emit('focus')"
        class="basic-btn dflex relative pointer"
    >
        <!-- <span
			v-if="loading"
			class="basic-btn__loading"
		>
			<IconSpinner />
		</span> -->
        <span
            v-if="$slots.default"
            :class="[
				'basic-btn__text space-nowrap', 
				{ 'basic-btn__text--hidden': loading }
			]"
        >
            <slot />
        </span>
        <span
            v-if="$slots.icon"
            class="basic-btn__icon"
        >
            <slot name="icon"/>
        </span>
    </button>
</template>