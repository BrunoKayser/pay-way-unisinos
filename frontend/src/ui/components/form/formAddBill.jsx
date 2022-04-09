import {useFormik} from "formik";
import './formAddBill.css'

export const FormAddBill = ({setPopUp, setIsRefresh, email}) => {
    
    const formik = useFormik({
        initialValues: {
            id: 0,
            title: '',
            payDate: '',
            value: '',
            isPay: false,
            email: ''
        },

        onSubmit: () => {
            fetch('http://localhost:8080/bill', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({     
                    title: formik.values.title,
                    payDate: formik.values.payDate,
                    value: formik.values.value,
                    isPay: formik.values.isPay,
                    email: email
                }),
            })
            setPopUp(false);
            setIsRefresh(isRefresh => !isRefresh)
        }
    })

    return (
        <div className={"form-add-bill"}>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor={'title'}>Titulo</label>
                <input onChange={formik.handleChange} name={'title'} type={'text'} id={'title'} required />

                <label htmlFor={'day'}>Data de pagamento</label>
                <input className={"form-select-date"} onChange={formik.handleChange} name={'payDate'} type={'date'} id={'day'} required />

                <label htmlFor={'value'}>Valor</label>
                <input onChange={formik.handleChange} name={'value'} type={'text'} id={'value'} required />
                <button className={"form-button-submit"} type={'submit'}> Adicionar </button>
            </form>
            <button className={"form-button-close"} onClick={()=>setPopUp(false)}>Fechar</button>
        </div>

    )
}