import { useState } from "react";
import "./Checkout.css";
import { useMutation } from "react-query";
import { makePayment } from "../Services/makePayment";
import { useGames } from "../Context/GameContext";
import useOrders from "../Function/useOrders";

function Slide({ Number, Data, id, extended, Name  }) {
    const games = useGames();
    const {
        selectedAddressData,
        setSelectedAddressData,
        CartData,
        totalAmt,
        setTotalAmt,
        deliveryAmt,
        setDeliveryAmt,
        customerId
    } = games;
    const addData={
        "Total": totalAmt + deliveryAmt,
        "Address":selectedAddressData
    }
    const [extendButton, setExtendButton] = useState(true);

    const { mutate: paymentMutate, isLoading } = useMutation({
        mutationFn: async () => {
            await makePayment(addData, customerId);
        },
        onSuccess: (data) => {
            console.log("success", data);
        },
    });

    function handlePayment() {
        if (selectedAddressData !== null) {
            const totalAmount = totalAmt + deliveryAmt;
            paymentMutate(totalAmount, selectedAddressData);
        } else {
            alert("Please select an address");
        }
    }

    return (
        <div class="container" id="dropper">
            <h2 class="component-heading">
                <b class="number">{Number}</b> {Data}{" "}
                <b class="bold">{id ? " (Verified)" : null}</b>
            </h2>
            {id ? <span class="id">rachitrawat123@gmail.com</span> : null}

            {Name ?<button
                class="btn-container"
                onClick={() => {
                    Data === "Payment" ? handlePayment() : setExtendButton(!extendButton);
                }}
            >{!extendButton ||Name==="Pay" ?Name:"Close"}
            
            </button>:null}

            {extendButton ? extended : null}
        </div>
    );
}

export default Slide;
