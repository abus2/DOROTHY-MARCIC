document.querySelector('.cart').addEventListener('click', () => {
    alert('You clicked on the cart!');
  });


    document.querySelector('.scroll-down').addEventListener('click', () => {
        window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    });

    const recommendations = [
        {
            name: "Wireless Headphones",
            price: "₹1500.99",
            image: "earphone.jpg",
        },
        {
            name: "Smartphone Stand",
            price: "₹5000.99",
            image: "phonestand.jpg",
        },
        {
            name: "Bluetooth Speaker",
            price: "₹1000.99",
            image: "speaker.jpg",
        },
        {
            name: "Fitness Tracker",
            price: "₹7000.99",
            image: "watch2.jpg",
        },
        {
            name: "Laptop Sleeve",
            price: "₹30,000.99",
            image: "laptop.jpg",
        },
    ];

    const carousel = document.getElementById("recommendations-carousel");

    recommendations.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" />
            <div class="product-name">${product.name}</div>
            <div class="product-price">${product.price}</div>
            <button class="add-to-cart">Add to Cart</button>
        `;

        carousel.appendChild(productCard);
    });

    const carouselContainer = document.querySelector('.carousel-container');
    const leftButton = document.querySelector('.carousel-button.left');
    const rightButton = document.querySelector('.carousel-button.right');

    let scrollPosition = 0;
    const scrollAmount = 220; 

    leftButton.addEventListener('click', () => {
        scrollPosition = Math.max(scrollPosition - scrollAmount, 0);
        carouselContainer.style.transform = `translateX(-${scrollPosition}px)`;
    });

    rightButton.addEventListener('click', () => {
        const maxScroll = carouselContainer.scrollWidth - carouselContainer.offsetWidth;
        scrollPosition = Math.min(scrollPosition + scrollAmount, maxScroll);
        carouselContainer.style.transform = `translateX(-${scrollPosition}px)`;
    });

    const testimonials = document.querySelectorAll('.testimonial');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    let currentIndex = 0;

    function updateTestimonials() {
        testimonials.forEach((testimonial, index) => {
            testimonial.classList.remove('active');
            if (index === currentIndex) {
                testimonial.classList.add('active');
            }
        });

        
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === testimonials.length - 1;
    }

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateTestimonials();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < testimonials.length - 1) {
            currentIndex++;
            updateTestimonials();
        }
    });

    document.getElementById('newsletterForm').addEventListener('submit', function(e) {
        e.preventDefault();
  
        
        const emailInput = document.getElementById('emailInput');
        const successMessage = document.getElementById('successMessage');
  
        
        if (emailInput.value.trim() === '' || !emailInput.value.includes('@')) {
          alert('Please enter a valid email address.');
          return;
        }
  
       
        emailInput.value = ''; 
        successMessage.style.display = 'block';
  
        
        setTimeout(() => {
          successMessage.style.display = 'none';
        }, 3000);
      });

      


document.querySelectorAll('.footer-section ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    });
  });
  

  
document.getElementById('chatBtn').addEventListener('click', function() {
    alert('Chat with Customer Service');
  });
  
  
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  
  
  window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  };
  
 
  scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  