<template>
  <div class="relative w-full max-w-md mx-auto bg-gray-900 rounded-lg shadow-xl border-4 border-gray-700 p-4 font-mono select-none">
    <!-- Mounting screws -->
    <div class="absolute top-2 left-2 w-3 h-3 rounded-full bg-gray-600 border border-gray-800"></div>
    <div class="absolute top-2 right-2 w-3 h-3 rounded-full bg-gray-600 border border-gray-800"></div>
    <div class="absolute bottom-2 left-2 w-3 h-3 rounded-full bg-gray-600 border border-gray-800"></div>
    <div class="absolute bottom-2 right-2 w-3 h-3 rounded-full bg-gray-600 border border-gray-800"></div>

    <!-- Radio Brand/Model -->
    <div class="text-center text-gray-400 text-xs mb-2 tracking-widest">
      <span class="font-bold">GARMIN</span> GTR 225
    </div>

    <!-- Main Display Area -->
    <div class="bg-black border-2 border-gray-600 rounded p-4 mb-4 relative overflow-hidden">
      <!-- Glass reflection effect -->
      <div class="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>

      <div class="flex justify-between items-center gap-4">
        <!-- Active Frequency (Static) -->
        <div class="flex flex-col items-end">
          <span class="text-xs text-orange-500 uppercase">Active</span>
          <div class="text-3xl font-bold text-orange-500 font-digital tracking-wider">
            118.100
          </div>
        </div>

        <!-- Swap Icon -->
        <div class="text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
        </div>

        <!-- Standby Frequency / Email Input -->
        <div class="flex flex-col items-start flex-grow">
          <span class="text-xs text-orange-400 uppercase">Standby / Email</span>
          <div class="relative w-full">
            <input
              type="email"
              :value="modelValue"
              @input="$emit('update:modelValue', $event.target.value)"
              placeholder="EMAIL ADDR"
              class="w-full bg-transparent text-2xl font-bold text-orange-400 font-digital tracking-wider border-none focus:ring-0 p-0 placeholder-orange-900/50 caret-orange-500 uppercase"
              :class="{ 'animate-pulse': isTransmitting }"
            />
            <!-- TX Indicator -->
            <div 
              v-if="isTransmitting"
              class="absolute -top-5 right-0 bg-red-600 text-white text-[10px] px-1 rounded animate-pulse"
            >
              TX
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Controls Row -->
    <div class="flex justify-between items-center px-2">
      <!-- Volume Knob -->
      <div class="flex flex-col items-center gap-1">
        <div class="w-12 h-12 rounded-full bg-gray-800 border-2 border-gray-600 shadow-lg flex items-center justify-center relative transform rotate-45">
          <div class="w-1 h-4 bg-white rounded-full absolute top-1"></div>
        </div>
        <span class="text-[10px] text-gray-400 uppercase">Vol/Sq</span>
      </div>

      <!-- Function Buttons -->
      <div class="flex gap-2">
        <button class="w-10 h-6 bg-gray-800 border border-gray-600 rounded text-[10px] text-gray-300 shadow active:bg-gray-700 active:shadow-inner">COM</button>
        <button class="w-10 h-6 bg-gray-800 border border-gray-600 rounded text-[10px] text-gray-300 shadow active:bg-gray-700 active:shadow-inner">NAV</button>
        <button class="w-10 h-6 bg-gray-800 border border-gray-600 rounded text-[10px] text-gray-300 shadow active:bg-gray-700 active:shadow-inner">SYS</button>
      </div>

      <!-- Frequency Knob -->
      <div class="flex flex-col items-center gap-1">
        <div class="w-12 h-12 rounded-full bg-gray-800 border-2 border-gray-600 shadow-lg flex items-center justify-center relative">
          <!-- Inner knob -->
          <div class="w-8 h-8 rounded-full bg-gray-700 border border-gray-500 shadow-md"></div>
        </div>
        <span class="text-[10px] text-gray-400 uppercase">Push Dual</span>
      </div>
    </div>
  </div>
</template>

<script setup>
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
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');

.font-digital {
  font-family: 'Share Tech Mono', monospace;
  text-shadow: 0 0 5px rgba(249, 115, 22, 0.5);
}
</style>
