import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Modal from 'react-modal';

import NumBtn from '../components/NumBtn';
import PlusBtn from '../components/PlusBtn';
import Result from '../components/Result';

import * as actions from '../actions';

const customStyles = {
  content : {
    top                   : '20%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-20%',
    transform             : 'translate(-50%, -50%)'
  },
  overlay : {
    backgroundColor:'black'
  }
};

class CalculatorContainer extends Component{
  componentWillMount() {
    Modal.setAppElement('body');
}
    render(){
        const { calculator, actions } = this.props;
        return(
          <div className="dentaku">
            <div className="disp">
            <Result result={calculator.inputValue} />
            </div>
            <div className="button">
            <div className="buttons">
              <NumBtn n={1} onClick={() => actions.onNumClick(1)}/>
              <NumBtn n={2} onClick={() => actions.onNumClick(2)} />
              <NumBtn n={3} onClick={() => actions.onNumClick(3)} />
            </div>
            <div className="buttons">
              <NumBtn n={4} onClick={() => actions.onNumClick(4)} />
              <NumBtn n={5} onClick={() => actions.onNumClick(5)} />
              <NumBtn n={6} onClick={() => actions.onNumClick(6)} />
            </div>
            <div className="buttons">
              <NumBtn n={7} onClick={() => actions.onNumClick(7)} />
              <NumBtn n={8} onClick={() => actions.onNumClick(8)} />
              <NumBtn n={9} onClick={() => actions.onNumClick(9)} />
            </div>
            <div className="buttons">
             <NumBtn n={0} onClick={() => actions.onNumClick(0)} />
             <PlusBtn onClick={actions.onPlusClick} />
            </div>
            </div>
            <Modal
            isOpen={calculator.popout}
            // onAfterOpen={this.afterOpenModal}
            onRequestClose={actions.onPlusClick}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <div>{calculator.inputValue}円を割り勘します</div>
              <button>きっちりワリカン</button>
              <button>どんぶり勘定</button>
              <button onClick={actions.onPlusClick}>close</button>
          </Modal>
          <Modal
            isOpen={calculator.popout_error}
            // onAfterOpen={this.afterOpenModal}
            onRequestClose={actions.onCloseError}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <div>100万以上は計算できません！</div>
              <button onClick={actions.onCloseError}>close</button>
          </Modal>
            </div>
        );
    }
}

const mapState = (state, ownProps) => ({
    calculator: state.calculator,
});

function mapDispatch(dispatch){
    return{
        actions: bindActionCreators(actions, dispatch),
    };
}

export default connect(mapState, mapDispatch)(CalculatorContainer);