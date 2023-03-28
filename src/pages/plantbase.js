import Pin from '../Components/Pin';
import { IconButton } from "rsuite";
import { Plus, Copy, CheckOutline } from '@rsuite/icons';


export default function PlantBase() {
    return <div className='plantbase-page'>
      <h1 id='your-plantbase'>Your Plantbase:</h1>

      <div className='plantbase-button-container'>
        <div className='plantbase-button'>
          <IconButton className='plantbase-icon' icon={ <Plus /> }appearance='primary' />
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

        <div className='plant-container'>
          <Pin pinSize = {'small'} />
          <Pin pinSize = {'medium'} />
          <Pin pinSize = {'large'} />
          <Pin pinSize = {'small'} />
          <Pin pinSize = {'medium'} />
          <Pin pinSize = {'large'} />
          <Pin pinSize = {'small'} />
          <Pin pinSize = {'medium'} />
          <Pin pinSize = {'large'} />
          <Pin pinSize = {'small'} />
          <Pin pinSize = {'medium'} />
          <Pin pinSize = {'large'} />
        </div>
      </div>
  </div>
}