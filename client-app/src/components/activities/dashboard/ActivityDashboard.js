import React from 'react';
import { Grid, GridColumn, List } from 'semantic-ui-react';
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';

const ActivityDashboard = ({
  activities,
  selectActivity,
  selectedActivity,
  setSelectedActivity,
  editMode,
  setEditMode,
  createActivity,
  editActivity,
  deleteActivity,
}) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityList
          activities={activities}
          selectActivity={selectActivity}
          deleteActivity={deleteActivity}
        />
      </Grid.Column>
      <Grid.Column width={6}>
        {selectedActivity && !editMode && (
          <ActivityDetails
            setEditMode={setEditMode}
            activity={selectedActivity}
            setSelectedActivity={setSelectedActivity}
          />
        )}
        {editMode && (
          <ActivityForm
            setEditMode={setEditMode}
            activity={selectedActivity}
            createActivity={createActivity}
            editActivity={editActivity}
            setSelectedActivity={setSelectedActivity}
            key={(selectedActivity && selectedActivity.id) || 0}
          />
        )}
      </Grid.Column>
    </Grid>
  );
};

export default ActivityDashboard;
