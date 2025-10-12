import instax5 from '@/media/instax5.png'
import { Separator } from '@/components/ui/separator'
import { Link } from 'react-router'

function SaveTheDate() {
  return (
    <div className="save-the-date-content flex flex-col items-center justify-center">
      <h3 className="text-center mb-5">
        <p className="text-(--foreground) italic">Join us to celebrate the wedding of</p>
      </h3>
      <h1 className="text-center text-(--accent) w-3/4">Will & Kristine</h1>
      <img src={instax5} alt="instax5" className="drop-shadow-sm w-[90%] sm:w-3/4 pt-5 mb-10"/>
      <h3 className="text-center mb-5">
        <p className="font-semibold">Please reserve the week of</p>
        <p className="text-(--foreground)">June 15 - June 19, 2026</p>
      </h3>
      <h3 className="text-center mb-5">
        <p className="font-semibold">Ceremony & Reception</p>
        <p className="text-(--foreground)">June 17, 2026</p>
      </h3>
      <h3 className="location text-center mb-5 mx">
        <p className="font-semibold">Mount Mitchell Eco Retreat</p>
        <p className="text-(--foreground)">Burnsville, NC</p>
        <p className="text-(--foreground) text-sm italic">(1 hour outside of Asheville, NC)</p>
      </h3>
      <Separator className="bg-(--accent)/25 mb-5 max-w-3/4" />
      <div className="italic text-center mb-5 w-[90%] sm:w-[90%]">
        <p className="mb-4">We are welcoming 50 guests to <Link to="/travel">stay with us on-site</Link>. We hope you can join us for the <Link to="/schedule">full week</Link> (June 15-19), but if you can only attend the ceremony and reception, please let us know when you RSVP.</p>
        <p className="mb-4">Formal invitation will be sent out January 2026.</p>
        <p>Please reach out to Kristine or Will with any questions.</p>
      </div>
    </div>
  )
}

export default SaveTheDate;