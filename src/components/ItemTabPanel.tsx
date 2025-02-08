import { Tab, Tabs } from '@mui/material';
import React, { useState } from "react";
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Item } from '../model/item';
import ItemProperties from './ItemProperties';
import '../styles/tabPanel.css';

interface ItemTabPanelProps {
  selectedItem: Item ;
}

const ItemTabPanel: React.FC<ItemTabPanelProps> = ({selectedItem }) => {
  const [tabValue, setTabValue] = useState('1');

  if (!selectedItem) {
    return null;
  }

  return (
    <TabContext value={tabValue} >
      <TabList 
        onChange={(_, newValue) => setTabValue(newValue)}
        className="tabPanel"
      >
        <Tab label="Properties" value="1" />
        <Tab label="Image" value="2" />
      </TabList>

      <TabPanel value="1">
        <ItemProperties properties={selectedItem.properties}  />
      </TabPanel>
      <TabPanel value="2">
        <img 
          src={`http://localhost:8080/image/${selectedItem.guid}`} 
          alt="Image" 
          className="panelImage"
        />
      </TabPanel>
    </TabContext>
  );
};

export default ItemTabPanel; 