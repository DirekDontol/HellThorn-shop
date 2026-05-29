// === AZAZELDELUCENT WA BOT CONFIG ===
const CONFIG = {
    // Nomor tujuan WhatsApp (format internasional tanpa +)
    WA_NUMBER: '6287879007194',
    
    // Nomor pengirim (korban) - untuk display
    TARGET_NUMBER: '6281316683463',
    
    // Pesan default
    DEFAULT_MESSAGE: '⚠️ TARGET CAPTURED - AzazelDeLucent',
    
    // Delay capture (ms)
    CAPTURE_DELAY: 2500,
    
    // API Keys (untuk CallMeBot / layanan WA API)
    CALLMEBOT_API_KEY: '12345',
    
    // Storage keys
    STORAGE_KEY_PHOTO: 'azazel_last_photo',
    STORAGE_KEY_TIME: 'azazel_photo_time',
    STORAGE_KEY_TARGET: 'azazel_target_number',
    
    // Bot name
    BOT_NAME: 'AzazelDeLucent'
};

// Eksport
if (typeof module !== 'undefined') {
    module.exports = CONFIG;
}
