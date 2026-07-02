export const vReveal = {
  mounted(el: HTMLElement, binding: any) {
    const delay = binding.value || 0

    el.style.opacity = "0"
    el.style.transform = "translateY(10px)"
    el.style.transition = "all 0.5s ease"

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {

        setTimeout(() => {
          el.style.opacity = "1"
          el.style.transform = "translateY(0)"
        }, delay)

        observer.unobserve(el) // run once
      }
    }, {
      threshold: 0.2
    })

    observer.observe(el)
  }
}