import { Checkbox, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { useEffect, useState } from "react";
import Appbar from "./appbar";
import graphql from "./graphql";

export default function Assignments() {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    graphql(`
      query {
        assignments {
          completed
          dueDate
          name
        }
      }
    `)
      .then((json) => json.data.assignments || [])
      .then(setAssignments);
  }, []);

  return (
    <>
      <Appbar title="Assignments" />
      <List>
        {assignments.map(({ name, dueDate, completed }, idx) => (
          <ListItem key={idx}>
            <ListItemIcon>
              <Checkbox edge="start" checked={completed} />
            </ListItemIcon>
            <ListItemText primary={name} secondary={formatDate(dueDate)} />
          </ListItem>
        ))}
      </List>
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
