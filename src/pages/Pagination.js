import React, {useState, useEffect} from 'react';
import axios from 'axios';
import paginationFactory from 'react-bootstrap-table2-paginator';
import BootstrapTable from 'react-bootstrap-table-next';
import { Link } from 'react-router-dom';
import { Modal } from 'bootstrap';
import {Button} from 'react-bootstrap';

const Pagination = () => {
    const [players, setPlayers] = useState([]);
    const [modalInfo, setModalInfo] = useState([]);
    const [showModal, setShowModal] = useState(false);
    

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const getPlayerData = async () => {

        try{
            const data = await axios.get("https://nba-players.heroKuapp.com/players-stats");
            setPlayers(data.data)
        }catch (e){
            console.log(e)
        }
    };

    useEffect(() =>{
        getPlayerData();
    }, []);

    

    const columns = [
        {datafiel: "name", text: "Nelore"},
        {datafiel: "name2", text: "Paca"},
        {datafiel: "name3", text: "areado"},
        {datafiel: "name4", text: "Angola"}

    ]

    const rowEvents = {
        onclick: (e,row) => {
            console.log(row);
            setModalInfo(row);
            toggleTrueFalse()
        },
    };


    const toggleTrueFalse = () =>{
        setShowModal(handleShow);
    };

    const ModalContent = () => {
        return(
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{modalInfo.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <h1>Players Stats</h1>
                <ul>
                    <ol>team_name:{modalInfo.team_name}</ol>
                    <o1>assists_per_game: {modalInfo.assists_per_game}</o1>
                </ul>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onclick={handleClose}>
                        Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }


    return (
        <div className = "App">
            <h1>Fazenda</h1>
            <BootstrapTable
            keyField="name"
            data={players}
            columns={columns}
            Pagination={paginationFactory()}
            rowEvents={rowEvents}
            />

        {show ? <ModalContent/> : null }
        <Link to="/Todolist">Voltar</Link> <br/>
        </div>
    );
};

export default Pagination;