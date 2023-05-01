import styled from "styled-components";


export const CategoryItemStyle = styled.div`
  .liCategories {
    border-bottom: solid 1px #AA8066;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .category-title {
    display: flex;
    padding: 10px 0;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    border-bottom: solid 1px #AA8066;
    font-family: MarkOT;
    font-weight: bold;
    font-size: 22px;
    color: #705043;
  }

  .chevron-icon {
    transition: transform 0.3s;
    transform-origin: center;
    width: 25px;
  }

  .chevron-icon.rotate {
    transform: scaleY(-1) translateY(-20%);
  }

  .color-thumbnail {
    width: 30px;
    height: 30px;
    border: 1px solid #000;
    cursor: pointer;
    border-radius: 100vw;
  }

  //subcategories
  .subcategories {
    height: 0;
    overflow: hidden;
    transition: height 0.3s;
  }

  .subcategory-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
  }

.subcategories.open {
  height: auto;
}

.subcategory-image {
  margin-left: 10px;
  height: 75px;
  width: auto;
}

.subcategory-checkbox {
  margin-right: 10px;
}

.subcategory-content {
  display: flex;
  align-items: center;
}

.subcategory-text {
  flex: 1;
  margin-left: 8px;
}
  .group-title {
    font-weight: bold;
    margin-bottom: 5px;
    grid-column: 1 / span 5;
  }
  .color-group {
    display: flex;
    flex-direction: column;
  }

  .color-group-list {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
/*    grid-gap: 10px;*/
  }
`