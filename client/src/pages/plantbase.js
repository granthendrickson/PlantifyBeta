import Pin from '../Components/Pin';
import { IconButton } from "rsuite";
import { Link } from "react-router-dom"
import { Plus, Copy, CheckOutline } from '@rsuite/icons';

import plant1 from "../img/plant1.jpeg";
import plant2 from "../img/plant2.jpeg";


export default function PlantBase() {
    return <div className='plantbase-page'>
      <h1 id='your-plantbase'>Your Plantbase:</h1>

      <div className='plantbase-button-container'>
        <div className='plantbase-button'>
          <Link to="/pages/addPlant.js">
            <IconButton className='plantbase-icon' icon={ <Plus /> }appearance='primary'/>
          </Link>
          <p>Add Plant</p>
        </div>
        <div className='plantbase-button'>
          <IconButton className='plantbase-icon' icon={ <Copy /> }appearance='primary' />
          <p>Organize</p>
        </div>
        <div className='plantbase-button'>
        <IconButton className='plantbase-icon' icon={ <CheckOutline /> }appearance='primary' />
        <p>To-Dos</p>
        </div>
      </div>

      <div className='plantbase'>
        <h1 id="number-of-plants">12 Plants</h1>

        <div className='plantbase-container'>
          <Pin pinSize = {'small'} img = { plant1 } />
          <Pin pinSize = {'medium'} img = { plant1 }/>
          <Pin pinSize = {'large'} img = { plant2 } link = "/pages/plant.js" />
          <Pin pinSize = {'small'} img = { plant1 } />
          <Pin pinSize = {'medium'} img = { plant1 } />
          <Pin pinSize = {'large'} img = { plant1 } />
          <Pin pinSize = {'small'} img = { plant1 } />
          <Pin pinSize = {'medium'} img = { plant1 } />
          <Pin pinSize = {'large'} img = { plant1 } />
          <Pin pinSize = {'small'} img = { plant1 } />
          <Pin pinSize = {'medium'} img = { plant1 } />
          <Pin pinSize = {'large'} img = { plant1 } />
        </div>
      </div>
  </div>
}