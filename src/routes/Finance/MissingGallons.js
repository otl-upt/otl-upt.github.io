import { number_format, sumBy } from '$lib/frtl-utility'

export const getKPI = async (d) => {
    
    const uf0 = f => sumBy(dt0, f, 'LostRev').map((x) => Object.values(x))
    const uf1 = () => number_format(
        dt0.map((x) => x.LostRev).reduce((a, b) => a + b),
        2,
    )

    const json = d
    const ds0 = json.FinanceV5
    const dt0 = ds0.MissingGallonsV1

    return {
        rowsByTerminal: uf0('Terminal'),
        rowsByBillTo: uf0('BillTo'),
        rowsTotal: uf1(),
    }
}