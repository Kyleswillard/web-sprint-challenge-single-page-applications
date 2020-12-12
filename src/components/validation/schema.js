import * as yup from 'yup'

export default yup.object().shape({
    size: yup.string().required('Required.'),
    sauce: yup.string().required('Required.'),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    threeCheese: yup.boolean(),
    pineapple: yup.boolean(),
    extraCheese: yup.boolean(),
    quantity: yup
        .number()
        .min(1, 'Minimum order is 1.')
        .max(10, 'Maximum order is 10.'),
})
