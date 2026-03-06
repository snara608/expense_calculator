import React from "react";
import { PiPizza, PiGift, PiAirplaneTilt } from "react-icons/pi";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { MdOutlineModeEdit } from "react-icons/md";
import Button from "./button";

const TransactionCard = ({ details, handleDelete, handleEdit }) => {
    const getIcon = (category) => {
        switch (category) {
            case "food": return <PiPizza />;
            case "entertainment": return <PiGift />;
            case "travel": return <PiAirplaneTilt />;
            default: return <PiPizza />;
        }
    };

    return (
        <div className="transaction-card">
            <div className="card-left">
                <div className="icon-box">{getIcon(details.category)}</div>
                <div className="info">
                    <h5>{details.title}</h5>
                    <p>{details.date}</p>
                </div>
            </div>
            <div className="card-right">
                <span className="price-tag">₹{details.price}</span>
                <Button className="del-btn" onClick={handleDelete}><IoMdCloseCircleOutline /></Button>
                <Button className="edit-btn" onClick={handleEdit}><MdOutlineModeEdit /></Button>
            </div>
        </div>
    );
};

export default TransactionCard;