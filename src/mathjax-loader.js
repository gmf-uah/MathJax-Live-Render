(function() {
    // MathJax loader with fallback mechanism
    const localPath = 'node_modules/mathjax-full/es5/tex-chtml.js';
    const cdnPath = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js';

    function loadMathJax(src, onError) {
        const script = document.createElement('script');
        script.id = 'MathJax-script';
        script.async = true;
        script.src = src;
        
        if (onError) {
            script.onerror = onError;
        }
        
        document.head.appendChild(script);
    }

    // Try loading from local first
    console.log('Attempting to load MathJax from local installation...');
    loadMathJax(localPath, function() {
        console.warn('Failed to load MathJax from local installation, falling back to CDN...');
        loadMathJax(cdnPath);
    });
})();
