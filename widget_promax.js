// Widget Aksesibilitas Pro Max - Custom Built
(function() {
    // Inject Font & CSS for the Widget
    const style = document.createElement('style');
    style.innerHTML = `
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        
        :root {
            --w-primary: #0D7C3E;
            --w-primary-hover: #15A050;
            --w-bg-light: #f8fafc;
            --w-bg-dark: #0f172a;
            --w-card-light: #ffffff;
            --w-card-dark: #1e293b;
            --w-text-light: #1e293b;
            --w-text-dark: #f8fafc;
            --w-text-muted-light: #64748b;
            --w-text-muted-dark: #94a3b8;
            --w-border-light: #e2e8f0;
            --w-border-dark: #334155;
            --w-radius: 20px;
        }

        #w-promax-container {
            font-family: 'Plus Jakarta Sans', sans-serif;
            position: fixed;
            bottom: 20px;
            left: 20px; /* Balik ke pojok kiri banget */
            z-index: 999999;
        }

        /* Trigger Button */
        #w-trigger-btn {
            width: 64px;
            height: 64px;
            border-radius: 50%;
            background-color: white;
            background-image: url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjiOvD4Ltc6sq1QpiPoz0mXOnxdoKFAnxHJDzzAHSFCh4KETnup6EcarUj_NBiAw5OXBsBJKeZOG8vcrUjFgIOrqSU88DSnRQ-l2sZQHrdk46Gc8msBfGCB6o_NfuAV0jKTa7bUNtsqol-QTgVlJyDkGuxC-zQ2kU6sPrEiHUzIZL4S4bXH6DwtVMZAL4Wc/s320/widget-aksesbilitas-.png');
            background-size: cover;
            background-position: center;
            border: 2px solid rgba(255,255,255,0.8);
            box-shadow: 0 10px 30px rgba(13,124,62,0.4);
            cursor: pointer;
            transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
            animation: w-pulse-glow 2.5s infinite cubic-bezier(0.4,0,0.2,1);
        }

        #w-trigger-btn:hover {
            transform: scale(1.1) rotate(5deg);
            animation: none;
        }

        @keyframes w-pulse-glow {
            0% { box-shadow: 0 0 0 0 rgba(13, 124, 62, 0.6), 0 10px 30px rgba(13,124,62,0.4); }
            70% { box-shadow: 0 0 0 25px rgba(13, 124, 62, 0), 0 10px 30px rgba(13,124,62,0.4); }
            100% { box-shadow: 0 0 0 0 rgba(13, 124, 62, 0), 0 10px 30px rgba(13,124,62,0.4); }
        }

        /* Main Modal */
        #w-modal {
            position: absolute;
            bottom: 80px;
            left: 0;
            width: 420px;
            height: calc(100vh - 120px);
            max-height: 850px;
            background: var(--w-bg-light);
            border-radius: 30px;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
            display: flex;
            flex-direction: column;
            overflow: hidden;
            opacity: 0;
            visibility: hidden;
            transform: translateY(20px) scale(0.95);
            transform-origin: bottom left;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        #w-modal.active {
            opacity: 1;
            visibility: visible;
            transform: translateY(0) scale(1);
        }

        /* Dark Mode Theme */
        #w-modal.w-dark-theme {
            background: var(--w-bg-dark);
            color: var(--w-text-dark);
        }
        
        #w-modal.w-dark-theme .w-card {
            background: var(--w-card-dark);
            border-color: var(--w-border-dark);
        }

        #w-modal.w-dark-theme .w-text-main { color: var(--w-text-dark); }
        #w-modal.w-dark-theme .w-text-sub { color: var(--w-text-muted-dark); }

        /* Header Area */
        .w-header {
            background: linear-gradient(135deg, rgba(255,255,255,0.98), rgba(240,253,244,0.95));
            padding: 24px;
            position: relative;
            border-bottom: 1px solid var(--w-border-light);
            overflow: hidden;
            border-radius: 20px 20px 0 0;
        }
        
        .w-header::before {
            content: '';
            position: absolute;
            top: 0; right: 0; bottom: 0; left: 0;
            background-image: url("data:image/svg+xml,%3Csvg width='400' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M400,0 L400,120 L150,120 Q300,80 350,0 Z' fill='%23e2f5e9' opacity='0.7' /%3E%3Cpath d='M400,0 Q320,60 250,120 L400,120 Z' fill='%23bdf0d0' opacity='0.5' /%3E%3Cpath d='M320,120 Q360,70 400,20 L400,120 Z' fill='%232bd475' opacity='0.3' /%3E%3Cpath d='M350,120 Q370,100 380,80 Q390,100 400,120 Z' fill='%230D7C3E' opacity='0.6' /%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-position: bottom right;
            background-size: auto 100%;
            z-index: 0;
            pointer-events: none;
        }

        #w-modal.w-dark-theme .w-header {
            background: linear-gradient(135deg, rgba(15,23,42,0.98), rgba(20,35,60,0.95));
            border-bottom-color: var(--w-border-dark);
        }
        
        #w-modal.w-dark-theme .w-header::before {
            opacity: 0.15;
        }

        .w-header-top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 20px;
            position: relative;
            z-index: 1;
        }

        .w-title-wrap {
            display: flex;
            align-items: center;
            gap: 12px;
        }
        
        .w-title-icon {
            width: 40px;
            height: 40px;
            background: var(--w-primary);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
        }

        .w-title h2 {
            margin: 0;
            font-size: 18px;
            font-weight: 700;
            color: var(--w-text-light);
        }
        
        .w-title p {
            margin: 2px 0 0 0;
            font-size: 12px;
            color: var(--w-text-muted-light);
        }

        #w-modal.w-dark-theme .w-title h2 { color: var(--w-text-dark); }
        
        .w-close-btn {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background: white;
            border: 1px solid var(--w-border-light);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            color: var(--w-text-muted-light);
            transition: all 0.2s;
        }
        
        #w-modal.w-dark-theme .w-close-btn {
            background: var(--w-card-dark);
            border-color: var(--w-border-dark);
        }

        .w-dropdown {
            background: var(--w-card-light);
            border: 1px solid var(--w-border-light);
            border-radius: 12px;
            padding: 12px 16px;
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 12px;
            cursor: pointer;
            font-weight: 600;
            font-size: 14px;
            color: var(--w-text-light);
        }

        .w-dropdown-icon {
            width: 28px;
            height: 28px;
            border-radius: 50%;
            background: var(--w-primary);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            font-weight: 700;
        }

        /* Scroll Area */
        .w-body {
            padding: 24px;
            overflow-y: auto;
            flex: 1;
        }
        
        .w-body::-webkit-scrollbar { width: 6px; }
        .w-body::-webkit-scrollbar-track { background: transparent; }
        .w-body::-webkit-scrollbar-thumb { background: var(--w-border-light); border-radius: 10px; }
        #w-modal.w-dark-theme .w-body::-webkit-scrollbar-thumb { background: var(--w-border-dark); }

        .w-section-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 16px;
        }

        .w-section-title {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 16px;
            font-weight: 700;
            color: var(--w-text-light);
        }
        
        .w-theme-toggle {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 12px;
            color: var(--w-text-muted-light);
            font-weight: 600;
        }

        /* Toggle Switch */
        .w-switch {
            position: relative;
            display: inline-block;
            width: 44px;
            height: 24px;
        }
        .w-switch input { opacity: 0; width: 0; height: 0; }
        .w-slider {
            position: absolute;
            cursor: pointer;
            top: 0; left: 0; right: 0; bottom: 0;
            background-color: #cbd5e1;
            transition: .4s;
            border-radius: 34px;
        }
        .w-slider:before {
            position: absolute;
            content: "";
            height: 18px;
            width: 18px;
            left: 3px;
            bottom: 3px;
            background-color: white;
            transition: .4s;
            border-radius: 50%;
        }
        input:checked + .w-slider { background-color: var(--w-primary); }
        input:checked + .w-slider:before { transform: translateX(20px); }

        /* Grid */
        .w-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
            margin-bottom: 24px;
        }

        .w-card {
            background: var(--w-card-light);
            border: 1px solid var(--w-border-light);
            border-radius: 16px;
            padding: 16px 12px;
            text-align: center;
            cursor: pointer;
            transition: all 0.2s;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
        }

        .w-card:hover {
            border-color: var(--w-primary);
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(13,124,62,0.1);
        }
        
        .w-card.active {
            border-color: var(--w-primary);
            background: rgba(13,124,62,0.05);
        }

        .w-card-icon {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
        }
        
        /* Vibrant Colors for Icons */
        .icon-blue { background: #e0f2fe; color: #0284c7; }
        .icon-indigo { background: #e0e7ff; color: #4f46e5; }
        .icon-purple { background: #f3e8ff; color: #9333ea; }
        .icon-green { background: #dcfce7; color: #16a34a; }
        .icon-orange { background: #ffedd5; color: #ea580c; }
        .icon-pink { background: #fce7f3; color: #db2777; }

        .w-card-title {
            font-size: 12px;
            font-weight: 700;
            color: var(--w-text-light);
            line-height: 1.2;
        }
        
        .w-card-desc {
            font-size: 10px;
            color: var(--w-text-muted-light);
            line-height: 1.3;
        }

        /* Footer Reset */
        .w-reset-box {
            background: linear-gradient(135deg, #0f4c28, #15A050);
            border-radius: 16px;
            padding: 20px;
            color: white;
            margin-bottom: 24px;
        }

        .w-reset-btn {
            background: rgba(255,255,255,0.2);
            border: 1px solid rgba(255,255,255,0.4);
            border-radius: 10px;
            padding: 12px;
            width: 100%;
            color: white;
            font-weight: 700;
            display: flex;
            align-items: center;
            justify-content: space-between;
            cursor: pointer;
            margin-top: 12px;
            transition: all 0.2s;
        }
        .w-reset-btn:hover { background: rgba(255,255,255,0.3); }

        .w-footer-brand {
            text-align: center;
            font-size: 11px;
            color: var(--w-text-muted-light);
            padding: 30px 0 15px;
            position: relative;
        }

        .w-footer-brand::before {
            content: '';
            position: absolute;
            bottom: 0; right: 0; left: 0; height: 60px;
            background-image: url("data:image/svg+xml,%3Csvg width='400' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M400,60 L400,20 Q350,10 300,60 Z' fill='%232bd475' opacity='0.3' /%3E%3Cpath d='M300,60 Q280,30 250,60 Z' fill='%23bdf0d0' opacity='0.6' /%3E%3Cpath d='M400,60 Q380,40 370,60 Z' fill='%230D7C3E' opacity='0.5' /%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-position: bottom right;
            z-index: 0;
            pointer-events: none;
        }
        
        .w-footer-brand > div {
            position: relative;
            z-index: 1;
        }

    `;
    document.head.appendChild(style);

    // Feature Data
    const features = [
        { id: 'moda_suara', title: 'Moda Suara', desc: 'Bantuan suara dan audio', icon: '🔊', color: 'icon-blue' },
        { id: 'perbesar_teks', title: 'Pembesar Teks', desc: 'Memperbesar ukuran teks', icon: 'T+', color: 'icon-indigo' },
        { id: 'perkecil_teks', title: 'Perkecil Teks', desc: 'Memperkecil ukuran teks', icon: 'T-', color: 'icon-indigo' },
        { id: 'kejenuhan', title: 'Kejenuhan', desc: 'Kurangi rangsangan visual', icon: '💧', color: 'icon-purple' },
        { id: 'kontras', title: 'Kontras+', desc: 'Tingkatkan kontras layar', icon: '◑', color: 'icon-green' },
        { id: 'sembunyikan_gambar', title: 'Sembunyikan Gambar', desc: 'Sembunyikan gambar web', icon: '🖼️', color: 'icon-purple' },
        { id: 'rata_tulisan', title: 'Rata Tulisan', desc: 'Atur jarak dan perataan', icon: '≣', color: 'icon-blue' },
        { id: 'ramah_disleksia', title: 'Ramah Disleksia', desc: 'Pilih font lebih mudah dibaca', icon: 'Df', color: 'icon-orange' },
        { id: 'tinggi_garis', title: 'Tinggi Garis', desc: 'Atur jarak antar baris', icon: '↕', color: 'icon-blue' },
        { id: 'animasi_dijeda', title: 'Animasi Dijeda', desc: 'Hentikan animasi berjalan', icon: '⏸', color: 'icon-pink' },
        { id: 'kursor', title: 'Kursor', desc: 'Ubah ukuran dan warna kursor', icon: '↖', color: 'icon-green' },
        { id: 'spasi_teks', title: 'Spasi Teks', desc: 'Atur jarak huruf dan kata', icon: '↔', color: 'icon-purple' },
    ];

    const generateGrid = () => {
        return features.map(f => `
            <div class="w-card" id="w-btn-${f.id}">
                <div class="w-card-icon ${f.color}">${f.icon}</div>
                <div style="flex:1">
                    <div class="w-card-title w-text-main">${f.title}</div>
                    <div class="w-card-desc w-text-sub">${f.desc}</div>
                </div>
            </div>
        `).join('');
    };

    // Build DOM
    const container = document.createElement('div');
    container.id = 'w-promax-container';
    container.innerHTML = `
        <div id="w-modal">
            <div class="w-header">
                <div class="w-header-top">
                    <div class="w-title-wrap">
                        <div class="w-title-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                        </div>
                        <div class="w-title">
                            <h2>Menu Aksesibilitas</h2>
                            <p>Akses lebih mudah, untuk semua.</p>
                        </div>
                    </div>
                    <div class="w-close-btn" id="w-close-modal">✕</div>
                </div>
            </div>

            <div class="w-body">
                <div class="w-section-header">
                    <div class="w-section-title">
                        <span style="color:var(--w-primary)">⚙️</span> Fitur Aksesibilitas
                    </div>
                    <div class="w-theme-toggle">
                        <span class="w-text-main">Mode Gelap</span>
                        <label class="w-switch">
                            <input type="checkbox" id="w-theme-switch">
                            <span class="w-slider"></span>
                        </label>
                    </div>
                </div>

                <div class="w-grid">
                    ${generateGrid()}
                </div>

                <div class="w-reset-box">
                    <div style="font-weight:700; font-size:14px; margin-bottom:4px">Atur Ulang Semua Pengaturan</div>
                    <div style="font-size:11px; opacity:0.9">Kembalikan semua pengaturan ke kondisi awal.</div>
                    <button class="w-reset-btn" id="w-reset-all">
                        <span>↺ Reset Pengaturan</span>
                        <span>></span>
                    </button>
                </div>
                
                <div class="w-footer-brand"><div>Widget Aksesibilitas Version 3.0 Pro Max<br>Aksesibilitas untuk pengalaman yang lebih baik<br>dari SAIRA 54PERSEN ISLAM</div></div>
            </div>
        </div>
        <button id="w-trigger-btn"></button>
    `;
    document.body.appendChild(container);

    // Logic
    const triggerBtn = document.getElementById('w-trigger-btn');
    const modal = document.getElementById('w-modal');
    const closeBtn = document.getElementById('w-close-modal');
    const themeSwitch = document.getElementById('w-theme-switch');
    const resetBtn = document.getElementById('w-reset-all');

    triggerBtn.addEventListener('click', () => {
        modal.classList.toggle('active');
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    // --- Core Logic ---
    const htmlEl = document.documentElement;
    const bodyEl = document.body;
    
    // State management
    let state = {
        theme: 'light',
        textSize: 0,
        saturasi: false,
        kontras: false,
        hideImages: false,
        rataTulisan: false,
        disleksia: false,
        lineHeight: false,
        pauseAnim: false,
        kursor: false,
        spasiTeks: false
    };

    // Style elements for injected CSS
    const customStyleEl = document.createElement('style');
    document.head.appendChild(customStyleEl);

    const updateStyles = () => {
        let css = '';
        
        if(state.textSize !== 0) {
            css += `body, p, a, h1, h2, h3, h4, h5, span, div { font-size: calc(100% + ${state.textSize * 2}px) !important; } `;
        }
        if(state.saturasi) css += `html { filter: saturate(50%) !important; } `;
        if(state.kontras) css += `html { filter: contrast(150%) !important; } `;
        if(state.hideImages) css += `img, video, iframe, [style*="background-image"] { display: none !important; } `;
        if(state.rataTulisan) css += `p, div, span, h1, h2, h3 { text-align: justify !important; } `;
        if(state.disleksia) css += `body, p, a, h1, h2, h3, h4, h5, span, div { font-family: "OpenDyslexic", "Comic Sans MS", sans-serif !important; } `;
        if(state.lineHeight) css += `body, p, a, span, div { line-height: 2 !important; } `;
        if(state.pauseAnim) css += `* { animation: none !important; transition: none !important; } `;
        if(state.kursor) css += `* { cursor: url('https://cdn.custom-cursor.com/db/8343/32/arrow32.png'), auto !important; } `;
        if(state.spasiTeks) css += `body, p, a, h1, h2, h3, h4, h5, span, div { letter-spacing: 2px !important; word-spacing: 4px !important; } `;
        
        customStyleEl.innerHTML = css;
    };

    themeSwitch.addEventListener('change', (e) => {
        state.theme = e.target.checked ? 'dark' : 'light';
        if (state.theme === 'dark') {
            modal.classList.add('w-dark-theme');
            bodyEl.classList.add('w-global-dark-mode'); 
            // Global dark mode class can be styled if needed by users
        } else {
            modal.classList.remove('w-dark-theme');
            bodyEl.classList.remove('w-global-dark-mode');
        }
    });

    // Feature Handlers
    const toggleBtnState = (id, isActive) => {
        const btn = document.getElementById('w-btn-' + id);
        if(btn) {
            if(isActive) btn.classList.add('active');
            else btn.classList.remove('active');
        }
    };

    document.getElementById('w-btn-perbesar_teks')?.addEventListener('click', () => {
        state.textSize += 1;
        updateStyles();
    });

    document.getElementById('w-btn-perkecil_teks')?.addEventListener('click', () => {
        state.textSize -= 1;
        updateStyles();
    });

    const toggleFilters = [
        { id: 'kejenuhan', stateKey: 'saturasi' },
        { id: 'kontras', stateKey: 'kontras' },
        { id: 'sembunyikan_gambar', stateKey: 'hideImages' },
        { id: 'rata_tulisan', stateKey: 'rataTulisan' },
        { id: 'ramah_disleksia', stateKey: 'disleksia' },
        { id: 'tinggi_garis', stateKey: 'lineHeight' },
        { id: 'animasi_dijeda', stateKey: 'pauseAnim' },
        { id: 'kursor', stateKey: 'kursor' },
        { id: 'spasi_teks', stateKey: 'spasiTeks' },
    ];

    toggleFilters.forEach(filter => {
        const btn = document.getElementById('w-btn-' + filter.id);
        if(btn) {
            btn.addEventListener('click', () => {
                state[filter.stateKey] = !state[filter.stateKey];
                toggleBtnState(filter.id, state[filter.stateKey]);
                updateStyles();
            });
        }
    });

    // Suara (Text-to-Speech)
    let currentUtterance = null;
    let voiceMode = 0; // 0: off, 1: female, 2: male
    let availableVoices = [];

    // Load voices
    const loadVoices = () => {
        availableVoices = window.speechSynthesis.getVoices().filter(v => v.lang.includes('id') || v.lang.includes('ID'));
    };
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = loadVoices;
    }
    loadVoices();

    const speakText = (text, forceVoiceType = null) => {
        if(window.speechSynthesis.speaking) window.speechSynthesis.cancel();
        if(!text || text.trim() === '') return;

        currentUtterance = new SpeechSynthesisUtterance(text);
        currentUtterance.lang = 'id-ID';
        currentUtterance.rate = 0.9;

        // Try to pick male/female if requested and available
        let type = forceVoiceType || (voiceMode === 1 ? 'female' : 'male');
        if (availableVoices.length > 0) {
            // Very basic heuristic: 'gadis' or 'female' in name
            let selectedVoice = availableVoices.find(v => {
                let name = v.name.toLowerCase();
                if(type === 'female') return name.includes('gadis') || name.includes('female') || name.includes('perempuan') || name.includes('google');
                else return name.includes('andika') || name.includes('male') || name.includes('laki');
            });
            // Fallback to first available if not found
            if(!selectedVoice) selectedVoice = availableVoices[0];
            currentUtterance.voice = selectedVoice;
        }
        
        window.speechSynthesis.speak(currentUtterance);
    };

    const handleHoverSpeak = (e) => {
        if(voiceMode === 0) return;
        const target = e.target;
        const text = target.innerText || target.textContent;
        // Only speak if it has reasonable text length and is a readable element
        if(text && text.length > 2 && text.length < 500 && ['P', 'H1', 'H2', 'H3', 'H4', 'H5', 'A', 'SPAN', 'BUTTON', 'LI'].includes(target.tagName)) {
            // Debounce slightly to avoid speaking every single tiny element immediately
            target.speakTimeout = setTimeout(() => {
                speakText(text);
            }, 500);
        }
    };
    
    const handleHoverOut = (e) => {
        if(e.target.speakTimeout) clearTimeout(e.target.speakTimeout);
    };

    document.getElementById('w-btn-moda_suara')?.addEventListener('click', () => {
        voiceMode = (voiceMode + 1) % 3; // Cycle: 0 -> 1 -> 2 -> 0
        const btn = document.getElementById('w-btn-moda_suara');
        
        if (voiceMode === 1) {
            btn.classList.add('active');
            btn.querySelector('.w-card-desc').innerText = "Suara: Perempuan";
            speakText("Mode suara perempuan diaktifkan. Arahkan kursor ke teks untuk membaca.", 'female');
            document.addEventListener('mouseover', handleHoverSpeak);
            document.addEventListener('mouseout', handleHoverOut);
        } else if (voiceMode === 2) {
            btn.classList.add('active');
            btn.querySelector('.w-card-desc').innerText = "Suara: Laki-laki";
            speakText("Mode suara laki-laki diaktifkan.", 'male');
        } else {
            btn.classList.remove('active');
            btn.querySelector('.w-card-desc').innerText = "Bantuan suara dan audio";
            if(window.speechSynthesis.speaking) window.speechSynthesis.cancel();
            document.removeEventListener('mouseover', handleHoverSpeak);
            document.removeEventListener('mouseout', handleHoverOut);
        }
    });

    // Reset All
    resetBtn.addEventListener('click', () => {
        state = { theme: 'light', textSize: 0, saturasi: false, kontras: false, hideImages: false, rataTulisan: false, disleksia: false, lineHeight: false, pauseAnim: false, kursor: false, spasiTeks: false };
        updateStyles();
        
        themeSwitch.checked = false;
        modal.classList.remove('w-dark-theme');
        
        toggleFilters.forEach(f => toggleBtnState(f.id, false));
        
        // Reset Voice
        voiceMode = 0;
        const voiceBtn = document.getElementById('w-btn-moda_suara');
        if(voiceBtn) {
            voiceBtn.classList.remove('active');
            voiceBtn.querySelector('.w-card-desc').innerText = "Bantuan suara dan audio";
        }
        if(window.speechSynthesis.speaking) window.speechSynthesis.cancel();
        document.removeEventListener('mouseover', handleHoverSpeak);
        document.removeEventListener('mouseout', handleHoverOut);
    });

    // Auto Lazy Load Global (Dijalankan sekali saat script dimuat)
    document.querySelectorAll('img:not([loading="lazy"])').forEach(img => {
        img.setAttribute('loading', 'lazy');
    });

    // ==========================================
    // AUTO-TRANSLATE GLOBAL (CUSTOM MODAL PRO MAX)
    // ==========================================
    const tStyle = document.createElement('style');
    tStyle.innerHTML = `
        /* Sembunyikan Bawaan Google Translate Sepenuhnya (Jangan pakai display none biar mesinnya tetep jalan!) */
        #google_translate_element { opacity: 0 !important; position: absolute !important; left: -9999px !important; z-index: -999 !important; pointer-events: none !important; }
        .goog-te-banner-frame { display: none !important; }
        .goog-te-menu-frame { display: none !important; }
        .goog-te-menu2 { display: none !important; }
        iframe.skiptranslate { display: none !important; }
        .goog-te-banner-frame.skiptranslate { display: none !important; }
        /* Pembunuh Banner Modern Google Translate */
        .VIpgJd-ZVi9od-ORHb-OEVmcd { display: none !important; }
        .VIpgJd-ZVi9od-aZ2wEe-wOHMyf { display: none !important; }
        #goog-gt-tt { display: none !important; }
        body { top: 0px !important; position: static !important; }
        .goog-tooltip { display: none !important; }
        .goog-tooltip:hover { display: none !important; }
        .goog-text-highlight { background-color: transparent !important; border: none !important; box-shadow: none !important; }
        font { background: transparent !important; }

        /* Trigger Button Baru (Sebelah Kanan Pol) */
        #w-translate-trigger {
            position: fixed;
            bottom: 20px;
            right: 20px;  /* Translate di kanan mentok */
            width: 55px;
            height: 55px;
            border-radius: 50%;
            background: linear-gradient(135deg, #0D7C3E, #15A050);
            color: white;
            font-size: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 10px 30px rgba(13,124,62,0.4);
            cursor: pointer;
            z-index: 999999;
            transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
            border: 2px solid rgba(255,255,255,0.2);
        }
        #w-translate-trigger:hover {
            transform: scale(1.1) rotate(-5deg);
            box-shadow: 0 15px 35px rgba(13,124,62,0.6);
        }
        
        /* Paksa Tombol Top-Up (Bawaan Tema) Geser Kiri */
        .back-top, .backTotop, .ignielToTop, #back-to-top, .gotop, #gotop, .btn-top, .to-top, .scroll-top, .backToTop, #backToTopBtn {
            right: 85px !important;
        }

        /* Modal Translate */
        #w-translate-modal {
            position: fixed;
            bottom: 90px;
            right: 20px;
            width: 320px;
            background: var(--w-bg-light, #ffffff);
            border-radius: 24px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.2);
            z-index: 999999;
            opacity: 0;
            visibility: hidden;
            transform: translateY(20px) scale(0.95);
            transform-origin: bottom right;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            border: 1px solid rgba(13,124,62,0.1);
            overflow: hidden;
            font-family: 'Plus Jakarta Sans', sans-serif;
        }
        #w-translate-modal.active {
            opacity: 1;
            visibility: visible;
            transform: translateY(0) scale(1);
        }
        
        .wt-header {
            background: linear-gradient(135deg, #0f4c28, #15A050);
            padding: 20px;
            color: white;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .wt-title { font-weight: 700; font-size: 16px; display: flex; align-items: center; gap: 8px;}
        .wt-close { cursor: pointer; background: rgba(255,255,255,0.2); width: 28px; height: 28px; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 14px; transition: 0.2s; }
        .wt-close:hover { background: rgba(255,255,255,0.4); }

        .wt-body {
            padding: 20px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            max-height: 400px;
            overflow-y: auto;
        }
        
        .wt-lang-btn {
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            padding: 12px 8px;
            text-align: center;
            cursor: pointer;
            transition: all 0.2s;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;
        }
        .wt-lang-btn:hover {
            border-color: #0D7C3E;
            background: #f0fdf4;
            transform: translateY(-2px);
        }
        .wt-flag { 
            width: 32px; 
            height: 24px; 
            border-radius: 4px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            object-fit: cover;
        }
        .wt-name { font-size: 12px; font-weight: 600; color: #1e293b; }
    `;
    document.head.appendChild(tStyle);

    // Google Translate Hidden Element
    const tDiv = document.createElement('div');
    tDiv.id = 'google_translate_element';
    document.body.appendChild(tDiv);

    window.googleTranslateElementInit = function() {
        new google.translate.TranslateElement({
            pageLanguage: 'id',
            autoDisplay: false
        }, 'google_translate_element');
    };

    const tScript = document.createElement('script');
    tScript.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    tScript.async = true;
    document.body.appendChild(tScript);

    // Build Custom UI
    const languages = [
        { code: 'id', name: 'Indonesia', flag: 'id' },
        { code: 'en', name: 'English', flag: 'gb' },
        { code: 'ar', name: 'العربية', flag: 'sa' },
        { code: 'ms', name: 'Melayu', flag: 'my' },
        { code: 'ja', name: '日本語', flag: 'jp' },
        { code: 'ko', name: '한국어', flag: 'kr' },
        { code: 'zh-CN', name: '中文', flag: 'cn' },
        { code: 'ru', name: 'Русский', flag: 'ru' }
    ];

    // Nuklir penghancur toolbar Google Translate (Jalan terus menerus di background)
    setInterval(() => {
        document.querySelectorAll('.goog-te-banner-frame, iframe.skiptranslate, .VIpgJd-ZVi9od-ORHb-OEVmcd, iframe[src*="translate.googleapis.com"]').forEach(el => {
            el.style.cssText = 'display:none!important; opacity:0!important; height:0!important; visibility:hidden!important; pointer-events:none!important;';
        });
        document.body.style.top = '0px';
        document.body.style.position = 'static';
    }, 100);

    const wTranslateContainer = document.createElement('div');
    wTranslateContainer.innerHTML = `
        <div id="w-translate-trigger" title="Translate Website">🌍</div>
        <div id="w-translate-modal">
            <div class="wt-header">
                <div class="wt-title">🌍 Pilih Bahasa</div>
                <div class="wt-close" id="wt-close-btn">✕</div>
            </div>
            <div class="wt-body">
                ${languages.map(lang => `
                    <div class="wt-lang-btn" data-lang="${lang.code}">
                        <img src="https://flagcdn.com/w40/${lang.flag}.png" class="wt-flag" alt="${lang.name}">
                        <div class="wt-name">${lang.name}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    document.body.appendChild(wTranslateContainer);

    const wtTrigger = document.getElementById('w-translate-trigger');
    const wtModal = document.getElementById('w-translate-modal');
    const wtClose = document.getElementById('wt-close-btn');

    wtTrigger.addEventListener('click', () => {
        wtModal.classList.toggle('active');
    });
    wtClose.addEventListener('click', () => {
        wtModal.classList.remove('active');
    });

    // Handle Translation
    document.querySelectorAll('.wt-lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const langCode = e.currentTarget.getAttribute('data-lang');
            // Cek apakah Google Translate select sudah dirender
            const selectEl = document.querySelector('.goog-te-combo');
            if(selectEl) {
                selectEl.value = langCode;
                // Jurus rahasia HTMLEvents biar Google Translate nggak ngeluarin popup aneh
                let evt;
                if (document.createEvent) {
                    evt = document.createEvent('HTMLEvents');
                    evt.initEvent('change', true, true);
                    selectEl.dispatchEvent(evt);
                } else {
                    selectEl.dispatchEvent(new Event('change', { bubbles: true }));
                }
            } else {
                // Fallback 100% jalan: Ganti cookie dan reload
                document.cookie = "googtrans=/id/" + langCode + "; path=/; domain=." + document.domain;
                document.cookie = "googtrans=/id/" + langCode + "; path=/";
                window.location.reload();
            }
            wtModal.classList.remove('active');
        });
    });

})();
