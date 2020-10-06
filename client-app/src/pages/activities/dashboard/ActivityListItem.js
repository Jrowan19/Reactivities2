import React from 'react';
import { Item, Button, Label, Segment, Icon } from 'semantic-ui-react';

const ActivityListItem = ({
  selectActivity,
  deleteActivity,
  submitting,
  target,
  activity,
}) => {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size="tiny" circular src="/assets/user.png" />
            <Item.Content>
              <Item.Header as="a">{activity.title}</Item.Header>
              <Item.Description>Hosted By John</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <Icon name="marker" />
        {activity.venue}, {activity.city}
      </Segment>
      <Segment secondary>Attendees will go here</Segment>
      <Segment clearing>
        <span>{activity.description}</span>
        <Button
          onClick={() => selectActivity(activity.id)}
          floated="right"
          content="view"
          color="blue"
        />
        <Button
          name={activity.id}
          loading={target === activity.id && submitting}
          onClick={(e) => deleteActivity(e, activity.id)}
          floated="right"
          content="Delete"
          color="red"
        />
      </Segment>
    </Segment.Group>
  );
};

export default ActivityListItem;
