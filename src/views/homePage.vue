<template>
    <div class="main__div">
        <div class="main__header">
            <h1>Задание для STOCRM</h1>
        </div>
        <div class="main__button">
            <button @click="download_API_File">Скачать файл</button>

        </div>
    </div>

</template>

<script>
import { ref } from 'vue';
// import axios from 'axios';

export default {

    setup(){

        let initialApi = {
            "ARGS": {
                "OFFER_ID": 11431,
                "CUSTOMER_REQUISITE_ID": 15,
                "DOCUMENT_STATUS": 1,
                "DOCUMENT_NUMBER": 11431,
                "DOCUMENT_DATE": "26.06.2023",
                "ADDITIONAL_SETTINGS": {
                    "show_warehouse": true,
                    "show_brand": true,
                    "show_address": true,
                    "show_parts": true,
                    "show_works": true,
                    "show_recommended_parts": true,
                    "show_recommended_works": true,
                    "show_price_wo_discount": true,
                    "show_price_parts_discount": true,
                    "hide_price_for_n_ch": false,
                    "show_n_ch": true,
                    "show_discounts": true,
                    "show_sum": false,
                    "show_recomendation_summ": true,
                    "show_reason_offer": true,
                    "show_date_from_calendar": true,
                    "doc_12": {
                        "standardForm": true,
                        "show_reception": false,
                        "show_transfer": false,
                        "receipt": false
                    },
                    "defects_reason": false,
                    "show_date": true,
                    "show_real_date": true,
                    "show_client_number": true,
                    "show_agreement": true,
                    "show_price_wo_discount_by_1_thing_work": true,
                    "show_price_wo_discount_by_1_thing_spare_parts": true,
                    "big_rows_10_doc": false,
                    "performer": true,
                    "show_work_section": true,
                    "show_summ_discount": false,
                    "add_second_page": false,
                    "show_owner_1": false,
                    "show_owner_2": true,
                    "show_owner_4": false,
                    "show_contact_1": false,
                    "show_tax_1": true,
                    "show_for_payment_2": true,
                    "show_paid_2": true,
                    "show_user_group_2": true,
                    "show_supplier_name": true,
                    "show_accountant": true,
                    "show_accountant_name": true,
                    "show_mechanic": true,
                    "show_master_receiver": true,
                    "show_shop_foreman_2": true,
                    "show_contact_2": false,
                    "footer_big_1": true,
                    "footer_big_2": true,
                    "show_tag_7": false,
                    "supplier_position": "Генеральный директор",
                    "add_info_2": "доп инфа"
                },
                "LEGAL_ENTITY_ID": "1",
                "ONLY_CHECK": "Y"
            }
        }

        // let API_JSON = null 
        
        const apiChangeValue = (obj) =>{
            for(let key in obj){
                if(obj[key] === false){
                    obj[key] = "N"
                }
                else if(obj[key] === true){
                    obj[key] = "Y"
                }
                else if(typeof obj[key] === 'object' && obj[key] !== null){
                    apiChangeValue(obj[key])
                }
            }

            // for(let key in initialApi.ARGS.ADDITIONAL_SETTINGS.doc_12){
            //     if(initialApi.ARGS.ADDITIONAL_SETTINGS.doc_12[key] === false){
            //         initialApi.ARGS.ADDITIONAL_SETTINGS.doc_12[key] = "N"
            //     }
            //     else if(initialApi.ARGS.ADDITIONAL_SETTINGS.doc_12[key] === true){
            //         initialApi.ARGS.ADDITIONAL_SETTINGS.doc_12[key] = "Y"
            //     }
            // }

            // API_JSON = encodeURIComponent(JSON.stringify(initialApi))
            
            // API_JSON = JSON.stringify(initialApi)
            // это если не нужно было делать url кодирование а просто привести к строке.
        }

        apiChangeValue(initialApi.ARGS.ADDITIONAL_SETTINGS)

        const API_Code_Func = (obj) => {
            let string = ""
            for(let key in obj){
                if (typeof obj[key] === 'object' && obj[key] !== null) {
                    let queryString = API_Code_Func(obj[key])
                    if (queryString !== '') {
                        string += `&ARGS[${key}]=${queryString}`
                    } 
                } else {
                string += `&ARGS[${key}]=${String(obj[key])}`
                }
            }
            return string.slice(1)

        }

        const API_Code_String = API_Code_Func(initialApi.ARGS)

        console.log(API_Code_String)

        // console.log(initialApi)
        // console.log(API_JSON)

        const download_API_File = async () => {
        // const {data} = await axios.get(`${API_JSON}`)
        window.open(API_Code_String, "_blank")
        // console.log(data)
        }

        return{download_API_File}
    }
}

</script>

<style>

</style>