import React, { useState } from 'react';
import { Button, Table, Form, Modal } from 'react-bootstrap';

export const PermissionMangement=()=> {
  // Sample users with roles (Seller, User) and permissions
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', role: 'User', permissions: ['View'] },
    { id: 2, name: 'Jane Smith', role: 'Seller', permissions: ['View', 'Edit'] },
    { id: 3, name: 'Mike Johnson', role: 'User', permissions: ['View'] },
  ]);

  // States for managing selected user and permissions
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedPermissions, setSelectedPermissions] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // Open modal to assign permissions
  const handleShowModal = (userId, currentPermissions) => {
    setSelectedUserId(userId);
    setSelectedPermissions(currentPermissions);
    setShowModal(true);
  };

  // Close the modal
  const handleCloseModal = () => setShowModal(false);

  // Handle permission change
  const handlePermissionChange = (permission) => {
    setSelectedPermissions((prevPermissions) =>
      prevPermissions.includes(permission)
        ? prevPermissions.filter((p) => p !== permission)
        : [...prevPermissions, permission]
    );
  };

  // Save permissions for the selected user
  const handleSavePermissions = () => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === selectedUserId
          ? { ...user, permissions: selectedPermissions }
          : user
      )
    );
    handleCloseModal();
  };

  return (
    <div>
      <h2>Permission Management</h2>

      {/* Table displaying users and their permissions */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Role</th>
            <th>Permissions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>{user.permissions.join(', ')}</td>
              <td>
                {/* Button to assign permissions */}
                <Button
                  variant="primary"
                  onClick={() => handleShowModal(user.id, user.permissions)}
                >
                  Assign Permissions
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal for assigning permissions */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Assign Permissions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Check
                type="checkbox"
                label="View"
                checked={selectedPermissions.includes('View')}
                onChange={() => handlePermissionChange('View')}
              />
              <Form.Check
                type="checkbox"
                label="Edit"
                checked={selectedPermissions.includes('Edit')}
                onChange={() => handlePermissionChange('Edit')}
              />
              <Form.Check
                type="checkbox"
                label="Delete"
                checked={selectedPermissions.includes('Delete')}
                onChange={() => handlePermissionChange('Delete')}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSavePermissions}>
            Save Permissions
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

