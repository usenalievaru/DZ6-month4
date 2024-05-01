/**
 * @typedef {object} User
 * @property {string} name - John
 * @property {string} username - John Johns
 * @property {string} email - John_Johns
 * @property {string} phone - 123654789
 * @property {string} website - John
 */

import React from 'react';

/**
 * Компонент таблицы с пользователями
 * @param {Object} props - Свойства компонента
 * @param {User[]} props.users - Массив пользователей
 * @param {(index: number) => void} props.onDelete - Функция удаления пользователя
 */
function Table({ users, onDelete }) {
    return (
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Website</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {
                users?(
                    users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.website}</td>
                            <td>
                                <button onClick={() => onDelete(index)}>Delete</button>
                            </td>
                        </tr>
                    ))
                ):(
                    console.log(' no  date')
                )
            }
            </tbody>
        </table>
    );
}

export default Table;