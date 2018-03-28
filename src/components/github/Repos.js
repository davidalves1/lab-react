import React, { Component } from 'react';
import { fetchRepos } from '../../services/repos-api';

class Repos extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            repos: [],
            username: ''
        }

        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    componentDidMount() {

    }

    changeHandler(ev) {
        this.setState({ username: ev.target.value });
    }

    submitHandler(ev) {
        ev.preventDefault();
        fetchRepos(this.state.username).then(res => this.setState({ repos: res.data }));
    }

    render() {
        return (
            // É necessário encapsular os elementos em um elemento pai
            <div>
                <h1>Repos</h1>
                <form action="#" onSubmit={this.submitHandler}>
                    <input 
                        onChange={this.changeHandler}
                        style={{width:'200px', height:'30px'}}
                        type="search"
                        placeholder="Informe um usuário" />
                </form>
                <ul>
                    { this.state.repos.map( repo => (
                        <li key={repo.id}><a href={ repo.html_url } target="_blank">{ repo.name }</a></li>
                    )) }
                </ul>
            </div>
        );
    }
}

export default Repos;