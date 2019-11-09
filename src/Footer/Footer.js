import React from 'react';
import './Footer.css';
import astronaut from '../photos/astronaut.png';
import android from '../photos/android.png';
import settings from '../photos/settings.png';
import printer from '../photos/printer.png';
import musical from '../photos/musical-note.png';

class Footer extends React.Component {
    render () {
        return (
            <footer className="Footer">
                <div className="Icons">
                    <img alt="Settings" src={settings} />
                    <img alt="Android" src={android} />
                    <img alt="Music" src={musical} />
                    <img alt="Astronaut" src={astronaut} />
                    <img alt="Print" src={printer} />
                </div>
                <div className="Footer_rights">© Yuval Zinger</div>
            </footer>
        );
    }
}
export default Footer;
