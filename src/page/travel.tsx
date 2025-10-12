import ecoretreat from '@/media/ecoretreat.jpg'

const googleMapApiKey = import.meta.env.VITE_GOOGLE_MAP_API_KEY;
const googleMapUrl = `https://www.google.com/maps/embed/v1/place?key=${googleMapApiKey}&q=Mount+Mitchell+Eco+Retreat,Burnsville,NC`;

function Travel() {
    console.log(googleMapApiKey);
    return <div className="travel-content flex flex-col items-center justify-center w-full">
        <h1 className="text-center w-3/4">Travel & Stay</h1>
        <div className="venue mt-5">
            <h2 className="text-center">Venue</h2>
            <h3 className="location text-center mt-2 mx">
                <p className="font-semibold">Mount Mitchell Eco Retreat</p>
                <p className="italic text-(--foreground)">430 Otter Rock Road</p>
                <p className="italic text-(--foreground)">Burnsville, NC 28714</p>
                <a href="https://www.mmecoretreat.com/" target="_blank">www.mmecoretreat.com</a>
            </h3>
            <img src={ecoretreat} alt="Mt Mitchell Eco Retreat" className="drop-shadow-sm rounded-2xl mr-auto ml-auto w-[90%] sm:w-3/4 mt-5"/>
            <iframe
            className="rounded-2xl mt-5 ml-auto mr-auto w-[90%] sm:w-3/4 h-[300px] mb-5"
            referrerPolicy="no-referrer-when-downgrade"
            src={googleMapUrl}
            allowFullScreen>
            </iframe>
        </div>
    </div>
}

export default Travel;