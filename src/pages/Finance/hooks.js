import moment from "moment";
import "moment/locale/pt";
import { useEffect, useState, useCallback } from "react";

import api from "../../services/api";
import { Themes } from "../../utils/themes";

export const useFinance = () => {
  const [isMenuMobileOpened, setIsMenuMobileOpened] = useState(false);
  const [series, setSeries] = useState({
    series: [
      {
        data: [1500, 1000, 500, 100, 200, 300, 1500, 500, 100, 200],
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
    const { data } = await api.post("/partner/finance/goal", { objective });

    setGoal(data);
  }

  useEffect(() => {
    async function getDatas() {
      const { data } = await api.get("/partner/finance/sales/month");

      const newSeries = series;

      newSeries.series[0].data = data.map((days) => days.sales);
      setSeries(newSeries);
      setCategories(
        data.map((days) => moment(days.referenceMonth).format("MM"))
      );

      const { data: byDays } = await api.get("/partner/finance/sales/day");

      const newSeriesDay = seriesDay;

      newSeriesDay.series[0].data = byDays.map((days) => days.sales);
      setSeriesDay(newSeriesDay);
      setCategoriesDays(byDays.map((days) => days.dayName));

      const { data: goalData } = await api.get("/partner/finance/goal");

      setGoal(goalData);
      setPorcentage((goalData.inTheMoment / goalData.objective) * 100);
    }
    getDatas();
  }, []);

  const handleMenuMobileOpen = useCallback(() => {
    setIsMenuMobileOpened(!isMenuMobileOpened);
  }, [isMenuMobileOpened]);

  return [
    handleMenuMobileOpen,
    isMenuMobileOpened,
    setIsMenuMobileOpened,
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
  ];
};
