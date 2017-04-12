import React, { Component } from 'react';
import Banner from './layout/Banner';

class Home extends Component {

  constructor(props){
    super(props);
    this.eventToggleSidebar = this.eventToggleSidebar.bind(this)
  }

  eventToggleSidebar(e) {
    e.preventDefault();
    this.props.toggleSidebar(!this.props.layout.sidebarOpen);
  }

  render() {

    return (

      	<div className="posts">
  
  			<div className="post banner">
			    <h1 className="post-title">I build <em>web applications,</em> I climb <em>rocks,</em> and I am an active volunteer in <em>Oakland, CA.</em></h1>

			</div>
  
		  	<div className="post clearfix">

				<h2>Technologies I build with:</h2>

				<div className="skill-item clearfix">
					<h4>Client Side</h4>
					<ul className="">
						<li><em>Backbone</em></li>
						<li><em><b>*</b><b>*</b>React</em>
							<ul>
								<li><em><b>*</b>Redux</em></li>
								<li><em>Flux</em></li>
							</ul>
						</li>
						<li><em>JS/HTML/CSS</em></li>
					</ul>
				</div>


				<div className="skill-item clearfix">
					<h4>Server Side</h4>
					<ul>
						<li><em>Python</em></li>
						<li><em><b>*</b>Node</em>
							<ul>
								<li><em><b>*</b>Express</em></li>
							</ul>
						<li><em>Postgres</em></li>
						<li><em>MongoDB</em></li>
						</li>
					</ul>
				</div>

				<div className="skill-item clearfix">
					<h4>Deployment</h4>
					<ul className="clearfix">
						<li><em><b>*</b>Nginx</em></li>
						<li><em><b>*</b>Webpack</em></li>
						<li><em>Heroku</em></li>

					</ul>
				</div>

  			</div>


  			<div className="post clearfix">

				<h2>Organizations I am involved with:</h2>

				<ul className="clients">
					<li className="openoakland-logo">OpenOakland</li>
					<li className="readingpartners-logo">Reading Partners</li>
					<li className="communityedupart-logo">Community Education Partnerships</li>
					<li className="hackthehood-logo">Hack the Hood</li>
					<li className="techtonica-logo">Techtonica</li>
					<li className="bayareaclimbers-logo">Bay Area Climbers Coalition</li>

				</ul>

			</div>

			<Banner />

  		</div>
  
    );
  }
}

export default Home;