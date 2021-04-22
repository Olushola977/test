
import {
    Home,
    Earn,
    Wallet,
    Market,
    Activity} from '../../images/Images';
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
            alignItems: "center",
            position: "fixed",
            bottom: "0"
        }}>
            <Link to="/"><img alt="home" src={Home} /></Link>
            <Link to="/activity"><img alt="activity" src={Activity} /></Link>
            <Link to="/wallet"><img alt="wallet" src={Wallet} /></Link>
            <Link to="/market"><img alt="market" src={Market} /></Link>
            <Link to="/earn"><img alt="earn" src={Earn} /></Link>
        </div>
    )
}

export default Footer