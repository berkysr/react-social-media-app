import "./userinfo.css";
import styles from "../../../index.css"

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
        <div className="rightBarInfoItem mb-2.5">
          <span className="rightBarInfoKey mr-4 font-medium	text-[#555]">{keyValues[keyValue]}</span>
          <span className="rightBarInfoValue font-light">{info}</span>
        </div>
      ) : null}
    </>
  );
}
