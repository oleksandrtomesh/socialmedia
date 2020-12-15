import Dialogs from './Dialogs'


const DialogsContainer = (props) => {
    debugger;
    let dialogPage = props.store.getState().dialogPage;

    return <Dialogs dialogPage={dialogPage} store={props.store} />   
    
}

export default DialogsContainer;