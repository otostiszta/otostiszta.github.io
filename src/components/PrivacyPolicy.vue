<template>
  <div class="min-h-screen bg-gray-900 text-gray-300 p-4 md:p-8 flex flex-col items-center">
    <div class="max-w-4xl w-full bg-gray-800 rounded-lg shadow-xl p-6 md:p-10 border border-gray-700">
      <h1 class="text-3xl font-bold text-white mb-2 border-b border-gray-700 pb-4">Adatvédelmi Tájékoztató</h1>
      <p class="text-sm text-gray-400 mb-8">Hatályos: 2026. február 5-től visszavonásig</p>
      
      <div class="space-y-8 text-sm leading-relaxed text-justify">
        
        <!-- 1. Adatkezelő -->
        <section>
          <h2 class="text-xl font-semibold text-orange-500 mb-3">1. Az Adatkezelő adatai</h2>
          <div class="bg-gray-900 p-4 rounded border border-gray-700">
            <p><strong>Név:</strong> Letscode Consulting Kft.</p>
            <p><strong>E-mail:</strong> fejlesztes@letscode.hu</p>
            <p><strong>Weboldal:</strong> https://loudandclear.hu</p>
          </div>
        </section>

        <!-- 2. Adatkezelés célja -->
        <section>
          <h2 class="text-xl font-semibold text-orange-500 mb-3">2. Az adatkezelés célja és jogalapja</h2>
          
          <div class="mb-4">
            <h3 class="text-white font-bold mb-1">A) Kapcsolattartás és Értesítés</h3>
            <p><strong>Cél:</strong> Értesítés küldése a repülős gyakorlóanyagok elkészültéről és projekttel kapcsolatos hírekről.</p>
            <p><strong>Jogalap:</strong> Az Ön önkéntes hozzájárulása (GDPR 6. cikk (1) bekezdés a) pont), amelyet a feliratkozással ad meg.</p>
            <p><strong>Kezelt adatok:</strong> E-mail cím.</p>
          </div>

          <div>
            <h3 class="text-white font-bold mb-1">B) Weboldal látogatottsági elemzése (Analitika)</h3>
            <p><strong>Cél:</strong> A weboldal használatának elemzése a felhasználói élmény javítása érdekében.</p>
            <p><strong>Jogalap:</strong> Az Ön önkéntes hozzájárulása a Cookie Banneren keresztül.</p>
            <p><strong>Kezelt adatok:</strong> IP cím (anonimizálva), böngésző típusa, megtekintett oldalak, kattintások (Hotjar hőtérkép).</p>
          </div>
        </section>

        <!-- 3. Adatfeldolgozók -->
        <section>
          <h2 class="text-xl font-semibold text-orange-500 mb-3">3. Adatfeldolgozók (Harmadik felek)</h2>
          <p class="mb-2">Az adatok kezeléséhez az alábbi szolgáltatókat vesszük igénybe:</p>
          
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-gray-900 p-3 rounded border border-gray-700">
              <h4 class="text-white font-bold">The Rocket Science Group LLC (Mailchimp)</h4>
              <p class="text-xs">USA</p>
              <p class="mt-1">Hírlevélküldés és adatbázis tárolás.</p>
            </div>
            
            <div class="bg-gray-900 p-3 rounded border border-gray-700">
              <h4 class="text-white font-bold">Google Ireland Ltd. (Google Analytics)</h4>
              <p class="text-xs">Írország / USA</p>
              <p class="mt-1">Weboldal statisztika.</p>
            </div>

            <div class="bg-gray-900 p-3 rounded border border-gray-700">
              <h4 class="text-white font-bold">Meta Platforms Ireland Ltd. (Facebook Pixel)</h4>
              <p class="text-xs">Írország / USA</p>
              <p class="mt-1">Marketing mérések.</p>
            </div>

            <div class="bg-gray-900 p-3 rounded border border-gray-700">
              <h4 class="text-white font-bold">Hotjar Ltd.</h4>
              <p class="text-xs">Málta</p>
              <p class="mt-1">Felhasználói viselkedés elemzése (hőtérkép).</p>
            </div>
          </div>
          <p class="mt-3 text-xs text-gray-500">
            Az USA-ba történő adattovábbítás a "Data Privacy Framework" keretrendszer alapján történik, amely biztosítja a megfelelő védelmi szintet.
          </p>
        </section>

        <!-- 4. Cookie Info -->
        <section>
          <h2 class="text-xl font-semibold text-orange-500 mb-3">4. Sütik (Cookies) kezelése</h2>
          <p>A weboldal az alábbi sütiket használja:</p>
          <div class="overflow-x-auto mt-2">
            <table class="w-full text-left text-xs border-collapse">
              <thead>
                <tr class="bg-gray-700 text-white">
                  <th class="p-2 border border-gray-600">Név</th>
                  <th class="p-2 border border-gray-600">Típus</th>
                  <th class="p-2 border border-gray-600">Szolgáltató</th>
                  <th class="p-2 border border-gray-600">Lejárat</th>
                  <th class="p-2 border border-gray-600">Cél</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="p-2 border border-gray-600 font-mono">cookie-consent</td>
                  <td class="p-2 border border-gray-600">Szükséges</td>
                  <td class="p-2 border border-gray-600">Saját</td>
                  <td class="p-2 border border-gray-600">Örök</td>
                  <td class="p-2 border border-gray-600">Az Ön süti beállításainak tárolása.</td>
                </tr>
                <tr>
                  <td class="p-2 border border-gray-600 font-mono">_ga, _gid</td>
                  <td class="p-2 border border-gray-600">Analitika</td>
                  <td class="p-2 border border-gray-600">Google</td>
                  <td class="p-2 border border-gray-600">2 év / 24 óra</td>
                  <td class="p-2 border border-gray-600">Egyedi látogatók megkülönböztetése.</td>
                </tr>
                <tr>
                  <td class="p-2 border border-gray-600 font-mono">_hj*</td>
                  <td class="p-2 border border-gray-600">Analitika</td>
                  <td class="p-2 border border-gray-600">Hotjar</td>
                  <td class="p-2 border border-gray-600">Változó</td>
                  <td class="p-2 border border-gray-600">Látogatói viselkedés rögzítése.</td>
                </tr>
                <tr>
                  <td class="p-2 border border-gray-600 font-mono">_fbp</td>
                  <td class="p-2 border border-gray-600">Marketing</td>
                  <td class="p-2 border border-gray-600">Meta</td>
                  <td class="p-2 border border-gray-600">3 hónap</td>
                  <td class="p-2 border border-gray-600">Hirdetések megjelenítése és mérése.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="mt-2">
            A süti beállításokat bármikor módosíthatja az oldal alján található "Cookie beállítások" linkre kattintva.
          </p>
        </section>

        <!-- 5. Jogok -->
        <section>
          <h2 class="text-xl font-semibold text-orange-500 mb-3">5. Az Ön jogai és jogérvényesítés</h2>
          <p>Önt megilleti a hozzáférés, helyesbítés, törlés, adatkezelés korlátozása és az adathordozhatóság joga.</p>
          <ul class="list-disc list-inside ml-4 mt-2 mb-4 space-y-1">
            <li><strong>Törlés:</strong> Hírlevélről való leiratkozáskor adatait azonnal töröljük.</li>
            <li><strong>Panasz:</strong> Bármilyen kéréssel forduljon hozzánk a fenti e-mail címen.</li>
          </ul>
          <p>Ha úgy érzi, jogai sérültek, panaszt tehet a hatóságnál:</p>
          <div class="bg-gray-900 p-3 mt-2 rounded border border-gray-700 text-xs">
            <strong>Nemzeti Adatvédelmi és Információszabadság Hatóság (NAIH)</strong><br>
            Cím: 1055 Budapest, Falk Miksa utca 9-11.<br>
            Weboldal: www.naih.hu
          </div>
        </section>

      </div>

      <div class="mt-10 pt-6 border-t border-gray-700 flex justify-center">
        <button 
          @click="$emit('close')"
          class="px-8 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded font-bold transition-colors flex items-center gap-2 shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
          </svg>
          Vissza az oldalra
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineEmits(['close'])
</script>
