import React from 'react';

const SlackIcon = ({ className }) => {
    return (
        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M0 4a4 4 0 014-4h16a4 4 0 014 4v16a4 4 0 01-4 4H4a4 4 0 01-4-4V4z" fill="#F9F9F9" fillOpacity=".5"/>
            <path d="M9.5 8a1.5 1.5 0 010 3h-5a1.5 1.5 0 010-3h5zM9.5 6A1.5 1.5 0 1111 4.5V6H9.5z" fill="#40C5EE"/>
            <path d="M8 14.5a1.5 1.5 0 013 0v5a1.5 1.5 0 01-3 0v-5zM4.5 13A1.5 1.5 0 106 14.5V13H4.5z" fill="#DE245C"/>
            <path d="M19.5 13a1.5 1.5 0 010 3h-5a1.5 1.5 0 010-3h5zM14.5 18a1.5 1.5 0 11-1.5 1.5V18h1.5z" fill="#EBB13E"/>
            <path d="M13 4.5a1.5 1.5 0 013 0v5a1.5 1.5 0 01-3 0v-5zM19.5 11A1.5 1.5 0 1018 9.5V11h1.5z" fill="#37B57F"/>
        </svg>
    );
};

export default SlackIcon;
