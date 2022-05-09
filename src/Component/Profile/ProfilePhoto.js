import React from 'react';
import Sallem from '../../sallem.jpg';
import Address from './Address';
import FullName from './FullName';
const ProfilePhoto = () => {
  return (
    <div class="container">
  <div class="card">
 
    <div class="description">

      <h2> <FullName/></h2>
      <h4>ingénieur génie logiciel</h4>
      <h5>
      Je suis actuellement ingénieur génie logiciel et systèmes d'information. Ayant acquis une expérience respectable dans le développement d'applications Web grâce à l'utilisation des technologies les plus récentes et innovantes
      </h5>
      <div class="social">
       <Address/>
      </div>
    </div>

    <div class="header">
        <img src={Sallem} alt='image_profile'/>
      </div>

  </div>
</div>
  )
}

export default ProfilePhoto