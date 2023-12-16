import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

interface ListItem {
  id: string;
  title: string;
  content: string;
}

const ListCard: React.FC<{ item: ListItem }> = ({ item }) => {
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

const ListContainer: React.FC = () => {
  const [list, setList] = useState<ListItem[]>([]);

  useEffect(() => {
    // 100個のダミーデータを生成
    const items = Array.from({ length: 100 }, (_, index) => ({
      id: `card${index + 1}`,
      title: `タイトル${index + 1}`,
      content: `コンテンツ${index + 1}`
    }));
    setList(items);

    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div>
      {list.map((item: ListItem) => (
        <ListCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ListContainer;
