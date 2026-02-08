import { House, BedDouble } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import HotelList from './hotel-list.tsx'

function StayInfo() {
    return <div className="stay-info preFadeIn w-full sm:w-[90%] preFadeIn pt-10">
        <div className="stay-info-title pb-5 text-center preFadeIn">
            <h2 className="font-bold">Where can I stay?</h2>
        </div>
        <div className="stay-info-content flex flex-col sm:flex-row pt-5 mb-10 preFadeIn">
            <div className="stay-info-content-left pr-0 sm:pr-5">
                <div className="onsite-guests-title">
                    <House className="size-10 ml-auto mr-auto mb-5" />
                    <h3 className="font-bold text-center">On-Site Guests</h3>
                </div>
                <Separator className="max-w-[50%] bg-(--grey-chateau)/80 ml-auto mr-auto my-5"/>
                <div className="onsite-guests-description text-center">
                    <p className="mb-5">We're happy to offer <strong>complimentary accommodations at Mount Mitchell Eco Retreat</strong> for a portion of our guests.</p>
                    <p className="mb-5">If you've been invited to stay on-site, this will be noted on your Save the Date and formal invitation.</p>
                    <p>Because space is limited, <strong>we ask that on-site guests plan to stay for at least 2 nights</strong>, with a preference for the full week. If that isn't possible, please let us know as soon as possible.</p>
                </div>
            </div>
            <div className="stay-info-content-right pl-0 sm:pl-5 pt-10 sm:pt-0">
                <div className="offsite-guests-title">
                    <BedDouble className="size-10 ml-auto mr-auto mb-5" />
                    <h3 className="font-bold text-center">Off-Site Guests</h3>
                </div>
                <Separator className="max-w-[50%] bg-(--grey-chateau)/80 ml-auto mr-auto my-5"/>
                <div className="offsite-guests-description text-center">
                    <p className="mb-5">While we'd love to host everyone on-site, space at the venue is limited.</p>
                    <p className="mb-5">Below is a list of nearby hotel recommendations, though you’re welcome to stay wherever you'd like.</p>
                    <p><strong>Off-site guests are warmly invited to all wedding week events and can hang out with us at the venue at any time.</strong> There's plenty of space to relax, gather, and enjoy the mountains together.</p>
                </div>
            </div>
        </div>
        <HotelList />
    </div>
}

export default StayInfo;