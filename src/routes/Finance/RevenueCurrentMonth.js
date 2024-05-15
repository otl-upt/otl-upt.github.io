import { getDefaultOptions } from "$lib/chart-shared";
import { number_format } from '$lib/frtl-utility';
export const getConfig = async (d) => {
  const json = d
  const ds0 = json.FinanceV5
  const dt0 = ds0.ProjectionV2[0]
  const dt1 = ds0.BudgetV2[0]
  const monthKeys = [
    'FM04-01',
    'FM05-02',
    'FM06-03',
    'FM07-04',
    'FM08-05',
    'FM09-06',
    'FM10-07',
    'FM11-08',
    'FM12-09',
    'FM01-10',
    'FM02-11',
    'FM03-12'
  ]

  const currentMonth = new Date(ds0.tds).getMonth()
  const cKey = monthKeys[currentMonth];
  const pKey = monthKeys[currentMonth === 0 ? 11 : currentMonth - 1];
  const pVal = dt0[pKey];
  const cVal = dt0[cKey];
  const cBgt = dt1[cKey];
  const mydatasets = [
    { fill: false, label: 'Previous', data: [0, pVal], borderColor: '#36393D', pointRadius: 0, borderDash: [10, 5] },
    { fill: false, label: 'Budget', data: [0, cBgt], borderColor: '#6BBA70', pointRadius: 0 },//,borderWidth: 2,pointRadius: 0},
    { fill: false, label: 'Current', data: [0, cVal], borderColor: '#FF7400', pointRadius: 0 },//,borderWidth: 2,pointRadius: 0},
  ]

  const mydata = {
    labels: ["Month Start", "Month End"],
    datasets: mydatasets,
  }
  const myoptions = getDefaultOptions()
  myoptions.plugins.legend.display = true;
  myoptions.plugins.legend.position = 'bottom';
  myoptions.scales.x.display = false;

  return {
    type: 'line',
    data: mydata,
    options: myoptions,
    title: [
      'Current Month Revenue',
      `Forecast: ${!cVal ? 'Not Available' : '$' + number_format(cVal)}`,
    ]
  }

};