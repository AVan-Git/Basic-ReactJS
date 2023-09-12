# Demo buoi 6 Life Cycle -- axios
    lifecycle: 
        + Mouting: Các hàn sẽ tự kích hoạt khi sử dụng một component. dùng để can thiệp vào quá trình trước khi render hoặc sau khi render ( componentDidMount() ) nhằm mục đích xử lý  state và props
        + can thiệp thay đổi state trước khi render() -- sử dụng static getDerivedStateFromProps(newProps, currentState) {}
        + Can thiếp thay đổi state sau khi render() --- sử dụng ComponentDidMount() {}
        + ComponentDidMount() chỉ chạy một lần duy nhất khi component losd lần đầu tiên - thường dùng để  call api
        + getDerivedStateFromProps() chạy sau mỗi lần reload()
        + shouldComponentUpdate(newProps, currentState) {} -- tra về True || false -- chạy sau getDerivedStateFromProps() và trước render()

## Anh my home
![...](./images/img_home.png)

## ảnh lifecycle
![...](./images/img_lifecycle.png)