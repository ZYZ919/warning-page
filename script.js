document.addEventListener('DOMContentLoaded', function() {
    const closeBtn = document.getElementById('close-btn');
    const warningBox = document.querySelector('.warning-box');
    
    closeBtn.addEventListener('click', function() {
        warningBox.style.display = 'none';
    });
    
    // 添加随机闪烁效果
    setInterval(function() {
        const warningIcon = document.querySelector('.warning-icon');
        warningIcon.style.color = getRandomColor();
        
        setTimeout(function() {
            warningIcon.style.color = '#ff9800';
        }, 300);
    }, 3000);
    
    function getRandomColor() {
        const colors = ['#ff5252', '#ff4081', '#e040fb', '#7c4dff', '#536dfe', '#448aff'];
        return colors[Math.floor(Math.random() * colors.length)];
    }
});