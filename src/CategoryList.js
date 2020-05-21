import React, { Component } from "react";

class CategoryList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryList: categoryData
    };
  }
  render() {
    const { categoryList } = this.state;
    return (
      <ul className="list-group">
        {categoryList.map(item => {
          return (
            <li className="list-group-item">
              <a>{item.categoryName}</a>
              <div>
                <button>Enabled</button>
                <button disabled={this.state.disabled}>Disabled</button>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default CategoryList;

const categoryData = [
  { categoryName: "Ayakkabı", id: 1 },
  { categoryName: "Tişört", id: 2 },
  { categoryName: "Pantalon", id: 3 }
];
