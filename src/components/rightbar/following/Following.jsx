import "./following.css";
import styles from "../../../index.css";

export default function Following({ company }) {
  const { logo, name } = company;
  return (
    <>
      <div className="rightBarFollowing flex flex-col cursor-pointer justify-center items-center">
        <img
          loading="lazy"
          className="rightBarFollowingImg w-full h-full object-contain"
          src={logo}
          alt=""
        />
        <span className="rightBarFollowingName">{name}</span>
      </div>
    </>
  );
}
