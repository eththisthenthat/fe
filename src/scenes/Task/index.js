import React from 'react'
import { Container, Task } from '../../components'

function TaskScene(props) {

  // Get Tasks for user
  const tasks = [
  	{id: 1},
  	{id: 2}
  ];

	return (
		<Container>
	  	<h2>My Tasks</h2>
      {tasks.map(data => (
		    <div>
		    	<Task task={data} />
		    </div>
      ))}
		</Container>
	)
}

export default TaskScene;