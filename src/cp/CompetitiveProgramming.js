import ContestRecord from "./ContestRecord";
import './CP.css';

function CompetitiveProgramming() {
    const data = [
        {
            tag: "CF",
            list: [
                {
                    name: "CF1",
                    ordered_index: 0
                },
                {
                    name: "CF2",
                    ordered_index: 2
                }
            ]
        },
        {
            tag: "CJ",
            list: [
                {
                    name: "codejam",
                    ordered_index: 1
                }
            ]
        }
    ]
    return (<>
        <div className="mt-5 pt-5 w-100 container">
            <h2>Activities</h2>
            {
                data.map(activity => {
                    return (<ContestRecord key={activity.tag} competitions={activity.list}/>)
                })
            }
        </div>
    </>);
}

export default CompetitiveProgramming;