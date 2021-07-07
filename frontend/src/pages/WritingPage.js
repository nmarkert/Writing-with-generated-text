import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

import Version0 from "../versions/Version0";
import Version1 from '../versions/Version1';
import Version2 from '../versions/Version2';
import { TaskDisplay } from "../js_components/TaskDisplay";


export function WritingPage() {

    const { version, tid } = useParams()

    const get_version = (vid) => {
        if(vid === 1) {
            return <Version1/>
        }
        else if (vid === 2) {
            return <Version2/>
        }
        else {
            return <Version0/>
        }
    }

    if(tid) {
    // The page is called by a task id, so there is a specific task to this page
        const { tid } = useParams()
        const [task, setTask] = useState([])

        useEffect(() => {
            fetch(`/api/task/${tid}`)
            .then(response => response.json())
            .then(data => setTask(data))

            fetch(`/api/task/${tid}/start_timer`)

            return () => {
                fetch(`/api/task/${tid}/end_timer`)
            }
        }, [tid])
    

        return(
            <>
            <TaskDisplay task={task.desc} />
            <div>
                {get_version(task.method)}
            </div>
            <div>
                <Link to={'/task'+tid+'/result'}> Finish </Link>
            </div>
            </>
        )
    }
    else {
    // The page is called by version, so this is free use with no specific task    
        return(
            <>
            <div>
                <Link to='/'> Back home </Link>
                <h1> prototype v{version} </h1>
            </div>
            <div>
                { get_version(parseInt(version)) }
            </div>
            </>
        )
    }
}