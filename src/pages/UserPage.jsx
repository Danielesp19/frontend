import React from 'react';

const UserPage = ({ user }) => {
    return (
        <div>
            <h1>Bienvenido, {user.name}</h1>
            <p>Tu correo electrónico es {user.email}</p>
        </div>
    );
};

export default UserPage;