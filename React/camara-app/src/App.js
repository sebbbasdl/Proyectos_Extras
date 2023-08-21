import React, { Component } from 'react';
import Webcam from "react-webcam";
import './App.css';

export default class Camara extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCameraOn: true
        };
        this.webcam = React.createRef();
    }

    toggleCamera = () => {
        this.setState((prevState) => ({
            isCameraOn: !prevState.isCameraOn
        }));
    };

    render() {
        const { isCameraOn } = this.state;

        return (
            <div className='container'>
                <h1 className='header'>Webcam App</h1>
                <h1 className='header'>NOMBRE: SEBASTIAN ALEJANDRO DE LEON TENAZ</h1>
                <h1 className='header'>CARNET: 201906085</h1>
                
                <div className='info-container'>
                    
                </div>
                
                <div className='camera-container'>
                    {isCameraOn ? (
                        <Webcam
                            audio={false}
                            height={350}
                            ref={this.webcam}
                            width={350}
                        />
                    ) : (
                        <div className="camera-off-message">Cámara apagada</div>
                    )}
                </div>
                
                <div className="button-container">
                    <button className="action-button" onClick={this.toggleCamera}>
                        {isCameraOn ? "Apagar Cámara" : "Encender Cámara"}
                    </button>
                </div>
            </div>
        );
    }
}
