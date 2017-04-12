import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Repos from './about/Repos';

import Loader from './layout/Loader';
import Banner from './layout/Banner';

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchReposIfNeeded();
  }

  render () {
    const { results, isFetching, lastUpdated, error } = this.props;
    return (
      <div>

          <Banner />

          <div className="about">

            <h3>About Me</h3>

            <p>I have been on the sidelines of web development for the last decade -- stepping in, only when necessary in numerous sales and marketing roles.  
            Currently, I focus on ramping up on Javascript web application development.</p> 


            <p>In winter 2016, I made the commitment of becoming a software developer through  <a href="https://www.hackbrightacademy.com" target="_blank">Hackbright Academy</a>. I came, I saw, I coded. I am now at the beginning of my career shift.</p>


            <h3>About Site</h3>

            <p>This site is a single page web app built with React and Redux. It is Isomorphic (all the code renders on the server and well as the browser). This has the advantage of initially rendering quicker and being indexed by search engines.</p>

        </div>

        <div className="repos">
          <h3><a href="https://github.com/thaoabunga?tab=repositories" target="_blank">My GitHub</a> Repos</h3>
          {isFetching && results.length === 0 &&
              <Loader />
          }
          {!isFetching && error && results.length === 0 &&
            <h3 className="post-error">There has been an Error</h3>
          }
          {!isFetching && !error && results.length === 0 &&
            <h3>Empty</h3>
          }
          {results.length > 0 &&
            <div style={{ opacity: isFetching ? 0.5 : 1 }}>
              <Repos results={results} />
            </div>
          }
        </div>

      </div>
    );
  }
}

About.propTypes = {
  results: PropTypes.array.isRequired,
  error: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired
};

export default About;