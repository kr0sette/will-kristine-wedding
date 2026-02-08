import VenueInfo from '@/components/custom/travel/venue-info'
import StayInfo from '@/components/custom/travel/stay-info'
import TravelInfo from '@/components/custom/travel/travel-info'

function Travel() {
    return <section id="travel">
        <div className="section-content section-light-green preFadeIn">
            <div className="travel-stay-title mb-5 preFadeIn">
                <h1 className="text-center">Travel & Stay</h1>
            </div>
            <VenueInfo />
            <StayInfo />
            <TravelInfo />
        </div>
    </section>
}

export default Travel;