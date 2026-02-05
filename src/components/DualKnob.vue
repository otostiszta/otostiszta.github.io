<template>
  <div class="relative flex items-center justify-center select-none" :style="{ width: size + 'px', height: size + 'px' }">
    
    <!-- OUTER RING (MHz) -->
    <div 
      class="absolute inset-0 rounded-full bg-[#1a1b1e] border border-black shadow-[0_4px_6px_rgba(0,0,0,0.6),inset_0_2px_4px_rgba(255,255,255,0.05)] cursor-ns-resize touch-none z-10"
      :class="{ 'z-30': isDraggingOuter }"
      :style="{ transform: `rotate(${outerValue}deg)` }"
      @mousedown.stop.prevent="startDragOuter"
      @touchstart.stop.prevent="startDragOuter"
    >
      <!-- Knurling texture simulation (simple radial lines or just shadow) -->
      <!-- We keep it clean as requested, no markers -->
      
      <!-- Stronger inner shadow to separate from inner knob -->
      <div class="absolute inset-0 rounded-full shadow-[inset_0_0_8px_rgba(0,0,0,0.9)] pointer-events-none"></div>
    </div>

    <!-- INNER KNOB (kHz) -->
    <!-- Sized at roughly 65% of outer ring -->
    <div 
      class="absolute rounded-full bg-[#151515] border border-black shadow-[0_2px_4px_rgba(0,0,0,0.8),inset_0_1px_3px_rgba(255,255,255,0.1)] cursor-ns-resize touch-none z-20 flex items-center justify-center"
      :class="{ 'z-40': isDraggingInner }"
      :style="{ 
        width: (size * 0.65) + 'px', 
        height: (size * 0.65) + 'px',
        transform: `rotate(${innerValue}deg)`
      }"
      @mousedown.stop.prevent="startDragInner"
      @touchstart.stop.prevent="startDragInner"
    >
       <!-- No marker -->
       <div class="absolute inset-0 rounded-full shadow-[inset_0_0_5px_rgba(0,0,0,0.9)] pointer-events-none"></div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  outerValue: { type: Number, default: 0 },
  innerValue: { type: Number, default: 0 },
  size: { type: Number, default: 56 }
})

const emit = defineEmits(['update:outerValue', 'update:innerValue'])

// --- OUTER DRAG LOGIC ---
const isDraggingOuter = ref(false)
let startYOuter = 0
let startValueOuter = 0

const startDragOuter = (event) => {
  isDraggingOuter.value = true
  startYOuter = event.type.includes('mouse') ? event.clientY : event.touches[0].clientY
  startValueOuter = props.outerValue
  
  window.addEventListener('mousemove', onDragOuter)
  window.addEventListener('touchmove', onDragOuter)
  window.addEventListener('mouseup', stopDragOuter)
  window.addEventListener('touchend', stopDragOuter)
}

const onDragOuter = (event) => {
  if (!isDraggingOuter.value) return
  const clientY = event.type.includes('mouse') ? event.clientY : event.touches[0].clientY
  const deltaY = startYOuter - clientY
  emit('update:outerValue', startValueOuter + (deltaY * 2))
}

const stopDragOuter = () => {
  isDraggingOuter.value = false
  window.removeEventListener('mousemove', onDragOuter)
  window.removeEventListener('touchmove', onDragOuter)
  window.removeEventListener('mouseup', stopDragOuter)
  window.removeEventListener('touchend', stopDragOuter)
}

// --- INNER DRAG LOGIC ---
const isDraggingInner = ref(false)
let startYInner = 0
let startValueInner = 0

const startDragInner = (event) => {
  isDraggingInner.value = true
  startYInner = event.type.includes('mouse') ? event.clientY : event.touches[0].clientY
  startValueInner = props.innerValue
  
  window.addEventListener('mousemove', onDragInner)
  window.addEventListener('touchmove', onDragInner)
  window.addEventListener('mouseup', stopDragInner)
  window.addEventListener('touchend', stopDragInner)
}

const onDragInner = (event) => {
  if (!isDraggingInner.value) return
  const clientY = event.type.includes('mouse') ? event.clientY : event.touches[0].clientY
  const deltaY = startYInner - clientY
  emit('update:innerValue', startValueInner + (deltaY * 2))
}

const stopDragInner = () => {
  isDraggingInner.value = false
  window.removeEventListener('mousemove', onDragInner)
  window.removeEventListener('touchmove', onDragInner)
  window.removeEventListener('mouseup', stopDragInner)
  window.removeEventListener('touchend', stopDragInner)
}
</script>
