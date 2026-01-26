import ecoretreat from '@/media/ecoretreat.jpg'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'

const onMapsBtnClick = () => {
    window.open('https://maps.app.goo.gl/RCqT63TzjJxSMBbk8', '_blank');
}

function VenueInfo() {
    return <div className="venue-info text-center mb-5 w-full sm:w-[90%] preFadeIn">
        <div className="venue-info-title pb-5">
            <h2 className="font-bold">The Venue</h2>
        </div>
        <div className="venue-info-content flex flex-col sm:flex-row pt-5 pb-5">
            <div className="venue-info-content-left w-full sm:w-1/2 preFadeIn">
                <div className="venue-address text-center sm:w-[90%] sm:ml-auto sm:mr-20">
                    <h3 className="font-bold">Mount Mitchell Eco Retreat</h3>
                    <p className="text-[1.2em]">430 Otter Rock Road</p>
                    <p className="text-[1.2em]">Burnsville, NC 28714</p>
                    <Separator className="max-w-[50%] bg-(--grey-chateau)/80 ml-auto mr-auto my-5"/>
                    <p className="italic mb-5">A North Carolina mountain hotel and retreat center at the foot of Mt Mitchell, the highest peak in Easter United States</p>
                    <a href="https://www.mmecoretreat.com/" target="_blank">www.mmecoretreat.com</a>
                    <Button variant="secondary" size="lg" className="mt-5 block ml-auto mr-auto" onClick={onMapsBtnClick} >View on Google Maps</Button>
                    <h3 className="font-bold mt-10">Things to Do</h3>
                    <p>Coming soon!</p>
                </div>
            </div>
            <div className="venue-info-content-right sm:w-1/2 preFadeIn">
                <div className="venue-pic-wrapper">
                    <img src={ecoretreat} alt="Mt Mitchell Eco Retreat" className="drop-shadow-lg rounded-2xl mt-10 sm:mt-0 w-full sm:w-50%"/>
                </div>
            </div>
        </div>
    </div>
}

export default VenueInfo;