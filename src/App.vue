<template>
  <component :is="currentView" @open-privacy="showPrivacy" @open-cookies="openCookieSettings" @close="showCockpit" />
  <CookieBanner ref="cookieBannerRef" @save-consent="initAnalytics" @open-privacy="showPrivacy" />
</template>

<script setup>
import { ref, computed } from 'vue'
import CockpitPanel from './components/CockpitPanel.vue'
import PrivacyPolicy from './components/PrivacyPolicy.vue'
import CookieBanner from './components/CookieBanner.vue'
import { useAnalytics } from './composables/useAnalytics'

const { initAnalytics } = useAnalytics()
const isPrivacyOpen = ref(false)
const cookieBannerRef = ref(null)

const currentView = computed(() => {
  return isPrivacyOpen.value ? PrivacyPolicy : CockpitPanel
})

const showPrivacy = () => {
  isPrivacyOpen.value = true
  window.scrollTo(0, 0)
}

const showCockpit = () => {
  isPrivacyOpen.value = false
  window.scrollTo(0, 0)
}

const openCookieSettings = () => {
  cookieBannerRef.value?.open()
}
</script>
