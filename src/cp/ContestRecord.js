import { Row, Col, Button } from 'react-bootstrap';

const marginTop_and_height = 65;

function ContestRecord(props) {
    return (
        <div className="w-100 competition-group">
            {props.competitions.map(competition => {
                return (<Row
                    key={competition.idx}
                    className={"w-100 position-absolute d-flex flex-column justify-content-end competition-activity"
                        + (props.groupSelected === props.groupId? " competition-selected" : "")}
                    onClick={() => props.setSelected(props.groupSelected === props.groupId? "" : props.groupId)}
                    style={{top: competition.idx * marginTop_and_height + "px"}}>
                        <Col xs={7} md={8} className="h-100 d-flex align-items-center">
                            <div className="w-100 contest-name">{competition.name}</div>
                        </Col>
                        <Col id="competition-details" xs={5} md={4} className="d-flex flex-column justify-content-center h-100">
                            <div className='w-100 text-truncate'>Date: {new Date(competition.date).toLocaleDateString("en-US",
                                    {year: 'numeric', month: 'short', day: 'numeric'})}</div>
                            <div className='w-100 text-truncate'>Rank: {competition.ranking.me + "/" + competition.ranking.total}</div>
                        </Col>
                        <Button
                            className='h-100 activity-link'
                            variant="outline-black"
                            href={competition.link}
                            target="_blank"
                            disabled={props.groupSelected !== props.groupId}
                            ><img
                                src={process.env.PUBLIC_URL + "image/right-arrow.png"}
                                width="30"
                                height="30"
                                alt="Competition activity link"/>
                        </Button>
                    </Row>);
            })}
        </div>);
}

export default ContestRecord;