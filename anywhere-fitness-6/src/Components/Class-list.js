import React from "react"

const ClassList = () => {

    const fakeData = [
      {
        id: 0,
        name: "Boxing",
        Duration: "60",
      },
      {
        id: 1,
        name: "Skipping",
        Duration: "45",
      },
      {
        id: 2,
        name: "Cycling",
        Duration: "120",
      },
      {
        id: 3,
        name: "HIIT",
        Duration: "45",
      },
      {
        id: 4,
        name: "Yoga",
        Duration: "50",
      },
      {
        id: 5,
        name: "Spin",
        Duration: "80",
      },
    ];
    return (
        <h1>
            Class List component
            The fake data wil need to be displayed inside the return statement.
        </h1>
    )
}

export default ClassList

