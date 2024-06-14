import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Contact Me</h1>
            <div className="space-y-4">
                <div className="flex items-center">
                    <FontAwesomeIcon icon={faWhatsapp} className="text-green-500 mr-2" />
                    <a
                        href="https://wa.me/+8801873785288"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700"
                    >
                        Whats App
                    </a>
                </div>
                <div className="flex items-center">
                    <FontAwesomeIcon icon={faEnvelope} className="text-red-500 mr-2" />
                    <a
                        href="mailto:mdemon201287@gmail.com"
                        className="text-blue-500 hover:text-blue-700"
                    >
                        Gmail
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
