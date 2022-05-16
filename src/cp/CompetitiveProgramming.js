import { useEffect, useState } from "react";
import ContestRecord from "./ContestRecord";
import './CP.css';

function CompetitiveProgramming() {
    const [data, setData] = useState({});
    useEffect(() => {
        fetch('competitions.json', {
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'}
        })
        .then(function(response){
            return response.json();
        })
        .then(function(raw_data) {
            let tmp = {};
            raw_data.sort((a, b) => (new Date(a.date) < new Date(b.date)? 1 : -1));
            for (let [idx, compe] of raw_data.entries()) {
                if (!(compe.tag in tmp))
                    tmp[compe.tag] = [];
                compe["idx"] = idx;
                tmp[compe.tag].push(compe);
            }
            setData(tmp);
        });
    }, []);
    return (<>
        <div className="mt-5 pt-5 w-100 container">
            <h2>Activities</h2>
            {
                Object.keys(data).map((key) => {
                    return (<ContestRecord key={key} competitions={data[key]}/>)
                })
            }
        </div>
    </>);
}

export default CompetitiveProgramming;