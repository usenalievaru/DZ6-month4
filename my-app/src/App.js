import React, { useState } from 'react';
import Table from './components/Table'; // Импортируйте компонент Form из правильного пути
// import Table from './pages/UserPage';
import UserPage from "./pages/UserPage";

function App() {
    const [users, setUsers] = useState([]);

    const handleSubmit = (data) => {
        setUsers([...users, data]);
    };

    const handleDelete = (index) => {
        const updatedUsers = [...users];
        updatedUsers.splice(index, 1);
        setUsers(updatedUsers);
    };

    const handleClearTable = () => {
        setUsers([]);
    };

    return (
        <div>

            <UserPage onSubmit={handleSubmit}  />
            {users.length > 0 ? (
                <Table users={users} onDelete={handleDelete} />
            ) : (
                <p>Table is empty</p>
            )}
            <button onClick={handleClearTable}>Clear Table</button>
        </div>
    );
}

export default App;
