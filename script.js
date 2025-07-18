document.addEventListener("DOMContentLoaded", function() {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const navLinks = document.querySelector(".nav-links");

    hamburgerMenu.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });

    // Close the dropdown when a link is clicked (for smooth scrolling)
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
});

// Fungsi untuk menampilkan popup penukaran poin
function redeemPoints(itemName, pointsRequired) {
    const modal = document.getElementById('redeemModal');
    const modalMessage = document.getElementById('modalMessage');
    
    modalMessage.textContent = `Selamat kamu sudah menukar poin mu untuk ${itemName} (${pointsRequired} poin). Silahkan cek email mu untuk melihat prosedur penerimaan.`;
    
    modal.style.display = 'block';
}

// Fungsi untuk menutup modal
function closeModal() {
    const modal = document.getElementById('redeemModal');
    modal.style.display = 'none';
}

// Event listener untuk menutup modal ketika klik di luar modal
window.onclick = function(event) {
    const modal = document.getElementById('redeemModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Event listener untuk tombol close (X)
document.addEventListener('DOMContentLoaded', function() {
    const closeBtn = document.querySelector('.close');
    if (closeBtn) {
        closeBtn.onclick = function() {
            closeModal();
        }
    }
});

