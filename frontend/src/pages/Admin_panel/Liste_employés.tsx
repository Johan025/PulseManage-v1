import React from 'react';
import Header from '../../components/Admin_panel/Header';
import List_nav from '../../components/Admin_panel/List_nav';

const Liste_employés: React.FC = () => {
    return (
        <div className='liste_employés'>
              <Header/>
              <List_nav/>
        </div>
    );
};

export default Liste_employés;

