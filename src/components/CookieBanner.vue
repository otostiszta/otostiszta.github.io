<template>
  <transition name="slide-up">
    <div v-if="isOpen" class="fixed bottom-0 left-0 right-0 bg-navy-900 border-t border-navy-700 p-4 md:p-6 shadow-[0_-4px_20px_rgba(0,0,0,0.5)] z-50 text-navy-300">
      <div class="max-w-5xl mx-auto">
        <div class="flex flex-col md:flex-row gap-6 justify-between items-start">
          
          <!-- Text Content -->
          <div class="flex-grow space-y-2">
            <h3 class="text-white font-bold text-lg">Süti (Cookie) Beállítások</h3>
            <p class="text-sm leading-relaxed max-w-2xl">
              Weboldalunk sütiket használ a felhasználói élmény javítása, valamint analitikai és marketing célokból.
              Az "Összes elfogadása" gombra kattintva hozzájárul az összes süti használatához.
              A "Beállítások" alatt testre szabhatja preferenciáit.
              További részletek az <button @click="$emit('open-privacy')" class="text-amber-500 hover:text-amber-400 underline">Adatvédelmi Tájékoztatóban</button>.
            </p>
            
            <!-- Details / Toggles -->
            <div v-if="showDetails" class="mt-4 space-y-3 bg-navy-800 p-4 rounded border border-navy-700 animate-fade-in">
              <!-- Essential -->
              <div class="flex items-center justify-between">
                <div>
                  <span class="text-white font-semibold text-sm">Szükséges (Technikai)</span>
                  <p class="text-xs text-navy-500">Az oldal működéséhez elengedhetetlenek.</p>
                </div>
                <div class="text-xs text-green-500 font-mono font-bold uppercase px-2 py-1 bg-green-500/10 rounded">Mindig aktív</div>
              </div>

              <!-- Analytics -->
              <div class="flex items-center justify-between">
                <div>
                  <span class="text-white font-semibold text-sm">Analitika (Statisztika)</span>
                  <p class="text-xs text-navy-500">Google Analytics, Hotjar - segít megérteni a látogatói szokásokat.</p>
                </div>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" v-model="preferences.analytics" class="sr-only peer">
                  <div class="w-11 h-6 bg-navy-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-amber-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-navy-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-500"></div>
                </label>
              </div>

              <!-- Marketing -->
              <div class="flex items-center justify-between">
                <div>
                  <span class="text-white font-semibold text-sm">Marketing</span>
                  <p class="text-xs text-navy-500">Facebook Pixel - hirdetések optimalizálása.</p>
                </div>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" v-model="preferences.marketing" class="sr-only peer">
                  <div class="w-11 h-6 bg-navy-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-amber-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-navy-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-500"></div>
                </label>
              </div>
            </div>
          </div>

          <!-- Buttons -->
          <div class="flex flex-col sm:flex-row gap-3 min-w-[200px] shrink-0">
            <button 
              v-if="!showDetails"
              @click="acceptAll"
              class="bg-amber-600 hover:bg-amber-500 text-white px-4 py-2 rounded font-bold shadow-md transition-colors text-sm"
            >
              Összes elfogadása
            </button>
            
            <button 
              v-if="showDetails"
              @click="savePreferences"
              class="bg-amber-600 hover:bg-amber-500 text-white px-4 py-2 rounded font-bold shadow-md transition-colors text-sm"
            >
              Beállítások mentése
            </button>

            <button 
              @click="showDetails = !showDetails"
              class="bg-navy-700 hover:bg-navy-600 text-white px-4 py-2 rounded font-semibold border border-navy-600 transition-colors text-sm"
            >
              {{ showDetails ? 'Bezárás' : 'Beállítások' }}
            </button>
            
            <button 
              v-if="!showDetails"
              @click="rejectAll"
              class="text-navy-400 hover:text-white text-xs underline py-2 text-center"
            >
              Csak a szükségesek
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const emit = defineEmits(['save-consent', 'open-privacy'])

const isOpen = ref(false)
const showDetails = ref(false)

const preferences = ref({
  analytics: false,
  marketing: false
})

onMounted(() => {
  const storedConsent = localStorage.getItem('cookie-consent')
  if (!storedConsent) {
    // Show banner if no choice made yet
    setTimeout(() => { isOpen.value = true }, 500)
  } else {
    // Load stored prefs
    preferences.value = JSON.parse(storedConsent)
    // Emit loaded consent so analytics can init immediately
    emit('save-consent', preferences.value)
  }
})

// Public method to reopen the banner
const open = () => {
  const storedConsent = localStorage.getItem('cookie-consent')
  if (storedConsent) {
    preferences.value = JSON.parse(storedConsent)
  }
  isOpen.value = true
  showDetails.value = true
}

const savePreferences = () => {
  localStorage.setItem('cookie-consent', JSON.stringify(preferences.value))
  emit('save-consent', preferences.value)
  isOpen.value = false
}

const acceptAll = () => {
  preferences.value = { analytics: true, marketing: true }
  savePreferences()
}

const rejectAll = () => {
  preferences.value = { analytics: false, marketing: false }
  savePreferences()
}

defineExpose({ open })
</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

.animate-fade-in {
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
