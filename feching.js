fetch('https://dummyjson.com/products')
.then((res)=>res.json())
.then((data)=>{
    console.log(data.products)
    let con=document.getElementById('con');
    data.products.forEach(products => {
        let productscard=document.createElement('div')
        productscard.innerHTML=`
        <div class="pcard">
        <img src="${products.images[0]}" alt="">
        <h2>${products.title}</h2>
        <h3>${products.price}</h3>
        <button>Buy Now</button>
        </div>
        `
        con.append(productscard);
    });
    
})