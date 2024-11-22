import React, { useState, useEffect } from "react";
import axios from "axios";
import "./transactionhistory.css";

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState([]); // Default is an empty array
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const userId = localStorage.getItem("user_id"); // Fetch user_id from localStorage

  // Function to fetch transactions
  const fetchTransactions = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post("http://localhost:5008/get-transactions", {
        user_id: userId,
      });

      // Handle API response structure
      if (response.data.error) {
        throw new Error(response.data.error);
      }

      // Set transactions or an empty array if data is missing
      setTransactions(response.data || []);
    } catch (err) {
      setError(err.message || "Error fetching transactions.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch transactions when the component mounts
  useEffect(() => {
    if (userId) {
      fetchTransactions();
    } else {
      setError("User ID not found. Please log in again.");
    }
  }, [userId]);

  // Refresh the transaction history
  const handleRefresh = () => {
    fetchTransactions();
  };

  // Format timestamp to a readable date
  const formatTimestamp = (timestamp) => {
    return new Date(timestamp).toLocaleString();
  };

  return (
    <div className="transaction-history">
      <h2 className="transaction-history-head">Transaction History</h2>

      {error && <p className="error">{error}</p>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : transactions.length === 0 ? (
        <p>No transactions found.</p>
      ) : (
        <div className="transactions">
          {transactions.map((tx, index) => (
            <div className="transaction-card" key={index}>
              <p><strong>Hash:</strong> {tx.hash}</p>
              <p><strong>From:</strong> {tx.from}</p>
              <p><strong>To:</strong> {tx.to}</p>
              <p><strong>Value:</strong> {tx.value} {tx.asset || "N/A"}</p> {/* Display asset with value */}
              <p><strong>Asset:</strong> {tx.asset || "N/A"}</p> {/* Display asset separately */}
              <p><strong>Timestamp:</strong> {tx.timestamp ? formatTimestamp(tx.timestamp) : "N/A"}</p>
              <p><strong>Block Number:</strong> {tx.block_number || "N/A"}</p>
              <p><strong>Category:</strong> {tx.category || "N/A"}</p>
            </div>
          ))}
        </div>
      )}

      <button className="refresh-button" onClick={handleRefresh}>
        Refresh
      </button>
    </div>
  );
};

export default TransactionHistory;
