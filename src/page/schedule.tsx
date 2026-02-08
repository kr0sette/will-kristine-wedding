import SchedSingleDay from '@/components/custom/sched-single-day';
import { eventSchedule } from '@/constants/eventSchedule';

function Schedule() {

    const renderSchedule = () => {
        return eventSchedule.map((singleDay) => (
            <SchedSingleDay key={singleDay.date} singleDay={singleDay} />
        ))
    }

    return <section id="schedule">
        <div className="section-content section-brown preFadeIn">
            <div className="schedule-title text-center preFadeIn">
                <h1 className="pl-0 sm:pl-2 pr-0 sm:pr-2 mb-5"> Wedding Week</h1>
                <p>We will plan some activities, but feel free to plan your own adventures during your stay.</p>
                <p>All events will be held at Mount Mitchell Eco Retreat, unless otherwise noted.</p>
            </div>
            { renderSchedule() }
        </div>
    </section>
}

export default Schedule;