import SchedSingleDay from '@/components/custom/sched-single-day';
import { eventSchedule } from '@/constants/eventSchedule';

function Schedule() {

    const renderSchedule = () => {
        return eventSchedule.map((singleDay) => (
            <SchedSingleDay singleDay={singleDay} />
        ))
    }

    return <div className="schedule-content flex flex-col items-center justify-center w-full">
        <h1 className="font-bold text-center">Wedding Week</h1>
        { renderSchedule() }
    </div>
}

export default Schedule;