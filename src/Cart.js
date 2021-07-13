import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component{
    constructor(){
        super();
        this.state = {
            products : [
                {
                    price : 9999,
                    title : 'Mobile Phone',
                    qty : 7,
                    img : '',
                    id : 1
                },
                {
                    price : 999,
                    title : 'watch',
                    qty : 5,
                    img : '',
                    id : 2
                },
                {
                    price : 99999,
                    title : 'Laptop',
                    qty : 9,
                    img : '',
                    id : 2
                }
            ]
        }
    }
    handleIncreaseQuantity = (product) => {
        console.log("increase the quantity of product", product);
        const {products} = this.state;
        const index = products.indexOf(product);
        products[index].qty +=1;

        this.setState({
            products : products
        })
    }

    handleDecreaseQuantity = (product) => {
        const {products} = this.state;
        const index = products.indexOf(product);
        if(products[index].qty === 0){
            return;
        }
        products[index].qty -= 1;

        this.setState({
            products : products
        })
    }

    handleDeleteProduct = (id)=> {
        const {products} = this.state ;
        const items = products.filter((item) => item.id !== id);
        this.setState({
            products : items
        })
    }
    render(){
        
        const {products} = this.state;
        return(
            <div className = 'cart'>
                
            {products.map((product) => {
                return <CartItem 
                product = {product} 
                key = {product.id}
                onIncreaseQuantity = {this.handleIncreaseQuantity}
                onDecreaseQuantity = {this.handleDecreaseQuantity}
                onDeleteProduct = {this.handleDeleteProduct}
                />
            }
            )}
            </div>
        )
        
    }
}

export default Cart;