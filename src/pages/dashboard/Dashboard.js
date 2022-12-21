import React, { useState } from "react";
import styles from "./Dashboard.module.css";
import Chart from "react-apexcharts";

function Dashboard() {
  const productData = JSON.parse(localStorage.getItem("data"));
  // console.log(productData.dasbhoardPage.notifications)

  const [data, setData] = useState([
    {
      name: "Latest Hits",
      data: [43, 20, 39, 46, 86, 66, 80],
    },
    {
      name: "Latest Hits",
      data: [88, 70, 79, 56, 50, 55, 72],
    },
    {
      name: "Featured",
      data: [32, 47, 38, 21, 55, 75, 70],
    },
  ]);

  const [month, setMonth] = useState({
    chart: {
      background: "#435c70",
      foreColor: "#fff",
    },
    xaxis: {
      categories: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
      ],
    },
    yaxis: {
      title: { text: "Hits" },
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    fill: {
      borderColor: ["#fff"],
    },
    dataLabels: {
      enables: false,
    },
  });
  const [data2, setData2] = useState([
    {
      name: "# of Hits",
      data: [40, 44, 28, 38, 58, 34, 48],
    },
  ]);

  const [color, setColor] = useState({
    chart: {
      background: "#435c70",
      foreColor: "#fff",
    },
    xaxis: {
      categories: [
        "Aqua",
        "Blue",
        "Green",
        "Orange",
        "Purple",
        "Red",
        "Yellow",
      ],
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    fill: {
      borderColor: [
        "Aqua",
        "Blue",
        "Green",
        "Orange",
        "Purple",
        "Red",
        "Yellow",
      ],
    },
    dataLabels: {
      enables: false,
    },
  });

  return (
    <div className="container">
      <div className={styles.mainBox}>
        <h2>Welcome back, Admin</h2>
        <div className={styles.graph}>
          <div className={styles.leftBox}>
            <h2>Latest Hits</h2>
            <Chart
              options={month}
              series={data}
              type="line"
              height="300"
              width="100%"
            />
          </div>
          <div className={styles.rightBox}>
            <h2>Performance</h2>
            <Chart
              options={color}
              series={data2}
              type="bar"
              height="300"
              width="100%"
            />
          </div>
        </div>
        <div className={styles.notification}>
          <div className={styles.leftBox}>
            <h2>Storage Information</h2>
            <Chart
              options={{
                chart: {
                  background: "#435c70",
                  foreColor: "#fff",
                },
                labels: ["available", "system", "used"],
              }}
              series={[9.15, 6.5, 18.24]}
              type="pie"
              height="300"
              width="100%"
            />
          </div>
          <div className={styles.rightBox}>
            <h2>Notification List</h2>
            <div className={styles.notificationList}>
              {productData.dasbhoardPage.notifications.map((notification) => {
                return (
                  <div className={styles.notifyCard}>
                    <div className={styles.imgCard}>
                      <img
                        className={styles.roundImg}
                        src={notification.pic}
                        alt="img"
                      />
                    </div>
                    <div className={styles.mediaBody}>
                      <p className="mb-2" style={{ marginTop: "1px" }}>
                        {/* <b>Jessica</b> and <b>6 others</b> sent you new <a className={styles.notificationLink} href="#">product updates.</a> Check new orders. */}
                        {notification.message}
                      </p>
                      <span>{notification.time} ago.</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mainBox2}>
        <h2>Orders List</h2>
        <table className="table" style={{ marginTop: "35px" }}>
          <thead>
            <tr>
              <th>ORDER NO</th>
              <th>STATUS</th>
              <th>OPERATORS</th>
              <th>LOCATION</th>
              <th>DISTANCE</th>
              <th>START DATE</th>
              <th>EST DELIVERY DUE</th>
            </tr>
          </thead>
          <tbody>
            {productData.dasbhoardPage.orders.map((product) => {
              return (
                <tr key={product.orderNo}>
                  <th>
                    <b>#{product.orderNo}</b>
                  </th>
                  <td>
                    <div></div>
                    {product.status}
                  </td>
                  <td>{product.operators}</td>
                  <td>{product.location}</td>
                  <td>{product.distance}</td>
                  <td>{product.startDate}</td>
                  <td>{product.deliveryDate}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
