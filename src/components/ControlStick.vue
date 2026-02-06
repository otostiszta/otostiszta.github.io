<template>
  <div class="relative w-80 h-80 mx-auto flex items-center justify-center select-none">
    <svg viewBox="0 0 400 400" class="w-full h-full drop-shadow-2xl">
      <defs>
        <!-- GRIP GRADIENT: Enhanced with more stops for realism -->
        <linearGradient id="gripGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#0a0a0a" />
          <stop offset="15%" stop-color="#1a1a1a" />
          <stop offset="30%" stop-color="#2a2a2a" />
          <stop offset="45%" stop-color="#1f1f1f" />
          <stop offset="60%" stop-color="#1a1a1a" />
          <stop offset="75%" stop-color="#151515" />
          <stop offset="100%" stop-color="#0a0a0a" />
        </linearGradient>

        <!-- GRIP HIGHLIGHT: Top surface reflection -->
        <linearGradient id="gripHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.15" />
          <stop offset="30%" stop-color="#ffffff" stop-opacity="0.08" />
          <stop offset="60%" stop-color="#ffffff" stop-opacity="0.03" />
          <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
        </linearGradient>

        <!-- GRIP TEXTURE PATTERN: Stitching/seams -->
        <pattern id="gripTexture" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="0.3" fill="#ffffff" opacity="0.05" />
        </pattern>

        <!-- SHAFT GRADIENT: Enhanced metallic -->
        <linearGradient id="shaftGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#2a2a2a" />
          <stop offset="20%" stop-color="#4a4a4a" />
          <stop offset="40%" stop-color="#5a5a5a" />
          <stop offset="50%" stop-color="#666" />
          <stop offset="60%" stop-color="#5a5a5a" />
          <stop offset="80%" stop-color="#3a3a3a" />
          <stop offset="100%" stop-color="#222" />
        </linearGradient>

        <!-- SHAFT RADIAL: Circular shadow for depth -->
        <radialGradient id="shaftRadial" cx="50%" cy="0%" r="100%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.1" />
          <stop offset="50%" stop-color="#000000" stop-opacity="0.2" />
          <stop offset="100%" stop-color="#000000" stop-opacity="0.4" />
        </radialGradient>

        <!-- SHAFT REFLECTION: Metallic shine -->
        <linearGradient id="shaftReflection" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.25" />
          <stop offset="15%" stop-color="#ffffff" stop-opacity="0.15" />
          <stop offset="30%" stop-color="#ffffff" stop-opacity="0.05" />
          <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
        </linearGradient>
        
        <!-- BOOT GRADIENT: Enhanced with navy colors -->
        <radialGradient id="bootGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#1e2d4a" />
          <stop offset="40%" stop-color="#162038" />
          <stop offset="80%" stop-color="#0f1a2e" />
          <stop offset="100%" stop-color="#080d17" />
        </radialGradient>

        <!-- BOOT TEXTURE: Fabric-like pattern -->
        <pattern id="bootTexture" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="4" height="4" fill="#ffffff" opacity="0.02" />
          <rect x="4" y="4" width="4" height="4" fill="#ffffff" opacity="0.02" />
        </pattern>

        <!-- BUTTON HOUSING SHADOW -->
        <linearGradient id="housingShadow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#000000" stop-opacity="0.6" />
          <stop offset="100%" stop-color="#000000" stop-opacity="0.3" />
        </linearGradient>
      </defs>

      <!-- 1. BASE / BOOT -->
      <g>
        <!-- Boot shadow layer -->
        <path d="M120,340 Q200,380 280,340 L290,360 Q200,400 110,360 Z" fill="#000000" opacity="0.3" />
        <!-- Boot main -->
        <path d="M120,340 Q200,380 280,340 L290,360 Q200,400 110,360 Z" fill="url(#bootGradient)" opacity="0.95" />
        <!-- Boot texture overlay -->
        <path d="M120,340 Q200,380 280,340 L290,360 Q200,400 110,360 Z" fill="url(#bootTexture)" opacity="0.5" />
        <!-- Boot highlight -->
        <ellipse cx="200" cy="350" rx="60" ry="15" fill="#ffffff" opacity="0.05" />
      </g>

      <!-- 2. SHAFT -->
      <g>
        <!-- Shaft base shadow -->
        <rect x="180" y="200" width="40" height="150" fill="#000000" opacity="0.3" rx="4" />
        <!-- Shaft main -->
        <rect x="180" y="200" width="40" height="150" fill="url(#shaftGradient)" rx="4" />
        <!-- Shaft radial shadow for depth -->
        <rect x="180" y="200" width="40" height="150" fill="url(#shaftRadial)" rx="4" opacity="0.6" />
        <!-- Shaft reflection -->
        <rect x="185" y="200" width="12" height="150" fill="url(#shaftReflection)" rx="2" />
        <!-- Shaft highlight edge -->
        <line x1="185" y1="200" x2="185" y2="350" stroke="#ffffff" stroke-opacity="0.2" stroke-width="1" />
      </g>

      <!-- 3. GRIP BODY (Complex ergonomic shape) -->
      <g>
        <!-- Grip shadow layer -->
        <path d="
          M160,220 
          C140,220 130,200 130,150 
          C130,80 160,40 200,40 
          C250,40 270,70 270,120 
          C270,160 250,180 240,180 
          C240,180 260,200 250,230
          C240,260 220,220 220,220
          L160,220 Z" 
          fill="#000000" 
          stroke="#000" 
          stroke-width="2"
          opacity="0.4"
          transform="translate(2, 2)"
        />
        <!-- Grip main body -->
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
          stroke="#000" 
          stroke-width="2"
        />
        <!-- Grip texture overlay -->
        <path d="
          M160,220 
          C140,220 130,200 130,150 
          C130,80 160,40 200,40 
          C250,40 270,70 270,120 
          C270,160 250,180 240,180 
          C240,180 260,200 250,230
          C240,260 220,220 220,220
          L160,220 Z" 
          fill="url(#gripTexture)" 
        />
        <!-- Grip highlight (top surface) -->
        <path d="
          M160,220 
          C140,220 130,200 130,150 
          C130,80 160,40 200,40 
          C250,40 270,70 270,120 
          C270,160 250,180 240,180 
          C240,180 260,200 250,230
          C240,260 220,220 220,220
          L160,220 Z" 
          fill="url(#gripHighlight)" 
        />
        
        <!-- Stitching/seam lines (realistic grip details) -->
        <!-- Horizontal seam near top -->
        <path d="M140,80 Q160,85 200,80 Q240,85 260,80" fill="none" stroke="#ffffff" stroke-opacity="0.08" stroke-width="1.5" stroke-linecap="round" />
        <!-- Vertical seam on left -->
        <path d="M140,100 Q145,120 145,150 Q145,180 145,200" fill="none" stroke="#ffffff" stroke-opacity="0.06" stroke-width="1" stroke-linecap="round" />
        <!-- Thumb rest contour -->
        <path d="M200,40 Q220,45 250,60 Q255,80 250,100" fill="none" stroke="#ffffff" stroke-opacity="0.1" stroke-width="1.5" stroke-linecap="round" />
        <!-- Bottom grip contour -->
        <path d="M135,150 Q160,160 200,150 Q240,160 265,150" fill="none" stroke="#ffffff" stroke-opacity="0.05" stroke-width="1" stroke-linecap="round" />
        <!-- Side grip lines -->
        <path d="M160,220 Q155,200 150,180 Q145,160 140,140" fill="none" stroke="#ffffff" stroke-opacity="0.04" stroke-width="0.8" />
        <path d="M220,220 Q225,200 230,180 Q235,160 240,140" fill="none" stroke="#ffffff" stroke-opacity="0.04" stroke-width="0.8" />
      </g>

      <!-- 4. BUTTON HOUSING (Bezel) -->
      <g>
        <!-- Housing shadow -->
        <path d="M140,90 L135,130 L165,130 L160,90 Z" fill="#000000" opacity="0.5" transform="translate(1, 1)" />
        <!-- Housing main -->
        <path d="M140,90 L135,130 L165,130 L160,90 Z" fill="#0a0a0a" stroke="#1a1a1a" stroke-width="1" />
        <!-- Housing inner shadow -->
        <path d="M140,90 L135,130 L165,130 L160,90 Z" fill="url(#housingShadow)" />
        <!-- Housing highlight (top edge) -->
        <line x1="140" y1="90" x2="160" y2="90" stroke="#333" stroke-width="0.5" />
        <!-- Housing side highlight -->
        <line x1="160" y1="90" x2="165" y2="130" stroke="#2a2a2a" stroke-width="0.5" opacity="0.5" />
      </g>
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
