import './App.css';

function App() {
  return (
    <div className="App">
      <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>INDEX</title>
      <link rel="stylesheet" href="App.css" />
      {/* nav bar */}
      <nav className="nav">
          {/* Top left */}
          <section className="navTopLeft">
          <button className="navButton">
              <div className="logoCircle" />
              <h1>MEAL AND MINGLE</h1>
          </button>
          </section>
          {/* Top right */}
          <section className="navTopRight">
          <button className="navButton">
              <h1>HOME</h1>
          </button>
          <button className="navButton">
              <h1>MESSAGES</h1>
          </button>
          {/* PROFILE */}
          <div className="navProfile">
              <button className="navButton">
              <h1>FIRST LAST</h1>
              </button>
              <button className="userIcon headerVariation">FL</button>
          </div>
          </section>
      </nav>
      {/* body */}
      <section className="body">
          {/* Left Content */}
          <section className="leftFrame">
          {/* Subheader */}
          <div className="subHeader">
              <h2 style={{marginRight: 'auto'}}>POSTS</h2>
              <button className="filterButton">
              <img src="https://cdn-icons-png.flaticon.com/128/7693/7693332.png" style={{width: 15, height: 'auto', filter: 'invert(1)'}} />
              </button>
          </div>
          {/* List of posts */}
          <section className="postList">
              {/* Post 1 */}
              <div className="post">
              <button className="userIcon">JD</button>
              {/* Right side of post */}
              <div className="colContainer">
                  {/* "x" button container */}
                  <div className="xButtonContainer">
                  {/* "x" button */}
                  <button className="crossButton">
                      <img src="https://cdn-icons-png.flaticon.com/128/1828/1828778.png" alt="x" style={{width: 6, height: 'auto', filter: 'invert(41%) sepia(2%) saturate(3212%) hue-rotate(212deg) brightness(102%) contrast(78%)'}} />
                  </button>
                  </div>
                  {/* top section of right side */}
                  <div className="postTextBlock">
                  {/* Name */}
                  <div className="postText" style={{alignItems: 'end', marginRight: 'auto'}}>
                      John Doe
                  </div>
                  {/* Location(s) */}
                  <div className="postText locationText">Foster Walker Plex East</div>
                  {/* ----------------------- */}
                  <div className="postLine" />
                  {/* Date and Time */}
                  <div className="rowContainer" style={{gap: 10}}>
                      {/* Date */}
                      <div className="postText">Thu 10/17</div>
                      {/* Time */}
                      <div className="postText">04:00 PM - 06:00 PM</div>
                  </div>
                  </div>
                  {/* Send and Save buttons */}
                  <div className="sendSaveContainer">
                  {/* Send button */}
                  <button className="sendSaveButtons">
                      <img src="https://cdn-icons-png.flaticon.com/128/3024/3024593.png" alt="send" style={{width: 12, height: 'auto', filter: 'invert(31%) sepia(64%) saturate(229%) hue-rotate(212deg) brightness(89%) contrast(91%)'}} />
                  </button>
                  {/* Save button */}
                  <button className="sendSaveButtons">
                      <img src="https://cdn-icons-png.flaticon.com/128/102/102279.png" alt="saved" style={{width: 12, height: 'auto', filter: 'invert(31%) sepia(64%) saturate(229%) hue-rotate(212deg) brightness(89%) contrast(91%)'}} />
                  </button>
                  </div>
              </div>
              </div>
              {/* Post 2 */}
              <div className="post">
              <button className="userIcon" style={{backgroundColor: 'var(--yellowIcon)'}}>
                  SP
              </button>
              {/* Right side of post */}
              <div className="colContainer">
                  {/* "x" button container */}
                  <div className="xButtonContainer">
                  {/* "x" button */}
                  <button className="crossButton">
                      <img src="https://cdn-icons-png.flaticon.com/128/1828/1828778.png" alt="x" style={{width: 6, height: 'auto', filter: 'invert(41%) sepia(2%) saturate(3212%) hue-rotate(212deg) brightness(102%) contrast(78%)'}} />
                  </button>
                  </div>
                  {/* top section of right side */}
                  <div className="postTextBlock">
                  {/* Name */}
                  <div className="postText nameText">
                      Some Person
                  </div>
                  {/* Location(s) */}
                  <div className="postText locationText">
                      Allison Dining Commons/ Sargent Dining Commons
                  </div>
                  {/* ----------------------- */}
                  <div className="postLine" />
                  {/* Date and Time */}
                  <div className="dateTimeContainer">
                      {/* Date */}
                      <div className="postText">Mon 10/14</div>
                      {/* Time */}
                      <div className="postText">08:00 PM - 09:30 PM</div>
                  </div>
                  </div>
                  {/* Send and Save buttons */}
                  <div className="sendSaveContainer">
                  {/* Send button */}
                  <button className="sendSaveButtons">
                      <img src="https://cdn-icons-png.flaticon.com/128/3024/3024593.png" alt="send" style={{width: 12, height: 'auto', filter: 'invert(31%) sepia(64%) saturate(229%) hue-rotate(212deg) brightness(89%) contrast(91%)'}} />
                  </button>
                  {/* Save button */}
                  <button className="sendSaveButtons">
                      <img src="https://cdn-icons-png.flaticon.com/128/5662/5662990.png" alt="save" style={{width: 12, height: 'auto', filter: 'invert(31%) sepia(64%) saturate(229%) hue-rotate(212deg) brightness(89%) contrast(91%)'}} />
                  </button>
                  </div>
              </div>
              </div>
          </section>
          {/* Create Button */}
          <button className="createButton">
              <img src="https://cdn-icons-png.flaticon.com/128/992/992651.png" alt="add" style={{width: 33, height: 'auto', filter: 'invert(1)'}} />
              CREATE
          </button>
          </section>
          {/* Right Content */}
          <section className="rightFrame">
          {/* MONTH */}
          <h4>OCTOBER</h4>
          {/* calendar */}
          <div className="calendarBlock">
              {/* Calendar Nav */}
              <nav className="calendarNav">
              {/* Back Button */}
              <button className="calendarNavButton">
                  <img src="https://cdn-icons-png.flaticon.com/128/2989/2989988.png" alt="previous" style={{width: 25, height: 'auto', transform: 'scaleX(-1)', filter: 'invert(29%) sepia(46%) saturate(312%) hue-rotate(212deg) brightness(98%) contrast(89%)'}} />
              </button>
              {/* Week Label */}
              <div className="weekLabel">
                  {/* Days of the Week */}
                  <div className="daysOfWeek">
                  <h5>SUN</h5>
                  <h5>MON</h5>
                  <h5>TUE</h5>
                  <h5>WED</h5>
                  <h5>THU</h5>
                  <h5>FRI</h5>
                  <h5>SAT</h5>
                  </div>
                  {/* Dates of the Week */}
                  <div className="daysOfWeek">
                  <h5 className="dateStyle">06</h5>
                  <h5 className="dateStyle">07</h5>
                  <h5 className="dateStyle">08</h5>
                  <h5 className="dateStyle">09</h5>
                  <h5 className="dateStyle">10</h5>
                  <h5 className="dateStyle">11</h5>
                  <h5 className="dateStyle">12</h5>
                  </div>
              </div>
              {/* Forwards Button */}
              <button className="calendarNavButton">
                  <img src="https://cdn-icons-png.flaticon.com/128/2989/2989988.png" alt="next" style={{width: 25, height: 'auto', filter: 'invert(29%) sepia(46%) saturate(312%) hue-rotate(212deg) brightness(98%) contrast(89%)'}} />
              </button>
              </nav>
              {/* Below Calendar Nav Bar */}
              <section className="calendarBodyContainer">
              {/* Time Markings */}
              <section className="timeMarkings">
                  <h5 className="timeStyle">7 AM</h5>
                  <h5 className="timeStyle">8 AM</h5>
                  <h5 className="timeStyle">9 AM</h5>
                  <h5 className="timeStyle">10 AM</h5>
                  <h5 className="timeStyle">11 AM</h5>
                  <h5 className="timeStyle">12 PM</h5>
                  <h5 className="timeStyle">1 PM</h5>
                  <h5 className="timeStyle">2 PM</h5>
                  <h5 className="timeStyle">3 PM</h5>
                  <h5 className="timeStyle">4 PM</h5>
                  <h5 className="timeStyle">5 PM</h5>
                  <h5 className="timeStyle">6 PM</h5>
                  <h5 className="timeStyle">7 PM</h5>
                  <h5 className="timeStyle">8 PM</h5>
                  <h5 className="timeStyle">9 PM</h5>
              </section>
              {/* Calendar Grid */}
              <section className="calendarGrid">
                  {/* Event: CLASS A Mon */}
                  <div className="eventContainer">
                  {/* Side Bar */}
                  <div className="rect" />
                  {/* Event Info */}
                  <div className="eventInfo">
                      {/* Time */}
                      <div className="eventText">
                      {/* Number */}
                      <div>10:00</div>
                      {/* AM/PM */}
                      <div>AM</div>
                      </div>
                      {/* Event Name */}
                      <div className="eventName">CLASS A</div>
                      {/* Event Location */}
                      Somewhere
                  </div>
                  </div>
                  {/* Event: CLASS A Wed */}
                  <div className="eventContainer" style={{gridColumn: 'wedStart'}}>
                  {/* Side Bar */}
                  <div className="rect" />
                  {/* Event Info */}
                  <div className="eventInfo">
                      {/* Time */}
                      <div className="eventText">
                      {/* Number */}
                      <div>10:00</div>
                      {/* AM/PM */}
                      <div>AM</div>
                      </div>
                      {/* Event Name */}
                      <div className="eventName">CLASS A</div>
                      {/* Event Location */}
                      Somewhere
                  </div>
                  </div>
                  {/* Event: CLASS A Fri */}
                  <div className="eventContainer" style={{gridColumn: 'friStart'}}>
                  {/* Side Bar */}
                  <div className="rect" />
                  {/* Event Info */}
                  <div className="eventInfo">
                      {/* Time */}
                      <div className="eventText">
                      {/* Number */}
                      <div>10:00</div>
                      {/* AM/PM */}
                      <div>AM</div>
                      </div>
                      {/* Event Name */}
                      <div className="eventName">CLASS A</div>
                      {/* Event Location */}
                      Somewhere
                  </div>
                  </div>
                  {/* Event: CLASS B Tue */}
                  <div className="eventContainer" style={{gridColumn: 'tueStart', gridRow: 'AM9start / AM11start', backgroundColor: 'var(--blueEventO)'}}>
                  {/* Side Bar */}
                  <div className="rect" style={{backgroundColor: 'var(--blueEvent)'}} />
                  {/* Event Info */}
                  <div className="eventInfo">
                      {/* Time */}
                      <div className="eventText">
                      {/* Number */}
                      <div>09:00</div>
                      {/* AM/PM */}
                      <div>AM</div>
                      </div>
                      {/* Event Name */}
                      <div className="eventName">CLASS B</div>
                      {/* Event Location */}
                      Someplace
                  </div>
                  </div>
                  {/* Event: CLASS B Thu */}
                  <div className="eventContainer" style={{gridColumn: 'thuStart', gridRow: 'AM9start / AM11start', backgroundColor: 'var(--blueEventO)'}}>
                  {/* Side Bar */}
                  <div className="rect" style={{backgroundColor: 'var(--blueEvent)'}} />
                  {/* Event Info */}
                  <div className="eventInfo">
                      {/* Time */}
                      <div className="eventText">
                      {/* Number */}
                      <div>09:00</div>
                      {/* AM/PM */}
                      <div>AM</div>
                      </div>
                      {/* Event Name */}
                      <div className="eventName">CLASS B</div>
                      {/* Event Location */}
                      Someplace
                  </div>
                  </div>
                  {/* Event: LUNCH Tue */}
                  <div className="eventContainer" style={{gridColumn: 'tueStart', gridRow: 'PM130start / PM430start', backgroundColor: 'var(--greenEventO)'}}>
                  {/* Side Bar */}
                  <section className="rect" style={{backgroundColor: 'var(--greenEvent)'}} />
                  {/* Event Info */}
                  <div className="eventInfo">
                      {/* Event Top Bar */}
                      <div className="eventTopBar">
                      {/* Time */}
                      <div className="eventText">
                          {/* Number */}
                          <div>01:30</div>
                          {/* AM/PM */}
                          <div>PM</div>
                      </div>
                      {/* Person Involved */}
                      <button className="userIcon calendarVariation" style={{backgroundColor: 'var(--blueIcon)'}}>
                          PO
                      </button>
                      </div>
                      {/* Event Name */}
                      <div className="eventName">LUNCH</div>
                      {/* Event Location */}
                      Elder Dining Commons
                  </div>
                  </div>
                  {/* Background Grid */}
                  <div className="gridLine" style={{gridRow: 1, gridColumn: 1}} />
                  <div className="gridLine" style={{gridRow: 1, gridColumn: 2}} />
                  <div className="gridLine" style={{gridRow: 1, gridColumn: 3}} />
                  <div className="gridLine" style={{gridRow: 1, gridColumn: 4}} />
                  <div className="gridLine" style={{gridRow: 1, gridColumn: 5}} />
                  <div className="gridLine" style={{gridRow: 1, gridColumn: 6}} />
                  <div className="gridLine" style={{gridRow: 1, gridColumn: 7}} />
                  <div className="gridLine" style={{gridRow: 2, gridColumn: 1}} />
                  <div className="gridLine" style={{gridRow: 2, gridColumn: 2}} />
                  <div className="gridLine" style={{gridRow: 2, gridColumn: 3}} />
                  <div className="gridLine" style={{gridRow: 2, gridColumn: 4}} />
                  <div className="gridLine" style={{gridRow: 2, gridColumn: 5}} />
                  <div className="gridLine" style={{gridRow: 2, gridColumn: 6}} />
                  <div className="gridLine" style={{gridRow: 2, gridColumn: 7}} />
                  <div className="gridLine" style={{gridRow: 3, gridColumn: 1}} />
                  <div className="gridLine" style={{gridRow: 3, gridColumn: 2}} />
                  <div className="gridLine" style={{gridRow: 3, gridColumn: 3}} />
                  <div className="gridLine" style={{gridRow: 3, gridColumn: 4}} />
                  <div className="gridLine" style={{gridRow: 3, gridColumn: 5}} />
                  <div className="gridLine" style={{gridRow: 3, gridColumn: 6}} />
                  <div className="gridLine" style={{gridRow: 3, gridColumn: 7}} />
                  <div className="gridLine" style={{gridRow: 4, gridColumn: 1}} />
                  <div className="gridLine" style={{gridRow: 4, gridColumn: 2}} />
                  <div className="gridLine" style={{gridRow: 4, gridColumn: 3}} />
                  <div className="gridLine" style={{gridRow: 4, gridColumn: 4}} />
                  <div className="gridLine" style={{gridRow: 4, gridColumn: 5}} />
                  <div className="gridLine" style={{gridRow: 4, gridColumn: 6}} />
                  <div className="gridLine" style={{gridRow: 4, gridColumn: 7}} />
                  <div className="gridLine" style={{gridRow: 5, gridColumn: 1}} />
                  <div className="gridLine" style={{gridRow: 5, gridColumn: 2}} />
                  <div className="gridLine" style={{gridRow: 5, gridColumn: 3}} />
                  <div className="gridLine" style={{gridRow: 5, gridColumn: 4}} />
                  <div className="gridLine" style={{gridRow: 5, gridColumn: 5}} />
                  <div className="gridLine" style={{gridRow: 5, gridColumn: 6}} />
                  <div className="gridLine" style={{gridRow: 5, gridColumn: 7}} />
                  <div className="gridLine" style={{gridRow: 6, gridColumn: 1}} />
                  <div className="gridLine" style={{gridRow: 6, gridColumn: 2}} />
                  <div className="gridLine" style={{gridRow: 6, gridColumn: 3}} />
                  <div className="gridLine" style={{gridRow: 6, gridColumn: 4}} />
                  <div className="gridLine" style={{gridRow: 6, gridColumn: 5}} />
                  <div className="gridLine" style={{gridRow: 6, gridColumn: 6}} />
                  <div className="gridLine" style={{gridRow: 6, gridColumn: 7}} />
                  <div className="gridLine" style={{gridRow: 7, gridColumn: 1}} />
                  <div className="gridLine" style={{gridRow: 7, gridColumn: 2}} />
                  <div className="gridLine" style={{gridRow: 7, gridColumn: 3}} />
                  <div className="gridLine" style={{gridRow: 7, gridColumn: 4}} />
                  <div className="gridLine" style={{gridRow: 7, gridColumn: 5}} />
                  <div className="gridLine" style={{gridRow: 7, gridColumn: 6}} />
                  <div className="gridLine" style={{gridRow: 7, gridColumn: 7}} />
                  <div className="gridLine" style={{gridRow: 8, gridColumn: 1}} />
                  <div className="gridLine" style={{gridRow: 8, gridColumn: 2}} />
                  <div className="gridLine" style={{gridRow: 8, gridColumn: 3}} />
                  <div className="gridLine" style={{gridRow: 8, gridColumn: 4}} />
                  <div className="gridLine" style={{gridRow: 8, gridColumn: 5}} />
                  <div className="gridLine" style={{gridRow: 8, gridColumn: 6}} />
                  <div className="gridLine" style={{gridRow: 8, gridColumn: 7}} />
                  <div className="gridLine" style={{gridRow: 9, gridColumn: 1}} />
                  <div className="gridLine" style={{gridRow: 9, gridColumn: 2}} />
                  <div className="gridLine" style={{gridRow: 9, gridColumn: 3}} />
                  <div className="gridLine" style={{gridRow: 9, gridColumn: 4}} />
                  <div className="gridLine" style={{gridRow: 9, gridColumn: 5}} />
                  <div className="gridLine" style={{gridRow: 9, gridColumn: 6}} />
                  <div className="gridLine" style={{gridRow: 9, gridColumn: 7}} />
                  <div className="gridLine" style={{gridRow: 10, gridColumn: 1}} />
                  <div className="gridLine" style={{gridRow: 10, gridColumn: 2}} />
                  <div className="gridLine" style={{gridRow: 10, gridColumn: 3}} />
                  <div className="gridLine" style={{gridRow: 10, gridColumn: 4}} />
                  <div className="gridLine" style={{gridRow: 10, gridColumn: 5}} />
                  <div className="gridLine" style={{gridRow: 10, gridColumn: 6}} />
                  <div className="gridLine" style={{gridRow: 10, gridColumn: 7}} />
                  <div className="gridLine" style={{gridRow: 11, gridColumn: 1}} />
                  <div className="gridLine" style={{gridRow: 11, gridColumn: 2}} />
                  <div className="gridLine" style={{gridRow: 11, gridColumn: 3}} />
                  <div className="gridLine" style={{gridRow: 11, gridColumn: 4}} />
                  <div className="gridLine" style={{gridRow: 11, gridColumn: 5}} />
                  <div className="gridLine" style={{gridRow: 11, gridColumn: 6}} />
                  <div className="gridLine" style={{gridRow: 11, gridColumn: 7}} />
                  <div className="gridLine" style={{gridRow: 12, gridColumn: 1}} />
                  <div className="gridLine" style={{gridRow: 12, gridColumn: 2}} />
                  <div className="gridLine" style={{gridRow: 12, gridColumn: 3}} />
                  <div className="gridLine" style={{gridRow: 12, gridColumn: 4}} />
                  <div className="gridLine" style={{gridRow: 12, gridColumn: 5}} />
                  <div className="gridLine" style={{gridRow: 12, gridColumn: 6}} />
                  <div className="gridLine" style={{gridRow: 12, gridColumn: 7}} />
                  <div className="gridLine" style={{gridRow: 13, gridColumn: 1}} />
                  <div className="gridLine" style={{gridRow: 13, gridColumn: 2}} />
                  <div className="gridLine" style={{gridRow: 13, gridColumn: 3}} />
                  <div className="gridLine" style={{gridRow: 13, gridColumn: 4}} />
                  <div className="gridLine" style={{gridRow: 13, gridColumn: 5}} />
                  <div className="gridLine" style={{gridRow: 13, gridColumn: 6}} />
                  <div className="gridLine" style={{gridRow: 13, gridColumn: 7}} />
                  <div className="gridLine" style={{gridRow: 14, gridColumn: 1}} />
                  <div className="gridLine" style={{gridRow: 14, gridColumn: 2}} />
                  <div className="gridLine" style={{gridRow: 14, gridColumn: 3}} />
                  <div className="gridLine" style={{gridRow: 14, gridColumn: 4}} />
                  <div className="gridLine" style={{gridRow: 14, gridColumn: 5}} />
                  <div className="gridLine" style={{gridRow: 14, gridColumn: 6}} />
                  <div className="gridLine" style={{gridRow: 14, gridColumn: 7}} />
                  <div className="gridLine" style={{gridRow: 15, gridColumn: 1}} />
                  <div className="gridLine" style={{gridRow: 15, gridColumn: 2}} />
                  <div className="gridLine" style={{gridRow: 15, gridColumn: 3}} />
                  <div className="gridLine" style={{gridRow: 15, gridColumn: 4}} />
                  <div className="gridLine" style={{gridRow: 15, gridColumn: 5}} />
                  <div className="gridLine" style={{gridRow: 15, gridColumn: 6}} />
                  <div className="gridLine" style={{gridRow: 15, gridColumn: 7}} />
                  <div className="gridLine" style={{gridRow: 16, gridColumn: 1}} />
                  <div className="gridLine" style={{gridRow: 16, gridColumn: 2}} />
                  <div className="gridLine" style={{gridRow: 16, gridColumn: 3}} />
                  <div className="gridLine" style={{gridRow: 16, gridColumn: 4}} />
                  <div className="gridLine" style={{gridRow: 16, gridColumn: 5}} />
                  <div className="gridLine" style={{gridRow: 16, gridColumn: 6}} />
                  <div className="gridLine" style={{gridRow: 16, gridColumn: 7}} />
                  <div className="gridLine" style={{gridRow: 17, gridColumn: 1}} />
                  <div className="gridLine" style={{gridRow: 17, gridColumn: 2}} />
                  <div className="gridLine" style={{gridRow: 17, gridColumn: 3}} />
                  <div className="gridLine" style={{gridRow: 17, gridColumn: 4}} />
                  <div className="gridLine" style={{gridRow: 17, gridColumn: 5}} />
                  <div className="gridLine" style={{gridRow: 17, gridColumn: 6}} />
                  <div className="gridLine" style={{gridRow: 17, gridColumn: 7}} />
                  <div className="gridLine" style={{gridRow: 18, gridColumn: 1}} />
                  <div className="gridLine" style={{gridRow: 18, gridColumn: 2}} />
                  <div className="gridLine" style={{gridRow: 18, gridColumn: 3}} />
                  <div className="gridLine" style={{gridRow: 18, gridColumn: 4}} />
                  <div className="gridLine" style={{gridRow: 18, gridColumn: 5}} />
                  <div className="gridLine" style={{gridRow: 18, gridColumn: 6}} />
                  <div className="gridLine" style={{gridRow: 18, gridColumn: 7}} />
                  <div className="gridLine" style={{gridRow: 19, gridColumn: 1}} />
                  <div className="gridLine" style={{gridRow: 19, gridColumn: 2}} />
                  <div className="gridLine" style={{gridRow: 19, gridColumn: 3}} />
                  <div className="gridLine" style={{gridRow: 19, gridColumn: 4}} />
                  <div className="gridLine" style={{gridRow: 19, gridColumn: 5}} />
                  <div className="gridLine" style={{gridRow: 19, gridColumn: 6}} />
                  <div className="gridLine" style={{gridRow: 19, gridColumn: 7}} />
                  <div className="gridLine" style={{gridRow: 20, gridColumn: 1}} />
                  <div className="gridLine" style={{gridRow: 20, gridColumn: 2}} />
                  <div className="gridLine" style={{gridRow: 20, gridColumn: 3}} />
                  <div className="gridLine" style={{gridRow: 20, gridColumn: 4}} />
                  <div className="gridLine" style={{gridRow: 20, gridColumn: 5}} />
                  <div className="gridLine" style={{gridRow: 20, gridColumn: 6}} />
                  <div className="gridLine" style={{gridRow: 20, gridColumn: 7}} />
                  <div className="gridLine" style={{gridRow: 21, gridColumn: 1}} />
                  <div className="gridLine" style={{gridRow: 21, gridColumn: 2}} />
                  <div className="gridLine" style={{gridRow: 21, gridColumn: 3}} />
                  <div className="gridLine" style={{gridRow: 21, gridColumn: 4}} />
                  <div className="gridLine" style={{gridRow: 21, gridColumn: 5}} />
                  <div className="gridLine" style={{gridRow: 21, gridColumn: 6}} />
                  <div className="gridLine" style={{gridRow: 21, gridColumn: 7}} />
                  <div className="gridLine" style={{gridRow: 22, gridColumn: 1}} />
                  <div className="gridLine" style={{gridRow: 22, gridColumn: 2}} />
                  <div className="gridLine" style={{gridRow: 22, gridColumn: 3}} />
                  <div className="gridLine" style={{gridRow: 22, gridColumn: 4}} />
                  <div className="gridLine" style={{gridRow: 22, gridColumn: 5}} />
                  <div className="gridLine" style={{gridRow: 22, gridColumn: 6}} />
                  <div className="gridLine" style={{gridRow: 22, gridColumn: 7}} />
                  <div className="gridLine" style={{gridRow: 23, gridColumn: 1}} />
                  <div className="gridLine" style={{gridRow: 23, gridColumn: 2}} />
                  <div className="gridLine" style={{gridRow: 23, gridColumn: 3}} />
                  <div className="gridLine" style={{gridRow: 23, gridColumn: 4}} />
                  <div className="gridLine" style={{gridRow: 23, gridColumn: 5}} />
                  <div className="gridLine" style={{gridRow: 23, gridColumn: 6}} />
                  <div className="gridLine" style={{gridRow: 23, gridColumn: 7}} />
                  <div className="gridLine" style={{gridRow: 24, gridColumn: 1}} />
                  <div className="gridLine" style={{gridRow: 24, gridColumn: 2}} />
                  <div className="gridLine" style={{gridRow: 24, gridColumn: 3}} />
                  <div className="gridLine" style={{gridRow: 24, gridColumn: 4}} />
                  <div className="gridLine" style={{gridRow: 24, gridColumn: 5}} />
                  <div className="gridLine" style={{gridRow: 24, gridColumn: 6}} />
                  <div className="gridLine" style={{gridRow: 24, gridColumn: 7}} />
                  <div className="gridLine" style={{gridRow: 25, gridColumn: 1}} />
                  <div className="gridLine" style={{gridRow: 25, gridColumn: 2}} />
                  <div className="gridLine" style={{gridRow: 25, gridColumn: 3}} />
                  <div className="gridLine" style={{gridRow: 25, gridColumn: 4}} />
                  <div className="gridLine" style={{gridRow: 25, gridColumn: 5}} />
                  <div className="gridLine" style={{gridRow: 25, gridColumn: 6}} />
                  <div className="gridLine" style={{gridRow: 25, gridColumn: 7}} />
                  <div className="gridLine" style={{gridRow: 26, gridColumn: 1}} />
                  <div className="gridLine" style={{gridRow: 26, gridColumn: 2}} />
                  <div className="gridLine" style={{gridRow: 26, gridColumn: 3}} />
                  <div className="gridLine" style={{gridRow: 26, gridColumn: 4}} />
                  <div className="gridLine" style={{gridRow: 26, gridColumn: 5}} />
                  <div className="gridLine" style={{gridRow: 26, gridColumn: 6}} />
                  <div className="gridLine" style={{gridRow: 26, gridColumn: 7}} />
                  <div className="gridLine" style={{gridRow: 27, gridColumn: 1}} />
                  <div className="gridLine" style={{gridRow: 27, gridColumn: 2}} />
                  <div className="gridLine" style={{gridRow: 27, gridColumn: 3}} />
                  <div className="gridLine" style={{gridRow: 27, gridColumn: 4}} />
                  <div className="gridLine" style={{gridRow: 27, gridColumn: 5}} />
                  <div className="gridLine" style={{gridRow: 27, gridColumn: 6}} />
                  <div className="gridLine" style={{gridRow: 27, gridColumn: 7}} />
                  <div className="gridLine" style={{gridRow: 28, gridColumn: 1}} />
                  <div className="gridLine" style={{gridRow: 28, gridColumn: 2}} />
                  <div className="gridLine" style={{gridRow: 28, gridColumn: 3}} />
                  <div className="gridLine" style={{gridRow: 28, gridColumn: 4}} />
                  <div className="gridLine" style={{gridRow: 28, gridColumn: 5}} />
                  <div className="gridLine" style={{gridRow: 28, gridColumn: 6}} />
                  <div className="gridLine" style={{gridRow: 28, gridColumn: 7}} />
                  <div className="gridLine" style={{gridRow: 29, gridColumn: 1}} />
                  <div className="gridLine" style={{gridRow: 29, gridColumn: 2}} />
                  <div className="gridLine" style={{gridRow: 29, gridColumn: 3}} />
                  <div className="gridLine" style={{gridRow: 29, gridColumn: 4}} />
                  <div className="gridLine" style={{gridRow: 29, gridColumn: 5}} />
                  <div className="gridLine" style={{gridRow: 29, gridColumn: 6}} />
                  <div className="gridLine" style={{gridRow: 29, gridColumn: 7}} />
                  <div className="gridLine" style={{gridRow: 30, gridColumn: 1}} />
                  <div className="gridLine" style={{gridRow: 30, gridColumn: 2}} />
                  <div className="gridLine" style={{gridRow: 30, gridColumn: 3}} />
                  <div className="gridLine" style={{gridRow: 30, gridColumn: 4}} />
                  <div className="gridLine" style={{gridRow: 30, gridColumn: 5}} />
                  <div className="gridLine" style={{gridRow: 30, gridColumn: 6}} />
                  <div className="gridLine" style={{gridRow: 30, gridColumn: 7}} />
              </section>
              </section>
          </div>
          </section>
      </section>
      </div>
    </div>
  );
}

export default App;
