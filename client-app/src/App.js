import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import ActivityDashboard from './components/activities/dashboard/ActivityDashboard';

const App = () => {
  const [activities, setActivities] = useState([]);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const handleSelectActivity = (id) => {
    setSelectedActivity(activities.filter((a) => a.id === id)[0]);
    setEditMode(false);
  };

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities').then((response) => {
      let activities = [];
      response.data.forEach((activity) => {
        activity.date = activity.date.slice(0, 19);
        activities.push(activity);
      });
      setActivities(activities);
    });
  }, []); //Empty array means the function is only called once on the initial render

  const handleOpenCreateForm = () => {
    setSelectedActivity(null);
    setEditMode(true);
  };

  const handleCreateActivity = (activity) => {
    setActivities([...activities, activity]);
    setSelectedActivity(activity);
    setEditMode(false);
  };

  const handlEditActivity = (activity) => {
    setActivities([
      ...activities.filter((a) => a.id !== activity.id),
      activity,
    ]);
    setSelectedActivity(activity);
    setEditMode(false);
  };

  const handleDeleteActivity = (id) => {
    setActivities([...activities.filter((a) => a.id !== id)]);
  };

  return (
    <>
      <Navbar openCreateForm={handleOpenCreateForm} />
      <Container style={{ marginTop: '7em' }}>
        <ActivityDashboard
          activities={activities}
          selectActivity={handleSelectActivity}
          selectedActivity={selectedActivity}
          editMode={editMode}
          setEditMode={setEditMode}
          setSelectedActivity={setSelectedActivity}
          createActivity={handleCreateActivity}
          editActivity={handlEditActivity}
          deleteActivity={handleDeleteActivity}
        />
      </Container>
    </>
  );
};

export default App;
