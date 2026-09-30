// Αρχικά εμφανίζεται μόνο το background
// Τα υπόλοιπα στοιχεία εμφανίζονται σταδιακά με JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const loadingIndicator = document.getElementById('loadingIndicator');
    
    // Βεβαιωθείτε ότι η σελίδα ξεκινά από την κορυφή
    window.scrollTo(0, 0);
    
    // Προσθήκη loading indicator
    loadingIndicator.classList.add('loading');
    
    // Τίτλος εμφανίζεται αμέσως
    setTimeout(() => {
        document.querySelector('.delay-0').classList.remove('hidden-initially');
    }, 0);

    // Περιγραφή εμφανίζεται μετά από 0.5 δευτερόλεπτα
    setTimeout(() => {
        document.querySelector('.delay-2').classList.remove('hidden-initially');
    }, 500);

    // Επικεφαλίδα εμφανίζεται μετά από 1 δευτερόλεπτο
    setTimeout(() => {
        document.querySelector('.delay-4').classList.remove('hidden-initially');
    }, 1000);

    // Κουμπιά εμφανίζονται μετά από 1.5 δευτερόλεπτα
    setTimeout(() => {
        document.querySelector('.delay-6').classList.remove('hidden-initially');
        loadingIndicator.classList.remove('loading');
        // Επιπλέον scroll στην κορυφή μετά τη φόρτωση
        window.scrollTo(0, 0);
    }, 1500);

    // Βελτιστοποίηση για touch events
    document.addEventListener('touchstart', function() {}, {passive: true});
    
    // Βελτιστοποίηση για Smart TVs (remote navigation)
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            const focusedElement = document.activeElement;
            if (focusedElement && focusedElement.classList.contains('action-button')) {
                focusedElement.click();
            }
        }
    });
});

// Image modal functionality
function toggleImage(imgElement) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    
    modal.style.display = 'block';
    modalImg.src = imgElement.src;
}

// Close modal when clicking on it
document.getElementById('imageModal').addEventListener('click', function() {
    this.style.display = 'none';
});

// File picker functionality
function openFilePicker() {
    document.getElementById('fileInput').click();
}

// Handle file selection
document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        // Create a blob URL for the selected file
        const blobUrl = URL.createObjectURL(file);
        
        // Create a temporary anchor element to download/open the file
        const a = document.createElement('a');
        a.href = blobUrl;
        a.download = file.name;
        a.target = '_blank';
        
        // Programmatically click the anchor to open the file
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        
        // Clean up the blob URL after some time
        setTimeout(() => {
            URL.revokeObjectURL(blobUrl);
        }, 1000);
    }
    
    // Reset the file input
    event.target.value = '';
});

