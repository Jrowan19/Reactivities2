import React, { useState } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';
import { v4 as uuid } from 'uuid';
import swal from 'sweetalert';

const ActivityForm = ({
  setEditMode,
  activity: initialFormState,
  createActivity,
  editActivity,
  setSelectedActivity,
}) => {
  const initialiseForm = () => {
    if (initialFormState) {
      return initialFormState;
    } else {
      return {
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: '',
      };
    }
  };

  const [activity, setActivity] = useState(initialiseForm);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activity.id.length === 0) {
      let newActivity = { ...activity, id: uuid() };
      createActivity(newActivity);
      setSelectedActivity(newActivity);
    } else {
      editActivity(activity);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setActivity({ ...activity, [name]: value });
  };

  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          name="title"
          placeholder="Title"
          value={activity.title}
          onChange={handleInputChange}
        />
        <Form.TextArea
          rows={2}
          name="description"
          placeholder="Description"
          value={activity.description}
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder="Category"
          name="category"
          value={activity.category}
          onChange={handleInputChange}
        />
        <Form.Input
          type="datetime-local"
          placeholder="Date"
          name="date"
          value={activity.date}
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder="City"
          name="city"
          value={activity.city}
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder="Venue"
          name="venue"
          value={activity.venue}
          onChange={handleInputChange}
        />
        <Button floated="right" positive type="submit" content="Submit" />
        <Button
          onClick={() => setEditMode(false)}
          floated="right"
          type="button"
          content="Cancel"
        />
      </Form>
    </Segment>
  );
};

export default ActivityForm;
