import "./following.css";

export default function Following({ company }) {
    const {logo, name} = company;
  return (
    <>
      <div className="rightBarFollowing">
        <img
          className="rightBarFollowingImg"
          src={ logo }
          alt=""
        />
        <span className="rightBarFollowingName">{ name }</span>
      </div>
    </>
  );
}
