import { Mail, House, BedDouble } from 'lucide-react'
import { Button } from '@/components/ui/button'

const openRsvpForm = (type: string) => () => {

    const onSiteForm = 'https://forms.gle/n9xHveZJWyEZ7eeMA'
    const offsiteForm = 'https://forms.gle/jgX1g5Z3ozb9Dci77'

    if (type === 'onSite') {
        window.open(onSiteForm, '_blank');
        return;
    }

    window.open(offsiteForm, '_blank');

}

function Rsvp() {
    return <section id="rsvp">
        <div className="section-content section-white preFadeIn">
            <div className="rsvp-title text-center mb-5 preFadeIn">
                <h1 className="pl-0 sm:pl-2 pr-0 sm:pr-2">RSVP</h1>
            </div>
            <div className="rsvp-content text-center w-full sm:w-[70%] mb-5">
                <p className="mb-5">We cannot wait to spend the week with you all!</p>
                <p className="mb-5">Kindly RSVP by <strong>April 15, 2026</strong>.</p>
                <Mail className="size-10 ml-auto mr-auto mb-5 animate-bounce" />
                <p className="mb-5">RSVP is online only.  Please respond even if you do not plan to attend.  This will help us with our planning.</p>
                <p className="mb-5">RSVP forms are editable after submission so you can update your responses if needed.</p>
                <p className="mb-5">If you are unsure which guest you are, please see the <a href="/travel">Travel & Stay</a> section of this page for more information.</p>
                <p className="mb-5">Click on one of the buttons below to RSVP.</p>
            </div>
            <div className="rsvp-tiles flex flex-col sm:flex-row gap-5 mb-10">
                <Button onClick={openRsvpForm('onSite')} variant="outline" size="lg" className="onsite-rsvp-btn w-full h-12 sm:hidden bg-(--edward-green)/80 text-white text-lg">On-site Guests<House/></Button>
                <Button onClick={openRsvpForm('offSite')} variant="outline" size="lg" className="offsite-rsvp-btn w-full h-12 sm:hidden bg-(--edward-green)/80 text-white text-lg">Off-site Guests <BedDouble/></Button>
                <div onClick={openRsvpForm('onSite')} className="onsite-rsvp-tile text-center hidden sm:block bg-white transition duration-500 ease-in-out hover:bg-(--edward-green)/80 hover:text-white rounded-sm drop-shadow-sm p-10">
                    <House className="size-10 ml-auto mr-auto mb-5" />
                    <h2>On-Site Guests</h2>
                </div>
                <div onClick={openRsvpForm('offSite')} className="offsite-rsvp-tile text-center hidden sm:block bg-white transition duration-500 ease-in-out hover:bg-(--edward-green)/80 hover:text-white rounded-sm drop-shadow-sm p-10">
                    <BedDouble className="size-10 ml-auto mr-auto mb-5" />
                    <h2>Off-Site Guests</h2>
                </div>
            </div>
        </div>
    </section>

}

export default Rsvp;