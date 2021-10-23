import React, { useState } from 'react'
import './anketa.scss'

const Anketa = () => {
    const [mass] = useState({
        list: [
            {
                id: 1,
                name: "Ta'lim va tarbiya jarayoni",
                requense: "I",
                fraction: "9/14",
                img: ""
            },
            {
                id: 2,
                name: "Umumta'lim muassasasini boshqarish",
                requense: "II",
                fraction: "9/14",
                img: ""
            },
            {
                id: 3,
                name: "Malakali mutaxasislarhamda adabiyotlar bilan ta'minlanganligi",
                requense: "III",
                fraction: "9/14",
                img: ""
            },
            {
                id: 4,
                name: "Umumta'lim muassasasining moddiy-texnik bazasi infrastrukturasi....",
                requense: "IV",
                fraction: "9/14",
                img: ""
            }
        ],
        progress: 60
    });
    return (
        <div id="anketa">
            <div className="row anketa_section_1 m-0">
                <div className="col-3 d-flex align-items-end " >
                    <div className="title">
                        <h6>Ta'lim va tarbiya <br /> jarayoni</h6>
                        <div className="check">
                            <i className="fas fa-check"></i>
                        </div>
                    </div>
                </div>
                <div className="col-3 d-flex align-items-end " >
                    <div className="title">
                        <h6>Umumta'lim muassasasini <br />boshqarish</h6>
                        <div className="check">
                            <i className="fas fa-check"></i>
                        </div>
                    </div>
                </div>
                <div className="col-3  d-flex align-items-end " >
                    <div className="title">
                        <h6>Malakali mutaxasislarhamda adabiyotlar bilan ta'minlanganligi</h6>
                        <div className="check check_3">
                            <i className="fas fa-graduation-cap"></i>
                        </div>
                    </div>
                </div>
                <div className="col-3 d-flex align-items-end " >
                    <div className="title">
                        <h6>Umumta'lim muassasasining moddiy-texnik bazasi infrastrukturasi....</h6>
                        <div className="check check_4">
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-5 px-3">
                <div className="progress-bar">
                    <div className="progress" style={{ width: mass.progress + "%" }}></div>
                </div>
            </div>

            <div className="row section_3">
                {
                    mass.list.map((m, i) => {
                        return (
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3 px-2" key={i}>
                                <div className="card h-100">
                                    <div className="card-body h-100">
                                        <div className="d-flex justify-content-between mb-2">
                                            <div className="requense">
                                                    {m.requense}
                                            </div>
                                            <div className="fraction">{m.fraction}</div>
                                        </div>
                                        <div className="bodyy">
                                            <h6>{m.name}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Anketa
