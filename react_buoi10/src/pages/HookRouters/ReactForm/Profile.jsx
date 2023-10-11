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


  //
  const renderOrderHistory = () => {
    return userLogin.ordersHistory?.map((order,index) => {
      
      return (
        <div className="orderDetail" key={index}>
            <h3>Order detail {order.date}</h3>
            <table className='table'>
              <thead>
                <tr>
                  <th>id</th>
                  <th>name</th>
                  <th>image</th>
                  <th>price</th>
                  <th>quantity</th>
                  <th>total</th>
                </tr>
              </thead>
              <tbody>
                {order.orderDetail?.map((item,index) => {
                  return <tr key={index} >
                    <td>{index}</td>
                    <td>{item.name}</td>
                    <td><img src={item.image} alt="..." width={50} /></td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price * item.quantity}</td>
                  </tr>
                })}
              </tbody>
            </table>
        </div>
      )
    })
  }
  return (
    <div className='container'>
      <h3>Profile</h3>
      <hr />
      <div className="d-flex">
        <div className="col-4">
          <div className="profile mt-5">
            <img src={userLogin.avatar} alt="..." className='w-100' style={{maxWidth:250}} />
            <div>Email: {userLogin.email}</div>
            <div>Name: {userLogin.name}</div>
          </div>
        </div>
        <div className="col-8">
          <h3>Thong tin don hang</h3>
          <div className="row mt-1">
            {renderOrderHistory()}
          </div>
        </div>
      </div>
    </div>
  )
}
