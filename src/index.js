import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';




ReactDOM.render( < App / > , document.getElementById('root'));

let scroll = document.querySelector('.scroll');
window.onscroll = ScrollShow;

function ScrollShow() {
    if (document.documentElement.scrollTop > 100) {
        scroll.style.display = 'block';
    } else {
        scroll.style.display = 'none';
    }
}

scroll.addEventListener('click', function () {

    document.documentElement.scrollTop = 0;

})
