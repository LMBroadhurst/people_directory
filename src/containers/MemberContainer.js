import MemberList from "../components/MemberList";

const MemberContainer = () => {

    const members = [
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
      ];

  return (
    <>
        <MemberList listOfMembers={members}/>
    </>
  )
}

export default MemberContainer