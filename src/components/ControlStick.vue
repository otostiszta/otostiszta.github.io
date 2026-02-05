<template>
  <div class="relative w-64 h-64 mx-auto flex items-center justify-center select-none">
    <svg viewBox="0 0 200 200" class="w-full h-full drop-shadow-2xl">
      <!-- Stick Base/Boot -->
      <path d="M70,180 Q100,200 130,180 L140,190 Q100,220 60,190 Z" fill="#1f2937" />
      
      <!-- Stick Shaft -->
      <rect x="85" y="100" width="30" height="90" fill="#374151" rx="5" />
      
      <!-- Stick Grip (Ergonomic shape) -->
      <path d="M75,100 
               Q65,100 65,80 
               Q65,40 100,30 
               Q135,40 135,80 
               Q135,100 125,100 
               Z" 
            fill="#111827" stroke="#374151" stroke-width="2" />
      
      <!-- Grip Texture/Detail -->
      <path d="M80,80 Q100,85 120,80" fill="none" stroke="#374151" stroke-width="1" opacity="0.5" />
      <path d="M80,70 Q100,75 120,70" fill="none" stroke="#374151" stroke-width="1" opacity="0.5" />
      <path d="M80,60 Q100,65 120,60" fill="none" stroke="#374151" stroke-width="1" opacity="0.5" />

      <!-- PTT Button Housing -->
      <path d="M65,60 Q55,60 55,50 Q55,40 65,40 Z" fill="#1f2937" />
    </svg>

    <!-- Interactive PTT Button -->
    <!-- Positioned absolutely over the SVG housing -->
    <button
      @mousedown="startTransmit"
      @mouseup="stopTransmit"
      @mouseleave="stopTransmit"
      @touchstart.prevent="startTransmit"
      @touchend.prevent="stopTransmit"
      class="absolute top-[22%] left-[28%] w-6 h-8 bg-red-600 rounded-l-full border-r-2 border-red-800 shadow-md transform transition-transform duration-100 focus:outline-none group"
      :class="{ 'translate-x-1 bg-red-700 shadow-inner': isPressed }"
      title="Push to Talk (Subscribe)"
    >
      <!-- Button detail -->
      <div class="absolute top-1/2 left-1 w-1 h-4 bg-red-400/30 rounded-full transform -translate-y-1/2"></div>
    </button>
    
    <!-- Label -->
    <div class="absolute bottom-0 text-gray-500 font-mono text-xs tracking-widest uppercase">
      PTT to Subscribe
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['transmit', 'stop-transmit'])
const isPressed = ref(false)

const startTransmit = () => {
  if (!isPressed.value) {
    isPressed.value = true
    emit('transmit')
  }
}

const stopTransmit = () => {
  if (isPressed.value) {
    isPressed.value = false
    emit('stop-transmit')
  }
}
</script>
