import React, { useState } from 'react';
import './SubscriptionForm.css';
import offerValidIcon from '../../assets/offerValid.svg';
import checkmarkIcon from '../../assets/checkmark.svg';
import payGatewayIcon from '../../assets/razorpay.png';

export default function SubscriptionForm() {
    const SubscriptionPlans = [
        {
            key: '1',
            months: '12',
            price: 99,
            background: '#E7E7E7',
            tag: 'Offer Expired'
        },
        {
            key: '2',
            months: '12',
            price: 179,
            background: '#D7EDDD',
            tag: 'Recommended'
        },
        {
            key: '3',
            months: '6',
            price: 149,
            background: '#ffffff',
        },
        {
            key: '4',
            months: '3',
            price: 99,
            background: '#ffffff',
        },
    ];
    const [selectedPlan, setSelectedPlan] = useState('2');
    const [totalAmount, setTotalAmount] = useState(0);

    const handlePlanChange = (event) => {
        const selectedKey = event.target.value;
        setSelectedPlan(selectedKey);

        const selectedPrice = SubscriptionPlans.find((plan) => plan.key === selectedKey).price;
        setTotalAmount(selectedPrice);
    };

    return (
        <div className='SubscriptionForm'>
            <div className='SubForm'>
                <div className='SubForm_Stepper'>
                    <div className='SubForm_Stepper_Container'>
                        <div className='SubForm_Stepper_Number'>1</div>
                        <div className='SubForm_Stepper_Step'>Sign Up</div>
                    </div>
                    <div className='SubForm_Stepper_Container'>
                        <div className='SubForm_Stepper_Number'>2</div>
                        <div className='SubForm_Stepper_Step'>Subscribe</div>
                    </div>
                </div>
                <h5 className='SubForm_Title Roboto'>Select your subscription plan</h5>
                <div className='SubForm_Plans Roboto'>
                    {SubscriptionPlans.map((plan, index) => (
                        <label className='SubForm_Plans_Select' key={plan.key} style={{ background: `${selectedPlan === plan.key ? '#D7EDDD' : index === 0 ? '#E7E7E7' : 'white'}`, borderColor: `${selectedPlan === plan.key ? '#47BA68' : '#BEBEBE'}` }}>
                            {plan.tag && <div className='SubForm_Plans_Select_Tag' style={{ background: `${index === 0 ? '#F77171' : '#47BA68'}` }}>{plan.tag}</div>}
                            {selectedPlan === plan.key && (
                                <img className='SubForm_Plans_Select_Checkmark' src={checkmarkIcon} alt="" />
                            )}
                            {selectedPlan !== plan.key && (
                                <input
                                    type='radio'
                                    name='subscriptionPlan'
                                    value={plan.key}
                                    checked={selectedPlan === plan.key}
                                    onChange={handlePlanChange}
                                    disabled={index === 0}
                                />
                            )}
                            {plan.months} Months Subscription
                        </label>
                    ))}
                </div>
                <div className='SubForm_Bill Roboto'>
                    <hr style={{ marginTop: '16px' }} />
                    <div className='SubForm_Bill_BeforeDiscount Roboto'><span>Subscription Fee</span> <b>₹18,500</b></div>
                    <div className='SubForm_Bill_Offer'>
                        <div className='SubForm_Bill_Offer_Inner'>
                            <div className='SubForm_Bill_Offer_Title Roboto'><span>Limited Time Offer</span> <span>- ₹{(18500 - totalAmount).toLocaleString()}</span></div>
                            <div className='SubForm_Bill_Offer_Valid Roboto'>
                                <img className='SubForm_Bill_Offer_Valid_Icon' src={offerValidIcon} alt="" />
                                <span>Offer valid till 25th March 2023 </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='SubForm_TotalAmount Roboto'><span><p>Total</p> (Incl. of 18% GST) : </span><b>₹{totalAmount}</b></div>
                <div className='SubForm_Action'>
                    <button className='SubForm_Action_Buttons CancelBtn Roboto'>Cancel</button>
                    <button className='SubForm_Action_Buttons ProceedBtn Roboto'>Proceed to Pay</button>
                </div>
                <img src={payGatewayIcon} alt={'Razorpay !'} className='payGatewayIcon' />
            </div>
        </div >
    );
}
