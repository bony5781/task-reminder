import { createContext, useState } from "react";

const Context = createContext()


const ContextProvider = ({ children }) => {

    const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    const d = new Date();
    let day = weekday[d.getDay()];

    const [selectedDay, setSelectedDay] = useState(day)
    const [modalVisible, setModalVisible] = useState(false);
    const [tasks, setTasks] = useState([
        {
            day: "Saturday",
            items: []
        },
        {
            day: "Sunday",
            items: []
        },
        {
            day: "Monday",
            items: []
        },
        {
            day: "Tuesday",
            items: []
        },
        {
            day: "Wednesday",
            items: []
        },
        {
            day: "Thursday",
            items: []
        },
        {
            day: "Friday",
            items: []
        }
    ])

    return (
        <Context.Provider value={{ modalVisible, setModalVisible, tasks, setTasks, selectedDay, setSelectedDay }}>
            {children}
        </Context.Provider>
    )

}

export { Context, ContextProvider }