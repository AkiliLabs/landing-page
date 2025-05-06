// Set current year in footer
document.getElementById("current-year").textContent = new Date().getFullYear()

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()

    const targetId = this.getAttribute("href").substring(1)
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      })
    }
  })
})

// Scroll indicator functionality
const scrollIndicator = document.querySelector(".scroll-indicator")
if (scrollIndicator) {
  scrollIndicator.addEventListener("click", () => {
    const productsSection = document.getElementById("products")
    if (productsSection) {
      window.scrollTo({
        top: productsSection.offsetTop,
        behavior: "smooth",
      })
    }
  })
}

// Fade in elements on scroll
const fadeElements = document.querySelectorAll(".product-card, .about-content")

fadeElements.forEach((element) => {
  element.classList.add("opacity-0")
})

const fadeInOnScroll = () => {
  fadeElements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top
    const windowHeight = window.innerHeight

    if (elementPosition < windowHeight - 100) {
      element.classList.add("fade-in")
    }
  })
}

// Run once on load
fadeInOnScroll()

// Run on scroll
window.addEventListener("scroll", fadeInOnScroll)
