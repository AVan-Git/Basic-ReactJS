# REACT BUOI 10 học Hook

## Note
    - Cài thư viện: 
    - tao component 
    - su dung router
    - BT use State
    -- hoc UseEffectDemo
    - memo(react) giúp găn render khi khong su dung
    - fix lỗi khi memo trong khi chuyền function qua các các component thì các fun dó sẽ dược làm mới dấn đến sẽ render các component không dùng -> fix bằng hàm useCallback(fun, [bien_thay_doi])
    - link Api Shoes Shop : https://shop.cyberlearn.vn/api/Product
    - custom hook: 
        - npm  i react-use
        - link git: https://github.com/streamich/react-use
        - demo useCookie - luu data xuong ổ đĩa ??
        - https://stackoverflow.com/questions/14573223/set-cookie-and-get-cookie-with-javascript
    - npm i react-spring  
        - lib animation
        https://www.react-spring.dev/docs/components/use-spring
    - middleware redux toolkit
    - npm i history  -- quanr ly router (add lib History  của router giup chuyển trang khi k đứng ở component)
    
## Anh minh hoa
![...](./images/img_code.png)
![...](./images/img_minhHoaBuoi10.png)

### Anh UseEffectDemo
![...](./images/img_useEffect.png)

### Anh UseEffectDemo
    - useMemo: useConnect-tối ưu về biến trong khi componentA co 1 biến gửi đi sang B (dgl bien_x)thi mỗi lần render thi sẽ lại tạo ra một bien_x và render lại componentB  sử dụng usememo sẽ làm cản chở việc đó. || hoặc có thể khai báo ở ngoài

![...](./images/img_useMemo.png)


### Anh UseRefDemo
    - UseRef: giống useState nhưng nó sẽ lưu lại sau mỗi lần render - phuf hợp vs conponent Login
    - UseRef: dùng để lưu giá trị sau mỗi lần render
    - useRef: thường sử dụng cho các form  không co validation, hoặc load dữ liệu chỉnh sửa
    - useRef: giảm sự render lại khi mỗi lần phải setState()
![...](./images/img_useRef.png)


### redux

#### redux new 
    - sử dụng useSelector(state => state.number)
    - useDispatch() de gui action

    -npm i @reduxjs/toolkit

![...](./images//img_redux.png)

#### BT comment - redux
![...](./images/img_redux_bt_comment.png)


### Hook router

#### navigate -useParams() - useSearchParams()
![...](./images/img_router.png)
![...](./images/img_useSearchParams.png)

### middleware redux toolkit
#### viblo.asia
![ReduxAsyncDataFlowDiagram ](https://redux.js.org/assets/images/ReduxAsyncDataFlowDiagram-d97ff38a0f4da0f327163170ccc13e80.gif)
