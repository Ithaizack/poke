
function CarregarPage(){
    console.log('opa')
    const Loading = document.getElementsByClassName('Carregando')[0]
    Loading.style.display = 'none'
}

const arratproducts = [
    {"Id":1,"Codigo":"PO0001","Nome":"Biscoito bauducco","Preço":5.6,"Categoria":"Biscoito","icons":"🍪","img":"https://firebasestorage.googleapis.com/v0/b/products-atividade.appspot.com/o/bauducco.png?alt=media"}
    ,{"Id":2,"Codigo":"PO0002","Nome":"Coca-cola","Preço":17.4,"Categoria":"Bebida","icons":"🥛","img":"https://firebasestorage.googleapis.com/v0/b/products-atividade.appspot.com/o/Cocacola.png?alt=media"},{"Id":3,"Codigo":"PO0003","Nome":"Sorvete Napolitano","Preço":27.8,"Categoria":"Sobremesa","icons":"🍨","img":"https://firebasestorage.googleapis.com/v0/b/products-atividade.appspot.com/o/Napolitano.png?alt=media"},{"Id":4,"Codigo":"PO0004","Nome":"Enérgetico","Preço":3.1,"Categoria":"Bebida","icons":"🥤","img":"https://firebasestorage.googleapis.com/v0/b/products-atividade.appspot.com/o/Energetico.png?alt=media"},{"Id":5,"Codigo":"PO0005","Nome":"Água Crystal","Preço":5.6,"Categoria":"Bebida","icons":"🥛","img":"https://firebasestorage.googleapis.com/v0/b/products-atividade.appspot.com/o/AguaCrystal.png?alt=media"},{"Id":6,"Codigo":"PO0006","Nome":"Suco Native","Preço":17.4,"Categoria":"Bebida","icons":"🧃","img":"https://firebasestorage.googleapis.com/v0/b/products-atividade.appspot.com/o/SucoNative.png?alt=media"},{"Id":7,"Codigo":"PO0007","Nome":"Cerveja Haller","Preço":27.8,"Categoria":"Bebida","icons":"🥤","img":"https://firebasestorage.googleapis.com/v0/b/products-atividade.appspot.com/o/Cerveja.png?alt=media"},{"Id":8,"Codigo":"PO0008","Nome":"Vinho","Preço":3.1,"Categoria":"Bebida","icons":"🥤","img":"https://firebasestorage.googleapis.com/v0/b/products-atividade.appspot.com/o/Vinho.png?alt=media"},{"Id":9,"Codigo":"PO0009","Nome":"Biscoito Creme Craker","Preço":15.6,"Categoria":"Biscoito","icons":"🍪","img":"https://firebasestorage.googleapis.com/v0/b/products-atividade.appspot.com/o/BiscoitoCremeCraker.png?alt=media"},{"Id":10,"Codigo":"PO0010","Nome":"Nescau Cereal","Preço":7.6,"Categoria":"Lanche","icons":"🥣","img":"https://firebasestorage.googleapis.com/v0/b/products-atividade.appspot.com/o/nescau_duo.png?alt=media"},{"Id":11,"Codigo":"PO0011","Nome":"Toddy","Preço":7.6,"Categoria":"Lanche","icons":"🍪","img":"https://firebasestorage.googleapis.com/v0/b/products-atividade.appspot.com/o/Toddy.png?alt=media"},{"Id":12,"Codigo":"PO0012","Nome":"Carne Avestruz","Preço":7.6,"Categoria":"Carne","icons":"🍖","img":"https://firebasestorage.googleapis.com/v0/b/products-atividade.appspot.com/o/CarneAvestruz.png?alt=media"},{"Id":13,"Codigo":"PO0013","Nome":"Aveia Floco Fino","Preço":7.6,"Categoria":"sobremesa","icons":"🥣","img":"https://firebasestorage.googleapis.com/v0/b/products-atividade.appspot.com/o/FLOCOS-FINOS_FLAT.png?alt=media"}]

const ContainerProducts = document.getElementById('container')
const Form = document.getElementById('Form').addEventListener('submit',(eve)=>Search(eve))
const seach = document.getElementById('serach')
seach.addEventListener('keydown',e=>{
    Search()
})


arratproducts.map(Produto=>{


    const ContainerCard = document.createElement('div')
    ContainerCard.className = 'card'
    const ContainerImageDiv = document.createElement('div')
    ContainerImageDiv.className = 'divimage'
    const ContainerImage = document.createElement('img')
    ContainerImage.src = `${Produto.img}`
    const ContainerH3 = document.createElement('h3')
    ContainerH3.innerText = Produto.Nome
    const ContainerP = document.createElement('p')
    ContainerP.innerText = `${Produto.icons} ${Produto.Categoria}`
    const ContainerH4 = document.createElement('h4')
    ContainerH4.innerText = `R$ ${Produto.Preço}0`
    ContainerH4.innerText = ContainerH4.innerText.replace('.',',')

    const ContainerButtonSold = document.createElement('button')
    ContainerButtonSold.onclick = 'ColocarCarrinho'
    ContainerButtonSold.className = 'Sold'
    ContainerButtonSold.innerText = 'Carrinho'

    ContainerImageDiv.appendChild(ContainerImage)
    ContainerCard.appendChild(ContainerImageDiv)
    ContainerCard.appendChild(ContainerH3)
    ContainerCard.appendChild(ContainerP)
    ContainerCard.appendChild(ContainerH4)
    ContainerCard.appendChild(ContainerButtonSold)

    ContainerProducts.appendChild(ContainerCard)
})

function Search(event){

    console.log(seach.value)
    ContainerProducts.innerHTML = ''
    const VetorProd = arratproducts.filter(produto=>{
        return produto.Nome.includes(`${seach.value}`)
    })
    VetorProd.map(produd=>{
        const ContainerCard = document.createElement('div')
        ContainerCard.className = 'card'
        const ContainerImageDiv = document.createElement('div')
        ContainerImageDiv.className = 'divimage'
        const ContainerImage = document.createElement('img')
        ContainerImage.src = `${produd.img}`
        const ContainerH3 = document.createElement('h3')
        ContainerH3.innerText = produd.Nome
        const ContainerP = document.createElement('p')
        ContainerP.innerText = `${produd.icons} ${produd.Categoria}`
        const ContainerH4 = document.createElement('h4')
        ContainerH4.innerText = `R$ ${produd.Preço}0`
        ContainerH4.innerText = ContainerH4.innerText.replace('.',',')

        const ContainerButtonSold = document.createElement('button')
        ContainerButtonSold.onclick = 'ColocarCarrinho'
        ContainerButtonSold.className = 'Sold'
        ContainerButtonSold.innerText = 'Carrinho'

        ContainerImageDiv.appendChild(ContainerImage)
        ContainerCard.appendChild(ContainerImageDiv)
        ContainerCard.appendChild(ContainerH3)
        ContainerCard.appendChild(ContainerP)
        ContainerCard.appendChild(ContainerH4)
        ContainerCard.appendChild(ContainerButtonSold)

        console.log(ContainerCard)
        ContainerProducts.appendChild(ContainerCard)
    })
}
function consa(e){
    console.log(e)
}