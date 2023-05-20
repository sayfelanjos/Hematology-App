import React, { Suspense } from "react";
import Wrapper from "../../components/wrapper/wrapper";
const StatisticsModule = React.lazy(() => import("statistics/StatisticsModule"));

const Statistics = () => {
  return (
    <Wrapper>
      <Suspense>
        <StatisticsModule />
      </Suspense>
    </Wrapper>
  );
};

export default Statistics;