// Συναρτήσεις για εναλλαγή σελίδων
function showMainPage() {
    hideAllPages();
    document.body.className = 'main-page-bg';
    document.querySelector('.main-page').style.display = 'flex';
    // Νέα γραμμή: scroll στην κορυφή
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showMainPage2() {
    hideAllPages();
    document.body.className = 'main-page-bg';
    document.querySelector('.main-page-2').style.display = 'flex';
    resetAnimations('.main-page-2');
    // Νέα γραμμή: scroll στην κορυφή
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showMainPage3() {
    hideAllPages();
    document.body.className = 'main-page-bg';
    document.querySelector('.main-page-3').style.display = 'flex';
    resetAnimations('.main-page-3');
    // Νέα γραμμή: scroll στην κορυφή
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Συναρτήσεις για Ιστορικές Μάχες
function showBattlesIntroPage() {
    hideAllPages();
    document.body.className = 'battles-page-bg';
    document.querySelector('.battles-intro-page').style.display = 'flex';
    resetAnimations('.battles-intro-page');
    // Νέα γραμμή: scroll στην κορυφή
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showBattlesButtonsPage() {
    hideAllPages();
    document.body.className = 'battles-page-bg';
    document.querySelector('.battles-buttons-page').style.display = 'flex';
    resetAnimations('.battles-buttons-page');
    // Νέα γραμμή: scroll στην κορυφή
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Συναρτήσεις για Τουρκοκρατία
function showOttomanBridgePage() {
    hideAllPages();
    document.body.className = '';
    document.querySelector('.ottoman-bridge-page').style.display = 'flex';
    resetAnimations('.ottoman-bridge-page');
    // Νέα γραμμή: scroll στην κορυφή
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showOttomanKaramichosPage() {
    hideAllPages();
    document.body.className = '';
    document.querySelector('.ottoman-karamichos-page').style.display = 'flex';
    resetAnimations('.ottoman-karamichos-page');
    // Νέα γραμμή: scroll στην κορυφή
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showOttomanKonakiaPage() {
    hideAllPages();
    document.body.className = '';
    document.querySelector('.ottoman-konakia-page').style.display = 'flex';
    resetAnimations('.ottoman-konakia-page');
    // Νέα γραμμή: scroll στην κορυφή
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showOttomanTekesPage() {
    hideAllPages();
    document.body.className = '';
    document.querySelector('.ottoman-tekes-page').style.display = 'flex';
    resetAnimations('.ottoman-tekes-page');
    // Νέα γραμμή: scroll στην κορυφή
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showOttomanOldCityPage() {
    hideAllPages();
    document.body.className = '';
    document.querySelector('.ottoman-old-city-page').style.display = 'flex';
    resetAnimations('.ottoman-old-city-page');
    // Νέα γραμμή: scroll στην κορυφή
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showOttomanSummaryPage() {
    hideAllPages();
    document.body.className = '';
    document.querySelector('.ottoman-summary-page').style.display = 'flex';
    resetAnimations('.ottoman-summary-page');
    // Νέα γραμμή: scroll στην κορυφή
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Βοηθητικές συναρτήσεις
function hideAllPages() {
    const pages = document.querySelectorAll('.card');
    pages.forEach(page => {
        page.style.display = 'none';
    });
}

function resetAnimations(pageClass) {
    const elements = document.querySelectorAll(`${pageClass} .hidden-initially`);
    elements.forEach(el => {
        el.classList.remove('hidden-initially');
    });
}

// Συναρτήσεις για πλοήγηση με βέλη στις σελίδες Τουρκοκρατίας
function nextOttomanPage() {
    const currentPage = document.querySelector('.card[style*="display: flex"]');
    
    if (currentPage.classList.contains('ottoman-bridge-page')) {
        showOttomanKaramichosPage();
    } else if (currentPage.classList.contains('ottoman-karamichos-page')) {
        showOttomanKonakiaPage();
    } else if (currentPage.classList.contains('ottoman-konakia-page')) {
        showOttomanTekesPage();
    } else if (currentPage.classList.contains('ottoman-tekes-page')) {
        showOttomanOldCityPage();
    } else if (currentPage.classList.contains('ottoman-old-city-page')) {
        showOttomanSummaryPage();
    }
}

function prevOttomanPage() {
    const currentPage = document.querySelector('.card[style*="display: flex"]');
    
    if (currentPage.classList.contains('ottoman-summary-page')) {
        showOttomanOldCityPage();
    } else if (currentPage.classList.contains('ottoman-old-city-page')) {
        showOttomanTekesPage();
    } else if (currentPage.classList.contains('ottoman-tekes-page')) {
        showOttomanKonakiaPage();
    } else if (currentPage.classList.contains('ottoman-konakia-page')) {
        showOttomanKaramichosPage();
    } else if (currentPage.classList.contains('ottoman-karamichos-page')) {
        showOttomanBridgePage();
    }
}

// Keyboard navigation for Ottoman pages
document.addEventListener('keydown', function(e) {
    const currentPage = document.querySelector('.card[style*="display: flex"]');
    if (currentPage && currentPage.classList.contains('ottoman-')) {
        if (e.key === 'ArrowRight') {
            nextOttomanPage();
        } else if (e.key === 'ArrowLeft') {
            prevOttomanPage();
        }
    }
});