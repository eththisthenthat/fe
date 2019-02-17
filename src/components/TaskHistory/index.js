import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function TaskHistory(props) {
  const { classes, taskId } = props;

  // Get Task History for Task
  const taskHistory = {
  	data: [
  		{id: 1, status: 'Success', time: 'Hold1'},
  		{id: 2, status: 'Success', time: 'Hold2'},
  		{id: 3, status: 'Success', time: 'Hold3'}
  	]
  }

  return (
    <div style={{width: '100%'}}>
    	<h3>Task History</h3>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {taskHistory.data.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.time}</TableCell>
              <TableCell>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default TaskHistory;