const data = [
    {
        id: 2,
        name: "Adidas Prophere",
        alias: "adidas-prophere",
        price: 350,
        description: "Trà đổ vào sữa hay sữa đổ vào trà cũng không quan trọng. Quan trọng là các chị em đã đổ gục hoàn toàn trước shop shoes đỏ cam cực kỳ quyến rũ",
        shortDescription: " Tất cả sản phẩm đều được kiểm tra trước thanh toán và áp dụng đổi trả trong vòng 7 ngày với giày chưa qua sử dụng không kể lí do [ Đảm bảo 100% sản phẩm gửi đến khách yêu đều là những sản phẩm chất lượng ]",
        quantity: 995,
        image: "https://bizweb.dktcdn.net/thumb/large/100/336/177/products/33-30ac9a68-7f61-4cf5-8ea2-cdaea324c631.jpg"
    },
    {
        id: 3,
        name: "AIR MAX 97 ",
        alias: "adidas-prophere",
        price: 604,
        description: "Trà đổ vào sữa hay sữa đổ vào trà cũng không quan trọng. Quan trọng là các chị em đã đổ gục hoàn toàn trước shop shoes đỏ cam cực kỳ quyến rũ",
        shortDescription: " Tất cả sản phẩm đều được kiểm tra trước thanh toán và áp dụng đổi trả trong vòng 7 ngày với giày chưa qua sử dụng không kể lí do [ Đảm bảo 100% sản phẩm gửi đến khách yêu đều là những sản phẩm chất lượng ]",
        quantity: 995,
        image: "https://bizweb.dktcdn.net/thumb/large/100/336/177/products/20-1c8819cd-5979-42b4-b0c2-670a0c494e2b.jpg"
    },
    {
        id: 4,
        name: "MARVEL X AIR JORDAN 1 ",
        alias: "Nike",
        price: 785,
        description: "Trà đổ vào sữa hay sữa đổ vào trà cũng không quan trọng. Quan trọng là các chị em đã đổ gục hoàn toàn trước shop shoes đỏ cam cực kỳ quyến rũ",
        shortDescription: " Tất cả sản phẩm đều được kiểm tra trước thanh toán và áp dụng đổi trả trong vòng 7 ngày với giày chưa qua sử dụng không kể lí do [ Đảm bảo 100% sản phẩm gửi đến khách yêu đều là những sản phẩm chất lượng ]",
        quantity: 995,
        image: "https://bizweb.dktcdn.net/thumb/large/100/336/177/products/3-f2c83fec-88af-498c-b9c3-ab24ecf15bcc.jpg"
    },
    {
        id: 5,
        name: "YEEZY SLIDES 'FLAX'",
        alias: "adidas-prophere",
        price: 720,
        description: "Trà đổ vào sữa hay sữa đổ vào trà cũng không quan trọng. Quan trọng là các chị em đã đổ gục hoàn toàn trước shop shoes đỏ cam cực kỳ quyến rũ",
        shortDescription: " Tất cả sản phẩm đều được kiểm tra trước thanh toán và áp dụng đổi trả trong vòng 7 ngày với giày chưa qua sử dụng không kể lí do [ Đảm bảo 100% sản phẩm gửi đến khách yêu đều là những sản phẩm chất lượng ]",
        quantity: 995,
        image: "https://bizweb.dktcdn.net/thumb/large/100/336/177/products/9-7e07bb82-ac1c-41c0-945f-b43c1db8e16b.jpg"
    },
    {
        id: 6,
        name: "Vans Vault Style 36 Orange",
        alias: "Vans",
        price: 650,
        description: "Trà đổ vào sữa hay sữa đổ vào trà cũng không quan trọng. Quan trọng là các chị em đã đổ gục hoàn toàn trước shop shoes đỏ cam cực kỳ quyến rũ",
        shortDescription: " Tất cả sản phẩm đều được kiểm tra trước thanh toán và áp dụng đổi trả trong vòng 7 ngày với giày chưa qua sử dụng không kể lí do [ Đảm bảo 100% sản phẩm gửi đến khách yêu đều là những sản phẩm chất lượng ]",
        quantity: 995,
        image: "https://bizweb.dktcdn.net/thumb/large/100/336/177/products/73-23e236a6-b505-4f55-99c5-475bd877b93e.jpg"
    },
    {
        id: 7,
        name: "Vans Vault Style 36 - Green",
        alias: "Vans",
        price: 350,
        description: "Trà đổ vào sữa hay sữa đổ vào trà cũng không quan trọng. Quan trọng là các chị em đã đổ gục hoàn toàn trước shop shoes đỏ cam cực kỳ quyến rũ",
        shortDescription: " Tất cả sản phẩm đều được kiểm tra trước thanh toán và áp dụng đổi trả trong vòng 7 ngày với giày chưa qua sử dụng không kể lí do [ Đảm bảo 100% sản phẩm gửi đến khách yêu đều là những sản phẩm chất lượng ]",
        quantity: 995,
        image: "https://bizweb.dktcdn.net/thumb/large/100/336/177/products/dscf9353.jpg"
    },
    {
        id: 8,
        name: "1970s White High",
        alias: "converse",
        price: 500,
        description: "Trà đổ vào sữa hay sữa đổ vào trà cũng không quan trọng. Quan trọng là các chị em đã đổ gục hoàn toàn trước shop shoes đỏ cam cực kỳ quyến rũ",
        shortDescription: " Tất cả sản phẩm đều được kiểm tra trước thanh toán và áp dụng đổi trả trong vòng 7 ngày với giày chưa qua sử dụng không kể lí do [ Đảm bảo 100% sản phẩm gửi đến khách yêu đều là những sản phẩm chất lượng ]",
        quantity: 995,
        image: "https://bizweb.dktcdn.net/thumb/large/100/336/177/products/dscf4079.jpg"
    },
    {
        id: 9,
        name: "Adidas Prophere",
        alias: "adidas-prophere",
        price: 350,
        description: "Trà đổ vào sữa hay sữa đổ vào trà cũng không quan trọng. Quan trọng là các chị em đã đổ gục hoàn toàn trước shop shoes đỏ cam cực kỳ quyến rũ",
        shortDescription: " Tất cả sản phẩm đều được kiểm tra trước thanh toán và áp dụng đổi trả trong vòng 7 ngày với giày chưa qua sử dụng không kể lí do [ Đảm bảo 100% sản phẩm gửi đến khách yêu đều là những sản phẩm chất lượng ]",
        quantity: 995,
        image: "https://bizweb.dktcdn.net/thumb/large/100/336/177/products/72-0b9f5d1f-d89a-494d-bfa9-e0f0fb274c82.jpg"
    },
    {
        id: 10,
        name: "Adidas Prophere",
        alias: "adidas-prophere",
        price: 350,
        description: "Trà đổ vào sữa hay sữa đổ vào trà cũng không quan trọng. Quan trọng là các chị em đã đổ gục hoàn toàn trước shop shoes đỏ cam cực kỳ quyến rũ",
        shortDescription: " Tất cả sản phẩm đều được kiểm tra trước thanh toán và áp dụng đổi trả trong vòng 7 ngày với giày chưa qua sử dụng không kể lí do [ Đảm bảo 100% sản phẩm gửi đến khách yêu đều là những sản phẩm chất lượng ]",
        quantity: 995,
        image: "https://bizweb.dktcdn.net/thumb/large/100/336/177/products/72-0b9f5d1f-d89a-494d-bfa9-e0f0fb274c82.jpg"
    },
    {
        id:11,
        name: "Adidas Prophere",
        alias: "adidas-prophere",
        price: 350,
        description: "Trà đổ vào sữa hay sữa đổ vào trà cũng không quan trọng. Quan trọng là các chị em đã đổ gục hoàn toàn trước shop shoes đỏ cam cực kỳ quyến rũ",
        shortDescription: " Tất cả sản phẩm đều được kiểm tra trước thanh toán và áp dụng đổi trả trong vòng 7 ngày với giày chưa qua sử dụng không kể lí do [ Đảm bảo 100% sản phẩm gửi đến khách yêu đều là những sản phẩm chất lượng ]",
        quantity: 995,
        image: "https://bizweb.dktcdn.net/thumb/large/100/336/177/products/72-0b9f5d1f-d89a-494d-bfa9-e0f0fb274c82.jpg"
    },
    {
        id: 12,
        name: "Adidas Prophere",
        alias: "adidas-prophere",
        price: 350,
        description: "Trà đổ vào sữa hay sữa đổ vào trà cũng không quan trọng. Quan trọng là các chị em đã đổ gục hoàn toàn trước shop shoes đỏ cam cực kỳ quyến rũ",
        shortDescription: " Tất cả sản phẩm đều được kiểm tra trước thanh toán và áp dụng đổi trả trong vòng 7 ngày với giày chưa qua sử dụng không kể lí do [ Đảm bảo 100% sản phẩm gửi đến khách yêu đều là những sản phẩm chất lượng ]",
        quantity: 995,
        image: "https://bizweb.dktcdn.net/thumb/large/100/336/177/products/72-0b9f5d1f-d89a-494d-bfa9-e0f0fb274c82.jpg"
    },
    {
        id: 13,
        name: "Adidas Prophere",
        alias: "adidas-prophere",
        price: 350,
        description: "Trà đổ vào sữa hay sữa đổ vào trà cũng không quan trọng. Quan trọng là các chị em đã đổ gục hoàn toàn trước shop shoes đỏ cam cực kỳ quyến rũ",
        shortDescription: " Tất cả sản phẩm đều được kiểm tra trước thanh toán và áp dụng đổi trả trong vòng 7 ngày với giày chưa qua sử dụng không kể lí do [ Đảm bảo 100% sản phẩm gửi đến khách yêu đều là những sản phẩm chất lượng ]",
        quantity: 995,
        image: "https://bizweb.dktcdn.net/thumb/large/100/336/177/products/72-0b9f5d1f-d89a-494d-bfa9-e0f0fb274c82.jpg"
    },
    {
        id: 14,
        name: "Adidas Prophere",
        alias: "adidas-prophere",
        price: 350,
        description: "Trà đổ vào sữa hay sữa đổ vào trà cũng không quan trọng. Quan trọng là các chị em đã đổ gục hoàn toàn trước shop shoes đỏ cam cực kỳ quyến rũ",
        shortDescription: " Tất cả sản phẩm đều được kiểm tra trước thanh toán và áp dụng đổi trả trong vòng 7 ngày với giày chưa qua sử dụng không kể lí do [ Đảm bảo 100% sản phẩm gửi đến khách yêu đều là những sản phẩm chất lượng ]",
        quantity: 995,
        image: "https://bizweb.dktcdn.net/thumb/large/100/336/177/products/72-0b9f5d1f-d89a-494d-bfa9-e0f0fb274c82.jpg"
    },
]

export default data