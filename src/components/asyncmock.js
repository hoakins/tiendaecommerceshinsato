const products = [
    { id: 1, name: 'iphone 12', price: 1000, category: 'celular', img:'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-graphite-select?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1645552346288', stock: 20, description:'Iphone 12 descrip' },
    { id: 2, name: 'iphad', price: 10000, category: 'celular', img:'https://http2.mlstatic.com/D_NQ_NP_959904-MLA46639990306_072021-O.jpg', stock: 20, description:'Iphone tablet descrip' },
    { id: 3, name: 'samsung s21', price: 3000, category: 'celular', img:'https://samsungar.vtexassets.com/arquivos/ids/177914/Samsung-97798753-ar-galaxy-s21-fe-g990-sm-g990elgaarm-530627001Download-Source.png?v=637788851897970000', stock: 10, description:'Samsung s21' },
]

export function getProducts() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}