import gingko from '@/media/gingko_transparent_background.png'

function SaveTheDate() {
  return (
    <div className="save-the-date-content flex flex-col items-center justify-center pb-15">
      <h1 className="font-bold">Will & Kristine</h1>
      <img src={gingko} alt="logo" className="w-1/3 pt-10 pb-10"/>
      <div>
        
      </div>
      <h2 className="dates font-bold pb-5">
        <p>June 17, 2026</p>
      </h2>
      <h3 className="location text-center pb-5">
        <p className="font-bold">Mount Mitchell Eco Retreat</p>
        <p>430 Otter Rock Road</p>
        <p>Burnsville, NC 28714</p>
      </h3>
      <div className="italic">Invitation and details to come</div>
    </div>
  )
}

export default SaveTheDate;