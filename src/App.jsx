import './App.css'
import logo from "./assets/logo.png"
import trophy from "./assets/1.png"
import award from "./assets/2.png"
import service from "./assets/3.png"
import phone from "./assets/phone-call.png"
import facebook from "./assets/facebook.png"
import global from "./assets/global.png"

function App() {

    return (
        <>
            <div className="main-cont">
                <div className="nav">
                    <img className='logo' src={logo} alt="" />
                </div>

                <div className="hero">
                    <div className="trophy-img">
                        <img className='trophy' src={trophy} alt="" />
                    </div>
                    <div className="award-section">
                        <p style={{fontWeight: "bold", fontSize: "16px"}}>C-R-I. PUMPS wms THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</p>
                        <ul style={{fontWeight: "bold", paddingInline: "20px", marginTop: "20px", fontSize: "16px"}}>
                            <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                            <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
                        </ul>
                        <img className='award' src={award} alt="" />
                        <p style={{fontSize: "18px"}}>Government of India has awarded the <span style={{fontWeight: "bold"}}>"National Energy Conservation Award 2018"</span>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shriv Raj Kumar Singh, Honorable Minister of State.</p>
                    </div>
                </div>

                <div className="service">
                    <p className="service-let">
                    INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.
                    </p>
                    <div className="service-img">
                        <img src={service} alt="" />
                    </div>
                    <p style={{textAlign: 'center', fontSize: "18px", marginTop: "10px"}}>Valves - Pumps - Pipes - IoT Drives S Controllers - Wires & Cables - Solar Systems - Motors</p>

                    <div className="line"></div>

                    <div className="products">
                        <p style={{textAlign: 'center', fontWeight: "bold"}}>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
                        <p className='all-service'>
                            <span>CHEMICALS & PROCESS</span>
                            <span>POWER</span>
                            <span>WATER AND WASTE WATER</span>
                            <span>OILS AND GAS</span>
                            <span>PHARMA</span>
                            <span>SUGARS AND DISTILLERS</span>
                            <span>PAPER AND PULP</span>
                            <span>MARINE AND DEFENCE</span>
                            <span>METAL AND MINIING</span>
                            <span>FOOD AND BAVARAGE</span>
                            <span>PETROCHEMICALS AND REFINERIES</span>
                            <span>SOLAR</span>
                            <span>BUILDING</span>
                            <span>HVAC</span>
                            <span>FIRE FIGHTING</span>
                            <span>AGRICULTURAL AND RESIDENTIAL</span>
                        </p>
                    </div>
                </div>

                <div className="contacts">
                    <div className="contact">
                        <img src={phone} alt="" />
                        <span>Toll free 1800 200 678</span>
                    </div>
                    <div className="contact">
                        <img src={facebook} alt="" />
                        <span>www.facebook.com/cripump</span>
                    </div>
                    <div className="contact">
                        <img src={global} alt="" />
                        <span>www.crigroups.com</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
