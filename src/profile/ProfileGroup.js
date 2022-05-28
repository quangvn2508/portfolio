import { Accordion, Badge, Button } from "react-bootstrap";

function EntryOverview(props) {
    return (<ul>{props.overview.map(l => (<li>{l}</li>))}</ul>)
}

function EntryOther(props) {
    return (<>
        <h6>{props.other["name"]}:</h6>
        {props.other["list"].map(item => {
            switch (props.other["type"]) {
                case "0":
                    return <Badge className="m-1" text="dark" bg="light">{item}</Badge>
                case "1":
                    return <Button
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
                    <Accordion.Item eventKey={index}>
                        <Accordion.Header>{GroupEntry["name"]}</Accordion.Header>
                        <Accordion.Body>
                            <EntryOverview overview={GroupEntry["overview"]}/>
                            {
                                GroupEntry["other"].map(other => {
                                    return <EntryOther other={other}/>;
                                })
                            }
                        </Accordion.Body>
                    </Accordion.Item>)
            })}
        </Accordion>
    )
}

export default ProfileGroup;
