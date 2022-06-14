import MemberList from "../components/MemberList";
import NewMember from "../components/NewMember";
import Status from "../components/Status";
import { useState } from "react";

const MemberContainer = () => {

    const [members, setMembers] = ([
        {
            name: "Colin",
            email: "colin@brightnetwork.co.uk",
            employeeNumber: 123
        },
        {
            name: "Anna",
            email: "anna@brightnetwork.co.uk",
            employeeNumber: 234
        },
        {
            name: "Phil",
            email: "phil@brightnetwork.co.uk",
            employeeNumber: 345
        },
        {
            name: "Valeria",
            email: "valeria@brightnetwork.co.uk",
            employeeNumber: 456
        },
      ]);

    const [applicationsOpen, setApplicationsOpen] = useState(true);

    const addNewMember = () => {

        const newmember = {
            name: "Lewis",
            email: "lewis@lewis.com",
            employeeNumber: 1,
        }

        setMembers([...members, newmember])

        console.log("Added new member");
    }

    const updateApplicationStatus = () => {
        console.log("updating status...");
        setApplicationsOpen(!applicationsOpen);
    }

  return (
    <>
        <MemberList listOfMembers={members}/>
        <Status 
            applicationsOpen={applicationsOpen}
            handleButtonClick={updateApplicationStatus}
            />
        <NewMember handleButtonClick={addNewMember}/>
    </>
  )
}

export default MemberContainer