import React, { useState, useEffect } from "react";
import "./Stats.css";
import axios from "axios";
import StatsRow from "./StatsRow";
import { db } from "../firebase";

const BASE_URL = "https://finnhub.io/api/v1/quote?symbol=";
const key = "sandbox_c6immiaad3i8jt9dunf0";
const KEY_URL = `&token=${key}`;

function Stats() {
  const [stocksData, setStocksData] = useState([]);
  const [myStocks, setMyStocks] = useState([]);

  const getStocksData = (stock) => {
    return axios.get(`${BASE_URL}${stock}${KEY_URL}`).catch((error) => {
      console.error("Error", error.message);
    });
  };

  useEffect(() => {
    const getMyStocks = () => {
      db.collection("myStocks").onSnapshot((snapshot) => {
        let promises = [];
        let tempData = [];
        snapshot.docs.map((doc) => {
          promises.push(
            getStocksData(doc.data().ticker).then((res) => {
              tempData.push({
                id: doc.id,
                data: doc.data(),
                info: res.data,
              });
            })
          );
        });
        Promise.all(promises).then(() => {
          setMyStocks(tempData);
        });
      });
    };
    const stocksList = ["AAPL", "MSFT", "TSLA", "FB"];

    getMyStocks();
    let testData = [];
    let promises = [];
    stocksList.map((stock) => {
      promises.push(
        getStocksData(stock).then((res) => {
          testData.push({
            name: stock,
            ...res.data,
          });
        })
      );
    });

    Promise.all(promises).then(() => {
      // console.log(testData);
      setStocksData(testData);
    });
  }, []);

  return (
    <div className="stats">
      <div className="stats__container">
        <div className="stats__header">
          <p className="stats__paragraph">Stocks</p>
        </div>
        <div className="stats__content">
          <div className="stats_rows">
            {myStocks.map((stock) => (
              <StatsRow
                key={stock.data.ticker}
                name={stock.data.ticker}
                openPrice={stock.info.o}
                volume={stock.data.shares}
                price={stock.info.c}
              />
            ))}
          </div>
        </div>
        <div className="stats__header stats-list">
          <p className="stats__paragraph">Lists</p>
        </div>
        <div className="stats__content">
          <div className="stats_rows">
            {stocksData.map((stock) => (
              <StatsRow
                key={stock.name}
                name={stock.name}
                openPrice={stock.o}
                price={stock.c}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
