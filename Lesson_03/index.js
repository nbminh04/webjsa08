var products = [
    {
        name:"Chân váy cạp bổ 7 mảnh",
        price:100,
        image:"https://img.cdn.vncdn.io/cdn-pos/312d68-57499/ps/20221226_4siRx0izG8U9UbG5LiLWd6vq.jpg", 
    },
    {
        name:"Áo sơ mi cổ lọ xếp chéo",
        price:200,
        image:"https://img.cdn.vncdn.io/cdn-pos/312d68-57499/ps/20221228_7ycwn7WS6K4oHO5Tr11WO3pO.jpg", 
    },
    {
        name:"Váy XL sườn phối cổ sơ mi",
        price:200,
        image:"https://img.cdn.vncdn.io/cdn-pos/312d68-57499/ps/20221228_TqMj50UMhP2SjDbowq0ZznCX.jpg", 
    },
    {
        name:"Áo blazer dáng ôm phối ve",
        price:300,
        image:"https://img.cdn.vncdn.io/cdn-pos/312d68-57499/ps/20221224_GEoB2dEbPLNlu5Qdlt20n8vi.jpg", 
    },
    {
        name:"Váy A tay bồng bổ TT",
        price:400,
        image:"https://img.cdn.vncdn.io/cdn-pos/312d68-57499/ps/20221228_wglDiPh87no5rmgL6Bdwwlcy.jpg", 
    }
]

for(var sanpham of products ){
    const productList = document.querySelector(".productList")

    let product = document.createElement("div")
    product.classList.add("product")

    let image = document.createElement("img")
    image.classList.add("image")
    image.setAttribute("src", sanpham.image)

    let name = document.createElement("h6")
    name.classList.add("name")
    name.textContent = sanpham.name

    let price = document.createElement("p")
    price.classList.add("price")
    price.textContent = sanpham.price

    let btn_buy = document.createElement("button")
    btn_buy.classList.add("btn_buy")
    btn_buy.textContent = "Buy"

    productList.appendChild(product)
    product.appendChild(image)
    product.appendChild(name)
    product.appendChild(price)
    product.appendChild(btn_buy)
}

function addElement(name0, price0, image0){
    const productList = document.querySelector(".productList")

    let product = document.createElement("div")
    product.classList.add("product")

    let image = document.createElement("img")
    image.classList.add("image")
    image.setAttribute("src", image0)

    let name = document.createElement("h6")
    name.classList.add("name")
    name.textContent = name0

    let price = document.createElement("p")
    price.classList.add("price")
    price.textContent = price0

    let btn_buy = document.createElement("button")
    btn_buy.classList.add("btn_buy")
    btn_buy.textContent = "Buy"

    productList.appendChild(product)
    product.appendChild(image)
    product.appendChild(name)
    product.appendChild(price)
    product.appendChild(btn_buy)
}

function addSP(){
    let newspName = prompt("name")
    let newspPrice = prompt("Price")
    let newspImage = prompt("Image")

    let newSP = {
        name: newspName,
        price:newspPrice,
        image:newspImage
    }

    products.push(newSP)

    console.log(products);

    addElement(newspName, newspPrice, newspImage)

}