import React, { Component } from 'react';
import { fetchRepos } from '../../services/repos-api';
import { fetchUser } from '../../services/user-api';

class ReposContainer extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            repos: [],
            user: {
                avatar_url: 'https://cdn.tenforums.com/geek/gars/images/2/types/thumb__ser.png'
            },
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
        fetchUser(this.state.username).then(res => this.setState({ user: res.data }));
    }

    render() {
        return (
            // É necessário encapsular os elementos em um elemento pai
            <div style={{textAlign: 'center', boder: '1px solid #ddd'}}>
                <h1>Repos</h1>
                <form action="#" onSubmit={this.submitHandler}>
                    <input 
                        onChange={this.changeHandler}
                        style={{width:'200px', height:'30px'}}
                        type="search"
                        placeholder="Informe um usuário" />
                </form>
                <img style={{width: '100px', margin: '10px 0', borderRadius: '5px'}} alt='Imagem do usuário' src={ this.state.user.avatar_url } />
                <ul>
                    { this.state.repos.map( repo => (
                        <li key={repo.id}><a href={ repo.html_url } target="_blank">{ repo.name }</a></li>
                    )) }
                </ul>
            </div>
        );
    }
}

export default ReposContainer;