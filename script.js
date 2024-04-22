document.addEventListener('DOMContentLoaded', function () {
    const imageSelector = document.getElementById('imageSelector');
    const displayedImage = document.getElementById('displayedImage');
    const downloadButton = document.getElementById('downloadButton');

    imageSelector.addEventListener('change', function () {
        const selectedImage = this.value;
        if (selectedImage) {
            displayedImage.src = selectedImage;
            displayedImage.style.display = 'block';
            downloadButton.style.display = 'block';

            downloadButton.onclick = function () {
                const link = document.createElement('a');
                link.href = displayedImage.src;
                link.download = 'downloadedImage';  // 파일 이름을 지정합니다.
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            };
        } else {
            displayedImage.style.display = 'none';
            downloadButton.style.display = 'none';
        }
    });
});
