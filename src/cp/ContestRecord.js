import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

const marginTop_and_height = 60;

function ContestRecord(props) {
    const [groupSelected, setSelected] = useState(false);
    return (
        <div className="w-100 competition-group">
            {props.competitions.map(competition => {
                return (<Row
                    key={competition.idx}
                    as="a"
                    className={"w-100 position-absolute d-flex flex-column justify-content-end"
                        + (groupSelected? " competition-selected" : "")}
                    onMouseEnter={() => setSelected(true)}
                    onMouseLeave={() => setSelected(false)}
                    href={competition.link}
                    target="_blank"
                    style={{top: competition.idx * marginTop_and_height + "px"}}>
                        <Col xs={8} className="h-100 d-flex align-items-center">
                            <div className="w-100 text-truncate">{competition.name}</div>
                        </Col>
                        <Col id="competition-details" xs={4} className="d-flex flex-column justify-content-center h-100">
                            <div className='w-100 text-truncate'>Date: {new Date(competition.date).toLocaleDateString("en-US",
                                    {year: 'numeric', month: 'short', day: 'numeric'})}</div>
                            <div className='w-100 text-truncate'>Rank: {competition.ranking.me + "/" + competition.ranking.total}</div>
                        </Col>
                    </Row>);
            })}
        </div>);
}

export default ContestRecord;