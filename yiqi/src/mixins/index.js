export default {
    mounted() {
        const scrollToTop = () => {
            let sTop = document.documentElement.scrollTop || document.body.scrollTop
            if (sTop > 0) {
                window.requestAnimationFrame(scrollToTop)
                window.scrollTo(0, sTop - sTop / 8)
            }
        }
        scrollToTop()
    }
}
