document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu Toggle ---
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('is-open');
            const isOpen = mainNav.classList.contains('is-open');
            menuToggle.setAttribute('aria-expanded', isOpen);
            if(isOpen) {
                menuToggle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;
            } else {
                menuToggle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
            }
        });
    }

    // --- Page-specific logic ---
    const pageId = document.body.id;

    if (pageId === 'home-page') {
        initTestimonialsSlider();
    }

    if (pageId === 'destinations-page') {
        initDestinationsPage();
    }

    if (pageId === 'contact-page') {
        initContactForm();
    }

});

// --- Testimonials Slider (Home Page) ---
function initTestimonialsSlider() {
    const testimonialsData = [
        {
            quote: "An absolutely unforgettable experience! Safari Tours handled everything with perfection. The 'Save Up Slowly' plan made my dream trip possible.",
            name: 'Jane Doe',
            title: 'First-time Adventurer',
            avatar: 'https://i.pravatar.cc/150?img=1',
            rating: 5,
        },
        {
            quote: "As a frequent traveler, I'm impressed by the quality and authenticity of their tours. The local guides were fantastic. Highly recommended!",
            name: 'John Smith',
            title: 'Frequent Traveler',
            avatar: 'https://i.pravatar.cc/150?img=2',
            rating: 5,
        },
        {
            quote: "Our family had the time of our lives in the Maasai Mara. The planning was seamless, and the tour was perfectly suited for all ages.",
            name: 'Emily Johnson',
            title: 'Family Vacationer',
            avatar: 'https://i.pravatar.cc/150?img=3',
            rating: 5,
        },
        {
            quote: "Traveling solo can be daunting, but Safari Tours made me feel safe and part of a community. I met amazing people and saw incredible sights.",
            name: 'Michael Brown',
            title: 'Solo Explorer',
            avatar: 'https://i.pravatar.cc/150?img=4',
            rating: 5,
        }
    ];

    const slidesContainer = document.querySelector('.testimonial-slides-container');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    if (!slidesContainer || !prevBtn || !nextBtn) return;

    let currentIndex = 0;

    function renderTestimonials() {
        slidesContainer.innerHTML = testimonialsData.map(t => `
            <div class="testimonial-slide">
                <div class="testimonial-rating">
                    ${Array(t.rating).fill(0).map(() => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`).join('')}
                </div>
                <p class="quote">"${t.quote}"</p>
                <div class="testimonial-author">
                    <img src="${t.avatar}" alt="${t.name}">
                    <div class="author-info">
                        <h4>${t.name}</h4>
                        <p>${t.title}</p>
                    </div>
                </div>
            </div>
        `).join('');
    }

    function showSlide(index) {
        slidesContainer.style.transform = `translateX(-${index * 100}%)`;
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? testimonialsData.length - 1 : currentIndex - 1;
        showSlide(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === testimonialsData.length - 1) ? 0 : currentIndex + 1;
        showSlide(currentIndex);
    });

    renderTestimonials();
}


// --- Destinations Page ---
function initDestinationsPage() {
    const toursData = [
        { id: 1, name: 'Maasai Mara Safari', country: 'Kenya', description: 'Witness the great migration and explore the vast plains of the Maasai Mara, home to the Big Five.', imageUrl: 'https://source.unsplash.com/400x300/?kenya,safari', localPrice: 900, internationalPrice: 1500 },
        { id: 2, name: 'Serengeti Migration', country: 'Tanzania', description: 'Follow the endless herds of wildebeest and zebra across the iconic Serengeti National Park.', imageUrl: 'https://source.unsplash.com/400x300/?tanzania,safari', localPrice: 1200, internationalPrice: 2000 },
        { id: 3, name: 'Nile River Cruise', country: 'Egypt', description: 'Journey through history on a luxurious cruise down the Nile, visiting ancient temples and tombs.', imageUrl: 'https://source.unsplash.com/400x300/?egypt,nile', localPrice: 1800, internationalPrice: 3000 },
        { id: 4, name: 'Victoria Falls Adventure', country: 'Zambia', description: 'Experience the "Smoke that Thunders" with thrilling activities like bungee jumping and white-water rafting.', imageUrl: 'https://source.unsplash.com/400x300/?zambia,victoria-falls', localPrice: 1000, internationalPrice: 1700 },
        { id: 5, name: 'Cape Town Explorer', country: 'South Africa', description: 'Discover the vibrant culture, stunning landscapes, and rich history of the Mother City.', imageUrl: 'https://source.unsplash.com/400x300/?cape-town,mountain', localPrice: 1100, internationalPrice: 1800 },
        { id: 6, name: 'Okavango Delta Mokoro', country: 'Botswana', description: 'Glide silently through the pristine waterways of the Okavango Delta in a traditional dugout canoe.', imageUrl: 'https://source.unsplash.com/400x300/?botswana,delta', localPrice: 1500, internationalPrice: 2500 },
    ];

    const toursGrid = document.getElementById('tours-grid');
    const searchInput = document.getElementById('search-input');
    const filterButtonsContainer = document.getElementById('filter-buttons');
    const noResults = document.getElementById('no-results');

    if (!toursGrid || !searchInput || !filterButtonsContainer || !noResults) return;

    let searchTerm = '';
    let selectedCountry = 'All';

    const countries = ['All', ...new Set(toursData.map(tour => tour.country))];

    function renderTours() {
        const filteredTours = toursData.filter(tour => {
            const matchesCountry = selectedCountry === 'All' || tour.country === selectedCountry;
            const matchesSearch = tour.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                tour.description.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesCountry && matchesSearch;
        });

        toursGrid.innerHTML = '';

        if (filteredTours.length === 0) {
            noResults.classList.remove('hidden');
        } else {
            noResults.classList.add('hidden');
            filteredTours.forEach(tour => {
                const tourCard = document.createElement('div');
                tourCard.className = 'tour-card';
                tourCard.innerHTML = `
                    <img src="${tour.imageUrl}" alt="${tour.name}">
                    <div class="tour-card-content">
                        <h3>${tour.name}</h3>
                        <p class="country">${tour.country}</p>
                        <p class="description">${tour.description}</p>
                        <div class="tour-pricing">
                            <div class="price-item local">
                                <p>Local Price</p>
                                <p>$${tour.localPrice}</p>
                            </div>
                            <div class="price-item international">
                                <p>International</p>
                                <p>$${tour.internationalPrice}</p>
                            </div>
                        </div>
                    </div>
                `;
                toursGrid.appendChild(tourCard);
            });
        }
    }

    function renderFilterButtons() {
        filterButtonsContainer.innerHTML = countries.map(country => 
            `<button class="${selectedCountry === country ? 'active' : ''}" data-country="${country}">${country}</button>`
        ).join('');
    }

    searchInput.addEventListener('input', (e) => {
        searchTerm = e.target.value;
        renderTours();
    });

    filterButtonsContainer.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            selectedCountry = e.target.dataset.country;
            renderFilterButtons();
            renderTours();
        }
    });

    renderFilterButtons();
    renderTours();
}


// --- Contact Form (Contact Page) ---
function initContactForm() {
    const form = document.getElementById('contact-form');
    const successMessage = document.getElementById('form-success-message');
    
    if (!form || !successMessage) return;

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validateForm()) {
            // In a real app, you'd send data to a server here.
            console.log('Form is valid and would be submitted.');
            form.classList.add('hidden');
            successMessage.classList.remove('hidden');
        }
    });

    function validateForm() {
        let isValid = true;
        isValid &= validateField(nameInput, 'Full Name is required.');
        isValid &= validateField(emailInput, 'Email is required.', 'Please enter a valid email address.');
        isValid &= validateField(messageInput, 'Message is required.');
        return isValid;
    }

    function validateField(input, requiredMsg, invalidMsg = null) {
        const errorEl = input.nextElementSibling;
        let isValid = true;
        
        if (!input.value.trim()) {
            errorEl.textContent = requiredMsg;
            input.classList.add('error');
            isValid = false;
        } else if (invalidMsg && input.type === 'email' && !/^\S+@\S+\.\S+$/.test(input.value)) {
            errorEl.textContent = invalidMsg;
            input.classList.add('error');
            isValid = false;
        } else {
            errorEl.textContent = '';
            input.classList.remove('error');
        }
        return isValid;
    }
}
