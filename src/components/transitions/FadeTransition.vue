<template>
    <transition
        enter-active-class="transition-opacity transition-100"
        enter-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity transition-100"
        leave-class="opacity-100"
        leave-to-class="opacity-0"
        mode="out-in">
        <slot />
    </transition>
</template>
