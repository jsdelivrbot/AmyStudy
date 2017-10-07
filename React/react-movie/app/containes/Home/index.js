import React,{Component,propesType} from 'react';
import axios from 'axios';
// 轮播图
import  Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {baseUrl} from './config';
import {TabBar,Hotmovie,Newmovie} from "../../Components/";
import './index.css';
class Home extends React.Component {
  render() {
    var settings = {
     customPaging: function(i) {
        return <a><img src={`${baseUrl}/ban_0${i+1}.png`}/></a>
      },
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <TabBar />
        <Slider {...settings} className="self-slick">
          <div><img src={baseUrl + 'ban_01.png'} /></div>
          <div><img src={baseUrl + 'ban_02.png'} /></div>
          <div><img src={baseUrl + 'ban_03.png'} /></div>
        </Slider>
        <Hotmovie />
        <Newmovie />
      </div>
    );
  }
}
export default Home;