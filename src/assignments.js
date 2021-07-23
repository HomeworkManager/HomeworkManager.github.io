import DateFnsUtils from "@date-io/date-fns";
import {
  Button,
  Checkbox,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  TextField,
  Typography,
} from "@material-ui/core";
import { Add, Edit } from "@material-ui/icons";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { useEffect, useState } from "react";
import Appbar from "./appbar";
import app from "./mongodb";

export default function Assignments() {
  const [assignments, setAssignments] = useState([]);
  const [addDialogueOpen, setAddDialogueOpen] = useState(false);
  const [editDialogueOpen, setEditDialogueOpen] = useState(false);
  const [form, setForm] = useState({});

  const db = app.currentUser?.mongoClient("mongodb-atlas").db("HomeworkManager");

  useEffect(() => {
    if (!addDialogueOpen && !editDialogueOpen)
      db.collection("Assignments")
        .find({}, { sort: { completed: 1, dueDate: 1 }, completed: true, dueDate: true, name: true })
        .then(setAssignments);
  }, [addDialogueOpen, editDialogueOpen, db]);

  function toggleCompletion(_id, value, idx) {
    db.collection("Assignments")
      .updateOne({ _id }, { $set: { completed: value } })
      .then((res) => {
        let temp = assignments.slice();
        temp[idx].completed = value;
        setAssignments(temp);
      });
  }

  function newAssignment(e) {
    e.preventDefault();
    db.collection("Assignments")
      .insertOne({ ...form, completed: false, user_id: app.currentUser?.id })
      .then(() => {
        setForm({});
        setAddDialogueOpen(false);
      });
  }

  function editAssignment(e) {
    e.preventDefault();
    db.collection("Assignments")
      .updateOne({ _id: form._id }, { ...form })
      .then(() => {
        setForm({});
        setEditDialogueOpen(false);
      });
  }

  function deleteAssignment(e) {
    e.preventDefault();
    db.collection("Assignments")
      .deleteOne({ _id: form._id })
      .then(() => {
        setForm({});
        setEditDialogueOpen(false);
      });
  }

  function openEditDialogue(_id) {
    setForm(assignments.find((x) => x._id.equals(_id)));
    setEditDialogueOpen(true);
  }

  return (
    <>
      <Appbar title="Assignments" />
      <Container maxWidth="sm">
        <List>
          {assignments.length ? (
            assignments.map(({ _id, name, dueDate, completed }, idx) => (
              <ListItem key={idx}>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={completed}
                    onChange={() => {
                      toggleCompletion(_id, !completed, idx);
                    }}
                  />
                </ListItemIcon>
                <ListItemText primary={name} secondary={formatDate(dueDate)} />
                <ListItemSecondaryAction>
                  <IconButton edge="end" onClick={() => openEditDialogue(_id)}>
                    <Edit />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))
          ) : (
            <div style={{ textAlign: "center" }}>
              <Typography variant="h6">You have no assignments right now!</Typography>
            </div>
          )}
        </List>
        <Fab
          color="secondary"
          style={{ position: "absolute", bottom: "33px", right: "33px" }}
          onClick={() => setAddDialogueOpen(true)}
        >
          <Add />
        </Fab>
      </Container>
      <Dialog open={addDialogueOpen}>
        <DialogTitle disableTypography>
          <Typography variant="h6">New Assignment</Typography>
        </DialogTitle>
        <DialogContent dividers>
          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            label="Name"
            autoFocus
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              label="Due Date"
              value={form.dueDate}
              onChange={(date) => setForm({ ...form, dueDate: date })}
            />
          </MuiPickersUtilsProvider>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setAddDialogueOpen(false);
              setForm({});
            }}
            color="primary"
          >
            Cancel
          </Button>
          <Button color="primary" onClick={newAssignment}>
            Add
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={editDialogueOpen}>
        <DialogTitle disableTypography>
          <Typography variant="h6">Edit Assignment</Typography>
        </DialogTitle>
        <DialogContent dividers>
          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            label="Name"
            autoFocus
            value={form.name || ""}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              label="Due Date"
              value={form.dueDate}
              onChange={(date) => setForm({ ...form, dueDate: date })}
            />
          </MuiPickersUtilsProvider>
        </DialogContent>
        <DialogActions>
          <Button onClick={deleteAssignment} color="primary">
            Delete
          </Button>
          <Button
            onClick={() => {
              setEditDialogueOpen(false);
              setForm({});
            }}
            color="primary"
          >
            Cancel
          </Button>
          <Button color="primary" onClick={editAssignment}>
            Change
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

function formatDate(date) {
  // Remove time from date
  date = new Date(new Date(date).toDateString());

  let today = new Date();

  // If it is due today
  if (date.getTime() === today.getTime()) return "today";

  // If it is due tomorrow
  today.setDate(today.getDate() + 1);
  if (date.getTime() === today.getTime()) return "tomorrow";

  // If it is due this week
  today = new Date();
  let firstDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay());
  let lastDay = new Date(today.getFullYear(), today.getMonth(), firstDay.getDate() + 6);
  if (date >= firstDay && date <= lastDay) return date.toLocaleDateString("en-US", { weekday: "short" });

  // Otherwise just print the date
  return date.toLocaleDateString("en-US", { month: "numeric", day: "numeric" });
}
