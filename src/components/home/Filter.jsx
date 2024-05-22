import React from "react";
import ListFilter from "../../data/ListFilter.json";
import { Button, Container, Grid } from "@mui/material";
const Filter = () => {
  const styleListSearchBefore = {};
  return (
    <>
      <div className="filter-container">
        <ul>
          {ListFilter.map((item) => (
            <li>
              <button className="btn">{item.text}</button>
            </li>
          ))}
        </ul>
        <Container>
          <Grid className="list-search" container spacing={2}>
            {Array.from(Array(6)).map((_, index) => (
              <Grid item xs={2} sm={3} md={3} key={index}>
                <div>
                  <img
                    src="https://bizweb.dktcdn.net/thumb/grande/100/253/478/products/khung-long.jpg?v=1566037805000"
                    className="image"
                  />
                  <p className="price">200.000đ</p>
                </div>
              </Grid>
            ))}
          </Grid>
          <Button
            variant="contained"
            color="warning"
            style={{
              display: "flex",
              justifyContent: "center",
              marginLeft: "47%",
            }}
          >
            Xem thêm
          </Button>
        </Container>
      </div>
    </>
  );
};

export default Filter;
