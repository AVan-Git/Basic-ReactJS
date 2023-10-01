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

![...](./images//img_redux.png)