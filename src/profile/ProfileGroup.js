import { Accordion, Badge, Button } from "react-bootstrap";

function EntryOverview(props) {
    return (<ul>{props.overview.map((l, idx) => (<li key={idx}>{l}</li>))}</ul>)
}

function EntryOther(props) {
    return (<>
        <h6>{props.other["name"]}:</h6>
        {props.other["list"].map((item, idx) => {
            switch (props.other["type"]) {
                case "0":
                    return <Badge key={idx} className="m-1" text="dark" bg="light">{item}</Badge>
                case "1":
                    return <Button
                        key={idx}
                        href={item["URL"]}
                        target="_blank"
                        className="m-1"
                        variant="outline-secondary"
                        size="sm">{item["name"]}</Button>
                default:
            };
            return (<></>);
        })}
    </>);
}

function ProfileGroup(props) {
    return (
        <Accordion>
            {props.section.map((GroupEntry, index) => {
                return (
                    <Accordion.Item key={index} eventKey={index}>
                        <Accordion.Header>{GroupEntry["name"]}</Accordion.Header>
                        <Accordion.Body>
                            <EntryOverview overview={GroupEntry["overview"]}/>
                            {
                                GroupEntry["other"].map((other, idx) => {
                                    return <EntryOther key={idx} other={other}/>;
                                })
                            }
                        </Accordion.Body>
                    </Accordion.Item>)
            })}
        </Accordion>
    )
}

export default ProfileGroup;
