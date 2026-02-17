import instax5 from '@/media/instax5.png'
import { Separator } from '@/components/ui/separator'
import gingko from '@/media/gingko_outline_thick_darkgreen_rotated.png'

function Home() {
  return (
    <section id="home" className="section-white pt-0!">
      <div className="text-center section-content first-section">
        <div className="home-title mb-5">
          <h3 className="mb-5 join-us">Join us to celebrate the wedding of</h3>
          <h1 className="text-center names">Will & Kristine</h1>
        </div>
        <div className="home-image flex flex-row justify-center mt-5 mb-5">
          <img src={instax5} alt="instax5" className="drop-shadow-sm w-full sm:w-[50%]"/>
        </div>
        <div className="event-details text-center mt-5">
          <h2 className="event-date mb-5 font-semibold">June 17, 2026</h2>
          <h3 className="venue-name mb-5">Mount Mitchell Eco Retreat</h3>
          <h3 className="event-location mb-5">Burnsville, NC</h3>
          <p className="italic">Last updated February 16, 2026</p>
        </div>
        <Separator className="max-w-[50%] md:max-w-[25%] sm:max-w-[25%] bg-(--grey-chateau)/80 ml-auto mr-auto my-5 mt-50 preFadeIn"/>
        <div className="event-description text-center mt-30 w-full sm:w-[50%] mb-30 preFadeIn">
          <img src={gingko} alt="gingko" className="w-[35%] sm:w-[20%] mb-10 ml-auto mr-auto"/>
          <p>We're thrilled to gather our closest family and friends for a week-long celebration at the foot of Mount Mitchell. Come ready to unwind, connect, laugh a lot, and enjoy every moment together.</p>
        </div>
        <Separator className="max-w-[50%] md:max-w-[25%] sm:max-w-[25%] bg-(--grey-chateau)/80 ml-auto mr-auto my-5 mb-20 preFadeIn"/>
      </div>
    </section>
  )
}

export default Home;