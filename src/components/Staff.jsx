
const Staff = ({ id, staff }) => {
  const staffMember = staff.find((item) => item.id === id);

  if (!staffMember) {
    return <p>Staff member not found.</p>;
  }

  return (
    <div>
    <div className="staffDetails">
      <h2>Staff Details</h2>
      <p><strong>Name:</strong> {`${staffMember.first_name} ${staffMember.last_name}`}</p>
      <p><strong>Email:</strong> {staffMember.email}</p>
      <p><strong>Department:</strong> {staffMember.department}</p>
      <p><strong>City:</strong> {staffMember.city} </p>
      <p><strong>Country:</strong> {staffMember.country} </p>
    </div>
  </div>
  );
}
export default Staff;