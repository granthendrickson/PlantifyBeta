import { Link } from "react-router-dom"
import { IconButton } from "rsuite";
import { SortUp, ArowBack } from '@rsuite/icons';

export default function addPlant() {
    return <div className="add-plant-page">
        <Link to="/pages/plantbase.js">
            <IconButton className='plantbase-icon' id='back-icon' icon={ <ArowBack /> } appearance='primary'/>
        </Link>

        <div className="add-plant-container">
            <div className="upload-image-container">
                <div className="image-drop-box">
                    <div className='dotted-box'>
                        <IconButton className='plantbase-icon' id='upload-icon' icon={ <SortUp /> }appearance='primary'/>
                        <h1 id="upload-text" >Upload</h1>
                    </div>
                </div>
            </div>
            <div className="upload-text-container">
                <input type="text" id="plant-name" placeholder="Give your plant a name"/>
                <input type="text" id="plant-species" placeholder="Plant species"/>
                <textarea type="text" id="plant-description" placeholder="Add a description..."/>
            </div>

            <input type="button" value="Save" id="save-button" />
        </div>
    </div>
}