import { Card, CardContent, Typography } from '@material-ui/core'
import React from 'react';

export interface ListItem {
    id: string;
    title: string;
    content: string;
  }

export  const ListCard: React.FC<{ item: ListItem }> = ({ item }) => {
    const handleClick = () => {
      window.location.hash = item.id;
    };
    return (
      <Card id={item.id} style={{ margin: '10px', width: '200px' }} onClick={handleClick}>
        <CardContent>
          <Typography variant="h6">{item.title}</Typography>
          <Typography variant="body2">{item.content}</Typography>
        </CardContent>
      </Card>
    );
  };