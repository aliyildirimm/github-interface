import { Divider, List, ListItem, ListItemText, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { GithubRepos } from "../types/GithubRepos";

type RepositoriesProps = {
  repositories: GithubRepos[];
}

const Repositories = ({ repositories }: RepositoriesProps) => {

  return (
    <List sx={{ width: '100%', flexGrow: 1, margin: 'auto' }} >
      {repositories.map((repo: GithubRepos) => (
        <Box key={repo.id} sx={{ display: 'flex', flexDirection: 'column', width: '100%', aligItems: 'center' }} >
          <ListItem key={repo.id} alignItems="flex-start" disableGutters >
              <ListItemText primary={
                <React.Fragment>
                  <Typography component={'span'} style={{ display: 'flex', alignItems: 'center' }}>
                    <h3 style={{ marginRight: '6px' }}>{ repo.name }</h3>
                    <h4 style={{ font: 'status-bar', border: 0 }}>{ repo.visibility.charAt(0).toUpperCase() + repo.visibility.slice(1) }</h4>
                  </Typography>
                </React.Fragment>
              } secondary={
                <React.Fragment>
                    { 
                      repo.language ?
                        <Typography component={'span'}>
                          <span style={{ marginRight: '16px' }}>{ repo.language }</span>
                          <span> { `Updated on ${new Date(repo.updated_at).toDateString()}` }</span>
                        </Typography>
                        :
                        <Typography component={'span'}>
                          <span>{ `Updated on ${new Date(repo.updated_at).toDateString()}` }</span>
                        </Typography>
                    }
                </React.Fragment>
                } 
              />
          </ListItem>
          <Divider  />
        </Box>
        ))}
    </List>
  );
}

export default Repositories;
