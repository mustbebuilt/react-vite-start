const StaffTable = () => {

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
          <tr>
            <td>Dummy Name</td>
            <td>Dummy Email </td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  );
}
export default StaffTable;
