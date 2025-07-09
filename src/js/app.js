// Testimonial Data
const testimonials = [
    {
        name: "Viezh Robert",
        location: "Warsaw, Poland",
        rating: 4.5,
        comment: "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
        image: "assets/images/user1.png"
    },
    {
        name: "Yessica Christy",
        location: "Shanxi, China",
        rating: 4.5,
        comment: "I like it because I like to travel far and still can connect with high speed.",
        image: "assets/images/user2.png"
    },
    {
        name: "Kim Young Jou",
        location: "Seoul, South Korea",
        rating: 4.5,
        comment: "This is very unusual for my business that currently requires a virtual private network that has high security.",
        image: "assets/images/user3.png"
    },
    {
        name: "Michael Chen",
        location: "Singapore",
        rating: 5.0,
        comment: "The best VPN service I've ever used. Perfect for remote work and accessing region-locked content. Highly recommended!",
        image: "assets/images/user1.png"
    },
    {
        name: "Sarah Williams",
        location: "London, UK",
        rating: 4.8,
        comment: "Excellent service with great speeds. I use it daily for both work and streaming. The customer support is outstanding.",
        image: "assets/images/user2.png"
    },
    {
        name: "Alex Rodriguez",
        location: "Madrid, Spain",
        rating: 4.7,
        comment: "Been using it for 6 months now. The connection is stable and secure. Perfect for my online banking and business needs.",
        image: "assets/images/user3.png"
    },
    {
        name: "Emma Thompson",
        location: "Sydney, Australia",
        rating: 4.9,
        comment: "Amazing VPN service with fantastic global coverage. Never had any issues with speed or connectivity. Worth every penny!",
        image: "assets/images/user1.png"
    }
];

// Generate testimonial slides
function generateTestimonials() {
    const swiperWrapper = document.querySelector('.testimonialSwiper .swiper-wrapper');

    testimonials.forEach(testimonial => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';

        slide.innerHTML = `
            <div class="p-8 border-2 border-gray-200 rounded-2xl hover:border-red-500 transition-all h-full">
                <div class="flex items-center justify-between mb-8">
                    <div class="flex items-center gap-4">
                        <img src="${testimonial.image}" alt="${testimonial.name}" class="w-12 h-12 rounded-full">
                        <div>
                            <h4 class="font-medium text-lg">${testimonial.name}</h4>
                            <p class="text-gray-400">${testimonial.location}</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-2">
                        <span class="font-medium">${testimonial.rating}</span>
                        <img src="assets/images/star.png" alt="star" class="w-4 h-4">
                    </div>
                </div>
                <p class="text-gray-600">"${testimonial.comment}"</p>
            </div>
        `;

        swiperWrapper.appendChild(slide);
    });
}

// Run this after DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    generateTestimonials(); // generate slides first

    // Then initialize Swiper
    new Swiper('.testimonialSwiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    });
});

const swiper = new Swiper('.mySwiper', {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});
