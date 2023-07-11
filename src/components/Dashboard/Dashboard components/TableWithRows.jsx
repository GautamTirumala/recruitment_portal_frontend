import Table from 'react-bootstrap/Table';

function TableWithRows() {
  return (
    <Table striped="columns">
      <thead>
        <tr>
          <th>Submitted Candidates</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Gautam</td>
          
        </tr>
        <tr>
          <td>Sai Kumar</td>
          
        </tr>
        <tr>
          <td>sai teja</td>
          
        </tr>
      </tbody>
    </Table>
  );
}

export default TableWithRows;