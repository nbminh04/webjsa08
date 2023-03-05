// 1 tạo danh sách sản phẩm với thông tin ở mảng products[] bến dưới có thêm button thêm vào giỏ hàng
// id không cần hiển thị

let products = [
    {
        id: 0,
        name: 'iphone 5',
        image: 'https://static.wixstatic.com/media/82fcd3_df4a7be03f224cc282d38c8aff689318~mv2_d_1440_1920_s_2.png/v1/fill/w_625,h_834,al_c,q_90,usm_0.66_1.00_0.01/82fcd3_df4a7be03f224cc282d38c8aff689318~mv2_d_1440_1920_s_2.webp',
        price: 500,
        still: true
    },
    {
        id: 1,
        name: 'iphone 6',
        image:'https://static.wixstatic.com/media/82fcd3_b688bad97950459c93ff6f451ebdd796~mv2_d_1440_1920_s_2.png/v1/fill/w_625,h_834,al_c,q_90,usm_0.66_1.00_0.01/82fcd3_b688bad97950459c93ff6f451ebdd796~mv2_d_1440_1920_s_2.webp',
        price: 600,
        still: false
    },
    {
        id: 2,
        name: 'iphone 7',
        image:'https://static.wixstatic.com/media/82fcd3_04b4f53e677a4e68b9f99c10575b396b~mv2_d_1440_1920_s_2.png/v1/fill/w_625,h_834,al_c,q_90,usm_0.66_1.00_0.01/82fcd3_04b4f53e677a4e68b9f99c10575b396b~mv2_d_1440_1920_s_2.webp',
        price: 700,
        still: true
    },
    {
        id: 3,
        name: 'iphone 8',
        image:'https://static.wixstatic.com/media/82fcd3_7474ffa9668e47a495b6288c557baa07~mv2_d_1440_1920_s_2.png/v1/fill/w_625,h_834,al_c,q_90,usm_0.66_1.00_0.01/82fcd3_7474ffa9668e47a495b6288c557baa07~mv2_d_1440_1920_s_2.webp',
        price: 800,
        still: true
    },
    {
        id: 4,
        name: 'iphone x',
        image:'https://static.wixstatic.com/media/82fcd3_b688bad97950459c93ff6f451ebdd796~mv2_d_1440_1920_s_2.png/v1/fill/w_625,h_834,al_c,q_90,usm_0.66_1.00_0.01/82fcd3_b688bad97950459c93ff6f451ebdd796~mv2_d_1440_1920_s_2.webp',
        price: 900,
        still: false
    },
    {
        id: 5,
        name: 'iphone xs',
        image:'https://static.wixstatic.com/media/82fcd3_2ce74c274e764f19bfabeb091b3fa956~mv2_d_1440_1920_s_2.png/v1/fill/w_625,h_834,al_c,q_90,usm_0.66_1.00_0.01/82fcd3_2ce74c274e764f19bfabeb091b3fa956~mv2_d_1440_1920_s_2.webp',
        price: 1000,
        still: true
    },
    {
        id: 6,
        name: 'iphone 11',
        image:'https://static.wixstatic.com/media/82fcd3_7474ffa9668e47a495b6288c557baa07~mv2_d_1440_1920_s_2.png/v1/fill/w_625,h_834,al_c,q_90,usm_0.66_1.00_0.01/82fcd3_7474ffa9668e47a495b6288c557baa07~mv2_d_1440_1920_s_2.webp',
        price: 1100,
        still: false
    },
    {
        id: 7,
        name: 'iphone 12',
        image:'https://static.wixstatic.com/media/82fcd3_04b4f53e677a4e68b9f99c10575b396b~mv2_d_1440_1920_s_2.png/v1/fill/w_625,h_834,al_c,q_90,usm_0.66_1.00_0.01/82fcd3_04b4f53e677a4e68b9f99c10575b396b~mv2_d_1440_1920_s_2.webp',
        price: 1200,
        still: true
    },
    {
        id: 8,
        name: 'iphone 13',
        image:'https://static.wixstatic.com/media/82fcd3_2ce74c274e764f19bfabeb091b3fa956~mv2_d_1440_1920_s_2.png/v1/fill/w_625,h_834,al_c,q_90,usm_0.66_1.00_0.01/82fcd3_2ce74c274e764f19bfabeb091b3fa956~mv2_d_1440_1920_s_2.webp',
        price: 1300,
        still: true
    },
    {
        id: 9,
        name: 'iphone 14',
        image:'https://static.wixstatic.com/media/82fcd3_2ce74c274e764f19bfabeb091b3fa956~mv2_d_1440_1920_s_2.png/v1/fill/w_625,h_834,al_c,q_90,usm_0.66_1.00_0.01/82fcd3_2ce74c274e764f19bfabeb091b3fa956~mv2_d_1440_1920_s_2.webp',
        price: 1400,
        still: true
    }
]

for(var i in products){
    createItem(products, i)
}

function createItem(list,i){
    let listProduct = document.querySelector('.list')

    let item = document.createElement('div')
    item.classList.add('item')

    let image = document.createElement('img')
    image.classList.add('image')
    image.setAttribute('src',list[i].image)

    let inforItem = document.createElement('div')
    inforItem.classList.add('inforItem')

    let name = document.createElement('h4')
    name.classList.add('name')
    name.textContent = list[i].name;

    let price = document.createElement('p')
    price.classList.add('price')
    price.textContent = list[i].price

    let addToCart = document.createElement('button')
    addToCart.classList.add('addToCart')
    addToCart.textContent = "Add to Cart"

    listProduct.appendChild(item)
    item.appendChild(image)
    item.appendChild(inforItem)
    inforItem.appendChild(name)
    inforItem.appendChild(price)
    inforItem.appendChild(addToCart)

    addToCart.addEventListener('click',function(){
        // let cart = document.querySelector('.cart')

        // let newItem = item.cloneNode(true)

        // cart.appendChild(newItem)

        let users = JSON.parse(localStorage.getItem('users'))
        let newUser = users.map((user,index)=>{
            return {
                id:user.id,
                username:user.username,
                password:user.password,
                cart:[products[i]]
            }
            

            
        })


        console.log(newUser);

    })
}
