import React from 'react'
import moment from 'moment'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Link from '@material-ui/core/Link';
import shorten from '../../utils/shortenAddress'

function TaskHistory({task, ...props}) {

  // Get Task History for Task
  const taskHistory = task.taskHistory;

  return (
    <div style={{width: '100%'}}>
    	<h3>Task History</h3>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Transaction</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {taskHistory.map((row,i) => (
            <TableRow key={i}>
              <TableCell>{moment(parseInt(row.startTime)).format('MMM Do YYYY H:mm')}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>
                <Link href={`https://rinkeby.etherscan.io/tx/${row.txHash}`} target="_blank">
                  { shorten(row.txHash) }
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default TaskHistory;