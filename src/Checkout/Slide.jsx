import { useState } from "react";
import "./Checkout.css";
import { useMutation } from "react-query";
import { makePayment } from "../Services/makePayment";
import { useGames } from "../Context/GameContext";
import useOrders from "../Function/useOrders";

function Slide({ Number, Data, id, extended }) {
    const games = useGames();
    const {
        selectedAddressData,
        setSelectedAddressData,
        CartData,
        totalAmt,
        setTotalAmt,
        deliveryAmt,
        setDeliveryAmt,
    } = games;
    const addData={
        "Total":totalAmt,
        "Address":selectedAddressData
    }
    const [extendButton, setExtendButton] = useState(true);

    const { mutate: paymentMutate, isLoading } = useMutation({
        mutationFn: async () => {
         await makePayment(addData);
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

            <button
                class="btn-container"
                onClick={() => {
                    Data === "Payment" ? handlePayment() : setExtendButton(!extendButton);
                }}
            >
                {Data === "Payment" ? "Pay" : "Change"}
            </button>

            {extendButton ? extended : null}
        </div>
    );
}

export default Slide;
