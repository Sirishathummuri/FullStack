import react from "react";
export default function Color(props)
{
    return (
        <div className="shadow p-3 bg-light rounded">
            <div>{props.name}</div>
        </div>
    )
}