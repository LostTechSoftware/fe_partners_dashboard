import { useEffect, useState, useCallback } from "react";
import moment from "moment";
import "moment/locale/pt";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import api from "../../services/api";
import { Themes } from "../../utils/themes";

export const useFinance = () => {
  const [isMenuMobileOpened, setIsMenuMobileOpened] = useState(false);
  const [series, setSeries] = useState({
    series: [
      {
        data: [],
      },
    ],
  });
  const [seriesDay, setSeriesDay] = useState({
    series: [
      {
        data: [],
      },
    ],
  });
  const [categoriesDays, setCategoriesDays] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedWeekly, setSelectedWeekly] = useState(false);
  const [goal, setGoal] = useState("");
  const [objective, setObjective] = useState(0);
  const [porcentage, setPorcentage] = useState(0);
  const [monthInfo, setMonthInfo] = useState("");
  const [products, setProducts] = useState([]);

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  const Colors = (length) => {
    return Array.from({ length }, () => Themes().wordColors);
  };

  const options = {
    chart: {
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    fontFamily: "Roboto, sans-serif",
    foreColor: "blue",
    colors: ["#ffe115"],
    grid: {
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    xaxis: {
      labels: {
        show: true,
        style: {
          colors: [...Colors(series.series[0].data.length)],
          fontSize: "12px",
        },
      },
      categories,
    },
    yaxis: {
      labels: {
        show: true,
        style: {
          colors: [Themes().wordColors],
          fontSize: "12px",
        },
      },
    },
  };

  const optionsDays = {
    chart: {
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    fontFamily: "Roboto, sans-serif",
    foreColor: "blue",
    colors: ["#ffe115"],
    grid: {
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    xaxis: {
      labels: {
        show: true,
        style: {
          colors: [...Colors(seriesDay.series[0].data.length)],
          fontSize: "12px",
        },
      },
      categories: categoriesDays,
    },
    yaxis: {
      labels: {
        show: true,
        style: {
          colors: [Themes().wordColors],
          fontSize: "12px",
        },
      },
    },
  };

  async function createGoal() {
    toast.info("Aguarde, estamos preparando tudo");

    if (objective <= 100)
      return toast.error("Ops, defina metas maiores de R$100,00");

    const { data } = await api.post("/partner/finance/goal", { objective });

    setGoal(data);

    toast.success("Meta criada!");
  }

  useEffect(() => {
    async function getDatas() {
      const { data } = await api.get("/partner/finance/sales/month");

      const newSeries = series;

      newSeries.series[0].data = data.map((month) => Math.round(month.sales));
      setSeries(newSeries);
      setCategories(
        data.map((days) =>
          moment(`${days.referenceMonth + 1}/01`).format("MMMM")
        )
      );

      const { data: byDays } = await api.get("/partner/finance/sales/day");

      const newSeriesDay = seriesDay;

      newSeriesDay.series[0].data = byDays.map((days) =>
        Math.round(days.sales)
      );
      setSeriesDay(newSeriesDay);
      setCategoriesDays(byDays.map((days) => days.dayName));

      const { data: goalData } = await api.get("/partner/finance/goal");

      setGoal(goalData);
      if (goalData) {
        setPorcentage((goalData.inTheMoment / goalData.objective) * 100);
      }

      const { data: dataMonthInfo } = await api.get("/partner/finance/info");

      setMonthInfo(dataMonthInfo);

      const { data: dataProducts } = await api.get("/partner/finance/products");

      setProducts(dataProducts);
    }
    getDatas();
  }, [series, seriesDay]);

  const handleMenuMobileOpen = useCallback(() => {
    setIsMenuMobileOpened(!isMenuMobileOpened);
  }, [isMenuMobileOpened]);

  async function antecipatePayment() {
    try {
      toast.info("Aguarde, estamos preparando tudo");

      await api
        .post("/antecipate/payment")
        .catch((error) => toast.error(error.response.data));

      toast.error("Pagamento adiantado e enviado no seu email");
    } catch {
      toast.error("Erro ao adiantar pagamento");
    }
  }

  return [
    handleMenuMobileOpen,
    isMenuMobileOpened,
    series,
    options,
    selectedWeekly,
    setSelectedWeekly,
    seriesDay,
    optionsDays,
    goal,
    objective,
    setObjective,
    createGoal,
    porcentage,
    monthInfo,
    reducer,
    antecipatePayment,
    products,
  ];
};
