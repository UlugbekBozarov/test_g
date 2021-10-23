import React from 'react'
import './sidebar.scss'

const Sidebar = () => {
    return (
        <div id="sidebar">
            <div className="left d-flex align-items-center">
                <img src="/images/brand.jpg" alt="brand" style={{height: "40px"}} />
                <div className="ml-3">
                    <button className="btn d-flex align-items-center p-0">
                        <i className="fas fa-bars" style={{fontSize: "20px", color: "#3c8ec3"}}></i>
                    </button>
                </div>
            </div>
            <div className="right">
                <div className="name">
                    <p>school00001</p>
                    <p>Maktab</p>
                </div>
                <div className="img">
                    <i className="fas fa-user"></i>
                </div>
                <div className="icon">
                    <i className="fas fa-chevron-down"></i>
                </div>
                <div className="right_dropdown" style={{zIndex: "999"}}>
                    <div className="dropdown_block">
                        <p>
                            Hozircha bu bo'limda hech narsa yo'q!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
