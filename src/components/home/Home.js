
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
            <p style={{
               color: "#fff",
               fontSize: "15px",
               fontWeight: "500",
               padding: "10px 10px 5px 10px"
           }}>Recent Activity</p>
           <div style={{
               background: "#fff",
               padding: "10px"
           }}>
               <div className="table">
                    <table style={{
                        width: '100%',
                        textAlign: "center",
                        fontWeight: "700",
                        lineHeight: "28px",
                        border: "1px solid #000",
                        background: "#e4e1e1b9"
                    }}>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <tr>
                            <td>1/1/21</td>
                            <td>Sent</td>
                            <td>N100.00</td>
                        </tr>
                        <tr>
                            <td>2/2/21</td>
                            <td>Received</td>
                            <td>N200.00</td>
                        </tr>
                        <tr>
                            <td>3/3/21</td>
                            <td>Sent</td>
                            <td>N300.00</td>
                        </tr>
                    </table>
               </div>
            </div>
        </div>
    )
}

export default Home