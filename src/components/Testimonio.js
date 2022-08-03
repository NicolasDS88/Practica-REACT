import React from 'react';

function Testimonio(){
  return (
      <div className='conteiner-testimonio'>      
        <img 
          className='imagen-testimonio'
          src={require('../img/testimonio-emma.png')}
          alt='Foto de'
        />
        <div className='conteiner-text-testimonio'>
          <p className='name-testimonio'> Tu Madre</p>
          <p className='cargo-testimonio'> Trabajo en..</p>
          <p className='text-testimonio'> loremloremloremloremlorem loremloremlorem</p>

        </div>


      </div>


  )
}
export default Testimonio;

