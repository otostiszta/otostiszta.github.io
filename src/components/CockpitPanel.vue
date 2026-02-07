<template>
  <div class="min-h-screen bg-navy-800 flex flex-col items-center justify-center p-4 relative overflow-hidden">
    <!-- Background Texture (Instrument Panel) -->
    <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>
    
    <!-- Header -->
    <div class="z-10 text-center mb-8 md:mb-12">
      <h1 class="text-3xl md:text-5xl font-bold text-white mb-2 tracking-tight">
        GYAKOROLD A RÁDIÓZÁST
        <span class="block text-amber-500 text-xl md:text-2xl mt-1">- A FÖLDÖN -</span>
      </h1>
      <p class="text-navy-400 text-sm md:text-base max-w-lg mx-auto">
        Élethű rádió-szimulációval készülünk, hogy magabiztosan nyomhasd az adást az első egyedüli körödig.
        <span class="block mt-2 text-white font-semibold">Hamarosan indulunk. Foglald le a helyed.</span>
      </p>
    </div>

    <!-- Step Guide -->
    <div class="z-10 flex flex-wrap justify-center gap-x-6 gap-y-1 text-navy-500 font-mono text-xs md:text-sm mb-6 max-w-lg mx-auto">
      <span><span class="text-amber-500 font-bold">1.</span> Hangold be az e-mailed a rádión</span>
      <span class="hidden md:inline text-navy-600">→</span>
      <span><span class="text-amber-500 font-bold">2.</span> Nyomd meg az adóvevő gombot</span>
      <span class="hidden md:inline text-navy-600">→</span>
      <span><span class="text-amber-500 font-bold">3.</span> Kész, fogadunk!</span>
    </div>

    <!-- Cockpit Layout -->
    <div class="z-10 flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full max-w-5xl justify-center">
      
      <!-- Control Stick (Left/Center) -->
      <div class="order-2 md:order-1 flex flex-col items-center">
        <ControlStick 
          :disabled="!isValidEmail || isTransmitting || subscriptionSuccess"
          @transmit="startTransmitting" 
          @stop-transmit="stopTransmitting" 
        />
      </div>

      <!-- Radio Stack (Right) -->
      <div class="order-1 md:order-2 w-full max-w-[600px]">
        <div class="relative">
          <!-- Connection Wire (Visual decoration) -->
          <svg class="absolute top-1/2 -left-16 w-16 h-24 hidden md:block pointer-events-none" style="z-index: -1;">
            <path 
              d="M0,100 Q40,100 80,50" 
              fill="none" 
              :stroke="isValidEmail ? '#f59e0b' : '#1e2d4a'" 
              :stroke-width="isValidEmail ? 3 : 4" 
              class="transition-colors duration-500"
              :class="{ 'animate-pulse': isValidEmail }"
            />
          </svg>
          
          <AviationRadio 
            v-model="email" 
            :is-transmitting="isTransmitting"
            :subscription-success="subscriptionSuccess"
          />
          
          <!-- Instructions/Feedback -->
          <div class="mt-4 text-center h-6">
             <transition name="fade">
              <span v-if="statusMessage" :class="statusColor" class="font-mono font-bold block">
                {{ statusMessage }}
              </span>
              <span v-else class="text-navy-500 text-xs block">
                Hangold be az e-mail frekvenciádat a STB mezőbe ↑
              </span>
            </transition>
          </div>
          
          <!-- Trust/Reassurance -->
          <p class="text-navy-600 text-[10px] md:text-xs mt-2 text-center font-mono">
            <span v-if="subscriptionSuccess" class="text-green-600/70">
              Visszaigazoló e-mailt küldtünk. Ellenőrizd a spam mappát is!
            </span>
            <span v-else>
              Csak induláskor értesítünk. Nincs spam, bármikor leiratkozhatsz.
            </span>
          </p>
          
          <!-- Subscription Consent -->
          <p class="text-navy-500 text-[9px] md:text-[10px] mt-2 text-center font-mono">
            Feliratkozással elfogadod, hogy e-mailben értesítsünk a szolgáltatás indulásáról.
          </p>
        </div>
      </div>
    </div>

    <!-- Social Proof Section -->
    <div class="z-10 w-full max-w-3xl mx-auto mt-12 mb-8 px-4">
      <div class="border border-navy-700 bg-navy-800/50 rounded-lg p-6 md:p-8 text-center">
        <h2 class="text-amber-500 font-mono text-sm md:text-base mb-3 tracking-wider">
          — VALÓS FORRASOK ALAPJÁN —
        </h2>
        <p class="text-navy-400 font-mono text-xs md:text-sm leading-relaxed">
          A szimuláció valós repülős rádiózás és szabványos ICAO frazeológia alapján készül.
        </p>
      </div>
    </div>

    <!-- Target Audience Section -->
    <div class="z-10 w-full max-w-5xl mx-auto mb-24 px-4">
      <h2 class="text-white font-mono text-sm md:text-base mb-6 text-center tracking-wider">
        KIKNEK KÉSZÜL?
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <!-- Pilótanövendékek -->
        <div class="bg-navy-800/50 border border-navy-700 rounded-lg p-4 text-center group hover:bg-navy-800 hover:border-amber-500/30 transition-all duration-300">
          <div class="h-10 flex items-center justify-center mb-3 text-amber-500">
            <!-- Small Plane Icon -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </div>
          <h3 class="text-white font-mono text-xs font-bold mb-2">PILÓTANÖVENDÉKEK</h3>
          <p class="text-navy-300 font-mono text-[10px] leading-relaxed">
            Akik most kezdik a képzést
          </p>
        </div>

        <!-- PPL-re készülők -->
        <div class="bg-navy-800/50 border border-navy-700 rounded-lg p-4 text-center group hover:bg-navy-800 hover:border-amber-500/30 transition-all duration-300">
          <div class="h-10 flex items-center justify-center mb-3 text-amber-500">
            <!-- Checklist/License Icon -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 class="text-white font-mono text-xs font-bold mb-2">PPL-RE KÉSZÜLŐK</h3>
          <p class="text-navy-300 font-mono text-[10px] leading-relaxed">
            Vizsgára készülők
          </p>
        </div>

        <!-- Gyakorló pilóták -->
        <div class="bg-navy-800/50 border border-navy-700 rounded-lg p-4 text-center group hover:bg-navy-800 hover:border-amber-500/30 transition-all duration-300">
          <div class="h-10 flex items-center justify-center mb-3 text-amber-500">
             <!-- Headset Icon -->
             <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
               <path stroke-linecap="round" stroke-linejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
             </svg>
          </div>
          <h3 class="text-white font-mono text-xs font-bold mb-2">GYAKORLÓ PILÓTÁK</h3>
          <p class="text-navy-300 font-mono text-[10px] leading-relaxed">
            Akik magabiztosabban szeretnének rádiózni élő forgalom előtt
          </p>
        </div>
      </div>
    </div>

    <!-- Audio Samples Section -->
    <div class="z-10 w-full max-w-5xl mx-auto mb-24 px-4">
      <h2 class="text-white font-mono text-sm md:text-base mb-3 text-center tracking-wider">
        ÍZELÍTŐ
      </h2>
      <p class="text-navy-400 font-mono text-xs md:text-sm mb-6 text-center max-w-2xl mx-auto leading-relaxed">
        Ezek csak minták — a szimulációban a növendéknek is beszélnie kell.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <!-- Sample 1 -->
        <div class="bg-navy-800/50 border border-navy-700 rounded-lg p-4 group hover:bg-navy-800 hover:border-amber-500/30 transition-all duration-300">
          <h3 class="text-amber-500 font-mono text-xs font-bold mb-3 text-center">MINTA 1</h3>
          <audio controls class="w-full">
            <source src="/sample-1.wav" type="audio/wav">
            A böngésződ nem támogatja az audio elemet.
          </audio>
        </div>

        <!-- Sample 2 -->
        <div class="bg-navy-800/50 border border-navy-700 rounded-lg p-4 group hover:bg-navy-800 hover:border-amber-500/30 transition-all duration-300">
          <h3 class="text-amber-500 font-mono text-xs font-bold mb-3 text-center">MINTA 2</h3>
          <audio controls class="w-full">
            <source src="/sample-2.wav" type="audio/wav">
            A böngésződ nem támogatja az audio elemet.
          </audio>
        </div>

        <!-- Sample 3 -->
        <div class="bg-navy-800/50 border border-navy-700 rounded-lg p-4 group hover:bg-navy-800 hover:border-amber-500/30 transition-all duration-300">
          <h3 class="text-amber-500 font-mono text-xs font-bold mb-3 text-center">MINTA 3</h3>
          <audio controls class="w-full">
            <source src="/sample-3.wav" type="audio/wav">
            A böngésződ nem támogatja az audio elemet.
          </audio>
        </div>

        <!-- Sample 4 -->
        <div class="bg-navy-800/50 border border-navy-700 rounded-lg p-4 group hover:bg-navy-800 hover:border-amber-500/30 transition-all duration-300">
          <h3 class="text-amber-500 font-mono text-xs font-bold mb-3 text-center">MINTA 4</h3>
          <audio controls class="w-full">
            <source src="/sample-4.wav" type="audio/wav">
            A böngésződ nem támogatja az audio elemet.
          </audio>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="absolute bottom-4 text-navy-300 text-xs flex gap-2">
      <span>© {{ new Date().getFullYear() }} Loud and Clear. Minden jog fenntartva.</span>
      <span>|</span>
      <button @click="$emit('open-privacy')" class="hover:text-white underline transition-colors">Adatvédelmi Tájékoztató</button>
      <span>|</span>
      <button @click="$emit('open-cookies')" class="hover:text-white underline transition-colors">Cookie beállítások</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import jsonp from 'jsonp'
