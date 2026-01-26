export interface AirportCardProps {
    name: string;
    city: string;
    distance: string;
    airlines: string[];
}

function AirportCard({ name, city, distance, airlines }: AirportCardProps) {
    return (
        <div id={`${city}-airport`} className="airport-card bg-white/80 rounded-sm py-10 px-2 sm:px-10 sm:w-1/2 drop-shadow-sm">
            <h3 className="font-bold text-center mb-5">{name}</h3>
            <p className="text-center"><strong>City: </strong>{`${city}, NC`}</p>
            <p className="text-center"><strong>Distance: </strong> {distance}</p>
            <p className="text-center"><strong>Airlines: </strong> {airlines.join(", ")}</p>
        </div>
    );
}

export default AirportCard;
