import { Link } from 'react-router-dom';
import './topbar.css';
import { Search, Person, Chat, Notifications } from '@mui/icons-material' 

export default function Topbar() {
  return (
    <div className='topBarContainer'>
        <div className="topBarLeft">
          <Link to="/"><span className="topBarLogo">Social</span></Link>
        </div>
        <div className="topBarCenter">
          <div className="topBarSearchBar">
            <Search className='searchIcon'/>
            <input 
            placeholder='Search for a friend' 
            className='searchInput'
            />
          </div>
        </div>
        <div className="topBarRight">
          <div className="topBarLinks">
            <span className="topBarLink">Homepage</span>
            <span className="topBarLink">Timeline</span>
          </div>
          <div className="topBarIcons">
            <div className="topBarIconItem">
              <Person/>
              <span className="topBarIconBadge">1</span>
            </div>
            <div className="topBarIconItem">
              <Chat/>
              <span className="topBarIconBadge">1</span>
            </div>
            <div className="topBarIconItem">
              <Notifications/>
              <span className="topBarIconBadge">1</span>
            </div>
          </div>
          <Link to="/profile"><img src="/assets/person/10.jpeg" alt="" className="topBarImg" /></Link>
        </div>
    </div>
  )
}
