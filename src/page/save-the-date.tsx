import gingko from '@/media/gingko_transparent_background.png'
import UpdateSignup from '@/components/custom/update-signup'

function SaveTheDate() {
  return (
    <div className="save-the-date-content flex flex-col items-center justify-center">
      <h1 className="font-bold text-center">Will & Kristine</h1>
      <img src={gingko} alt="gingko" className="w-3/4 sm:w-1/4 pt-10 pb-10"/>
      <div>
        
      </div>
      <h2 className="dates font-bold pb-5">
        <p>June 17, 2026</p>
      </h2>
      <h3 className="location text-center pb-5 mx">
        <p className="font-bold">Mount Mitchell Eco Retreat</p>
        <p>430 Otter Rock Road</p>
        <p>Burnsville, NC 28714</p>
      </h3>
      <div className="italic pb-5">Invitation and details to come</div>
      <UpdateSignup />
    </div>
  )
}

export default SaveTheDate;