import React from "react"
import '../Styling/Sidebar.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {Button} from '@material-ui/core'
function Sidebar() {
    return (
        <div className="sidebar">
            <TwitterIcon className="sidebar-logo"/>

            <SidebarOption active title='Home' Icon={HomeIcon} />
            <SidebarOption  title='Explorer' Icon={SearchIcon}/>
            <SidebarOption  title='Notifications' Icon={NotificationsNoneIcon}/>
            <SidebarOption title='Messages' Icon={MailOutlineIcon}/>
            <SidebarOption title='Bookmarks' Icon={BookmarkBorderIcon}/>
            <SidebarOption title='Lists' Icon={ListAltIcon}/>
            <SidebarOption title='Profile' Icon={PermIdentityIcon}/>
            <SidebarOption title='More' Icon={MoreHorizIcon}/>

            <Button variant="outlined" className="sidebar-tweet" >Tweet</Button>
        </div>
    )
}
export default Sidebar
