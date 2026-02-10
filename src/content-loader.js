// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    const contentDiv = document.getElementById('content');
    const statusDiv = document.getElementById('status');
    let lastContent = '';
    const pollInterval = 1000; // Poll every second

    async function loadContent() {
        try {
            const response = await fetch(`content.txt?t=${Date.now()}`);
            if (!response.ok) {
                throw new Error('Failed to load file');
            }
            const content = await response.text();
            
            if (content !== lastContent) {
                lastContent = content;
                contentDiv.textContent = content;
                
                // Typeset the new content
                if (window.MathJax && window.MathJax.typesetPromise) {
                    await MathJax.typesetPromise([contentDiv]);
                }
                
                statusDiv.textContent = 'Updated: ' + new Date().toLocaleTimeString();
                statusDiv.classList.remove('error');
            }
        } catch (error) {
            console.error('Error loading content:', error);
            statusDiv.textContent = 'Error loading file';
            statusDiv.classList.add('error');
        }
    }

    // Initial load
    loadContent();

    // Poll for updates
    setInterval(loadContent, pollInterval);
});
