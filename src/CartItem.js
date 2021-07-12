import React from 'react';

class CartItem extends React.Component {
    constructor(){
        super();
        this.state = {
            price : 9999,
            title : 'Mobile Phone',
            qty : 1,
            img : ''
        }
    }

    increaseQuantity = () => {
        console.log('this.state',this.state)
    }
    render(){
        const {price,title,qty}  = this.state ;
        return (
            <div className = "cart-item">
                <div className = "left-block">
                    <img style = {styles.image} />
                </div>

                <div className = "right-block">
                    <div style={{fontSize: 25}}>{title}</div>
                    <div style={{color:'#777'}}>Rs. {price}</div>
                    <div style={{color:'#777'}}>Oty: {qty}</div>
                    <div className = "cart-item-actions">
                        {/*Buttons*/}
                        <img 
                            alt = "increase" 
                            className = "action-icons" 
                            src = "https://image.flaticon.com/icons/png/128/1828/1828926.png"
                            onClick = {this.increaseQuantity}>

                        </img>
                        <img 
                            alt = "decrease" 
                            className = "action-icons" 
                            src = "https://image.flaticon.com/icons/png/128/992/992683.png">

                        </img>
                        <img 
                            alt = "delete" 
                            className = "action-icons" 
                            src = "https://image.flaticon.com/icons/png/128/1214/1214428.png"
                            
                            >
                            
                        </img>
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    image : {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;