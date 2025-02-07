import { Grid2 } from "@mui/material";
import React from "react";


interface ItemPropertiesProps {
    properties: Record<string, any>; 
}

const ItemProperties: React.FC<ItemPropertiesProps> = ({ properties }) => {
  return (
    <Grid2>
      {properties ? (
        <div style={{ padding: '8px' }}>         
          {Object.entries(properties).map(([key, value]) => (
            <div key={key} style={{ marginBottom: '8px' }}>
              <strong>{key}: </strong>
              <span>{typeof value === 'object' ? JSON.stringify(value) : value}</span>
            </div>
          ))}
        </div>
      ) : (
        <p>No properties available</p>
      )}
    </Grid2>
  );
};

export default ItemProperties; 