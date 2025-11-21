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
        alert('Fitur premium SuperEnglish masih dalam tahap persiapan, Na. Semangat!');
    });
    
    // 3. Simple Alert for Simulasi Button
    const simulasiBtn = document.querySelector('.btn-primary');
    if (simulasiBtn) {
        simulasiBtn.addEventListener('click', () => {
            alert('Lagi loading ke halaman simulasi TOEFL, nih! Good luck!');
        });
    }
});
