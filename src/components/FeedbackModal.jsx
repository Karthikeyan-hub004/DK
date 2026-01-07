import React, { useState } from 'react';
import './FeedbackModal.css';

const FeedbackModal = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div>
            <button className="feedback-button" onClick={() => setModalOpen(true)}>Feedback</button>
            {modalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Feedback</h2>
                        <p>We value your feedback. Please let us know how we can improve.</p>
                        <a href="https://forms.gle/GxqBMnths4U6gMwe9" target="_blank" rel="noopener noreferrer">
                            Go to Feedback Form
                        </a>
                        <button onClick={() => setModalOpen(false)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FeedbackModal;
