(function() {
    // MathJax loader - loads from CDN
    const cdnPath = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js';

    const script = document.createElement('script');
    script.id = 'MathJax-script';
    script.async = true;
    script.src = cdnPath;
    
    script.onload = function() {
        console.log('MathJax loaded successfully from CDN');
    };
    
    script.onerror = function() {
        console.error('Failed to load MathJax from CDN. Please check your internet connection.');
    };
    
    document.head.appendChild(script);
})();
