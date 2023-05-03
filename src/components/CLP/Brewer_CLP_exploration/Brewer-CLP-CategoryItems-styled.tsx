import styled from "styled-components";


export const CategoryItemStyle = styled.div`
  .liCategories {
    border-bottom: solid 1px rgba(170,128,102,0.25);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0 10px 0;
  }
  .liCategories:last-child {
    border-bottom: none;
  }
  .liFeatures {
    border-bottom: solid 1px rgba(170,128,102,0.25);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0 10px 0;
    .subcategory-image {
      max-height: 40px;
      max-width: 55px;
    }
  }
  .liFeatures:last-child {
    border-bottom: none;
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
    margin-bottom: 10px;
  }

  .chevron-icon {
    transition: transform 0.3s;
    transform-origin: center;
    width: 25px;
  }

  .chevron-icon.rotate {
    transform: scaleY(-1) translateY(-20%);
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
    flex-direction: column;
  }
  .name-number{
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
  }
  .subcategory-name {
    font-size: 14px;
    color: #705043;
    font-family: MarkOT;
    font-weight: bold;
    margin-right: 5px;
  }
  .subcategory-description {
    font-size: 12px;
    color: #888;
    margin-top: 2px;
  }
  .productnumber{
    font-size: 12px;
    color: #705043;
    font-family: MarkOT;
    font-weight: normal;
  }
.subcategories.open {
  height: auto;
}
.image-container{
  width: 80px;
  display: flex;
  justify-content: center;
}
.subcategory-image {
  max-height: 65px;
  max-width: 65px;
  width: auto;
  }

.subcategory-content {
  display: flex;
  align-items: center;
  position: relative;
  width: 200px;
}

.subcategory-text {
  flex: 1;
  margin-left: 12px;
}
  .group-title {
    font-weight: bold;
    margin-bottom: 5px;
    grid-column: 1 / span 5;
  }
  //Color
  .color-group {
    display: flex;
    flex-direction: column;
  }
 
  .checkmark-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .color-thumbnail {
    position: relative;
    width: 30px;
    height: 30px;
    outline: 1px solid #000;
    outline-offset: -1px;
    cursor: pointer;
    border-radius: 100vw;
  }
  .color-thumbnail .checkmark-container {
    outline: 2px solid #3B2B2F;
    outline-offset: 1px;
    border-radius: 100vw;
    .icon-checkmark{
      width: 20px;
    }
  }
  .color-thumbnail.selected {
    outline: none;
    box-shadow: 3px 3px 4px 3px rgba(0,0,0,0.3);
  }
  .color-group-list {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
  }
  //Checkbox
  .subcategory-checkbox {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkbox-container {
    display: block;
    position: relative;
    padding-left: 20px;
    margin-bottom: 20px;
    cursor: pointer;
    font-size: 16px;
    user-select: none;
  }

  .checkbox-container:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 20px;
    width: 20px;
    background-color: #fff;
    border: 1px solid #3B2B2F;
    border-radius: 6px;
  }

  .subcategory-checkbox:checked ~ .checkbox-container:before {
    background-color: #3B2B2F;
    border: 1px solid #3B2B2F;
  }

  .subcategory-checkbox:checked ~ .checkbox-container:after {
    content: "";
    position: absolute;
    left: 7px;
    top: 3px;
    width: 6px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`