import React, { Component } from "react";

class CategoryList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryList: categoryData,
      // ornek olsun diye ekliyorum
      // ayakkabiDisabled: true,
      disabledCategoryList: {}
    };
  }

  //  bu alttaki gibi d,sabled categoriList icini oto doldurabilmemiz gerek ! msg den devam

  disabledCategory = categoryName => {
    // bad practice
    // if (categoryName === 'Ayakkabı') {
    //   this.setState({
    //     ayakkabiDisabled: false
    //   });
    // }
    const localDisabledCategoryList = {};
    localDisabledCategoryList[categoryName] = false;
    // yeni olusan degeri state e atıyoruz
    debugger;
    this.setState({ disabledCategoryList: localDisabledCategoryList });
  };

  render() {
    const { categoryList } = this.state;
    return (
      <ul className="list-group">
        {categoryList.map(item => {
          return (
            <li
              disabled={this.state.disabledCategoryList[item.categoryName]}
              className="list-group-item"
            >
              <a>{item.categoryName}</a>
              <div>
                <button
                  onClick={event => {
                    this.disabledCategory(item.categoryName);
                  }}
                >
                  Enabled
                </button>
                <button>Disabled</button>
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
