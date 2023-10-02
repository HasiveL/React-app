import React from 'react'
import Card from './Card';
import imagen1 from "../assets1/cerebro.jpg"
import imagen2 from "../assets1/PvsZ.jpg"
import imagen3 from "../assets1/TWD.jpg"

const cards = [
{
  id: 1,
  MyTitle: 'Fast Cerebro',
  image1: imagen1,
  instructor: "Hasive León Bautista"
},
{
  id: 2,
  MyTitle: 'Fast Plantas vs Zombies',
  image1: imagen2,
  instructor: "Ignacio Tapia Castro"
},
{
  id: 3,
  MyTitle: 'Fast The Walking Dead',
  image1: imagen3,
  instructor: "Guadalupe Bautista Montejo"
}
]
export default function Cards_1() {
  console.log()
  return (
    <div className='container d-flex justify-content-center align-items-center h-100'>
      <div className='row'>
        {
          cards.map(c => (
            <div className='col-md-4' key={cards.id}>
              <Card
              key={c.id}
              id={c.id}
              MyTitle={c.MyTitle}
              image1={c.image1}
              instructor={c.instructor}
              />
            </div>
          ))
        }
      </div>
    </div>
  );
}
