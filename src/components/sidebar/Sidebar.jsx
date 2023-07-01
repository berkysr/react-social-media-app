import "./sidebar.css";
import { Users } from "../../dummyData";
import {
  RssFeed,
  ChatSharp,
  VideoCameraBack,
  GroupSharp,
  BookmarkSharp,
  QuestionAnswerSharp,
  CasesSharp,
  EventAvailableSharp,
  CastForEducation,
} from "@mui/icons-material";
import CloseFriend from "../closeFriend/CloseFriend";

export default function Sidebar() {
  return (
    <div className="sideBar">
      <div className="sideBarWrapper">
        <ul className="sideBarList">
          <li className="sideBarListItem">
            <RssFeed className="sideBarIcon" />
            <span className="sideBarListItemText">Feed</span>
          </li>
          <li className="sideBarListItem">
            <ChatSharp className="sideBarIcon" />
            <span className="sideBarListItemText">Chats</span>
          </li>
          <li className="sideBarListItem">
            <VideoCameraBack className="sideBarIcon" />
            <span className="sideBarListItemText">Videos</span>
          </li>
          <li className="sideBarListItem">
            <GroupSharp className="sideBarIcon" />
            <span className="sideBarListItemText">Groups</span>
          </li>
          <li className="sideBarListItem">
            <BookmarkSharp className="sideBarIcon" />
            <span className="sideBarListItemText">Bookmarks</span>
          </li>
          <li className="sideBarListItem">
            <QuestionAnswerSharp className="sideBarIcon" />
            <span className="sideBarListItemText">Questions</span>
          </li>
          <li className="sideBarListItem">
            <CasesSharp className="sideBarIcon" />
            <span className="sideBarListItemText">Jobs</span>
          </li>
          <li className="sideBarListItem">
            <EventAvailableSharp className="sideBarIcon" />
            <span className="sideBarListItemText">Events</span>
          </li>
          <li className="sideBarListItem">
            <CastForEducation className="sideBarIcon" />
            <span className="sideBarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sideBarButton">Show More</button>
        <hr className="sideBarHr" />
        <h4 className="sideBarCloseFriendList">Close Friends</h4>
        <ul className="sideBarFriendList">
          {Users.map((eachUser) => {
            return eachUser.closeFriend ? (
              <CloseFriend key={eachUser.id} user={eachUser} />
            ) : null;
          })}
        </ul>
      </div>
    </div>
  );
}
