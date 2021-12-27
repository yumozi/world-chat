import Sidebar from "./Sidebar"
import Chat from "./Chat"
import "./Dashboard.css"

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Sidebar />
            <Chat />
        </div>
    )
}

export default Dashboard
