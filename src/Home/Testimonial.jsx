

import ReviewGallery from "./ReviewGallery"
import Reviews from "./Reviews"

function Testimonial() {
    return (
        <>
            <h2 style={{margin:"0"}} class="Home-Customer-Rewiews">Customer Reviews</h2>
            <section  class="Home-section-testimonial">
                <div class="Home-testimonials">
                    <Reviews />
                    <Reviews />
                    <Reviews />
                    <Reviews />
                </div>
                <ReviewGallery />
            </section>
        </>
    )
}

export default Testimonial
