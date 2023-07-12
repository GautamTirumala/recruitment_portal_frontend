import Table from 'react-bootstrap/Table';

function Tables(props) {
  return (
    <Table striped="columns">
      <thead>
        <tr>
          <th >{props.header1}</th>
          <th >{props.header2}</th>
          <th >{props.header3}</th>
          <th >{props.header4}</th>
        </tr>
      </thead>
      <tbody>
        <tr>

            {/* use the map function to map to data and pass that data in table component */}
          <td>1</td>
          <td>Mark </td>
          <td>Otto</td>
          <td>1</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>13</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry the Bird</td>
          <td>value</td>
          <td>23</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Tables;