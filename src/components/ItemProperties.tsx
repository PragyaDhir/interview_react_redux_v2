import { Grid2 } from "@mui/material";
import React from "react";
import '../styles/properties.css';


interface ItemPropertiesProps {
    properties: Record<string, any>; 
}

const ItemProperties: React.FC<ItemPropertiesProps> = ({ properties }) => {
  return (
    <Grid2>
      {properties ? (
        <Grid2 className='properties'>         
          {Object.entries(properties).map(([key, value]) => (
            <div key={key} >
              <strong>{key}: </strong>
              <span>{typeof value === 'object' ? JSON.stringify(value) : value}</span>
            </div>
          ))}
        </Grid2>
      ) : (
        <p>No properties available</p>
      )}
    </Grid2>
  );
};

export default ItemProperties; 