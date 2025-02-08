import React, { useState } from 'react';
import { Item } from '../model/item';
import { 
  Paper, 
  Grid2
} from '@mui/material';
import ItemTabPanel from './ItemTabPanel';
import ItemTable from './ItemTable';

interface ItemsContainerProps {
  items: Item[];
}

const ItemsContainer: React.FC<ItemsContainerProps> = ({ items }) => {

  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const handleRowClick = (item: Item) => {
    if(selectedItem === item) {
      setSelectedItem(null);
      return;
    }
    setSelectedItem(item);
  };

  return (
    <Paper>
      <Grid2>
        <ItemTable 
          items={items}
          selectedItem={selectedItem}
          onRowClick={handleRowClick}
        />
        <ItemTabPanel selectedItem={selectedItem}/>
      </Grid2>
    </Paper>
  );
};

export default ItemsContainer;
