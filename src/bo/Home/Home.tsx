import React, { useEffect, useState } from "react";
import { Chart } from "primereact/chart";

import "./Home.scss";

interface Customer {
  id: number;
  name: string;
  country: string;
  company: string;
  date: string;
  status: string;
  verified: boolean;
  activity: number;
  representative: string;
  balance: number;
}

const Home: React.FC = () => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  const balanceTemplate = (rowData: Customer) => {
    return formatCurrency(rowData.balance);
  };

  const formatCurrency = (value: number) => {
    return value.toLocaleString("en-US", { style: "currency", currency: "USD" });
  };

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const data = {
      labels: ["Electronique", "Vêtemens Femme", "Vêtemens Homme"],
      datasets: [
        {
          data: [540, 325, 702],
          backgroundColor: [
            documentStyle.getPropertyValue("--blue-500"),
            documentStyle.getPropertyValue("--yellow-500"),
            documentStyle.getPropertyValue("--green-500"),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue("--blue-400"),
            documentStyle.getPropertyValue("--yellow-400"),
            documentStyle.getPropertyValue("--green-400"),
          ],
        },
      ],
    };
    const options = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
          },
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  return (
    <div className="Home">
      <div className="Home-cardGroup">
        <div className="Home-card Card">
          <div className="Card-infos Dflex Dflex-alignEnd">
            <b className="Card-nb Dflex Dflex-alignCenter Dflex-justifyCCenter">0</b>
            <p>Produits</p>
          </div>
        </div>
        <div className="Home-card Card">
          <div className="Card-infos Dflex Dflex-alignEnd">
            <b className="Card-nb Dflex Dflex-alignCenter Dflex-justifyCCenter">0</b>
            <span>Catégories</span>
          </div>
        </div>
        <div className="Home-card Card">
          <div className="Card-infos Dflex Dflex-alignEnd">
            <b className="Card-nb Dflex Dflex-alignCenter Dflex-justifyCCenter">0</b>
            <span>Commandes</span>
          </div>
        </div>
        <div className="Home-card Card">
          <div className="Card-infos Dflex Dflex-alignEnd">
            <b className="Card-nb Dflex Dflex-alignCenter Dflex-justifyCCenter">0</b>
            <span>Ventes</span>
          </div>
        </div>
      </div>
      <div className="Home-stats Dflex">
        <div className="card"> </div>
        <div className="Home-saleByCategorieStats">
          Statistique de vente par catégorie
          <Chart
            type="pie"
            style={{ width: "300px" }}
            data={chartData}
            options={chartOptions}
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
