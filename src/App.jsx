import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import data from './Cdata';


const App = () => (
   <>
   <section>
   
 {data.map((val)=>{

   return (
        <Card
        key = {val.id}
         image = { val.image }
         name = { val.name }
       />
    );

})} 

    </section> 
    <div className="scroll"></div>

    </>

)

     export default App;