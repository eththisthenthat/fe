import React, {useState} from 'react'
import axios from 'axios'
import { Container, Task, Link } from '../../components'
import { useGlobalState } from '../../store'
import getApi from '../../utils/getApiUrl'
import { get } from 'lodash'

function TaskScene(props) {
  const [hasQueried, setHasQueried] = useState(false) 
	const [ethereum] = useGlobalState('ethereum');
  const hash = get(ethereum, 'web3.eth.defaultAccount')
  const api = getApi()
  const [tasks, setTasks] = useState([]);
  // console.log('api', api)

	if(tasks.length === 0 && !hasQueried ) {
	  axios.get(`${api}/userTasks/${hash}`)
	  .then(function (response) {
	    console.log('Success');
      console.log(response);
      setHasQueried(true)
	    setTasks(response.data.Items)
	  })
	  .catch(function (error) {
	    console.log('error here',error);
	  });		
  }
  

	return (
		<Container className="f-jcsa">
			<div>
		  	{tasks.length ? <h2>My Tasks</h2> : null}
		  	{tasks.length ?
		      tasks.map((data, i) => (
				    <div key={i}>
				    	<Task task={data} />
				    </div>
		      )) : <div className='tac mt20'>
		        <div>No Tasks available</div>
            <Link to='/create' className='underline mt5 block'>Create Task</Link>
          </div>
	    	}
      </div>
		</Container>
	)


}

export default TaskScene;