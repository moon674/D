    document.addEventListener("DOMContentLoaded", function() {
        const videoUrlInput = document.getElementById('videoUrl');
        const pasteButton = document.getElementById('pasteButton');
        const clearButton = document.getElementById('clearButton');

        pasteButton.addEventListener('click', function() {
            navigator.clipboard.readText()
                .then(text => {
                    videoUrlInput.value = text;
                    clearButton.classList.remove('hidden');
                    pasteButton.classList.add('hidden');
                })
                .catch(err => {
                    console.error('Gagal melakukan paste:', err);
                });
        });

        clearButton.addEventListener('click', function() {
            videoUrlInput.value = '';
            clearButton.classList.add('hidden');
            pasteButton.classList.remove('hidden');
        });

        videoUrlInput.addEventListener('input', function() {
            if (videoUrlInput.value.trim() !== '') {
                clearButton.classList.remove('hidden');
                pasteButton.classList.add('hidden');
            } else {
                clearButton.classList.add('hidden');
                pasteButton.classList.remove('hidden');
            }
        });
    });
