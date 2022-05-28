import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./profile.css";
import ProfileGroup from "./ProfileGroup";

function Profile() {
    const [profiles, setProfiles] = useState({});
    useEffect(() => {
        fetch('json/profile.json', {
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'}
        })
        .then(function(response){
            return response.json();
        })
        .then(function(raw_data) {
            setProfiles(raw_data);
        });
    }, []);
    return (
        <div className="w-100 bg-black">
            <Container id="profile-page" className="pt-5 pb-5">
                {Object.keys(profiles).map(group => {
                    return (<>
                        <h2 className="mt-5 text-white">{group}</h2>
                        <ProfileGroup section={profiles[group]}/>
                    </>);
                })}
            </Container>
        </div>
        );
}

export default Profile;