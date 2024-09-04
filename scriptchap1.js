// Nút phóng to toàn màn hình
const fullscreenBtn = document.getElementById('fullscreen-btn');
fullscreenBtn.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
});

// Nút đổi màu nền
const colorOptions = document.querySelectorAll('.color-option');
colorOptions.forEach(option => {
    option.addEventListener('click', () => {
        document.body.style.backgroundColor = option.getAttribute('data-color');
    });
});

// Nút thay đổi kích cỡ chữ (tăng và giảm)
const fontsizeUpBtn = document.getElementById('fontsize-up-btn');
const fontsizeDownBtn = document.getElementById('fontsize-down-btn');
const content = document.querySelector('.content');

fontsizeUpBtn.addEventListener('click', () => {
    const currentFontSize = parseFloat(window.getComputedStyle(content).fontSize);
    content.style.fontSize = `${currentFontSize + 2}px`;
});

fontsizeDownBtn.addEventListener('click', () => {
    const currentFontSize = parseFloat(window.getComputedStyle(content).fontSize);
    if (currentFontSize > 12) { // Giới hạn kích cỡ chữ tối thiểu
        content.style.fontSize = `${currentFontSize - 2}px`;
    }
});

// Nút thay đổi kiểu chữ
const fontfamilyBtn = document.getElementById('fontfamily-btn');
const fontOptions = document.querySelectorAll('.font-option');
fontOptions.forEach(option => {
    option.addEventListener('click', () => {
        content.style.fontFamily = option.getAttribute('data-font');
    });
});

// Nút chọn nhạc nền
const audioBtn = document.getElementById('audio-btn');
const backgroundAudio = document.getElementById('background-audio');

audioBtn.addEventListener('click', () => {
    if (backgroundAudio.style.display === 'none') {
        backgroundAudio.style.display = 'block';
    } else {
        backgroundAudio.style.display = 'none';
    }
});
