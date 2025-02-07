import React, { useState } from 'react';
import { Item } from '../model/item';
import { 
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper 
} from '@mui/material';
import ItemTabPanel from './ItemTabPanel';

interface ItemsTableProps {
  items: Item[];
}

const ItemsTable: React.FC<ItemsTableProps> = ({ items }) => {

  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const handleRowClick = (item: Item) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Guid</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Path</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items?.map((item) => (
              <TableRow 
                key={item.guid} 
                onClick={() => handleRowClick(item)}
                selected={selectedItem?.guid === item.guid}
                style={{ cursor: 'pointer', backgroundColor: selectedItem?.guid === item.guid ? '#f0f0f0' : 'transparent' }}
              >
                <TableCell>{item.guid}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.path.join('\\n')}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ItemTabPanel selectedItem={selectedItem}/>
      
     
    </div>
  );
};

export default ItemsTable;
