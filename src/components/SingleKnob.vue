<template>
  <div 
    class="rounded-full bg-[#111827] border border-black shadow-[0_4px_6px_rgba(0,0,0,0.6),inset_0_2px_4px_rgba(255,255,255,0.1)] flex items-center justify-center cursor-ns-resize touch-none relative select-none z-10"
    :class="{ 'z-20': isDragging }"
    :style="{
      width: size + 'px',
      height: size + 'px',
      transform: `rotate(${modelValue}deg)`
    }"
    @mousedown.prevent="startDrag"
    @touchstart.prevent="startDrag"
  >
    <!-- Visible Notch/Marker -->
    <div 
      class="absolute top-1 w-1 rounded-full bg-white/90 shadow-[0_0_2px_rgba(255,255,255,0.5)]" 
      :style="{ height: size * 0.15 + 'px' }"
    ></div>
    
    <!-- Inner Shadow for depth -->
    <div class="absolute inset-0 rounded-full shadow-[inset_0_0_8px_rgba(0,0,0,0.8)] pointer-events-none"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  modelValue: {
    type: Number,
    default: 0
  },
  size: {
    type: Number,
    default: 40
  }
})

const emit = defineEmits(['update:modelValue'])

const isDragging = ref(false)
let startY = 0
let startValue = 0

const startDrag = (event) => {
  isDragging.value = true
  startY = event.type.includes('mouse') ? event.clientY : event.touches[0].clientY
  startValue = props.modelValue
  
  window.addEventListener('mousemove', onDrag)
  window.addEventListener('touchmove', onDrag)
  window.addEventListener('mouseup', stopDrag)
  window.addEventListener('touchend', stopDrag)
}

const onDrag = (event) => {
  if (!isDragging.value) return
  
  const clientY = event.type.includes('mouse') ? event.clientY : event.touches[0].clientY
  const deltaY = startY - clientY 
  const newValue = startValue + (deltaY * 2)
  emit('update:modelValue', newValue)
}

const stopDrag = () => {
  isDragging.value = false
  window.removeEventListener('mousemove', onDrag)
  window.removeEventListener('touchmove', onDrag)
  window.removeEventListener('mouseup', stopDrag)
  window.removeEventListener('touchend', stopDrag)
}
</script>
