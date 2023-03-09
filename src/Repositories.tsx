import { Divider, List, ListItem, ListItemText } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { GithubRepos } from "./types/GithubRepos";

type RepositoriesProps = {
  repositories: GithubRepos[];
}

const Repositories = ({ repositories }: RepositoriesProps) => {

  return (
    <List sx={{ width: '50%', flexGrow: 1, margin: 'auto' }} key={'repos'}>
      {repositories.map((repo: GithubRepos) => (
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', aligItems: 'center' }} >
          <ListItem key={repo.id} alignItems="flex-start" disableGutters >
              <ListItemText primary={
                <React.Fragment>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <h3 style={{ marginRight: '6px' }}>{ repo.name }</h3>
                    <h1 style={{ font: 'status-bar', border: 0 }}>{ repo.visibility.charAt(0).toUpperCase() + repo.visibility.slice(1) }</h1>
                  </div>
                </React.Fragment>
              } secondary={
                <React.Fragment>
                    { 
                      repo.language ?
                        <div>
                          <span style={{ marginRight: '16px' }}>{ repo.language }</span>
                          <span>{ repo.updated_at }</span>
                        </div>
                        :
                        <div >
                          <span>{ repo.updated_at }</span>
                        </div>
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
