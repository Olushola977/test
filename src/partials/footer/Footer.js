
import {
    Home,
    Earn,
    Wallet,
    Market,
    Activity
} from '../../images/Images';
import './Footer.css';

/**
 * Footer Component
 */

import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div style={{
            background: "#fff",
            marginTop: "2px",
            display: "flex",
            alignItems: "center",
            position: "fixed",
            bottom: "0",
            width: "100%",
            justifyContent: "center",
            padding: "5px 0"
        }}>
            <div>
                <Link to="/">
                    <img alt="home" src={Home} />
                    <p>Home</p>
                </Link>
            </div>
            <div>
                <Link to="/activity">
                    <img alt="activity" src={Activity} />
                    <p>Activity</p>
                </Link>
            </div>
            <div>
                <Link to="/wallet">
                    <img alt="wallet" src={Wallet} />
                    <p>Wallet</p>
                </Link>
            </div>
            <div>
                <Link to="/market">
                    <img alt="market" src={Market} />
                    <p>Market</p>
                </Link>
            </div>
            <div>
                <Link to="/earn">
                    <img alt="earn" src={Earn} />
                    <p>Earn</p>
                </Link>
            </div>
        </div>
    )
}

export default Footer