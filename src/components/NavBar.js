import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function NavBar(props) {
  const tabs = ['About', 'Portfolio', 'Contact', 'Resume'];
  return (
    <div className="px-3 py-4">
    <h3>Nirupama Sundararaman</h3>
    <ul className="nav nav-tabs float-right">
     
      {tabs.map(tab => (
        <li className="nav-item" key={tab}>
          <a
            href={'#' + tab.toLowerCase()}
            onClick={() => props.handlePageChange(tab)}
            className={
              props.currentPage === tab ? 'nav-link active' : 'nav-link'
            }
          >
            {tab}
          </a>
        </li>
      ))}
    </ul>
    </div>
  );
}

export default NavBar;