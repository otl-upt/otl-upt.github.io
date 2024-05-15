import { number_format } from "$lib/frtl-utility";
export const getKPIs = async (d) => {

  const json = d
  const ds0 = json.AccountsReceivableV2
  const dsa = ds0.DailySalesAverageV2[0].dsa
  const dt0 = ds0.AgingSummaryV2
  const tsa = dt0.map(x => x.Current).reduce((a, b) => a + b);
  const dso = (1400000+tsa) / dsa;

  const myTable = dt0.map((a) => ({
    Name: a.Name,
    Count: number_format(a.Count),
    CurrentUsd: "$" + number_format(a.Current),
    CurrentPct: (100 * (a.Current / tsa)).toFixed(0) + "%",
    GoalPct: a.Goal,
  }));

  const tCnt = number_format(dt0.map((a) => a.Count).reduce((a, b) => a + b));
  const tAmt =
    "$" +
    number_format(
      dt0
        .map((a) => a.Current)
        .reduce((a, b) => a + b)
        .toFixed(2)
    );
  const tds = ds0.tds;

  return {
    kpis: myTable,
    kpiTotals: {
      tCnt: tCnt,
      tAmt: tAmt,
    },
    tds: new Date(tds).toLocaleString(),
    dso: dso.toFixed(1),
  };
};