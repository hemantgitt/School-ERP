import React from 'react'

const Mail = ({mail}) => {
    const dynamicImage = "assets/img/new-student-4.jpg";
  return (
    <div>
      <li className="ms-scrollable ms-dropdown-list">
                <a className="media p-2" href="#">
                  <div className="ms-chat-status ms-status-offline ms-chat-img mr-2 align-self-center">
                    <img
                      src={dynamicImage}
                      className="ms-img-round"
                      alt="people"
                    />
                  </div>
                  <div className="media-body">
                    <span>{mail.message}</span>
                    <p className="fs-10 my-1 text-disabled">
                      <i className="material-icons">access_time</i>{mail.time}
                    </p>
                  </div>
                </a>
               
              </li>
    </div>
  )
}

export default Mail
