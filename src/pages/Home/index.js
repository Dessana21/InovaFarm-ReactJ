import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import firebase from './../../Firebase';
import './../../style.css';


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: '',
            user: null
        };

        this.cadastrar = this.cadastrar.bind(this);
        this.logar = this.logar.bind(this);
        this.auth = this.auth.bind(this);

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user: user });
            }
        })
    }

    auth() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user: user });
            }
        })
    }

    cadastrar() {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
            .catch((error) => {
                alert('Codigo de error: ' + error.code);
            })
            .then((message) => {
                alert('Cadastro efetuado com sucesso');
            });
    }

    logar(e) {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
            .catch((error) => {
                if (error.code === 'auth/wrong-password') {
                    alert('Senha incorreta!');
                } else {
                    alert('Codigo de error: ' + error.code);
                }
            })
            .then(() => {
                this.auth();
            });

        e.preventDefault();
    }

    render() {
        console.log(this.state.user);
        return (
            <div>
                {this.state.user
                    ?
                    <div>
                        <Redirect to='/Todolist' />
                    </div>
                    :
                    <div className="container-center">
                        
                        <h1>Login</h1>
 
                        <div className= "email ">Email:</div><br />
                        <input type="text" value={this.state.email}
                            onChange={(e) => this.setState({ email: e.target.value })} /><br />

                        <label className="senha">Senha:</label><br />
                        <input type="text" value={this.state.senha}
                            onChange={(e) => this.setState({ senha: e.target.value })} /><br />

                        
                        
                        <button onClick={this.cadastrar}>Cadastrar</button>
                        <button onClick={this.logar}>Logar</button>
                       
                       
                    </div>
                }
            </div>
        );
    }
}

export default Home;