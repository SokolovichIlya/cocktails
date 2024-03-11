export default {
    install(app: any) {
        app.directive('lazy', {
            mounted(el: HTMLImageElement, bindings: any) {
                const observer = new IntersectionObserver(([{ isIntersecting }]) => {
                    if (isIntersecting) {
                        el.src = bindings.value
                        observer.unobserve(el)
                    }
                })
                
                observer.observe(el)
            }
        })
    }
}