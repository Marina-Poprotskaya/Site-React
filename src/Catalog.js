import React, { Component } from 'react';

import Data from './data/catalog.json';
import './css/Catalog.css';

class Catalog extends Component {
    listGoods() {
        let listOfGoods = Data.map((item, index) => 
            <li className = "card" key={index}>
                <p>{item.title}</p>
                <div>{item.description}</div>
                <img src = {item.thumbnail} />
                <p>{item.price}</p>
                <p>{item.oldprice}</p>
                <p>{item.company}</p>
            </li>
        );
    return <ul className = "cardWrapper">{listOfGoods}</ul>
    }


    render() {
        return (
            <div className='catalog'>
              <this.listGoods />
            </div>
        )
    }
}

export default Catalog;