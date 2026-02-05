// Google Analytics 4
const loadGoogleAnalytics = () => {
  if (window.dataLayer) return // Already loaded

  const gaId = 'G-XXXXXXXXXX' // Placeholder
  
  // Load Script
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`
  document.head.appendChild(script)

  // Initialize
  window.dataLayer = window.dataLayer || []
  function gtag(){window.dataLayer.push(arguments);}
  gtag('js', new Date())
  gtag('config', gaId)
  
  console.log('Google Analytics loaded')
}

// Hotjar
const loadHotjar = () => {
  if (window.hj) return // Already loaded

  const hjId = 'XXXXXXX' // Placeholder
  const hjsv = 6
  
  ;(function(h,o,t,j,a,r){
      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
      h._hjSettings={hjid:hjId,hjsv:hjsv};
      a=o.getElementsByTagName('head')[0];
      r=o.createElement('script');r.async=1;
      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
      a.appendChild(r);
  })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
  
  console.log('Hotjar loaded')
}

// Facebook Pixel
const loadFacebookPixel = () => {
  if (window.fbq) return // Already loaded

  const pixelId = 'XXXXXXXXXXXXXXXXX' // Placeholder
  
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  
  window.fbq('init', pixelId);
  window.fbq('track', 'PageView');
  
  console.log('Facebook Pixel loaded')
}

export const useAnalytics = () => {
  const initAnalytics = (consent) => {
    // Analytics Category
    if (consent.analytics) {
      loadGoogleAnalytics()
      loadHotjar()
    }

    // Marketing Category
    if (consent.marketing) {
      loadFacebookPixel()
    }
  }

  return {
    initAnalytics
  }
}
