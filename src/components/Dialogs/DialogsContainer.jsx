import { connect } from 'react-redux';
import Dialogs from './Dialogs'
import { compose } from 'redux';
import withAuthRedirect from '../../HightOrderComponent(hoc)/withAuthRedirect';


let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage
    }
}

//compose, ce funkcija na podobi konwejera.
//w drugyj wykly zakydujemo tsilowu komponentu kotra maje projty po konwejeru
//w perszyj wyklyk zakydajemo funkcjiji czerz kotri nasza cilowa componenta maje projty znyzu wwerch
//tobto spoczatku dialogs zakydujetsia w withAuthRedirect i potim pisla powernenia rezultatu funkcji
//withAuthRedirect prokydujetsia dali w connect(mapStateToProps),
export default compose(
    connect(mapStateToProps),

    //HOC component to redirect if !isAuth
    withAuthRedirect
)(Dialogs);