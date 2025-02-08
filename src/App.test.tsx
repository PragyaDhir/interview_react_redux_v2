import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';

describe("App Component", () => {
  test("renders the table", async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    const table = await screen.findByRole("table");
    expect(table).toBeInTheDocument();
  });

  test("selecting a row displays the tab panel", async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );     
    const row = await screen.findByText("guid1");

    fireEvent.click(row);
    expect(screen.getByText("Properties")).toBeInTheDocument();
  });

  test("clicking the selected row again hides the tab panel", async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );     
    const row = await screen.findByText("guid5");
    fireEvent.click(row);
    fireEvent.click(row);
    expect(screen.queryByText("Properties")).not.toBeInTheDocument();
  });

  test("clicking on Properties tab shows properties", async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );     
    const row = await screen.findByText("guid5");
    fireEvent.click(row);
    const propertiesTab = screen.getByText("Properties");
    fireEvent.click(propertiesTab);
    expect(await screen.findByRole("tabpanel")).toBeInTheDocument();
  });

  test("clicking on Image tab loads the image", async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );     
    const row = await screen.findByText("guid5");
    fireEvent.click(row);
    const imageTab = screen.getByText("Image");
    fireEvent.click(imageTab);
    expect(screen.getByRole("img")).toBeInTheDocument();
  }); 
});