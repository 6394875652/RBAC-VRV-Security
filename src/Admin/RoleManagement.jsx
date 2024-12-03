import React, { useState } from 'react';
import { Button, Table, Form, Modal } from 'react-bootstrap';

export const RoleManagement=()=> {
  // Sample users with roles (Seller, User)
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', role: 'User' },
    { id: 2, name: 'Jane Smith', role: 'Seller' },
    { id: 3, name: 'Mike Johnson', role: 'User' },
  ]);

  // State for managing selected user
//   const [selectedUserId, setSelectedUserId] = useState(null);
  const [newUserName, setNewUserName] = useState('');
  const [newUserRole, setNewUserRole] = useState('Seller');

  // State for managing modal visibility
  const [showModal, setShowModal] = useState(false);

  // Open modal to add new seller
  const handleShowModal = () => setShowModal(true);

  // Close modal
  const handleCloseModal = () => setShowModal(false);

  // Handle role change for user
  const handleRoleChange = (e) => {
    setNewUserRole(e.target.value);
  };

  // Add a new seller
  const handleAddSeller = () => {
    if (!newUserName) {
      alert('Please provide a name for the new seller.');
      return;
    }

    const newSeller = {
      id: users.length + 1,
      name: newUserName,
      role: newUserRole,
    };

    setUsers([...users, newSeller]);
    setNewUserName('');
    handleCloseModal();
  };

  // Remove a seller
  const handleRemoveSeller = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  // Update the role of a seller
  const handleUpdateRole = (userId, role) => {
    setUsers(users.map(user =>
      user.id === userId ? { ...user, role } : user
    ));
  };

  return (
    <div>
      <h2>Role Management</h2>
      
      {/* Table displaying users and roles */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Current Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>
                {/* Update Role */}
                {user.role === 'Seller' && (
                  <Button 
                    variant="warning" 
                    onClick={() => handleUpdateRole(user.id, 'User')}
                  >
                    Change to User
                  </Button>
                )}
                {user.role === 'User' && (
                  <Button 
                    variant="success" 
                    onClick={() => handleUpdateRole(user.id, 'Seller')}
                  >
                    Change to Seller
                  </Button>
                )}

                {/* Remove Seller */}
                {user.role === 'Seller' && (
                  <Button 
                    variant="danger" 
                    onClick={() => handleRemoveSeller(user.id)}
                  >
                    Remove Seller
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Button to show the modal for adding a new seller */}
      <Button variant="primary" onClick={handleShowModal}>
        Add New Seller
      </Button>

      {/* Modal for adding a new seller */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Seller</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="newUserName">
              <Form.Label>Seller Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Seller's name"
                value={newUserName}
                onChange={(e) => setNewUserName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="newUserRole">
              <Form.Label>Role</Form.Label>
              <Form.Control as="select" value={newUserRole} onChange={handleRoleChange}>
                <option value="Seller">Seller</option>
                <option value="User">User</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddSeller}>
            Add Seller
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}


