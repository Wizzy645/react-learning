import { compileFunction } from "vm"
import Card from "../components/Dashboard/card/card"
import styles from "../components/Dashboard/dashboard.module.css";
import RightBar from "../components/Dashboard/rightbar/rightbar";
import Chart from "../components/Dashboard/chart/chart";
import Transaction from "../components/Dashboard/transaction/transaction";
export default function Dashboard() {
    return ( 
        <div className={styles.wrapper}>
        <div className={styles.min}>
        <div className={styles.crd}>
            
            <Card />
            <Card />
            <Card />
        </div>
        
        <Transaction />
        <Chart />
        </div>
        <div className={styles.side}>
<RightBar />
        </div>
        </div>
     )
    
}
