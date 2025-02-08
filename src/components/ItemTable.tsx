import React from 'react';
import { Item } from '../model/item';
import { 
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper
} from '@mui/material';
import '../styles/table.css';

interface ItemTableProps {
  items: Item[];
  selectedItem: Item | null;
  onRowClick: (item: Item) => void;
}

const ItemTable: React.FC<ItemTableProps> = ({ 
  items, 
  selectedItem, 
  onRowClick 
}) => {
  return (
    <TableContainer component={Paper} >
      <Table className='tableContainer'>
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
              onClick={() => onRowClick(item)}
              selected={selectedItem?.guid === item.guid}
              className={`table-row ${selectedItem?.guid === item.guid ? 'selected' : ''}`}
            >
              <TableCell>{item.guid}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.path.join('/')}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ItemTable; 