// import { Switch, Route } from '@material-ui/core';
import React from 'react';
import { Navbar } from '../components/ui/Navbar';
import { Home } from '../components/Home/Home';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Profile } from '../components/Profile/Profile';
import ClippedDrawer from '../components/DrawerExample';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
// import CardExample from './CardExample';
// import Icon from '@material-ui/core/Icon'
import Icon from '@material-ui/core/Icon';

const drawerWidth = 240;


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));


export const HomeRoutes = () => {
  const classes = useStyles();

  const data = [
    {
      name: 'Inbox',
      route: '/profile'
    },
    {
      name: 'Starred',
      route: '/profile'
    },
    {
      name: 'Send email',
      route: '/home'
    },
    {
      name: 'Drafts',
      route: '/home'
    }
  ]


  return (
    <div className={classes.root}>

      <CssBaseline />

      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Filtro principal
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />

        <div className={classes.drawerContainer}>

          <List>
            {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((item, index) => (
              <ListItem button key={item.name}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItem>
            ))} */}
            {data.map((item, index) => (
              <ListItem button component={Link}  key={item.name}  to={ item.route } >
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                {/* <ListItemText href="#simple-list"  primary={item.name} /> */}
                <ListItemText  primary={item.name} />
              </ListItem>
            ))}
          </List>
          <Divider />

          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>


      <main className={classes.content}>
        <Toolbar />


        <div>
          <Icon>add_circle</Icon>
          <Icon>add_circle</Icon>

        </div>

        <div>
          <Switch>
            <Route exact path="/home" component={ Home } />
            <Route exact path="/profile" component={ Profile } />
            <Redirect to="/auth" />
          </Switch>
        </div>
      </main>


      {/* <ClippedDrawer /> */}
      {/* <Navbar /> */}

    </div>
  );
};
