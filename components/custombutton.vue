<template>
    <button :class="buttonClass" @click="handleClick">
      <slot />
    </button>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    type: {
      type: String,
      default: 'button',
    },
    variant: {
      type: String,
      default: 'primary',
    },
    size: {
      type: String,
      default: 'md',
    },
  });
  
  const emit = defineEmits(['click']);
  
  const buttonClass = computed(() => {
    const baseClass = 'rounded-lg text-white';
    const variantClass = {
      primary: 'bg-custom-blue hover:bg-blue-700',
      secondary: 'bg-custom-yellow hover:bg-yellow-700',
    };
  
    const sizeClass = {
      sm: 'px-2 py-1 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    };
  
    return `${baseClass} ${variantClass[props.variant] || variantClass.primary} ${sizeClass[props.size] || sizeClass.md}`;
  });
  
  const handleClick = (event) => {
    emit('click', event);
  };
  </script>
  