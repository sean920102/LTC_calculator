import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";

export default function ItemList() {
  return (
    <List
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        position: "relative",
        overflow: "auto",
        maxHeight: 300,
        "& ul": { padding: 0 },
        "& .MuiListItemText-primary": { color: "black" },
      }}
      subheader={<li />}
    >
      <li>
        <ul>
          {[0, 1, 2, 3, 4, 5, 6, 7].map((item) => (
            <ListItem key={`item-${item}`}>
              <ListItemText primary={`Item ${item}`} />
              <ListItemText primary={`Item ${item}`} />
              <ListItemText primary={`Item ${item}`} />
            </ListItem>
          ))}
        </ul>
      </li>
    </List>
  );
}
