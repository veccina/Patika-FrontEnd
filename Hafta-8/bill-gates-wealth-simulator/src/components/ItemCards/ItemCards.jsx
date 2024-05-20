import React, { useState, useContext, useEffect } from "react";
import { Context, initMoney, showReceipt } from "../context/ContextApi";
import './item-cards.css'

function Card({ item, index }) {
    const { money, setMoney } = useContext(Context);
    const { items, setItems } = useContext(Context);
    const [count, setCount] = useState(0);
    const [quantity, setQuantity] = useState(0);

    const itemPrice = +item.item_cost;

    const handleQuantityChange = (e) => {
        const value = e.target.value;
        if (value === "") {
            setQuantity(0);
        } else if (parseInt(value, 10) >= 0) {
            setQuantity(parseInt(value, 10));
        }
    };

    const removeItem = (num) => {
        const totalCost = num * itemPrice;
        if (money + totalCost <= initMoney) {
            setCount(count - num);
            setMoney(money + totalCost);
            setItems(prevItems => {
                const existingItemIndex = prevItems.findIndex(i => i.id === item.id);
                if (existingItemIndex !== -1) {
                    const newItems = [...prevItems];
                    newItems[existingItemIndex] = { ...newItems[existingItemIndex], quantity: newItems[existingItemIndex].quantity - num };
                    return newItems;
                } else {
                    return [...prevItems, { ...item, quantity: 0 }];
                }
            });
        }
    };

    const buyItem = (num) => {
        const totalCost = num * itemPrice;
        if (money >= totalCost) {
            setCount(count + num);
            setMoney(money - totalCost);
            setItems(prevItems => {
                const existingItemIndex = prevItems.findIndex(i => i.id === item.id);
                if (existingItemIndex !== -1) {
                    const newItems = [...prevItems];
                    newItems[existingItemIndex] = { ...newItems[existingItemIndex], quantity: newItems[existingItemIndex].quantity + num };
                    return newItems;
                } else {
                    return [...prevItems, { ...item, quantity: num }];
                }
            });
        }
    };

    const handleClick = (e) => {
        const actionQuantity = quantity > 0 ? quantity : 1;
        if (e.target.classList.contains("btn-sell")) {
            if (count >= actionQuantity) {
                removeItem(actionQuantity);
            }
        } else {
            buyItem(actionQuantity);
        }
    };

    useEffect(() => {
        showReceipt(money);
    }, [money]);

    return (
        <div className="card-container">
            <div className="card">
                <div className="item-img-wrapper"><img src={item.img_src} alt="" />
                </div>
                <div className="item-name">{item.item_name}</div>
                <div className="item-price">{item.item_cost.toLocaleString()}$</div>
                <div className="item-buttons">
                    <button 
                        className={`btn-sell ${count > 0 ? 'active' : ''}`} 
                        type="button" 
                        onClick={handleClick}
                    >
                        Sell
                    </button>
                    <input className="item-counter" type="number" value={quantity} onChange={handleQuantityChange} />
                    <button className="btn-buy" type="button" onClick={handleClick}>Buy</button>
                </div>
            </div>
        </div>
    )
}

export default Card;
