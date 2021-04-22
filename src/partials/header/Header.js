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
                        <Link to="/profile">
                            <img alt="profile" src={Profile} />
                        </Link>
                    </div>
                    <div className="notification">
                        <Link to="/notification">
                            <img alt="notification" src={Notification} />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="links">
                <ul>
                    <li><Link to="/wallet-balance">wallet balance</Link></li>
                    <li><Link to="/token-balance">token balance:</Link></li>
                    <li><Link to="/naira-balance">naira balance:</Link></li>
                </ul>
            </div>
        </header>
    )
}

export default Header