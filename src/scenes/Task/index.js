import React, {useState} from 'react'
import axios from 'axios'
import { Container, Task } from '../../components'





function TaskScene(props) {
	let hasQueried = false;
	const [tasks, setTasks] = useState([]);

	if(tasks.length === 0 && !hasQueried ) {
	  axios.get('https://it3ptht0ig.execute-api.us-east-1.amazonaws.com/dev/userTasks/0x123')
	  .then(function (response) {
	    console.log('Success');
	    console.log(response);
	    hasQueried = true;
	    setTasks(response.data.Items)
	  })
	  .catch(function (error) {
	    console.log(error);
	  });		
	}

	return (
		<Container className="f-jcsa">
			<div>
		  	<h2>My Tasks</h2>
		  	{tasks.length > 0 ?
		      tasks.map((data, i) => (
				    <div key={i}>
				    	<Task task={data} />
				    </div>
		      )) : 
		      (<div>No Tasks available</div>)
	    	}
      </div>
		</Container>
	)


}

export default TaskScene;