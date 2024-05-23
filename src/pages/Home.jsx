import React, { useState } from 'react';
import Base from "./Base";
import Kanban from '../components/kanban/Kanban';
import Buscador from '../components/Buscador/Buscador';;

const Home = () => {

  return (
    <Base>
      <Buscador />
      <Kanban />
    </Base>
  );
};

export default Home;
