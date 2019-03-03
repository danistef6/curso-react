import React from 'react';
import {Link } from 'react-router-dom';
import { connect } from 'react-redux'

class Dashboard extends React.Component {
    state = {}

    render() {
        return (
            <div>
                <h1> Dashboard </h1>
                <Link to="/detail"> Detail page </Link>
                /
                <Link to="/state"> State page </Link>
                <br/>
                <h3>likes from redux : {this.props.likes}</h3>
            </div>
        );
    }
}

const mapStateToProps = (state) =>({
    likes : state.Character.likes
})

export default connect(mapStateToProps , {})(Dashboard);