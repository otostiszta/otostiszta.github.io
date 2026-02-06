<template>
  <div class="relative w-80 h-80 mx-auto flex items-center justify-center select-none">
    <svg viewBox="0 0 400 400" class="w-full h-full drop-shadow-2xl">
      <defs>
        <!-- GRIP GRADIENT: Matte dark rubber/plastic -->
        <linearGradient id="gripGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#111" />
          <stop offset="30%" stop-color="#2a2a2a" /> <!-- Highlight -->
          <stop offset="60%" stop-color="#1a1a1a" />
          <stop offset="100%" stop-color="#0a0a0a" />
        </linearGradient>

        <!-- SHAFT GRADIENT: Metallic -->
        <linearGradient id="shaftGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#333" />
          <stop offset="50%" stop-color="#666" />
          <stop offset="100%" stop-color="#222" />
        </linearGradient>
        
        <!-- BOOT SHADOW -->
        <radialGradient id="bootGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#1f2937" />
          <stop offset="100%" stop-color="#111827" />
        </radialGradient>
      </defs>

      <!-- 1. BASE / BOOT -->
      <path d="M120,340 Q200,380 280,340 L290,360 Q200,400 110,360 Z" fill="url(#bootGradient)" opacity="0.9" />

      <!-- 2. SHAFT -->
      <rect x="180" y="200" width="40" height="150" fill="url(#shaftGradient)" rx="4" />

      <!-- 3. GRIP BODY (Complex ergonomic shape) -->
      <!-- Left contour -> Top head -> Right thumb rest -> Bottom neck -->
      <path d="
        M160,220 
        C140,220 130,200 130,150 
        C130,80 160,40 200,40 
        C250,40 270,70 270,120 
        C270,160 250,180 240,180 
        C240,180 260,200 250,230
        C240,260 220,220 220,220
        L160,220 Z" 
        fill="url(#gripGradient)" 
        stroke="#000" stroke-width="2"
      />
      
      <!-- Highlighting details (Seams/Contours) -->
      <path d="M135,150 Q160,160 200,150" fill="none" stroke="#ffffff" stroke-opacity="0.05" stroke-width="1" />
      <path d="M200,40 Q220,45 250,60" fill="none" stroke="#ffffff" stroke-opacity="0.1" stroke-width="1" />

      <!-- 4. BUTTON HOUSING (Bezel) -->
      <path d="M140,90 L135,130 L165,130 L160,90 Z" fill="#111" stroke="#333" stroke-width="1" />
    </svg>

    <!-- INTERACTIVE PTT BUTTON -->
    <!-- Positioned precisely over the housing area defined above -->
    <button
      @mousedown="startTransmit"
      @mouseup="stopTransmit"
      @mouseleave="stopTransmit"
      @touchstart.prevent="startTransmit"
      @touchend.prevent="stopTransmit"
      :disabled="disabled"
      class="absolute top-[25%] left-[34%] w-6 h-10 bg-gradient-to-b from-red-600 to-red-800 rounded-sm border-2 border-red-900 shadow-[0_2px_4px_rgba(0,0,0,0.5),inset_0_1px_2px_rgba(255,255,255,0.3)] transform transition-all duration-75 focus:outline-none group overflow-hidden"
      :class="{ 
        'scale-[0.95] translate-y-[1px] shadow-[inset_0_2px_6px_rgba(0,0,0,0.6)] border-red-950 bg-red-800': isPressed,
        'opacity-50 cursor-not-allowed grayscale': disabled,
        'ring-2 ring-amber-500/30 animate-pulse': !disabled && !isPressed
      }"
      title="Push to Talk"
    >
      <!-- Tactile ridge/grip on button -->
      <div class="w-full h-[2px] bg-red-900/40 mb-1 mt-1"></div>
      <div class="w-full h-[2px] bg-red-900/40 mb-1"></div>
      <div class="w-full h-[2px] bg-red-900/40"></div>
    </button>
    
    <!-- Label -->
    <div class="absolute bottom-4 text-center font-mono uppercase opacity-70">
      <span class="text-navy-400 text-xs tracking-[0.2em] block">ADÁS</span>
      <span class="text-amber-500/80 text-[10px] tracking-wider block mt-0.5">FELIRATKOZÁS</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['transmit', 'stop-transmit'])
const isPressed = ref(false)

const startTransmit = () => {
  if (props.disabled) return
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
