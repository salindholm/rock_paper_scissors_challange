import React from "react";
import Home from "./Components/Game";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Rules from "./Components/Rules";
import { Switch, Route } from "react-router-dom";

const App = () => {
	return (
		<>
			<Header />
			<Switch>
				<Route exact path="/" component={Home}></Route>
				<Route exact path="/rules" component={Rules}></Route>
				<Home />
			</Switch>
			<Footer />
		</>
	);
};

export default App;
