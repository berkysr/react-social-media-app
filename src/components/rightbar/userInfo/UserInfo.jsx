import "./userinfo.css";

export default function UserInfo({ info, keyValue }) {
  const keyValues = {
    city: "City",
    from: "From",
    relationShip: "Relationship",
    birthDay: "Birthday",
    job: "Job",
    school: "School",
  };

  return (
    <>
      {keyValues[keyValue] && info ? (
        <div className="rightBarInfoItem">
          <span className="rightBarInfoKey">{keyValues[keyValue]}</span>
          <span className="rightBarInfoValue">{info}</span>
        </div>
      ) : null}
    </>
  );
}
