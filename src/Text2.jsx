import React, { useState } from 'react';
import './NavBar.css';

const Text2 = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "0px", animation: "fadeOutMoveDown 100ms forwards", animationDelay: "3s" }}>
            <div>
                <img src="comma22.png" style={{ animation: "fadeInMoveUp 500ms forwards", }}></img>
            </div>

            <div style={{marginTop:"-60px"}}>
                <div style={{ display: "flex", flexDirection: 'row', gap: "30px", animation: "fadeInMoveUp 500ms forwards", justifyContent: "center", alignContent: "center", height: "90px", animationDelay: "0.6s", opacity: "0" }}>
                    <div style={{ display: "flex", flexDirection: 'column', marginTop: "45px", textWrap: "wrap", width: "50px" }}>
                        <p style={{ fontWeight: 'bolder', fontSize: "30px", margin: "0px", marginTop: "0px", verticalAlign: "bottom", textWrap: "wrap" }}>LAW FIRM</p>
                    </div>
                    <div>
                        <p style={{ fontWeight: 'bolder', color: '#c0cf13', fontSize: "80px", marginTop: "30px", marginBottom: "0px" }} >MOST FEARED</p>
                    </div>
                </div>
                <div style={{ animation: "fadeInMoveUp 500ms forwards", animationDelay: "0.8s", animationTimingFunction: "ease-in-out", opacity: "0" }}>
                    <p style={{ fontWeight: 'bolder', fontSize: "52px", marginTop: "30px", height: "60px" }}>GLOBALLY BY LARGE BUSINESSES</p>
                </div>
                <div style={{ animation: "fadeInMoveUp 500ms forwards", animationDelay: "1.2s", opacity: "0", marginTop: "-40px" }}>
                    <p>BTI CONSULTING GROUP SURVEY</p>
                </div>
            </div>
        </div>
    );
};

export default Text2;
