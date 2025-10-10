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
            <tr>
                    <td className="time border-r-1 border-(--accent)/25 align-top w-1/3">
                        <h3 className="font-bold text-right pr-[25%] mt-5">{ time }</h3>
                    </td>
                    <td className="activity align-top pl-[5%]">
                        <h3 className="activity-name font-bold text-left italic mt-5">{ name }</h3>
                        { description && <p className="activity-description">{ description } </p> }
                    </td>
            </tr>
        ))
    }




    return <div className="sched-single-day pt-10 w-[90%] sm:w-full">
        <h2 className="font-bold text-center pb-5">{ date }</h2>
        <table className="w-full table-fixed">
            { activities.length > 0 ? renderActivities() : <h3 className="font-bold text-center">TBD</h3>}
        </table>
    </div>
}

export default SchedSingleDay;