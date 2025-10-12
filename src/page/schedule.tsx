import SchedSingleDay from '@/components/custom/sched-single-day';
import { eventSchedule } from '@/constants/eventSchedule';

function Schedule() {

    const renderSchedule = () => {
        return eventSchedule.map((singleDay) => (
            <SchedSingleDay singleDay={singleDay} />
        ))
    }

    return <div className="schedule-content flex flex-col items-center justify-center w-full">
        <h1 className="text-center w-3/4">Wedding Week</h1>
        <div className="mt-5 text-center w-[75%]">We will plan some activities, but feel free to plan your own adventures during your stay.</div>
        { renderSchedule() }
    </div>
}

export default Schedule;