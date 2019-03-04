import React from 'react';
import {Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { Dimmer, Loader} from "semantic-ui-react"
import { increaseLikes, decreaseLikes, restartLikes, fetchCharacterSaga } from '../../actions/character'
import List from '../common/list'

class Dashboard extends React.Component {
    state = {}

    componentDidMount(){
        this.props.fetchCharacterSaga()
    }

    render() {
        const { character } = this.props

        if(character.fetching) {return (<Dimmer active><Loader>Loading</Loader></Dimmer>)}
        return (
            <div>
                <h1> Dashboard  likes {this.props.likes}</h1>
                <button onClick={this.props.increaseLikes}> Like to this character</button>
                <br/>
                <button onClick={this.props.decreaseLikes}> I do not like this character</button>
                <br/>
                <button onClick={this.props.restartLikes}> Restart i like</button>
                <br/>
                <Link to="/detail">Go to detail page </Link>
                <br/>
                <Link to="/state">Go to state page </Link>
                <br/>
                <h1>Characters list</h1>
                {character.charaters.length > 0 ?(<List charaters={character.charaters}/>):(<h3>Empity list</h3>)}
            </div>
        );
    }
}

const mapStateToProps = (state) =>({
    likes : state.character.likes,
    character : state.character
})

export default connect(mapStateToProps , {increaseLikes, decreaseLikes, restartLikes, fetchCharacterSaga})(Dashboard);