/*
 * HomePage
 *
 * The Dashboard is only visible to logged in users
 * Route: /dashboard
 *
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    return (
      <article>
        <section className="text-section">
          <h1>Dashboard</h1>
          <p>Welcome, you are logged in!</p>
          <ol>
            <li><p>action1</p></li>
            <li><p>action2</p></li>
          </ol>
          <p>If you registered a new user, the credentials are now securely saved to localStorage. The next time you visit the website with this browser, you will be able to login with that username/password combination.</p>
        </section>
      </article>
    );
  }
}

// Which props do we want to inject, given the global state?
function select(state) {
  return {
    data: state
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(Dashboard);
