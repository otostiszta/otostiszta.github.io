<template>
  <div class="min-h-screen bg-gray-800 flex flex-col items-center justify-center p-4 relative overflow-hidden">
    <!-- Background Texture (Instrument Panel) -->
    <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>
    
    <!-- Header -->
    <div class="z-10 text-center mb-8 md:mb-12">
      <h1 class="text-3xl md:text-5xl font-bold text-white mb-2 tracking-tight">
        GYAKOROLD A RÁDIÓZÁST
        <span class="block text-orange-500 text-xl md:text-2xl mt-1">- A FÖLDÖN! -</span>
      </h1>
      <p class="text-gray-400 text-sm md:text-base max-w-lg mx-auto">
        Mert a járó motor túl drága csak rádiózni. Iratkozz fel, és értesítünk, amikor kész!
      </p>
    </div>

    <!-- Cockpit Layout -->
    <div class="z-10 flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full max-w-5xl justify-center">
      
      <!-- Control Stick (Left/Center) -->
      <div class="order-2 md:order-1 flex flex-col items-center">
        <ControlStick 
          @transmit="startTransmitting" 
          @stop-transmit="stopTransmitting" 
        />
        <div class="mt-4 text-center text-gray-500 text-sm md:hidden">
          Nyomd a gombot a feliratkozáshoz!
        </div>
      </div>

      <!-- Radio Stack (Right) -->
      <div class="order-1 md:order-2 w-full max-w-md">
        <div class="relative">
          <!-- Connection Wire (Visual decoration) -->
          <svg class="absolute top-1/2 -left-16 w-16 h-24 hidden md:block pointer-events-none" style="z-index: -1;">
            <path d="M0,100 Q40,100 80,50" fill="none" stroke="#374151" stroke-width="4" />
          </svg>
          
          <AviationRadio 
            v-model="email" 
            :is-transmitting="isTransmitting"
          />
          
          <!-- Instructions/Feedback -->
          <div class="mt-4 text-center h-6">
             <transition name="fade">
              <span v-if="statusMessage" :class="statusColor" class="font-mono font-bold">
                {{ statusMessage }}
              </span>
              <span v-else class="text-gray-500 text-xs">
                Írd be az e-mailed, majd nyomd meg a PTT gombot!
              </span>
            </transition>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="absolute bottom-4 text-gray-600 text-xs flex gap-2">
      <span>© {{ new Date().getFullYear() }} Loud and Clear. Minden jog fenntartva.</span>
      <span>|</span>
      <button @click="$emit('open-privacy')" class="hover:text-gray-400 underline">Adatvédelmi Tájékoztató</button>
      <span>|</span>
      <button @click="$emit('open-cookies')" class="hover:text-gray-400 underline">Cookie beállítások</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import jsonp from 'jsonp'
import AviationRadio from './AviationRadio.vue'
import ControlStick from './ControlStick.vue'

const emit = defineEmits(['open-privacy', 'open-cookies'])
const email = ref('')
const isTransmitting = ref(false)
const statusMessage = ref('')
const statusColor = ref('text-gray-400')

// REPLACE THIS WITH YOUR MAILCHIMP FORM ACTION URL
// It should look like: https://<dc>.api.mailchimp.com/subscribe/post-json?u=<user>&id=<list>
const MAILCHIMP_URL = 'https://github.us14.list-manage.com/subscribe/post-json?u=YOUR_U_VALUE&id=YOUR_ID_VALUE'

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}

const startTransmitting = () => {
  if (isTransmitting.value) return
  
  statusMessage.value = ''
  
  if (!email.value) {
    statusMessage.value = 'SAY AGAIN? (Add email)'
    statusColor.value = 'text-yellow-500'
    return
  }

  if (!validateEmail(email.value)) {
    statusMessage.value = 'NEGATIVE (Invalid email)'
    statusColor.value = 'text-red-500'
    return
  }

  isTransmitting.value = true
  statusMessage.value = 'TRANSMITTING...'
  statusColor.value = 'text-orange-500'

  // Construct JSONP URL
  const url = `${MAILCHIMP_URL}&EMAIL=${encodeURIComponent(email.value)}`

  jsonp(url, { param: 'c' }, (err, data) => {
    // Keep transmitting animation for at least a second for effect
    setTimeout(() => {
      isTransmitting.value = false
      
      if (err) {
        console.error(err)
        statusMessage.value = 'MAYDAY! (Network Error)'
        statusColor.value = 'text-red-600'
      } else if (data.result !== 'success') {
        console.error(data.msg)
        // Mailchimp errors can contain HTML
        const msg = data.msg.replace(/<.*?>/g, '') // strip tags
        if (msg.includes('already subscribed')) {
           statusMessage.value = 'ALREADY COPIED (Subscribed)'
           statusColor.value = 'text-blue-400'
        } else {
           statusMessage.value = 'NEGATIVE! (Error)'
           statusColor.value = 'text-red-600'
        }
      } else {
        statusMessage.value = 'ROGER! (Subscribed)'
        statusColor.value = 'text-green-500'
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
