import React, { useState } from 'react';
import './NavBar.css';

const Text = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "0px", animation: "fadeOutMoveDown 100ms forwards", animationDelay: "33s" }}>
            <div>
                <img src="comma22.png" style={{ animation: "fadeInMoveUp 500ms forwards", }}></img>
            </div>
            <div style={{marginTop:"-60px"}}>
                <div style={{ display: "flex", flexDirection: 'row', gap: "10px", animation: "fadeInMoveUp 500ms forwards", justifyContent: "center", alignContent: "center", height: "90px", animationDelay: "0.6s", opacity: "0" }}>
                    <div style={{ marginTop: "30px" }}>
                        <p style={{ fontWeight: 'bolder', fontSize: "40px" }}>A</p>
                    </div>
                    <div>
                        <p style={{ fontWeight: 'bolder', color: '#c0cf13', fontSize: "80px", marginTop: "30px", marginBottom: "0px" }} >GLOBAL FORCE</p>
                    </div>
                </div>
                <div style={{ animation: "fadeInMoveUp 500ms forwards", animationDelay: "0.8s", animationTimingFunction: "ease-in-out", opacity: "0" }}>
                    <p style={{ fontWeight: 'bolder', fontSize: "52px", marginTop: "30px", height: "20px" }}>IN BUSINESS LITIGATION</p>
                </div>
                <div style={{ animation: "fadeInMoveUp 500ms forwards", animationDelay: "1.2s", opacity: "0" }}>
                    <p>THE WALL STREET JOURNAL</p>
                </div>
            </div>
        </div>
    );
};

export default Text;
