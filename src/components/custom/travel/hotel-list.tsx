import { recommendedHotels } from '@/constants/hotels.tsx'
import { Button } from '@/components/ui/button'

const renderHotelList = () => {

    return recommendedHotels.map((hotel) => {
        const { id, name, distance, price, website, mapUrl, description} = hotel;
        const websiteLinkText = website.replace('https://', '')
        return <div key={id} id={id} className="hotel-card text-center bg-white/80 rounded-sm drop-shadow-sm py-10 px-2 sm:w-1/3">
            <h3 className="font-bold mb-3">{name}</h3>
            <p className="italic mb-3">{description}</p>
            <p><strong>Distance:</strong> {distance}</p>
            <p className="mb-3"><strong>Price:</strong> {price}</p>
            <a href={website} target="_blank" className="text-sm block mb-3">{websiteLinkText}</a>
            <Button variant="secondary" size="lg" onClick={() => onMapsBtnClick(mapUrl)}>Map</Button>
        </div>
    })
    
}

const onMapsBtnClick = (mapUrl: string) => {
    window.open(mapUrl, '_blank');
}

function HotelList () {
    return <div className="hotels-list pt-5 mb-10">
        <div className="hotels-list-title text-center">
            <h3 className="font-bold mb-5">Nearby Hotels</h3>
        </div>
        <div className="hotel-list-content flex flex-col sm:flex-row sm:justify-center gap-5">
            { renderHotelList() }
        </div>
    </div>
}

export default HotelList;