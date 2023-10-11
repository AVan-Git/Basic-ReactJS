import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfileApi } from '../../../redux/reducers/userReducer';

export default function Profile() {

  const {userLogin} = useSelector(state => state.userReducer);

  const dispatch = useDispatch();

  useEffect(()=> {
    const action = getProfileApi()
    dispatch(action);
  }, [])
  return (
    <div className='container'>
      <h3>Profile</h3>
    </div>
  )
}
