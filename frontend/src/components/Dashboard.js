import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './style.css';

const Dashboard = () => {
    const [documents, setDocuments] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDocuments = async () => {
            try {
                const user = JSON.parse(localStorage.getItem('user'));
                const token = user ? user.token : null;
                const { data } = await axios.get('http://localhost:5000/api/documents', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setDocuments(data);
            } catch (error) {
                console.error('Failed to fetch documents:', error);
                navigate('/');
            }
        };
        fetchDocuments();
    }, [navigate]);

    return (
        <div className="dashboard-container">
            <h2 className="dashboard-title">Your Documents</h2>
            <div className="dashboard-grid">
                {documents.length ? (
                    documents.map((doc) => (
                        <div key={doc._id} className="dashboard-card">
                            <h3 className="card-title">{doc.title}</h3>
                            <p className="card-date">Created: {new Date(doc.createdAt).toLocaleDateString()}</p>
                            <Link to={`/document/${doc._id}`} className="btn-card">
                                Open Document
                            </Link>
                        </div>
                    ))
                ) : (
                    <p className="no-documents">No documents found. Create one to get started!</p>
                )}
            </div>
            <button className="btn-create" onClick={() => navigate('/document/new')}>
                + Create New Document
            </button>
        </div>
    );
};

export default Dashboard;
