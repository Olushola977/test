
import './Home.css';

/**
 * Home Component
 */

const Home = () => {
    return (
        <div className="home">
           <p style={{
               color: "#0088ff",
               fontSize: "13px",
               fontWeight: "500",
               padding: "10px 10px 5px 10px"
           }}>Select Currency:</p>
           <div style={{
               background: "#fff",
               padding: "10px"
           }}>
               <div className="input">
                    <span style={{
                        textTransform: "uppercase",
                        fontWeight: "700",
                        fontSize: "15px",
                        border: "1px solid #000",
                        padding: "3px 0",
                    }}>token</span>
                    <input placeholder="0.00000001" type="number" />
               </div>
               <div className="button">
                   <button>send</button>
                   <button>receive</button>
               </div>
           </div>
        </div>
    )
}

export default Home