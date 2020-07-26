import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaDownload } from 'react-icons/fa'

function Resume() {
    return (
        <div class="jumbotron mx-5">
            <h1 class="display-4">Resume</h1>
                <p class="lead">A financial data analyst currently persuing Full stack webdevelopment</p>
                <hr class="my-4" />
                <p>Learning Full stack webdevelopment program from UC Berkeley- extension. This program focuses on MERN Stack with primary focus on Front-end and Server-side development.</p>
                <a class="btn btn-primary btn-lg fa fa-download" href="https://drive.google.com/file/d/1fA42K02kK9bcRNNZvTvzZ3_398VwVIII/view?usp=sharing" target="_blank" role="button" download="Raman_Nirupama"> <FaDownload/>Click to download Resume</a>
        </div>
    );
}

export default Resume;





