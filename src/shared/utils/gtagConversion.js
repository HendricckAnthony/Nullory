/**
 * Dispara conversão do Google Ads.
 * Use em onClick de botões/links para rastrear conversões.
 *
 * @param {string} [url] - Opcional. URL para redirecionar após a conversão (ex: link do WhatsApp).
 * @returns {boolean} false se url foi passada (para prevenir comportamento padrão do link)
 */
export function reportConversion(url) {
  if (typeof window.gtag_report_conversion === "function") {
    window.gtag_report_conversion(url);
    return false;
  }
  return true;
}
