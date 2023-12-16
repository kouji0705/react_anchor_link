import React, { useState, useEffect } from 'react';
import { ListItem } from './type'
import { ListCard } from './ListCard'

export const ListContainer: React.FC = () => {
  const [list, setList] = useState<ListItem[]>([]);

  useEffect(() => {
    const items = Array.from({ length: 100 }, (_, index) => ({
      id: `card${index + 1}`,
      title: `タイトル${index + 1}`,
      content: `コンテンツ${index + 1}`
    }));
    setList(items);

    const scrollToCard = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }
    };

    scrollToCard(); // コンポーネントのマウント時にスクロール
    window.addEventListener('hashchange', scrollToCard); // ハッシュ変更時にスクロール

    return () => {
      window.removeEventListener('hashchange', scrollToCard);
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
