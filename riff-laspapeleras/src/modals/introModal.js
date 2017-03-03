import React from 'react';
import Modal from 'react-modal';
import {closeIntroModal} from '../actions';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '- 50%',
        transform: 'translate(-50%, -50%)'
    }
};

export default class IntroModal extends React.Component {
    closeModal = (event) => {
        this.props.dispatch(closeIntroModal());
        this.props.onClose();
    }

    render() {
        return (
            <Modal {...this.props}
                styles={customStyles}
                contentLabel="Protect your city from trash"
                className="modal"
            >
                <div className="title">
                    <h1>Las Papeleras</h1>
                </div>
                <div className="modal-content">
                    <br/>
                    <hr/>
                    <br/>
                    <p>Your objective in this game is to prevent Las Palmas from being flooded with trash. </p>
                    <p> The bins are getting filled fast, as we are in the middle of Carnival. </p>
                    <br/>
                    <p>In order to keep the city clean you can:</p>
                    <ul>
                        <li> Click on a bin to empty it. </li>
                        <li> Use the sliders to change the speed of a bin being filled. </li>
                        <li> The bins can be upgraded and get more trash then. </li>
                    </ul>
                    <br/>
                    <h4>You will lose when 3 bins are full</h4>
                    <br/><hr/><br/> 
                    <h2> HOW LONG CAN YOU KEEP LAS PALMAS CLEAN? </h2>

                    <button onClick={this.closeModal}>LET'S PLAY</button>
                </div>
            </Modal>
        )
    }
}
