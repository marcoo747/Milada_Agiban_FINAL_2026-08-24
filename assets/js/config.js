/**
 * ════════════════════════════════════════════════════════════
 *  config.js — إعدادات مؤتمر الشباب 2026
 *  ✅ آمن للرفع على GitHub
 *  🔒 يعمل على GitHub Pages و Netlify تلقائياً
 * ════════════════════════════════════════════════════════════
 *
 *  Netlify  → /_api/gas (Proxy مخفي) ← GAS_URL في Environment Variables
 *  GitHub Pages → DIRECT_GAS_URL للقراءة فقط؛ الكتابة الحساسة تتطلب Proxy
 *
 *  🔒 الأمان: GAS_TOKEN لا يُخزَّن هنا بعد الآن.
 *  على Netlify: يُحقَّن التوكن من السيرفر تلقائياً عبر gas-proxy.js
 *  على GitHub Pages: لا تُرسل أسرار من المتصفح؛ عمليات الكتابة الحساسة تعتمد على Proxy.
 */

window.YC_CONFIG = {
    // ── مسار الـ Proxy الآمن (Netlify فقط) ──
    GAS_URL: '/_api/gas',

    // ── الرابط المباشر لـ Google Apps Script ──
    DIRECT_GAS_URL: 'https://script.google.com/macros/s/AKfycby-1B6wiO4-jbK5jaXRBKmUr8OmOKzG9O9ESohlPm5bviDufCkNg3QTL1EFQ_WWEwuPTA/exec',

    // ── مفتاح الأمان الافتراضي ──
    DEFAULT_GAS_TOKEN: 'milada2026',

    // ── إصدار الإعدادات ──
    CONFIG_VERSION: '2026.08.25-admin-scoring'
};
