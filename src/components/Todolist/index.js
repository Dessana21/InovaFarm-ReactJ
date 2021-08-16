
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import firebase from './../../Firebase';


class Todolist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: true,
            Animal: '',
            lote: '',
            numident: '',
           
            items: []
        }

        this.addItem = this.addItem.bind(this);
        this.sair = this.sair.bind(this);

       firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user: user });
            }
        })
    
    }

    sair() {
        firebase.auth().signOut()
            .then(() => {
                this.setState({ user: null });
            });
    }

    addItem(e) {
        let state = this.state;


        if (this._animalInput.value === '' || this._lote.value === '' || this._numident.value === '' ) {
            alert('Complete os campos');
        }
        else {
            if (this._animalInput.value !== '') {
                let newItem = {
                    text: this._animalInput.value,
                    key: Date.now()
                };
    
    
                this.setState({ items: [...state.items, newItem] });
            }
      
                
            if(this._lote.value !== ''){
                let newItem = {
                    text: this._lote.value,
                    key: Date.now()
                };
    
                this.setState({ items: [...state.items, newItem] });
            }
    
            if(this._numident.value !== ''){
                let newItem = {
                    text: this._numident.value,
                    key: Date.now()
                };
    
                this.setState({ items: [...state.items, newItem] });
            }
    
           
    
    
           firebase.database().ref('projects').child(firebase.auth().currentUser.uid).child(this.state.animal).set({
                A: this.state.lote,
                N: this.state.numident
                });
    
            e.preventDefault();
            this.setState({ animal: '', lote:'', numident: ''});
        }
        
    }

    render() {
        return (
            <div>
                {this.state.user
                    ?
                    <div>
                        <h1>Inova Farm</h1><br />
                        <form>
                            <label>Animal:</label><br />
                            <input type="text" placeholder=" " name="animal"
                                value={this.state.animal} onChange={(ev) => this.setState({ animal: ev.target.value })}
                                ref={(event) => this._animalInput = event} />
                        </form>


                        <form>
                            <label>Lote:</label><br />
                            <input type="text" placeholder=" " name="lote"
                                value={this.state.lote} onChange={(ev) => this.setState({ lote: ev.target.value })}
                                ref={(event) => this._lote = event} />

                        </form>


                        <form>
                            <label>Número de identificação:</label><br />
                            <input type="number" placeholder=" " name="num"
                                value={this.state.numident} onChange={(ev) => this.setState({ numident: ev.target.value })}
                                ref={(event) => this._numident = event} />

                        </form>

                

                        <button onClick={this.addItem}>Adicionar</button> <br/>
                        <Link to="/Pagination">Tabela</Link> <br/>
                        
                        <button onClick={this.sair}>Sair</button>
                       
                     
                    </div>
                    :
                    <div>
                        <Redirect to='/' />
                    </div>
                }
            </div>
        );

    }
}

export default Todolist;