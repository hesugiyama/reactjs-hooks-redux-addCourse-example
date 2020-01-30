import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import store from '../../store';

function addCourseAction(title) {
    return { type: 'ADD_COURSE', title}
}

export default function CourseList() {
    let qty = 4 ;
    const courses = useSelector(
        state => state.data.slice(0, qty),
        [qty]
    );
    const dispatch = useDispatch();

    function addCourse () {
        dispatch(addCourseAction('GraphQL'));
    }

  return (
    <>
        <ul>
        { courses.map(courses => <li key={courses}>{courses}</li>) }
        </ul>
        <button type="button" onClick={addCourse}>
            Adicionar curso
        </button>
    </>
  );
}
