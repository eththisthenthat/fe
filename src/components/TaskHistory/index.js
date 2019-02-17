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
  		{id: 1, status: 'Success', time: '2019-2-17 10:02 AM'},
  		{id: 2, status: 'Success', time: '2019-2-17 7:37 AM'},
  		{id: 3, status: 'Success', time: '2019-2-17 7:30 AM'}
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