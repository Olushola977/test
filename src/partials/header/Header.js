import { Link } from 'react-router-dom';
import { Notification, Profile} from '../../images/Images';
import './Header.css';

/**
 * Header Component
 */

const Header = () => {
    return (
        <header>
            <div className="header">
                <div className="logo">
                    <Link to="/">logo</Link> 
                </div>
                <div className="right-header-cont">
                    <div className="profile">
                            <img alt="profile" src={Profile} />
                    </div>
                    <div className="notification">
                            <img alt="notification" src={Notification} />
                    </div>
                </div>
            </div>
            <div className="links">
                <ul>
                    <li>wallet balance</li>
                    <li>token balance:</li>
                    <li>naira balance:</li>
                </ul>
            </div>
        </header>
    )
}

export default Header