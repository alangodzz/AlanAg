document.addEventListener('DOMContentLoaded', () => {
    const notifyBtn = document.getElementById('notifyBtn');

    notifyBtn.addEventListener('click', () => {
        // Simple micro-animation on click
        notifyBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            notifyBtn.style.transform = '';
        }, 150);

        // Alert message
        alert('Obrigado pelo interesse! Em breve teremos mais novidades sobre o projeto AlanAg.');
    });

    // Add a gentle parallax effect to the glass container based on mouse movement
    const container = document.querySelector('.glass-container');
    
    document.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 50;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 50;
        
        container.style.transform = `perspective(1000px) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
    
    // Reset transform when mouse leaves the window
    document.addEventListener('mouseleave', () => {
        container.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg)`;
        container.style.transition = 'transform 0.5s ease';
    });
    
    // Remove transition when mouse enters to keep the parallax smooth
    document.addEventListener('mouseenter', () => {
        container.style.transition = 'none';
    });
});
