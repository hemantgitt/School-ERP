import React from 'react'

const Notification = ({ notification }) => {
  return (
    <div>
       <li className="ms-scrollable ms-dropdown-list">
                <a className="media p-2" href="#">
                  <div className="media-body">
                    <span>{notification.message}</span>
                    <p className="fs-10 my-1 text-disabled">
                      <i className="material-icons">access_time</i> {notification.time}
                      
                    </p>
                  </div>
                </a>
               
              </li>
    </div>
  )
}

export default Notification
