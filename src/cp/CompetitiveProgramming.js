import { useEffect, useState } from "react";
import ContestRecord from "./ContestRecord";
import { Button, Tabs, Tab } from 'react-bootstrap';
import './CP.css';

const profiles = {
    "atcoder": "https://atcoder.jp/users/quangvn",
    "codeforces": "https://codeforces.com/profile/wvn",
    "leetcode": "https://leetcode.com/quangvn2508/",
    "projecteuler": "https://projecteuler.net/profile/quangvn2508.png"
}

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
    return (
        <div className="mt-5 pt-5 w-100 container">
            <Tabs defaultActiveKey="profiles">
                <Tab eventKey="profiles" title="Profiles">
                    <div  className="cp-content-tab d-flex">
                        {Object.keys(profiles).map(platform => {
                            return <Button bsPrefix="div"
                                key={platform}
                                className="cp-profile-card d-flex justify-content-center align-items-center"
                                href={profiles[platform]}
                                target="_blank">
                                <img src={process.env.PUBLIC_URL + `${platform}.png`}/>
                            </Button>;
                        })}
                    </div>
                </Tab>
                <Tab eventKey="activities" title="Activities">
                    <div  className="overflow-auto cp-content-tab">
                    {
                        Object.keys(data).map((key) => {
                            return (<ContestRecord key={key} competitions={data[key]}/>)
                        })
                    }
                    </div>
                </Tab>
            </Tabs>
        </div>);
}

export default CompetitiveProgramming;