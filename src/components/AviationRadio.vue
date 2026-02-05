<template>
  <div class="relative w-[600px] h-[170px] mx-auto bg-[#1a1b1e] rounded shadow-2xl border-t border-gray-700 font-sans select-none overflow-hidden">
    
    <!-- Main Faceplate Grid -->
    <div class="grid grid-cols-[90px_1fr_90px] h-full">
      
      <!-- LEFT SECTION: Volume/Power -->
      <div class="relative flex flex-col items-center pt-2 border-r border-gray-800/50">
        <!-- COM Label -->
        <div class="absolute top-1 left-2 text-[10px] font-bold text-gray-400">COM</div>
        
        <!-- LED Indicator -->
        <div class="absolute top-2 right-4 w-1.5 h-1.5 rounded-full bg-gray-800 shadow-inner"></div>

        <!-- Volume Knob Group -->
        <div class="mt-5 flex flex-col items-center">
          <div class="relative w-14 h-14 flex items-center justify-center">
             <SingleKnob v-model="volume" :size="40" />
          </div>
          <div class="mt-1 flex flex-col items-center leading-none text-center">
            <span class="text-[8px] text-gray-400 font-bold block">PWR</span>
            <span class="text-[8px] text-gray-400 font-bold block">VOL</span>
            <span class="text-[7px] text-gray-500 mt-0.5 block">PUSH SQ</span>
          </div>
        </div>

        <!-- MON Button -->
        <button class="absolute bottom-3 w-10 h-6 bg-[#252629] rounded-[2px] border-b-2 border-black shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_2px_4px_rgba(0,0,0,0.5)] text-white text-[10px] font-semibold active:translate-y-[1px] active:border-b-0 active:shadow-inner">
          MON
        </button>
      </div>

      <!-- CENTER SECTION: Display & Buttons -->
      <div class="flex flex-col px-1 pt-2">
        <!-- Display Bezel -->
        <div class="bg-[#0a0a0a] rounded-sm border-b border-gray-800 shadow-[inset_0_2px_10px_rgba(0,0,0,1)] relative h-[95px] overflow-hidden mb-2 mx-1">
          <!-- Glass Reflection -->
          <div class="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none z-20"></div>
          
          <!-- LCD Content -->
          <div class="h-full relative z-10 p-3 flex flex-col justify-center">
            
            <!-- Frequencies Row -->
            <div class="flex justify-between items-baseline mb-1 relative">
              
              <!-- ACTIVE FREQ GROUP -->
              <div class="relative w-[180px]">
                <span class="absolute -top-3 left-0 text-[9px] text-white font-bold">ACT</span>
                <div class="flex items-baseline">
                   <span class="text-4xl font-digital text-white tracking-widest leading-none drop-shadow-[0_0_4px_rgba(255,255,255,0.5)]">121.975</span>
                </div>
                <!-- Middle COM Label -->
                <span class="absolute top-1 -right-4 text-[9px] text-white font-bold">COM</span>
              </div>
              
              <!-- STANDBY FREQ / EMAIL INPUT GROUP -->
              <div class="relative w-[180px] flex justify-end">
                <span class="absolute -top-3 left-0 text-[9px] text-white font-bold">STB</span>
                
                <!-- Input Field replacing Standby Freq -->
                <div class="relative w-full text-right">
                  <input
                    type="text"
                    :value="modelValue"
                    @input="$emit('update:modelValue', $event.target.value)"
                    placeholder="EMAIL"
                    class="bg-transparent border-none text-3xl font-digital text-white tracking-widest leading-none p-0 w-full text-right focus:ring-0 placeholder-gray-700 caret-white uppercase h-9"
                    spellcheck="false"
                  />
                  <!-- Transmit Indicator -->
                  <div v-if="isTransmitting" class="absolute -top-4 right-0 text-[9px] bg-white text-black font-bold px-1 animate-pulse z-30">TX</div>
                </div>
              </div>

            </div>

            <!-- Labels Row (Bottom of Display) -->
            <div class="flex justify-between mt-2 px-1">
              <span class="text-[10px] font-digital text-cyan-200/80 tracking-wider">EGLL TWR</span>
              <span class="text-[10px] font-digital text-cyan-200/80 tracking-wider">EGLL ATIS</span>
            </div>
            
          </div>
        </div>

        <!-- Bottom Buttons Row -->
        <div class="flex justify-between items-center px-4 mt-auto mb-3">
          <div class="flex gap-2">
            <button class="radio-btn">COM</button>
            <button class="radio-btn">MEM</button>
            <button class="radio-btn">ICS</button>
          </div>
          
          <!-- Photocell Sensor -->
          <div class="w-1.5 h-1.5 rounded-full bg-black border border-gray-700 shadow-inner mx-2"></div>
          
          <div class="flex gap-2">
            <button class="radio-btn">FUNC</button>
            <button class="radio-btn">CLR</button>
            <button class="radio-btn">ENT</button>
          </div>
        </div>
      </div>

      <!-- RIGHT SECTION: Tuning & Model -->
      <div class="relative flex flex-col items-center pt-2 border-l border-gray-800/50">
        <!-- Swap Button -->
        <button class="mb-auto mt-6 text-white hover:text-gray-300 active:scale-95 transition-transform group">
          <div class="w-9 h-6 bg-[#252629] rounded flex items-center justify-center border-b-2 border-black shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_2px_4px_rgba(0,0,0,0.5)] group-active:translate-y-[1px] group-active:border-b-0 group-active:shadow-inner">
             <svg width="16" height="12" viewBox="0 0 24 16" fill="none">
               <path d="M4 8h16M4 8l6-6M4 8l6 6M20 8l-6-6M20 8l-6 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
             </svg>
          </div>
        </button>

        <!-- Tuning Knob Group -->
        <div class="absolute bottom-3 flex flex-col items-center">
          <div class="relative w-14 h-14 flex items-center justify-center">
             <DualKnob 
               v-model:outerValue="tuneOuter"
               v-model:innerValue="tuneInner"
               :size="56"
             />
          </div>
          <div class="mt-1 flex flex-col items-end w-full px-1 leading-none text-right">
            <span class="text-[8px] text-gray-400 font-bold block w-full text-center">TUNE</span>
            <span class="text-[7px] text-gray-500 mt-0.5 block w-full text-center">PUSH CRSR</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SingleKnob from './SingleKnob.vue'
import DualKnob from './DualKnob.vue'

defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  isTransmitting: {
    type: Boolean,
    default: false
  }
})

defineEmits(['update:modelValue'])

const volume = ref(0)
const tuneOuter = ref(0)
const tuneInner = ref(0)
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');

.font-digital {
  font-family: 'Share Tech Mono', monospace;
}


.radio-btn {
  @apply w-11 h-6 bg-[#252629] rounded-[2px] border-b-2 border-black shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_2px_4px_rgba(0,0,0,0.5)] text-gray-300 text-[10px] font-semibold flex items-center justify-center active:translate-y-[1px] active:border-b-0 active:shadow-inner hover:text-white transition-colors;
}
</style>