import AviationRadio from './AviationRadio.vue'
import ControlStick from './ControlStick.vue'

const emit = defineEmits(['open-privacy', 'open-cookies'])
const email = ref('')
const isTransmitting = ref(false)
const statusMessage = ref('')
const statusColor = ref('text-navy-400')
const subscriptionSuccess = ref(false)

// Mailchimp form action URL converted to JSONP format
// Original form: https://letscode.us9.list-manage.com/subscribe/post?u=227ab47fe712fbe0b0287b825&id=442780eeeb&f_id=000c52e1f0
const MAILCHIMP_URL = 'https://letscode.us9.list-manage.com/subscribe/post-json?u=227ab47fe712fbe0b0287b825&id=442780eeeb'

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}

const isValidEmail = computed(() => {
  return email.value && validateEmail(email.value)
})

watch(email, (newVal) => {
  if (subscriptionSuccess.value) return
  if (isTransmitting.value) return

  if (isValidEmail.value) {
    statusMessage.value = 'Frekvencia beállítva. Nyomd az adást!'
    statusColor.value = 'text-green-400'
  } else if (newVal.length > 0) {
    statusMessage.value = '' // Clear until valid or empty
  } else {
    statusMessage.value = ''
  }
})

const startTransmitting = () => {
  if (isTransmitting.value) return
  
  statusMessage.value = ''
  
  if (!email.value) {
    // Should be prevented by disabled button, but keep as fallback
    statusMessage.value = 'Hangold be az e-mail frekvenciádat a STB mezőbe ↑'
    statusColor.value = 'text-navy-500'
    return
  }

  if (!validateEmail(email.value)) {
    statusMessage.value = 'NEGATIVE — Ellenőrizd a frekvenciát!'
    statusColor.value = 'text-red-500'
    return
  }

  isTransmitting.value = true
  statusMessage.value = 'ADÁS...'
  statusColor.value = 'text-amber-500 animate-pulse'

  // Construct JSONP URL
  const url = `${MAILCHIMP_URL}&EMAIL=${encodeURIComponent(email.value)}`

  jsonp(url, { param: 'c' }, (err, data) => {
    // Keep transmitting animation for at least a second for effect
    setTimeout(() => {
      isTransmitting.value = false
      
      if (err) {
        console.error(err)
        statusMessage.value = 'MAYDAY! Hálózati hiba — próbáld újra.'
        statusColor.value = 'text-red-600'
      } else if (data.result !== 'success') {
        console.error(data.msg)
        // Mailchimp errors can contain HTML
        const msg = data.msg.replace(/<.*?>/g, '') // strip tags
        if (msg.includes('already subscribed')) {
           statusMessage.value = 'MÁR FOGADTUNK. Ellenőrizd a postaládád!'
           statusColor.value = 'text-blue-400'
           subscriptionSuccess.value = true
        } else {
           statusMessage.value = 'NEGATIVE! (Error)'
           statusColor.value = 'text-red-600'
        }
      } else {
        statusMessage.value = 'ROGER! Visszaigazolást küldtünk.'
        statusColor.value = 'text-green-500'
        subscriptionSuccess.value = true
        email.value = '' // Clear input on success
      }
    }, 800)
  })
}

const stopTransmitting = () => {
  // We don't stop the request on release, but we could stop the visual effect if it was manual
  // Here we let the request finish controlling the state
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
