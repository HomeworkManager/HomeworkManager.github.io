import DateFnsUtils from "@date-io/date-fns";
import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
} from "@material-ui/core";
import { Add, Close } from "@material-ui/icons";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { useEffect, useState } from "react";
import Appbar from "./appbar";
import app from "./mongodb";

export default function Assignments() {
  const [assignments, setAssignments] = useState([]);
  const [dialogueOpen, setDialogueOpen] = useState(false);
  const [form, setForm] = useState({});

  const db = app.currentUser?.mongoClient("mongodb-atlas").db("HomeworkManager");

  useEffect(() => {
    db.collection("Assignments")
      .find({}, { sort: { completed: 1, dueDate: 1 }, completed: true, dueDate: true, name: true })
      .then(setAssignments);
  }, [dialogueOpen, db]);

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
      .insertOne({ ...form, completed: false, user_id: app.currentUser.id })
      .then(() => {
        setForm({});
        setDialogueOpen(false);
      });
  }

  return (
    <>
      <Appbar title="Assignments" />
      <List>
        {assignments.map(({ _id, name, dueDate, completed }, idx) => (
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
          </ListItem>
        ))}
      </List>
      <Fab
        color="secondary"
        style={{ position: "absolute", bottom: "33px", right: "33px" }}
        onClick={() => setDialogueOpen(true)}
      >
        <Add />
      </Fab>
      <Dialog open={dialogueOpen} onClose={() => setDialogueOpen(false)}>
        <DialogTitle disableTypography>
          <Typography variant="h6">New Assignment</Typography>
          {!dialogueOpen ? (
            <IconButton>
              <Close />
            </IconButton>
          ) : null}
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
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={newAssignment}>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

function formatDate(date) {
  // Remove time from date
  date = new Date(date.toDateString());

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
