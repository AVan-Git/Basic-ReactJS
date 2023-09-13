#  demo buoi 5 react router dom
    - the lien kết các trang lại vs nhau nav-link  & react router dom
    - nav-link giup router nhanh hon (load trang nhanh hon)

### ảnh minh họa:
![...](./images/img_router.png)

#### ảnh react Form 
![...](./images/img_ReactForm.png)

#### ảnh react Form su dung onInput
![...](./images/img_ReactForm2.png)

#### ảnh 404
![...](./images/img_page404.png)


### luồng update 
    btnEdit
    -> editProduct() 
    -> setState(productedit)- luu data cần update -> gửi sang component Form 
    -> su dung getDerivedStateFromProps() de chuyền data update vao productInfo (giúp chuyển data vao input) 
    -> btnUpdate gửi {...this.state.productInfo} về ReactForm theo updateProduct()
    -> updateProduct: sd filter đe tim product can update trong arr roi thay doi data
    -> setState()