import { Stack } from "@mui/material";
import React from "react";
import { categories } from "../utils/constants";

const SideBar = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      flexDirection: { md: "column" },
      heigh: { xs: "auto", md: "95%" },
    }}
  >
    {categories.map((category) => (
      <button
        onClick={() => setSelectedCategory(category.name)}
        className="category-btn"
        key={category.name}
        style={{
          color: "white",
          background: category.name === selectedCategory && "#fc1503 ",
        }}
      >
        <span
          style={{
            marginRight: "10px",
            color: category.name === selectedCategory ? "white" : "#fc1503 ",
          }}
        >
          {category.icon}
        </span>
        <span
          style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}
        >
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default SideBar;
