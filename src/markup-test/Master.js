import React, {Component} from 'react';
import {Route, withRouter, Switch, Redirect} from 'react-router-dom';
import AppHeader from "./common/AppHeader";
import LoadingIndicator from "./common/LoadingIndicator";
import NotFound from "./common/NotFound";
import Home from "./home/Home";
import AppFooter from "./common/AppFooter";


class Master extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isAuthenticated: true,
			isLoading: false
		}
	}

	siteContent() {
		return (
				<Switch>
					<Route exact path="/"
						   render={(props) => <Home isAuthenticated={this.state.isAuthenticated} {...props} />}>
					</Route>

					{/*<PrivateRoute authenticated={this.state.isAuthenticated} path="/videos" component={VideoStream} handleLogout={this.handleLogout}/>*/}
				</Switch>
		)
	}

	render() {
		let siteContent = this.siteContent();

		if (this.state.isLoading) {
			return <LoadingIndicator/>
		}
		return (
				<div className="app-container">
					<AppHeader isAuthenticated={this.state.isAuthenticated}/>

					<div className="app-content">
						{this.state.isAuthenticated ?
								siteContent
								:
								<Switch>
									<Route path="/login"/>
									<Route path="/signup"/>
									<Redirect path="/" to="/login"/>
									<Route component={NotFound}/>
								</Switch>
						}
					</div>

					<AppFooter isAuthenticated={this.state.isAuthenticated}/>
				</div>
		);
	}
}

export default withRouter(Master);
