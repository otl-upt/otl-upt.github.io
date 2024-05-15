import { getDefaultOptions, months, LoadMonthColors } from "$lib/chart-shared";
export const getConfig = async (d) => {

  const json = d
  const ds0 = json.FinanceV5
  const dt0 = ds0.WeekdayRevenueV2[0]

  const mylabels = Object.keys(dt0).map((x) => months[x.split('-')[1] - 1])
  const revenue = Object.values(dt0).map(x => isNaN(x) ? 0 : x)
  const colors = LoadMonthColors
  const mydatasets = [
    {
      label: 'Avg',
      backgroundColor: colors,
      borderColor: colors,
      data: revenue,
    },
  ]

  const mydata = {
    labels: mylabels,
    datasets: mydatasets,
  }
  const myoptions = getDefaultOptions()
  myoptions.scales.y.min = 250000 // 250k

  return {
    type: 'bar',
    data: mydata,
    options: myoptions,
  }

};