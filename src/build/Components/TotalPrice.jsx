import { useSelector } from "react-redux";

export function TotalPrice(){
    const data = useSelector(state=>state.user)
    const validity = data.user_info.yearly_plan_validity

    const {selected_plan,selected_add_ons} = data
    const selected_Plan_Price = validity ? selected_plan.price.yearly : selected_plan.price.monthly

    const add_ons_price = selected_add_ons.length > 0 ? selected_add_ons.reduce((acc, current)=>{
        if(validity){
            return acc + current.price.yearly
        }else {
            return acc + current.price.monthly
        }
    },0) : 0
    const sum = selected_Plan_Price + add_ons_price
    return<>
    {`+$${sum}/${validity ? "/yr" : "/mo"}`}
    </>
}