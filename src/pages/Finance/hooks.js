import { useEffect, useState, useCallback, useMemo } from "react";

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
  const [selectedWeekly, setSelectedWeekly] = useState(false);

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
          colors: [
            Themes().wordColors,
            Themes().wordColors,
            Themes().wordColors,
            Themes().wordColors,
            Themes().wordColors,
            Themes().wordColors,
            Themes().wordColors,
            Themes().wordColors,
            Themes().wordColors,
            Themes().wordColors,
            Themes().wordColors,
            Themes().wordColors,
          ],
          fontSize: "12px",
        },
      },
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
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
  ];
};
