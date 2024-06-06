import React, { useState, useEffect } from 'react';
import Staff from './Staff';
const StaffTable = () => {
  const [staff, setStaff] = useState([]);
    const [selectedStaffId, setSelectedStaffId] = useState(null);

  useEffect(() => {
    fetch('data/staff.json')
      .then((response) => response.json())
      .then((data) => {
        setStaff(data);
      })
      .catch((error) => {
        console.error('Error loading JSON:', error);
      });
  }, []);

  const handleStaffClick = (id) => {
    setSelectedStaffId(id);
  };

  return (
    <div>
      <h2>Staff Table</h2>
      <div className="staffFlex">
      <table id="staffTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {staff.map((item, index) => (
            <tr key={item.id} onClick={() => handleStaffClick(item.id)}>
              <td>{`${item.first_name} ${item.last_name}`}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
       {selectedStaffId && <Staff id={selectedStaffId} staff={staff}  />}
    </div>
    </div>
  );
}
export default StaffTable;
