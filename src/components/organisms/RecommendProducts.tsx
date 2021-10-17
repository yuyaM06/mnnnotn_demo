import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from "@material-ui/core/Grid";
import ProductSample from '../json/products.json';

const product = ProductSample.product;
const description = ProductSample.description;
const figURL = ProductSample.figURL;
const release = ProductSample.release;
const region = ProductSample.region;

const calory = ProductSample.calory;
const protein = ProductSample.protein;
const lipid = ProductSample.lipid;
const carbonhydrates = ProductSample.carbonhydrates;
const sugar = ProductSample.sugar;
const fiber = ProductSample.fiber;
const scequiv = ProductSample.scequiv;

const allergy = ProductSample.allergy;
const price = ProductSample.price;

const headStyle = {
  fontSize: '25px',
};

const prodStyle = {
  frame: {
    border: '2px solid #000000',
  },
  figure: {
    height: '300px',
  },
  prodName: {
    fontSize: '15px',
  },
  prodDesc: {
    fontSize: '12px',
  },
  prodRelease: {
    fontSize: '10px',
  },
  prodRegion: {
    fontSize: '10px',
  },
  prodNutrition: {
    fontSize: '10px',
  }
};

const reasonStyle = {
  head: {
    fontSize: '20px',
  },
  item: {
    fontSize: '10px',
  }
};

const linkStyle = {
  fontSize: '15px',
  color: '#00f'
};

const RecommendProducts = (): JSX.Element => {
  return (
    <div>
      <p style={headStyle}>あなたにオススメの商品は...</p>
      <Grid container spacing={10}>
        <Grid item xs>
          <Grid container spacing={1} style={prodStyle.frame}>
            <Grid item xs={5}>
              <img src={figURL} style={prodStyle.figure} />
            </Grid>
            <Grid item xs={6}>
              <p style={prodStyle.prodName}>{product}</p>
              <p style={prodStyle.prodDesc}>{description}</p>
              <p style={prodStyle.prodRelease}>発売日 {release}</p>
              <p style={prodStyle.prodRegion}>販売地域 {region}</p>
              <p style={prodStyle.prodNutrition}>熱量：{calory} kcal　タンパク質：{protein} g</p>
              <p style={prodStyle.prodNutrition}>脂質：{lipid} g　炭水化物：{carbonhydrates} g</p>
              <p style={prodStyle.prodNutrition}>糖質：{sugar} g　食物繊維：{fiber} g</p>
              <p style={prodStyle.prodNutrition}>食塩相当量：{scequiv} g</p>
            </Grid>
          </Grid>
      </Grid>

      <Grid item xs>
        <p style={reasonStyle.head}>こんなあなたにオススメ！</p>
        <p style={reasonStyle.item}>・オススメ理由①</p>
        <p style={reasonStyle.item}>・オススメ理由②</p>
        <a style={linkStyle}>詳しく見る</a>
      </Grid>

      </Grid>
    </div>
  );
}

export default RecommendProducts;
