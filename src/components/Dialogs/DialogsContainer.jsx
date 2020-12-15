import StoreContext from '../../store-context';
import Dialogs from './Dialogs'


const DialogsContainer = (props) => {
    
    return <StoreContext.Consumer>
        {
        (store) =>{
            let dialogPage = store.getState().dialogPage;

            return <Dialogs dialogPage={dialogPage} store={props.store} />
            }
        }
    </StoreContext.Consumer> 
}

export default DialogsContainer;