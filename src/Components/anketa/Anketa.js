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
                img: "fas fa-book",
                list: [
                    {
                        id: 11,
                        name: "Akademik natijalar",
                        requense: "1",
                        fraction: "9/14",
                        list: [
                            {
                                id: 111,
                                name: "Umumta'lim muassasasi o'quvchilarining respublika fan olimpiadalarida qo'lga kiritgan yutuqlari ",
                                requense: "1.1",
                                fraction: "9/14",
                            },
                            {
                                id: 112,
                                name: "Umumta'lim muassasasi o'quvchilarining xalqaro fan olimpiadalarida qo'lga kiritgan yutuqlari ",
                                requense: "1.2",
                                fraction: "9/14",
                            },
                            {
                                id: 113,
                                name: "Umumta'lim muassasasi bitiruvchilarining respublika oliy ta'lim muassasasiga krish imtihonidagi ko'rsatkichlar",
                                requense: "1.3",
                                fraction: "9/14",
                            },
                            {
                                id: 114,
                                name: "Umumta'lim muassasasi bitiruvchilarining ta'limning keyingi bosqichi bilan qamrab olinganligi hamda bandligi",
                                requense: "1.4",
                                fraction: "9/14",
                            },
                            {
                                id: 115,
                                name: "Umumta'lim muassasasi bitiruvchilarining ta'limning keyingi bosqichi bilan qamrab olinganligi hamda bandligi",
                                requense: "1.5",
                                fraction: "9/14",
                            }
                        ]
                    },
                    {
                        id: 12,
                        name: "Noakademik natijalar",
                        requense: "2",
                        fraction: "9/14",
                        list: [
                            {
                                id: 111,
                                name: "Umumta'lim muassasasi o'quvchilarining respublika fan olimpiadalarida qo'lga kiritgan yutuqlari ",
                                requense: "2.1",
                                fraction: "9/14",
                            },
                            {
                                id: 112,
                                name: "Umumta'lim muassasasi o'quvchilarining xalqaro fan olimpiadalarida qo'lga kiritgan yutuqlari ",
                                requense: "2.2",
                                fraction: "9/14",
                            },
                            {
                                id: 113,
                                name: "Umumta'lim muassasasi bitiruvchilarining respublika oliy ta'lim muassasasiga krish imtihonidagi ko'rsatkichlar",
                                requense: "2.3",
                                fraction: "9/14",
                            },
                            {
                                id: 114,
                                name: "Umumta'lim muassasasi bitiruvchilarining ta'limning keyingi bosqichi bilan qamrab olinganligi hamda bandligi",
                                requense: "2.4",
                                fraction: "9/14",
                            },
                            {
                                id: 115,
                                name: "Umumta'lim muassasasi bitiruvchilarining ta'limning keyingi bosqichi bilan qamrab olinganligi hamda bandligi",
                                requense: "2.5",
                                fraction: "9/14",
                            }
                        ]
                    },
                    {
                        id: 13,
                        name: "Variantiv va darsdan tashqari ta'lim qamrovi",
                        requense: "3",
                        fraction: "9/14",
                        list: [
                            {
                                id: 111,
                                name: "Umumta'lim muassasasi o'quvchilarining respublika fan olimpiadalarida qo'lga kiritgan yutuqlari ",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 112,
                                name: "Umumta'lim muassasasi o'quvchilarining xalqaro fan olimpiadalarida qo'lga kiritgan yutuqlari ",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 113,
                                name: "Umumta'lim muassasasi bitiruvchilarining respublika oliy ta'lim muassasasiga krish imtihonidagi ko'rsatkichlar",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 114,
                                name: "Umumta'lim muassasasi bitiruvchilarining ta'limning keyingi bosqichi bilan qamrab olinganligi hamda bandligi",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 115,
                                name: "Umumta'lim muassasasi bitiruvchilarining ta'limning keyingi bosqichi bilan qamrab olinganligi hamda bandligi",
                                requense: "1",
                                fraction: "9/14",
                            }
                        ]
                    },
                    {
                        id: 14,
                        name: "Alohida ta'lim ehtiyojlari bo'lgan bolalar uchun (inklyuziv ta'lim) joriy",
                        requense: "4",
                        fraction: "9/14",
                        list: [
                            {
                                id: 111,
                                name: "Umumta'lim muassasasi o'quvchilarining respublika fan olimpiadalarida qo'lga kiritgan yutuqlari ",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 112,
                                name: "Umumta'lim muassasasi o'quvchilarining xalqaro fan olimpiadalarida qo'lga kiritgan yutuqlari ",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 113,
                                name: "Umumta'lim muassasasi bitiruvchilarining respublika oliy ta'lim muassasasiga krish imtihonidagi ko'rsatkichlar",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 114,
                                name: "Umumta'lim muassasasi bitiruvchilarining ta'limning keyingi bosqichi bilan qamrab olinganligi hamda bandligi",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 115,
                                name: "Umumta'lim muassasasi bitiruvchilarining ta'limning keyingi bosqichi bilan qamrab olinganligi hamda bandligi",
                                requense: "1",
                                fraction: "9/14",
                            }
                        ]
                    },
                    {
                        id: 14,
                        name: "Tarbiyaviy ishlar samaradorligi",
                        requense: "4",
                        fraction: "9/14",
                        list: [
                            {
                                id: 111,
                                name: "Umumta'lim muassasasi o'quvchilarining respublika fan olimpiadalarida qo'lga kiritgan yutuqlari ",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 112,
                                name: "Umumta'lim muassasasi o'quvchilarining xalqaro fan olimpiadalarida qo'lga kiritgan yutuqlari ",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 113,
                                name: "Umumta'lim muassasasi bitiruvchilarining respublika oliy ta'lim muassasasiga krish imtihonidagi ko'rsatkichlar",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 114,
                                name: "Umumta'lim muassasasi bitiruvchilarining ta'limning keyingi bosqichi bilan qamrab olinganligi hamda bandligi",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 115,
                                name: "Umumta'lim muassasasi bitiruvchilarining ta'limning keyingi bosqichi bilan qamrab olinganligi hamda bandligi",
                                requense: "1",
                                fraction: "9/14",
                            }
                        ]
                    }
                ]
            },
            {
                id: 2,
                name: "Umumta'lim muassasasini boshqarish",
                requense: "II",
                fraction: "9/14",
                img: "fas fa-school",
                list: [
                    {
                        id: 11,
                        name: "Akademik natijalar",
                        requense: "1",
                        fraction: "9/14",
                        list: [
                            {
                                id: 111,
                                name: "Umumta'lim muassasasi o'quvchilarining respublika fan olimpiadalarida qo'lga kiritgan yutuqlari ",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 112,
                                name: "Umumta'lim muassasasi o'quvchilarining xalqaro fan olimpiadalarida qo'lga kiritgan yutuqlari ",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 113,
                                name: "Umumta'lim muassasasi bitiruvchilarining respublika oliy ta'lim muassasasiga krish imtihonidagi ko'rsatkichlar",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 114,
                                name: "Umumta'lim muassasasi bitiruvchilarining ta'limning keyingi bosqichi bilan qamrab olinganligi hamda bandligi",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 115,
                                name: "Umumta'lim muassasasi bitiruvchilarining ta'limning keyingi bosqichi bilan qamrab olinganligi hamda bandligi",
                                requense: "1",
                                fraction: "9/14",
                            }
                        ]
                    },
                    {
                        id: 12,
                        name: "Noakademik natijalar",
                        requense: "2",
                        fraction: "9/14",
                        list: [
                            {
                                id: 111,
                                name: "Umumta'lim muassasasi o'quvchilarining respublika fan olimpiadalarida qo'lga kiritgan yutuqlari ",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 112,
                                name: "Umumta'lim muassasasi o'quvchilarining xalqaro fan olimpiadalarida qo'lga kiritgan yutuqlari ",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 113,
                                name: "Umumta'lim muassasasi bitiruvchilarining respublika oliy ta'lim muassasasiga krish imtihonidagi ko'rsatkichlar",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 114,
                                name: "Umumta'lim muassasasi bitiruvchilarining ta'limning keyingi bosqichi bilan qamrab olinganligi hamda bandligi",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 115,
                                name: "Umumta'lim muassasasi bitiruvchilarining ta'limning keyingi bosqichi bilan qamrab olinganligi hamda bandligi",
                                requense: "1",
                                fraction: "9/14",
                            }
                        ]
                    },
                    {
                        id: 13,
                        name: "Variantiv va darsdan tashqari ta'lim qamrovi",
                        requense: "3",
                        fraction: "9/14",
                        list: [
                            {
                                id: 111,
                                name: "Umumta'lim muassasasi o'quvchilarining respublika fan olimpiadalarida qo'lga kiritgan yutuqlari ",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 112,
                                name: "Umumta'lim muassasasi o'quvchilarining xalqaro fan olimpiadalarida qo'lga kiritgan yutuqlari ",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 113,
                                name: "Umumta'lim muassasasi bitiruvchilarining respublika oliy ta'lim muassasasiga krish imtihonidagi ko'rsatkichlar",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 114,
                                name: "Umumta'lim muassasasi bitiruvchilarining ta'limning keyingi bosqichi bilan qamrab olinganligi hamda bandligi",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 115,
                                name: "Umumta'lim muassasasi bitiruvchilarining ta'limning keyingi bosqichi bilan qamrab olinganligi hamda bandligi",
                                requense: "1",
                                fraction: "9/14",
                            }
                        ]
                    },
                    {
                        id: 14,
                        name: "Alohida ta'lim ehtiyojlari bo'lgan bolalar uchun (inklyuziv ta'lim) joriy",
                        requense: "4",
                        fraction: "9/14",
                        list: [
                            {
                                id: 111,
                                name: "Umumta'lim muassasasi o'quvchilarining respublika fan olimpiadalarida qo'lga kiritgan yutuqlari ",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 112,
                                name: "Umumta'lim muassasasi o'quvchilarining xalqaro fan olimpiadalarida qo'lga kiritgan yutuqlari ",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 113,
                                name: "Umumta'lim muassasasi bitiruvchilarining respublika oliy ta'lim muassasasiga krish imtihonidagi ko'rsatkichlar",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 114,
                                name: "Umumta'lim muassasasi bitiruvchilarining ta'limning keyingi bosqichi bilan qamrab olinganligi hamda bandligi",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 115,
                                name: "Umumta'lim muassasasi bitiruvchilarining ta'limning keyingi bosqichi bilan qamrab olinganligi hamda bandligi",
                                requense: "1",
                                fraction: "9/14",
                            }
                        ]
                    },
                    {
                        id: 14,
                        name: "Tarbiyaviy ishlar samaradorligi",
                        requense: "4",
                        fraction: "9/14",
                        list: [
                            {
                                id: 111,
                                name: "Umumta'lim muassasasi o'quvchilarining respublika fan olimpiadalarida qo'lga kiritgan yutuqlari ",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 112,
                                name: "Umumta'lim muassasasi o'quvchilarining xalqaro fan olimpiadalarida qo'lga kiritgan yutuqlari ",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 113,
                                name: "Umumta'lim muassasasi bitiruvchilarining respublika oliy ta'lim muassasasiga krish imtihonidagi ko'rsatkichlar",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 114,
                                name: "Umumta'lim muassasasi bitiruvchilarining ta'limning keyingi bosqichi bilan qamrab olinganligi hamda bandligi",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 115,
                                name: "Umumta'lim muassasasi bitiruvchilarining ta'limning keyingi bosqichi bilan qamrab olinganligi hamda bandligi",
                                requense: "1",
                                fraction: "9/14",
                            }
                        ]
                    }
                ]
            },
            {
                id: 3,
                name: "Malakali mutaxasislarhamda adabiyotlar bilan ta'minlanganligi",
                requense: "III",
                fraction: "9/14",
                img: "fas fa-graduation-cap",
                list: [
                    {
                        id: 11,
                        name: "Akademik natijalar",
                        requense: "1",
                        fraction: "9/14",
                        list: [
                            {
                                id: 111,
                                name: "Umumta'lim muassasasi o'quvchilarining respublika fan olimpiadalarida qo'lga kiritgan yutuqlari ",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 112,
                                name: "Umumta'lim muassasasi o'quvchilarining xalqaro fan olimpiadalarida qo'lga kiritgan yutuqlari ",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 113,
                                name: "Umumta'lim muassasasi bitiruvchilarining respublika oliy ta'lim muassasasiga krish imtihonidagi ko'rsatkichlar",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 114,
                                name: "Umumta'lim muassasasi bitiruvchilarining ta'limning keyingi bosqichi bilan qamrab olinganligi hamda bandligi",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 115,
                                name: "Umumta'lim muassasasi bitiruvchilarining ta'limning keyingi bosqichi bilan qamrab olinganligi hamda bandligi",
                                requense: "1",
                                fraction: "9/14",
                            }
                        ]
                    },
                    {
                        id: 12,
                        name: "Noakademik natijalar",
                        requense: "2",
                        fraction: "9/14",
                        list: [
                            {
                                id: 111,
                                name: "Umumta'lim muassasasi o'quvchilarining respublika fan olimpiadalarida qo'lga kiritgan yutuqlari ",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 112,
                                name: "Umumta'lim muassasasi o'quvchilarining xalqaro fan olimpiadalarida qo'lga kiritgan yutuqlari ",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 113,
                                name: "Umumta'lim muassasasi bitiruvchilarining respublika oliy ta'lim muassasasiga krish imtihonidagi ko'rsatkichlar",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 114,
                                name: "Umumta'lim muassasasi bitiruvchilarining ta'limning keyingi bosqichi bilan qamrab olinganligi hamda bandligi",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 115,
                                name: "Umumta'lim muassasasi bitiruvchilarining ta'limning keyingi bosqichi bilan qamrab olinganligi hamda bandligi",
                                requense: "1",
                                fraction: "9/14",
                            }
                        ]
                    },
                    {
                        id: 13,
                        name: "Variantiv va darsdan tashqari ta'lim qamrovi",
                        requense: "3",
                        fraction: "9/14",
                        list: [
                            {
                                id: 111,
                                name: "Umumta'lim muassasasi o'quvchilarining respublika fan olimpiadalarida qo'lga kiritgan yutuqlari ",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 112,
                                name: "Umumta'lim muassasasi o'quvchilarining xalqaro fan olimpiadalarida qo'lga kiritgan yutuqlari ",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 113,
                                name: "Umumta'lim muassasasi bitiruvchilarining respublika oliy ta'lim muassasasiga krish imtihonidagi ko'rsatkichlar",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 114,
                                name: "Umumta'lim muassasasi bitiruvchilarining ta'limning keyingi bosqichi bilan qamrab olinganligi hamda bandligi",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 115,
                                name: "Umumta'lim muassasasi bitiruvchilarining ta'limning keyingi bosqichi bilan qamrab olinganligi hamda bandligi",
                                requense: "1",
                                fraction: "9/14",
                            }
                        ]
                    },
                    {
                        id: 14,
                        name: "Alohida ta'lim ehtiyojlari bo'lgan bolalar uchun (inklyuziv ta'lim) joriy",
                        requense: "4",
                        fraction: "9/14",
                        list: [
                            {
                                id: 111,
                                name: "Umumta'lim muassasasi o'quvchilarining respublika fan olimpiadalarida qo'lga kiritgan yutuqlari ",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 112,
                                name: "Umumta'lim muassasasi o'quvchilarining xalqaro fan olimpiadalarida qo'lga kiritgan yutuqlari ",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 113,
                                name: "Umumta'lim muassasasi bitiruvchilarining respublika oliy ta'lim muassasasiga krish imtihonidagi ko'rsatkichlar",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 114,
                                name: "Umumta'lim muassasasi bitiruvchilarining ta'limning keyingi bosqichi bilan qamrab olinganligi hamda bandligi",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 115,
                                name: "Umumta'lim muassasasi bitiruvchilarining ta'limning keyingi bosqichi bilan qamrab olinganligi hamda bandligi",
                                requense: "1",
                                fraction: "9/14",
                            }
                        ]
                    },
                    {
                        id: 14,
                        name: "Tarbiyaviy ishlar samaradorligi",
                        requense: "4",
                        fraction: "9/14",
                        list: [
                            {
                                id: 111,
                                name: "Umumta'lim muassasasi o'quvchilarining respublika fan olimpiadalarida qo'lga kiritgan yutuqlari ",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 112,
                                name: "Umumta'lim muassasasi o'quvchilarining xalqaro fan olimpiadalarida qo'lga kiritgan yutuqlari ",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 113,
                                name: "Umumta'lim muassasasi bitiruvchilarining respublika oliy ta'lim muassasasiga krish imtihonidagi ko'rsatkichlar",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 114,
                                name: "Umumta'lim muassasasi bitiruvchilarining ta'limning keyingi bosqichi bilan qamrab olinganligi hamda bandligi",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 115,
                                name: "Umumta'lim muassasasi bitiruvchilarining ta'limning keyingi bosqichi bilan qamrab olinganligi hamda bandligi",
                                requense: "1",
                                fraction: "9/14",
                            }
                        ]
                    }
                ]
            },
            {
                id: 4,
                name: "Umumta'lim muassasasining moddiy-texnik bazasi infrastrukturasi....",
                requense: "IV",
                fraction: "9/14",
                img: "fas fa-cogs",
                list: [
                    {
                        id: 11,
                        name: "Akademik natijalar",
                        requense: "1",
                        fraction: "9/14",
                        list: [
                            {
                                id: 111,
                                name: "Umumta'lim muassasasi o'quvchilarining respublika fan olimpiadalarida qo'lga kiritgan yutuqlari ",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 112,
                                name: "Umumta'lim muassasasi o'quvchilarining xalqaro fan olimpiadalarida qo'lga kiritgan yutuqlari ",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 113,
                                name: "Umumta'lim muassasasi bitiruvchilarining respublika oliy ta'lim muassasasiga krish imtihonidagi ko'rsatkichlar",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 114,
                                name: "Umumta'lim muassasasi bitiruvchilarining ta'limning keyingi bosqichi bilan qamrab olinganligi hamda bandligi",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 115,
                                name: "Umumta'lim muassasasi bitiruvchilarining ta'limning keyingi bosqichi bilan qamrab olinganligi hamda bandligi",
                                requense: "1",
                                fraction: "9/14",
                            }
                        ]
                    },
                    {
                        id: 12,
                        name: "Noakademik natijalar",
                        requense: "2",
                        fraction: "9/14",
                        list: [
                            {
                                id: 111,
                                name: "Umumta'lim muassasasi o'quvchilarining respublika fan olimpiadalarida qo'lga kiritgan yutuqlari ",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 112,
                                name: "Umumta'lim muassasasi o'quvchilarining xalqaro fan olimpiadalarida qo'lga kiritgan yutuqlari ",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 113,
                                name: "Umumta'lim muassasasi bitiruvchilarining respublika oliy ta'lim muassasasiga krish imtihonidagi ko'rsatkichlar",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 114,
                                name: "Umumta'lim muassasasi bitiruvchilarining ta'limning keyingi bosqichi bilan qamrab olinganligi hamda bandligi",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 115,
                                name: "Umumta'lim muassasasi bitiruvchilarining ta'limning keyingi bosqichi bilan qamrab olinganligi hamda bandligi",
                                requense: "1",
                                fraction: "9/14",
                            }
                        ]
                    },
                    {
                        id: 13,
                        name: "Variantiv va darsdan tashqari ta'lim qamrovi",
                        requense: "3",
                        fraction: "9/14",
                        list: [
                            {
                                id: 111,
                                name: "Umumta'lim muassasasi o'quvchilarining respublika fan olimpiadalarida qo'lga kiritgan yutuqlari ",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 112,
                                name: "Umumta'lim muassasasi o'quvchilarining xalqaro fan olimpiadalarida qo'lga kiritgan yutuqlari ",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 113,
                                name: "Umumta'lim muassasasi bitiruvchilarining respublika oliy ta'lim muassasasiga krish imtihonidagi ko'rsatkichlar",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 114,
                                name: "Umumta'lim muassasasi bitiruvchilarining ta'limning keyingi bosqichi bilan qamrab olinganligi hamda bandligi",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 115,
                                name: "Umumta'lim muassasasi bitiruvchilarining ta'limning keyingi bosqichi bilan qamrab olinganligi hamda bandligi",
                                requense: "1",
                                fraction: "9/14",
                            }
                        ]
                    },
                    {
                        id: 14,
                        name: "Alohida ta'lim ehtiyojlari bo'lgan bolalar uchun (inklyuziv ta'lim) joriy",
                        requense: "4",
                        fraction: "9/14",
                        list: [
                            {
                                id: 111,
                                name: "Umumta'lim muassasasi o'quvchilarining respublika fan olimpiadalarida qo'lga kiritgan yutuqlari ",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 112,
                                name: "Umumta'lim muassasasi o'quvchilarining xalqaro fan olimpiadalarida qo'lga kiritgan yutuqlari ",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 113,
                                name: "Umumta'lim muassasasi bitiruvchilarining respublika oliy ta'lim muassasasiga krish imtihonidagi ko'rsatkichlar",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 114,
                                name: "Umumta'lim muassasasi bitiruvchilarining ta'limning keyingi bosqichi bilan qamrab olinganligi hamda bandligi",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 115,
                                name: "Umumta'lim muassasasi bitiruvchilarining ta'limning keyingi bosqichi bilan qamrab olinganligi hamda bandligi",
                                requense: "1",
                                fraction: "9/14",
                            }
                        ]
                    },
                    {
                        id: 14,
                        name: "Tarbiyaviy ishlar samaradorligi",
                        requense: "4",
                        fraction: "9/14",
                        list: [
                            {
                                id: 111,
                                name: "Umumta'lim muassasasi o'quvchilarining respublika fan olimpiadalarida qo'lga kiritgan yutuqlari ",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 112,
                                name: "Umumta'lim muassasasi o'quvchilarining xalqaro fan olimpiadalarida qo'lga kiritgan yutuqlari ",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 113,
                                name: "Umumta'lim muassasasi bitiruvchilarining respublika oliy ta'lim muassasasiga krish imtihonidagi ko'rsatkichlar",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 114,
                                name: "Umumta'lim muassasasi bitiruvchilarining ta'limning keyingi bosqichi bilan qamrab olinganligi hamda bandligi",
                                requense: "1",
                                fraction: "9/14",
                            },
                            {
                                id: 115,
                                name: "Umumta'lim muassasasi bitiruvchilarining ta'limning keyingi bosqichi bilan qamrab olinganligi hamda bandligi",
                                requense: "1",
                                fraction: "9/14",
                            }
                        ]
                    }
                ]
            }
        ],
        progress: 60
    });

    const [activeIndex, setActiveIndex] = useState(-1);
    const [activeIndex2, setActiveIndex2] = useState(-1);

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

            <div className={activeIndex === -1 ? "section_31" : "section_31 clicked_1"}>
                {
                    mass.list.map((m, i) => {
                        return (
                            <div className={activeIndex === i ? "card card_1 active" : "card card_1"} key={i}>
                                <div className="card-body" onClick={() => { activeIndex === i ? setActiveIndex(-1) : setActiveIndex(i) }}>
                                    <div className={activeIndex === i ? "w-100 h-100 d-flex justify-content-between align-items-center" : "w-100 h-100"}>
                                        <div className="card_1 rf_block">
                                            <div className="d-flex justify-content-center align-items-center">
                                                <div>
                                                    <div className="card_1 requense">
                                                        {m.requense}
                                                    </div>
                                                </div>
                                                <div className="card_1 active_name">
                                                    <h4 className="m-0 text-white">{m.name}</h4>
                                                    <div className="img">
                                                        <i className={m.img}></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card_1 fraction">{m.fraction}</div>
                                        </div>
                                        <div className="card_1 bodyy">
                                            <h6>{m.name}</h6>
                                            <div className="img">
                                                <i className={m.img}></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card_1 card_bottom">
                                    {
                                        <div className={activeIndex2 === -1 ? "section_31" : "section_31 clicked_2"}>
                                            {
                                                m.list.map((l1, j) => {
                                                    return (
                                                        <div className={activeIndex2 === j ? "card card_2 active" : "card card_2"} key={j}>
                                                            <div className="card-body" onClick={() => activeIndex2 === j ? setActiveIndex2(-1) : setActiveIndex2(j)}>
                                                                <div className={activeIndex2 !== -1 ? "w-100 h-100 d-flex align-items-center" : "w-100 h-100"}>
                                                                    <div className="card_2 rf_block">
                                                                        <div className="d-flex justify-content-center align-items-center">
                                                                            <div>
                                                                                <div className="requense">
                                                                                    {l1.requense}
                                                                                </div>
                                                                            </div>
                                                                            <div className="card_2 active_name">
                                                                                <h4 className="m-0 text-white">{l1.name}</h4>
                                                                                <div className="img">
                                                                                    <i className={m.img} style={{ color: "" }}></i>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="card_2 fraction">{l1.fraction}</div>
                                                                    </div>
                                                                    <div className="card_2 bodyy">
                                                                        <h6>{l1.name}</h6>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card_2 card_bottom">
                                                                <div className="section_31">
                                                                    {
                                                                        l1.list.map((l2, k) => {
                                                                            return (
                                                                                <div className="card card_3" key={k}>
                                                                                    <div className="card-body">
                                                                                        <div className="card_3 rf_block">
                                                                                            <div className="requense">
                                                                                                {l2.requense}
                                                                                            </div>
                                                                                            <div className="fraction">{l2.fraction}</div>
                                                                                        </div>
                                                                                        <div className="bodyy" style={{ fontSize: "12px" }}>
                                                                                            <h6>{l2.name}</h6>
                                                                                            <div className="img">
                                                                                                <i className={m.img} style={{ color: "" }}></i>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            )
                                                                        })
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    }
                                    <div>
                                        {/* <div className={activeIndex2 === -1 ? "section_32" : "section_32 clicked_2"}>
                                            {
                                                m.list.map((l1, i) => {
                                                    return (
                                                        <div className={activeIndex2 === i ? "card card_2 active" : "card card_2"} key={i}>
                                                            <div className="card-body w-100 h-100 d-flex align-items-center" onClick={() => { activeIndex2 === i ? setActiveIndex2(-1) : setActiveIndex2(i) }}>
                                                                <div className="w-100">
                                                                    <div className="rf_block">
                                                                        <div className="d-flex justify-content-center align-items-center">
                                                                            <div>
                                                                                <div className="requense">
                                                                                    {l1.requense}
                                                                                </div>
                                                                            </div>
                                                                            <div className="active_name">
                                                                                <h4 className="m-0 text-white">{l1.name}</h4>
                                                                            </div>
                                                                        </div>
                                                                        <div className="fraction">{l1.fraction}</div>
                                                                    </div>
                                                                    <div className="bodyy">
                                                                        <h6>{l1.name}</h6>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card_bottom">

                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div> */}
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
