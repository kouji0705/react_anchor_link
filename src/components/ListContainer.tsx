import React from 'react';
import { ListItem } from './type'
import { ListCard } from './ListCard'
import { useCardScroll } from './hooks'

export const ListContainer: React.FC = () => {
    const { list } = useCardScroll();

  return (
    <div>
      {list.map((item: ListItem) => (
        <ListCard key={item.id} item={item} />
      ))}
    </div>
  );
};
