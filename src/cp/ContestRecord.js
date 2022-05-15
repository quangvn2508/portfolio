import { useState } from 'react';

function ContestRecord(props) {
    const [groupSelected, setSelected] = useState(false);
    return (
        <div className="w-100 competition-group">
            {props.competitions.map(competition => {
                return (<div
                    className={"p-2 mt-3 w-100 position-absolute" + (groupSelected? " competition-selected" : "")}
                    onMouseEnter={() => setSelected(true)}
                    onMouseLeave={() => setSelected(false)}
                    style={{top: competition.ordered_index * 60 + "px"}}>{competition.name}</div>);
            })}
        </div>);
}

export default ContestRecord;