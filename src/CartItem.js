import React from 'react';

class CartItem extends React.Component {
    

    increaseQuantity = () => {
        this.setState((prevState) => {
            return {
                qty : this.state.qty +1
            }
        });
    }

    decreaseQuantity = () =>{
        
        this.setState((prevState) =>{
            const {qty} = this.state;
            if(qty === 0){
                return;
            }
            return {
            qty: this.state.qty -1
            }
        });
    }
    render(){
        console.log("this.props",this.props)
        const {price,title,qty}  = this.props.product ;
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
                            onClick = {()=> this.props.onIncreaseQuantity(this.props.product)}>

                        </img>
                        <img 
                            alt = "decrease" 
                            className = "action-icons" 
                            src = "https://image.flaticon.com/icons/png/128/992/992683.png"
                            onClick = {() => this.props.onDecreaseQuantity(this.props.product)}>

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