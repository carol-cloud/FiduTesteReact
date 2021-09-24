import './App.css';
import { 
  AppBar,
  Box,
  Paper,
  Toolbar,
  Typography
} from '@material-ui/core';

import { ReposController } from './components/repos/repos.controller';
import { UsersSelectController } from './components/users-select/users-select.controller';


export default function SearchAppBar() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Fidu
          </Typography>
          <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
          >
          <UsersSelectController></UsersSelectController>
          </Paper>
        </Toolbar>
      </AppBar>

      <ReposController></ReposController>
    </Box>
  );
}