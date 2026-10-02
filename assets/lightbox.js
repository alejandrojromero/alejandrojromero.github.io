// Lightbox: click any content image to view it enlarged.
(function () {
    var SKIP = 'a, button, nav, footer, .theme-toggle, .hub-card, .game-tile, .rec-card, .wall-item, .prev-chip';
    var style = document.createElement('style');
    style.textContent = [
        'img.lb-zoomable{cursor:zoom-in;transition:transform 0.25s ease, filter 0.25s ease, box-shadow 0.25s ease}',
        'img.lb-zoomable:hover{transform:scale(1.012);filter:brightness(1.06);box-shadow:0 6px 24px rgba(0,0,0,0.18)}',
        '.lb-overlay{position:fixed;inset:0;z-index:5000;background:rgba(0,0,0,0.82);display:flex;align-items:center;justify-content:center;padding:60px 80px 40px}',
        '.lb-close{position:absolute;top:0;right:-46px;width:36px;height:36px;display:flex;align-items:center;justify-content:center;border-radius:6px;cursor:pointer;padding:0;background:#fff;border:1px solid rgba(0,0,0,0.25);color:#1a1a1a;transition:background 0.2s ease,color 0.2s ease,border-color 0.2s ease}',
        '@media (max-width: 760px){.lb-close{right:0;top:-46px}}',
        'body.dark-mode .lb-close{background:#1a1a1a;border-color:rgba(255,255,255,0.35);color:#fff}',
        '.lb-close:hover{background:#FF4A00 !important;border-color:#FF4A00 !important;color:#fff !important}'
    ].join('\n');
    document.head.appendChild(style);

    var overlay = null;
    function close() { if (overlay) { overlay.remove(); overlay = null; document.body.style.overflow = ''; } }
    function open(src, alt) {
        close();
        overlay = document.createElement('div');
        overlay.className = 'lb-overlay';
        var holder = document.createElement('div');
        holder.setAttribute('style', 'position:relative;display:inline-block;max-width:100%;max-height:100%');
        var img = document.createElement('img');
        img.src = src; img.alt = alt || '';
        img.setAttribute('style', 'display:block;max-width:min(1200px,90vw);max-height:80vh;width:auto;height:auto;border-radius:8px;box-shadow:0 20px 80px rgba(0,0,0,0.6)');
        var btn = document.createElement('button');
        btn.className = 'lb-close';
        btn.setAttribute('aria-label', 'Close image');
        btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>';
        btn.addEventListener('click', close);
        overlay.addEventListener('click', function (e) { if (e.target === overlay) close(); });
        holder.appendChild(img); holder.appendChild(btn); overlay.appendChild(holder);
        document.body.appendChild(overlay);
        document.body.style.overflow = 'hidden';
    }
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
    document.addEventListener('click', function (e) {
        var img = e.target.closest && e.target.closest('img');
        if (!img || overlay) return;
        if (img.closest(SKIP) || img.closest('.lb-overlay')) return;
        e.preventDefault();
        open(img.currentSrc || img.src, img.alt);
    });
    document.addEventListener('mouseover', function (e) {
        var img = e.target.closest && e.target.closest('img');
        if (!img || img.classList.contains('lb-zoomable')) return;
        if (img.closest(SKIP) || img.closest('.lb-overlay')) return;
        img.classList.add('lb-zoomable');
    });
    // Custom circle cursor over zoomable images + lightbox close button
    var cursorEl = document.getElementById('customCursor');
    if (cursorEl) {
        document.addEventListener('mouseover', function (e) {
            if (e.target.closest && (e.target.closest('img.lb-zoomable') || e.target.closest('.lb-close'))) {
                cursorEl.classList.add('grid-hover');
            }
        });
        document.addEventListener('mouseout', function (e) {
            if (e.target.closest && (e.target.closest('img.lb-zoomable') || e.target.closest('.lb-close'))) {
                cursorEl.classList.remove('grid-hover');
            }
        });
    }
})();
