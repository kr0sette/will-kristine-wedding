import instax5 from '@/media/instax5.png'
import UpdateSignup from '@/components/custom/update-signup'
import { Separator } from '@/components/ui/separator'

function SaveTheDate() {
  return (
    <div className="save-the-date-content flex flex-col items-center justify-center">
      <h1 className="font-bold text-center">Will & Kristine</h1>
      <img src={instax5} alt="instax5" className="drop-shadow-sm opacity-85 w-[90%] sm:w-3/4 pt-5 mb-10"/>
      <h2 className="dates text-center font-bold mb-5 w-3/4 sm:w-full">
        Wednesday, June 17, 2026
      </h2>
      <h3 className="text-center mb-5">
        <p className="font-bold">Please reserve the week of</p>
        <p className="italic text-(--foreground)">June 15 - June 19, 2026</p>
      </h3>
      <h3 className="location text-center mb-5 mx">
        <p className="font-bold">Mount Mitchell Eco Retreat</p>
        <p className="italic text-(--foreground)">430 Otter Rock Road</p>
        <p className="italic text-(--foreground)">Burnsville, NC 28714</p>
      </h3>
      <div className="italic mb-5">Invitation and details to come</div>
      <Separator className="bg-(--accent)/25 mb-5 max-w-3/4" />
      <UpdateSignup />
    </div>
  )
}

export default SaveTheDate;