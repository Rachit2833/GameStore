import { useSearchParams } from 'react-router-dom';
import { useGames } from '../Context/GameContext';
import OrderItem from './OrderItem';
import styles from './OrderItem.module.css';
import { useEffect } from 'react';

function OrderLayout() {
    const games = useGames();
    const { orderData, isOrderLoading, getDifference, getCurrentFormattedDate } = games;

    const [searchParams, setSearchParams] = useSearchParams();
    const searchValue = searchParams.get("status");

    const currentDate = getCurrentFormattedDate();

    const applyTimeFilter = (data) => {
        switch (searchParams.get("time")) {
            case "all"|| null:
                return data;
            case "last24hours":
                return data.filter((item) => (getDifference( currentDate,item?.Date)*-1) <= 1);
            case "last7days":
                return data.filter((item) => (getDifference( currentDate,item?.Date)*-1) <= 7);
            case "last30days":
                return data.filter((item) => (getDifference( currentDate,item?.Date)*-1) <= 30);
            default:
                return data;
        }
    };

    const filteredData = searchValue === "all" || searchValue === null ? orderData : orderData.filter((data) => {
        return data?.Status === searchValue;
    });

    const filterData2 = applyTimeFilter(filteredData); // Apply time filter directly to orderData

    function handleOrderTimeChange(time) {
        searchParams.set("time", time);
        setSearchParams(searchParams);
    }

    function handleStatusChange(status) {
        searchParams.set("status", status);
        setSearchParams(searchParams);
    }

    useEffect(() => {
        handleStatusChange("all");
        handleOrderTimeChange("all");
    }, []);

    return (
        <div>
            <div className={styles.main}>
                <div style={{ maxHeight: "75rem" }} className={styles.filter}>
                    <h2 style={{ margin: "2rem", fontSize: "2rem" }}>Filter</h2>

                    <div className={styles.radio}>
                        <h2 style={{ margin: "2rem", fontSize: "1.6rem" }}>ORDER STATUS</h2>
                        <label>
                            <input
                                type="radio"
                                value="all"
                                checked={searchParams.get("status") === "all"}
                                onChange={() => handleStatusChange("all")}
                            />
                            All
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="Ordered"
                                checked={searchParams.get("status") === "Ordered"}
                                onChange={() => handleStatusChange("Ordered")}
                            />
                            Ordered
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="inTransit"
                                checked={searchParams.get("status") === "inTransit"}
                                onChange={() => handleStatusChange("inTransit")}
                            />
                            In Transit
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="Delivered"
                                checked={searchParams.get("status") === "Delivered"}
                                onChange={() => handleStatusChange("Delivered")}
                            />
                            Delivered
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="cancelled"
                                checked={searchParams.get("status") === "cancelled"}
                                onChange={() => handleStatusChange("cancelled")}
                            />
                            Cancelled
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="returned"
                                checked={searchParams.get("status") === "returned"}
                                onChange={() => handleStatusChange("returned")}
                            />
                            Returned
                        </label>
                    </div>

                    <div className={styles.radio}>
                        <h2 style={{ margin: "2rem", fontSize: "1.6rem" }}>ORDER TIME</h2>
                        <label>
                            <input
                                type="radio"
                                name="time"
                                value="all"
                                checked={searchParams.get("time") === "all"}
                                onChange={() => handleOrderTimeChange("all")}
                            />
                            All
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="time"
                                value="last24hours"
                                checked={searchParams.get("time") === "last24hours"}
                                onChange={() => handleOrderTimeChange("last24hours")}
                            />
                            Last 24 Hours
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="time"
                                value="last7days"
                                checked={searchParams.get("time") === "last7days"}
                                onChange={() => handleOrderTimeChange("last7days")}
                            />
                            Last 7 Days
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="time"
                                value="last30days"
                                checked={searchParams.get("time") === "last30days"}
                                onChange={() => handleOrderTimeChange("last30days")}
                            />
                            Last 30 Days
                        </label>
                    </div>
                </div>
                <div style={{ backgroundColor: "whitesmoke" }} className={styles.item_div}>
                    <div className={styles.search}>
                        <input placeholder='Search your orders here ' type="text" />
                        <button className={styles.btn_ord}>Search Orders</button>
                    </div>
                    <div className={styles.item_wrapper}>
                        {filterData2 && filterData2.length > 0 ? filterData2.map((Orderdata) => {
                       
                            return <OrderItem key={Orderdata.id} data={Orderdata} />
                        }) : !isOrderLoading ?
                            <h2 style={{ textAlign: "center" }} className="empty">No Orders Here</h2>
                            : null}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderLayout;
