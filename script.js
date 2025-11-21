document.addEventListener('DOMContentLoaded', () => {
    // 1. Menu Interaction
    const menuItems = document.querySelectorAll('.menu-items li');

    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all
            menuItems.forEach(i => i.classList.remove('active'));
            // Add to clicked
            this.classList.add('active');
        });
    });

    // 2. Simple Alert for Upgrade Button
    const upgradeBtn = document.querySelector('.btn-upgrade');
    upgradeBtn.addEventListener('click', () => {
        alert('Wih! Semangat belajarnya Na! Fitur premium coming soon ya wkwk.');
    });

    // 3. Bar Chart Hover Effect (Manual JS logic just for fun)
    const bars = document.querySelectorAll('.bar');
    bars.forEach(bar => {
        bar.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#008B8B'; // Change to turquoise on hover
        });
        bar.addEventListener('mouseleave', function() {
            if(!this.classList.contains('active')) {
                this.style.backgroundColor = '#E0E5F2';
            } else {
                this.style.backgroundColor = '#2B3674';
            }
        });
    });
});
