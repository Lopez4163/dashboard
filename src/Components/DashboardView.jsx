import React from 'react'
import '../Styling/DashboardView.css'

const DashboardView = () => {
  return (
    <div className='dashboard-vite-container'>
    <section className='options'>
        <ul className='options-ul'>
            <li className='link'>
                <div className='link-wrapper'>
                    <span>Book Class</span>
                    <span class="material-symbols-outlined">
                        calendar_month
                    </span>
                </div>
            </li>
            <li className='link'>
            <div className='link-wrapper'>
                <span>Contact Us</span>
                <span class="material-symbols-outlined">
                    mail
                </span>
            </div>
            </li>
        </ul>
    </section>
    <section className='pc-column'>
        <div className='graph-wrapper'>
                <h2 className='title'>Attendence</h2>
                <div>
                    <img src='https://images.squarespace-cdn.com/content/v1/5cddf79237127800016fac3d/1572311503833-O517WZA864Z4S29G17BE/attendance1.jpg' alt='graph' className='graph-img'/>
                </div>
        </div>
    </section>
    <br></br>
    <br></br>
    <section className='card'>
        <div className='bookings-wrapper'>
        <h2 className='title' id='bookings'>Bookings</h2>

                <ul className='bookings-ul'>
                    <li className='bookings-li'>
                        <div className='bookings-li-wrapper'>
                            <span>Class Name</span>
                            <span>Class Time</span>
                            <span>Class Date</span>
                        </div>
                    </li>
                    <li className='bookings-li'>
                        <div className='bookings-li-wrapper'>
                            <span>Class Name</span>
                            <span>Class Time</span>
                            <span>Class Date</span>
                        </div>
                    </li>
                </ul>
        </div>
    </section>
    <section className='pc-column'>
        
    </section>

</div>
  )
}

export default DashboardView