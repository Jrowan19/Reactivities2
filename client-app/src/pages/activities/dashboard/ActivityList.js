import React from 'react';
import { Item, Button, Label, Segment } from 'semantic-ui-react';
import ActivityListItem from './ActivityListItem';

const ActivityList = ({
  activities,
  selectActivity,
  deleteActivity,
  submitting,
  target,
}) => {
  return (
    <Item.Group divided>
      {activities.map((activity) => (
        <ActivityListItem
          activity={activity}
          key={activity.id}
          selectActivity={selectActivity}
          deleteActivity={deleteActivity}
        />
      ))}
    </Item.Group>
  );
};

export default ActivityList;
