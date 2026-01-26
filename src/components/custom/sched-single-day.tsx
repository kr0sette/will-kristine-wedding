interface singleDay {
        date: string;
        activities: activities[];
}

interface activities {
    name: string;
    time: string;
    description?: string;

}

function SchedSingleDay({ singleDay }: { singleDay: singleDay }) {
    const { date, activities } = singleDay;

    const renderActivities = () => {
        return activities.map(({ time, name, description }) => (
            <tr key={name}>
                    <td className="time border-r-1 border-(--grey-chateau)/80 align-top w-1/3">
                        <h3 className="font-semibold text-right pr-[5%] mt-5">{ time }</h3>
                    </td>
                    <td className="activity pl-[3%] align-top">
                        <p className="activity-name font-semibold text-left text-[1.2em] italic mt-5">{ name }</p>
                        { description && <p className="activity-description text-justify">{ description } </p> }
                    </td>
            </tr>
        ))
    }




    return <div className="sched-single-day drop-shadow-sm w-[full] sm:w-[90%] mt-2 mb-2 pt-10 pl-2 sm:pl-10 pr-2 sm:pr-10 pb-10 bg-white/80 rounded-sm preFadeIn">
        <h2 className="text-center font-bold pb-5">{ date }</h2>
        <table className="w-full table-fixed">
            <tbody>
            { activities.length > 0 ? renderActivities() : <h3 className="font-semibold text-center">TBD</h3>}
            </tbody>
        </table>
    </div>
}

export default SchedSingleDay;