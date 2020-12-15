import React from 'react'

//createContext stworiuje kontekst w jakij peredajetsia nasz store (abo my morzemo peredawaty lude znaczenia)
const StoreContext = React.createContext(undefined);
//potim naszu roditelsku komponentu (w ciomu wypadku <App />) potribno obernuty w teg <storeContext.Provider value={store}>
//a docirniu komponentu w kotru budemo wlasne peredawaty store potribno obernuty  w teg 
//<storeContext.Consumer> i peredaty w nei funkciju (store) => {tut bude nasza Conteinerna komponenta} </storeContext.Consumer>
export default StoreContext
