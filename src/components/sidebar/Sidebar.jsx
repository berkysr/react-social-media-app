import "./sidebar.css";
import styles from "../../index.css";
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
    <div className="sideBar flex-[3] h-[calc(100vh-3.5rem)] top-14 sticky overflow-y-scroll">
      <div className="sideBarWrapper p-5">
        <ul className="sideBarList p-0 m-0 list-none">
          <li className="sideBarListItem flex items-center mb-5">
            <RssFeed className="sideBarIcon mr-4" />
            <span className="sideBarListItemText">Feed</span>
          </li>
          <li className="sideBarListItem flex items-center mb-5">
            <ChatSharp className="sideBarIcon mr-4" />
            <span className="sideBarListItemText">Chats</span>
          </li>
          <li className="sideBarListItem flex items-center mb-5">
            <VideoCameraBack className="sideBarIcon mr-4" />
            <span className="sideBarListItemText">Videos</span>
          </li>
          <li className="sideBarListItem flex items-center mb-5">
            <GroupSharp className="sideBarIcon mr-4" />
            <span className="sideBarListItemText">Groups</span>
          </li>
          <li className="sideBarListItem flex items-center mb-5">
            <BookmarkSharp className="sideBarIcon mr-4" />
            <span className="sideBarListItemText">Bookmarks</span>
          </li>
          <li className="sideBarListItem flex items-center mb-5">
            <QuestionAnswerSharp className="sideBarIcon mr-4" />
            <span className="sideBarListItemText">Questions</span>
          </li>
          <li className="sideBarListItem flex items-center mb-5">
            <CasesSharp className="sideBarIcon mr-4" />
            <span className="sideBarListItemText">Jobs</span>
          </li>
          <li className="sideBarListItem flex items-center mb-5">
            <EventAvailableSharp className="sideBarIcon mr-4" />
            <span className="sideBarListItemText">Events</span>
          </li>
          <li className="sideBarListItem flex items-center mb-5">
            <CastForEducation className="sideBarIcon mr-4" />
            <span className="sideBarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sideBarButton bg-green-500 text-white w-36 !border-0 p-2.5 rounded-md font-medium">Show More</button>
        <hr className="sideBarHr my-5 mx-0" />
        <h4 className="sideBarCloseFriendList font-medium mb-4">Close Friends</h4>
        <ul className="sideBarFriendList p-0 m-0 list-none">
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
