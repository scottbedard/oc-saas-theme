<style scoped>
    input::placeholder {
        @apply text-gray-600;
    }
</style>

<template>
    <div>
        <Label
            v-if="label"
            :required="required"
            :target="id">
            {{ label }}
        </Label>
        <input
            :id="id"
            :placeholder="placeholder"
            :required="required"
            :type="type"
            :value="value"
            class="bg-gray-200 block h-12 px-4 rounded text-lg w-full"
            @input="onInput"
        />
    </div>
</template>

<script>
import { uniqueId } from 'lodash-es';
import Label from './Label.vue';

export default {
    data() {
        return {
            id: `input-${uniqueId()}`,
        };
    },
    mounted() {
        if (this.autofocus) {
            this.focus();
        }
    },
    components: {
        Label,
    },
    methods: {
        focus() {
            const input = this.$el.querySelector('input');

            if (input) {
                input.focus();
            }
        },
        onInput(e) {
            this.$emit('input', e.target.value);
        },
    },
    props: {
        autofocus: {
            default: false,
            type: Boolean,
        },
        label: {
            type: String,
        },
        placeholder: {
            type: String,
        },
        required: {
            default: false,
            type: Boolean,
        },
        type: {
            default: 'text',
            type: String,
        },
        value: {
            default: '',
            type: [Number, String],
        },
    },
};
</script>
