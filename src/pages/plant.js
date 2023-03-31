import { Link } from "react-router-dom"
import { IconButton } from "rsuite";
import { ArowBack } from '@rsuite/icons';

import plant2 from "../img/plant2.jpeg";

export default function addPlant() {
    return <div className="plant-page">
        <Link to="/pages/plantbase.js">
            <IconButton className='plantbase-icon' id='back-icon' icon={ <ArowBack /> } appearance='primary'/>
        </Link>

        <div className="plant-container">
            <div className="plant-image-container">
                <img className="plant-image" src={ plant2 } alt="" />
            </div>
            <div className="plant-bio-container">
                <h1 className="single-plant-header">Your Plant Name</h1>
                <p id="single-plant-description">Do elit excepteur cillum in deserunt nulla dolor commodo anim mollit consequat. Nostrud tempor esse amet elit dolor ut fugiat est anim. Duis sint dolore ad cupidatat magna fugiat consequat labore eiusmod nulla cillum cillum proident id. Tempor qui nulla ullamco pariatur duis.</p>
                <h1 className="single-plant-header">Suggested Care:</h1>
                <h1 className="single-plant-header">Progress:</h1>
            </div>
        </div>
    </div>
}