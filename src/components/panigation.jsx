import React from "react";
import "./styles.css";

export default function Pagination({ currentPage, setPage, totalPages }) {
    return (
        <div className="pagination">
            <button 
                disabled={currentPage === 1} 
                onClick={() => setPage(prev => prev - 1)}
            >
                ←
            </button>
            <span className="page-number">{currentPage}</span>
            <button 
                disabled={currentPage === totalPages} 
                onClick={() => setPage(prev => prev + 1)}
            >
                →
            </button>
        </div>
    );
}