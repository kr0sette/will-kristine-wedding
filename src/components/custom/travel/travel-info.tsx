import { recommendedAirports } from '@/constants/airports'
import AirportCard from './airport-card'


const renderAirportCards = (cities: Array<string>) => {
    const airports = cities.reduce((matchingAirports, city) => {
        const airport = recommendedAirports.find(a => a.city === city);
        if (airport) {
            matchingAirports.push(airport);
        }
        return matchingAirports;
    }, [] as typeof recommendedAirports)

    return airports.map(({name, city, distance, airlines}) =>
        <AirportCard key={city} name={name} city={city} distance={distance} airlines={airlines}/>
    )
}

function TravelInfo() {
    return <div className="travel-info preFadeIn w-full sm:w-[90%] preFadeIn pt-10">
        <div className="travel-info-title text-center preFadeIn">
            <h2 className="font-bold mb-5">How do I get there?</h2>
            <p>We recommend flying into one of the airports below and then taking a car to the venue.</p>
        </div>
        <div className="travel-info-content">
            <div className="airports flex flex-col pt-5 mb-10 preFadeIn">
                <div className="airports-top-row flex flex-col mb-5 sm:flex-row gap-5">
                    { renderAirportCards(["asheville","charlotte"]) }
                </div>
                <div className="airports-bottom-row flex flex-col sm:flex-row gap-5 preFadeIn">
                    { renderAirportCards(["raleigh","greensboro"]) }
                </div>
            </div>
        </div>
    </div>
}

export default TravelInfo;