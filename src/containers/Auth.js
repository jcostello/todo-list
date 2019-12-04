import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import * as todoActions from './../store/actions/TodoActions';

const Auth = ({onSignUp}) => {
  return (
    <div className='todoapp'>
      <input type='text' className='add-todo' id='email' placeholder='Email'/>
      <input type='password' className='add-todo'
        id='password' placeholder='password'/>
      <button
        id='submit'
        className='auth-button'
        onClick={onSignUp}>Sign Up</button>
      <button
        id='submit'
        className='auth-button'>Sign In</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSignUp: () => dispatch(todoActions.signUpUser(ownProps.history)),
});

export default connect(null, mapDispatchToProps)(withRouter(Auth));
